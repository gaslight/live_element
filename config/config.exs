use Mix.Config

config :phoenix, :json_library, Jason
config :phoenix, :trim_on_html_eex_engine, false
config :logger, :level, :debug
config :logger, :backends, []

if Mix.env() == :dev do
  esbuild = fn args ->
    [
      args: ~w(./js/live_element --bundle) ++ args,
      cd: Path.expand("../assets", __DIR__),
      env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
    ]
  end

  config :esbuild,
    version: "0.12.15",
    module: esbuild.(~w(--format=esm --sourcemap --outfile=../priv/static/live_element.esm.js)),
    main: esbuild.(~w(--format=cjs --sourcemap --outfile=../priv/static/live_element.cjs.js)),
    cdn: esbuild.(~w(--format=iife --target=es2016 --global-name=LiveView --outfile=../priv/static/live_element.js)),
    cdn_min: esbuild.(~w(--format=iife --target=es2016 --global-name=LiveView --minify --outfile=../priv/static/live_element.min.js))
end

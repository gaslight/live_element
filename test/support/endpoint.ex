defmodule LiveElementTest.EndpointOverridable do
  defmacro __before_compile__(_env) do
    quote do
      @parsers Plug.Parsers.init(
                parsers: [:urlencoded, :multipart, :json],
                pass: ["*/*"],
                json_decoder: Phoenix.json_library()
              )

      defoverridable call: 2
      def call(conn, _) do
        %{conn | secret_key_base: config(:secret_key_base)}
        |> Plug.Parsers.call(@parsers)
        |> Plug.Conn.put_private(:phoenix_endpoint, __MODULE__)
        |> LiveElementTest.Router.call([])
      end
    end
  end
end

defmodule LiveElementTest.Endpoint do
  use Phoenix.Endpoint, otp_app: :live_element

  @before_compile LiveElementTest.EndpointOverridable

  socket "/live", LiveElement.Socket

  defoverridable url: 0, script_name: 0, config: 1, config: 2, static_path: 1
  def url(), do: "http://localhost:4002"
  def script_name(), do: []
  def static_path(path), do: "/static" <> path
  def config(:live_view), do: [signing_salt: "112345678212345678312345678412"]
  def config(:secret_key_base), do: String.duplicate("57689", 50)
  def config(:cache_static_manifest_latest), do: Process.get(:cache_static_manifest_latest)
  def config(:otp_app), do: :live_element
  def config(:pubsub_server), do: LiveElement.PubSub
  def config(:render_errors), do: [view: __MODULE__]
  def config(:static_url), do: [path: "/static"]
  def config(:server), do: true
  def config(which), do: super(which)
  def config(which, default), do: super(which, default)
end

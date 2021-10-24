defmodule LiveElementTest.Controller do
  use Phoenix.Controller
  import LiveElement.Controller

  plug :put_layout, false

  def widget(conn, _) do
    conn
    |> put_view(LiveElementTest.LayoutView)
    |> render("widget.html")
  end

  def incoming(conn, %{"type" => "live-render-2"}) do
    live_render(conn, LiveElementTest.DashboardLive)
  end

  def incoming(conn, %{"type" => "live-render-3"}) do
    live_render(conn, LiveElementTest.DashboardLive, session: %{"custom" => :session})
  end

  def incoming(conn, %{"type" => "live-render-4"}) do
    conn
    |> put_layout({LiveElementTest.AssignsLayoutView, :app})
    |> live_render(LiveElementTest.DashboardLive)
  end

  def incoming(conn, %{"type" => "render-with-function-component"}) do
    conn
    |> put_view(LiveElementTest.LayoutView)
    |> render("with-function-component.html")
  end

  def incoming(conn, %{"type" => "render-layout-with-function-component"}) do
    conn
    |> put_view(LiveElementTest.LayoutView)
    |> put_root_layout({LiveElementTest.LayoutView, "layout-with-function-component.html"})
    |> render("hello.html")
  end

  def not_found(conn, _) do
    conn
    |> put_status(:not_found)
    |> text("404")
  end
end

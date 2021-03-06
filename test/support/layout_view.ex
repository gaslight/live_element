defmodule LiveElementTest.LayoutView do
  use Phoenix.View, root: ""
  alias LiveElementTest.Router.Helpers, as: Routes
  import LiveElement.Helpers

  def render("app.html", assigns) do
    # Assert those assigns are always available
    _ = assigns.live_module
    _ = assigns.live_action

    ["LAYOUT", assigns.inner_content]
  end

  def render("live.html", assigns) do
    ~H"""
    LIVELAYOUTSTART-<%= @val %>-<%= @inner_content %>-LIVELAYOUTEND
    """
  end

  def render("live-override.html", assigns) do
    ~H"""
    LIVEOVERRIDESTART-<%= @val %>-<%= @inner_content %>-LIVEOVERRIDEEND
    """
  end

  def render("widget.html", assigns) do
    ~H"""
    WIDGET:<%= live_render(@conn, LiveElementTest.ClockLive) %>
    """
  end

  def render("with-function-component.html", assigns) do
    ~H"""
    RENDER:<%= component(&LiveElementTest.FunctionComponent.render/1, value: "from component") %>
    """
  end

  def render("layout-with-function-component.html", assigns) do
    ~H"""
    LAYOUT:<%= component(&LiveElementTest.FunctionComponent.render/1, value: "from layout") %>
    <%= @inner_content %>
    """
  end

  def render("hello.html", assigns) do
    ~H"""
    Hello
    """
  end

  def render("styled.html", assigns) do
    ~H"""
    <html>
      <head>
        <title>Styled</title>
        <link rel="stylesheet" href="/css/custom.css"/>
        <link rel="stylesheet" href={Routes.static_path(@conn, "/css/app.css")}/>
        <link rel="stylesheet" href="//example.com/a.css"/>
        <link rel="stylesheet" href="https://example.com/b.css"/>
        <style>body { background-color: #eee; }</style>
        <script>console.log("script")</script>
      </head>
      <body>
        <%= @inner_content %>
      </body>
    </html>
    """
  end
end

defmodule LiveElementTest.AssignsLayoutView do
  use Phoenix.View, root: ""

  def render("app.html", assigns) do
    ["title: #{assigns.title}", assigns.inner_content]
  end
end

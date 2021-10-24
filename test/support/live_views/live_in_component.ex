defmodule LiveElementTest.LiveInComponent.Root do
  use LiveElement

  def mount(_params, _session, socket) do
    {:ok, socket}
  end

  def render(assigns) do
    ~H"<%= live_component LiveElementTest.LiveInComponent.Component, id: :nested_component %>"
  end
end

defmodule LiveElementTest.LiveInComponent.Component do
  use Phoenix.LiveComponent

  def render(assigns) do
    ~H"""
    <div>
      <%= live_render @socket, LiveElementTest.LiveInComponent.Live, id: :nested_live %>"
    </div>
    """
  end
end

defmodule LiveElementTest.LiveInComponent.Live do
  use LiveElement

  def mount(_params, _session, socket) do
    {:ok, socket}
  end

  def render(assigns) do
    ~H""
  end
end

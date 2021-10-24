defmodule LiveElementTest.ParentLayoutLive do
  use LiveElement

  def render(assigns) do
    ~H"""
    <%= live_render @socket, LiveElementTest.LayoutLive, session: @session, id: "layout" %>
    """
  end

  def mount(_params, session, socket) do
    {:ok, assign(socket, session: session)}
  end
end

defmodule LiveElementTest.LayoutLive do
  use LiveElement, layout: {LiveElementTest.LayoutView, "live.html"}

  def render(assigns), do: ~H|The value is: <%= @val %>|

  def mount(_params, session, socket) do
    socket
    |> assign(val: 123)
    |> maybe_put_layout(session)
  end

  def handle_event("double", _, socket) do
    {:noreply, update(socket, :val, &(&1 * 2))}
  end

  defp maybe_put_layout(socket, %{"live_layout" => value}) do
    {:ok, socket, layout: value}
  end

  defp maybe_put_layout(socket, _session), do: {:ok, socket}
end

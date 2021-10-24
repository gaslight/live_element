defmodule LiveElementTest.CollocatedLive do
  use LiveElement

  def mount(_params, _session, socket) do
    {:ok, assign(socket, world: "world")}
  end
end

defmodule LiveElementTest.CollocatedComponent do
  use Phoenix.LiveComponent
end

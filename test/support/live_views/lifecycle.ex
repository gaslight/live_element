defmodule LiveElementTest.InitAssigns do
  alias LiveElement

  def on_mount(:default, _params, _session, socket) do
    {:cont,
     socket
     |> LiveView.assign(:init_assigns_mount, true)
     |> LiveView.assign(:last_on_mount, :init_assigns_mount)}
  end

  def on_mount(:other, _params, _session, socket) do
    {:cont,
     socket
     |> LiveView.assign(:init_assigns_other_mount, true)
     |> LiveView.assign(:last_on_mount, :init_assigns_other_mount)}
  end
end

defmodule LiveElementTest.MountArgs do
  use Phoenix.Component

  def on_mount(:inlined, _params, _session, socket) do
    qs = URI.encode_query(%{called: true, inlined: true})
    {:halt, push_redirect(socket, to: "/lifecycle?#{qs}")}
  end
end

defmodule LiveElementTest.OnMount do
  use Phoenix.Component

  def on_mount(:default, _params, _session, socket) do
    {:cont, socket}
  end

  def on_mount(:other, _params, _session, socket) do
    {:cont, socket}
  end
end

defmodule LiveElementTest.OtherOnMount do
  use Phoenix.Component

  def on_mount(:default, _params, _session, socket) do
    {:cont, socket}
  end

  def on_mount(:other, _params, _session, socket) do
    {:cont, socket}
  end
end

defmodule LiveElementTest.HooksLive do
  use LiveElement, namespace: LiveElementTest
  alias LiveElementTest.InitAssigns

  on_mount InitAssigns
  on_mount {InitAssigns, :other}

  def render(assigns) do
    ~H"""
    last_on_mount:<%= inspect(assigns[:last_on_mount]) %>
    params_hook:<%= assigns[:params_hook_ref] %>
    count:<%= @count %>
    <button id="dec" phx-click="dec">-</button>
    <button id="inc" phx-click="inc">+</button>
    <button id="patch" phx-click="patch">?</button>
    """
  end

  def mount(_params, _session, socket) do
    {:ok, assign(socket, count: 0)}
  end

  def handle_event("inc", _, socket), do: {:noreply, update(socket, :count, &(&1 + 1))}
  def handle_event("dec", _, socket), do: {:noreply, update(socket, :count, &(&1 - 1))}

  def handle_event("patch", _, socket) do
    ref = socket.assigns[:params_hook_ref] || 0
    {:noreply, push_patch(socket, to: "/lifecycle?ref=#{ref}")}
  end

  def handle_call({:run, func}, _, socket), do: func.(socket)

  def handle_call({:push_patch, to}, _, socket) do
    {:reply, :ok, push_patch(socket, to: to)}
  end

  def handle_info(:noop, socket), do: {:noreply, socket}

  def handle_info({:ping, ref, pid}, socket) when is_reference(ref) and is_pid(pid) do
    send(pid, {:pong, ref})
    {:noreply, socket}
  end

  def handle_info({:run, func}, socket), do: func.(socket)

  ## test helpers

  def attach_hook(lv, name, stage, cb) do
    run(lv, fn socket ->
      {:reply, :ok, LiveElement.attach_hook(socket, name, stage, cb)}
    end)
  end

  def detach_hook(lv, name, stage) do
    run(lv, fn socket ->
      {:reply, :ok, LiveElement.detach_hook(socket, name, stage)}
    end)
  end

  def fetch_lifecycle(lv) do
    run(lv, fn socket ->
      {:reply, Map.fetch(socket.private, :lifecycle), socket}
    end)
  end

  def exits_with(lv, kind, func) do
    Process.unlink(proxy_pid(lv))

    try do
      func.()
      raise "expected to exit with #{inspect(kind)}"
    catch
      :exit, {{%mod{message: msg}, _}, _} when mod == kind -> msg
    end
  end

  def run(lv, func) do
    GenServer.call(lv.pid, {:run, func})
  end

  def proxy_pid(%{proxy: {_ref, _topic, pid}}), do: pid
end

defmodule LiveElementTest.HooksLive.BadMount do
  use LiveElement, namespace: LiveElementTest

  on_mount __MODULE__

  def on_mount(:default, _params, _session, _socket), do: :boom

  def mount(_params, _session, _socket) do
    raise "expected to exit before #{__MODULE__}.mount/3"
  end

  def render(assigns), do: ~H"<div></div>"
end

defmodule LiveElementTest.HooksLive.HaltMount do
  use LiveElement, namespace: LiveElementTest

  on_mount {__MODULE__, :hook}

  def on_mount(:hook, _, _, socket), do: {:halt, socket}
  def render(assigns), do: ~H"<div></div>"
end

defmodule LiveElementTest.HooksLive.RedirectMount do
  use LiveElement, namespace: LiveElementTest

  def mount(_, _, socket) do
    case socket.assigns.live_action do
      :halt -> raise "mount should not have been called"
      _ -> {:ok, socket}
    end
  end

  on_mount __MODULE__

  def on_mount(:default, _, _, %{assigns: %{live_action: action}} = socket) do
    {action, push_redirect(socket, to: "/lifecycle")}
  end

  def render(assigns), do: ~H"<div></div>"
end

defmodule LiveElementTest.HooksLive.Noop do
  use LiveElement, namespace: LiveElementTest

  def render(assigns) do
    ~H"""
    <h1>Noop</h1>
    last_on_mount:<%= inspect(assigns[:last_on_mount]) %>
    """
  end
end

defmodule LiveElementTest.HaltConnectedMount do
  alias LiveElement

  def on_mount(_arg, _params, _session, socket) do
    if LiveView.connected?(socket) do
      {:halt, LiveView.push_redirect(socket, to: "/lifecycle")}
    else
      {:cont, LiveView.assign(socket, :last_on_mount, __MODULE__)}
    end
  end
end

defmodule LiveElementTest.HooksAttachComponent do
  use Phoenix.LiveComponent
  alias LiveElement

  def mount(socket) do
    {:ok, LiveView.attach_hook(socket, :live_component_hook, :handle_event, &__MODULE__.hook/3)}
  end

  def hook(_, _, _socket) do
    raise "expected to exit before #{__MODULE__}.hook/3"
  end

  def render(assigns), do: ~H"<div></div>"
end

defmodule LiveElementTest.HooksDetachComponent do
  use Phoenix.LiveComponent
  alias LiveElement

  def mount(socket) do
    {:ok, LiveView.detach_hook(socket, :live_view_hook, :handle_event)}
  end

  def render(assigns), do: ~H"<div></div>"
end

defmodule LiveElementTest.HooksLive.WithComponent do
  use LiveElement, namespace: LiveElementTest
  alias LiveElementTest.{HooksAttachComponent, HooksDetachComponent}

  def mount(_params, _session, socket) do
    {:ok,
     socket
     |> assign(:component, nil)
     |> attach_hook(:live_view_hook, :handle_event, fn _, _, socket ->
       {:cont, socket}
     end)}
  end

  def handle_event("load", %{"val" => val}, socket) do
    component =
      case val do
        "attach" -> HooksAttachComponent
        "detach" -> HooksDetachComponent
      end

    {:noreply, assign(socket, :component, component)}
  end

  def render(assigns) do
    ~H"""
    <button id="attach" phx-click="load" phx-value-val="attach">Load/Attach</button>
    <button id="detach" phx-click="load" phx-value-val="detach">Load/Detach</button>
    <%= if @component do %>
      <%= live_component(@component, id: :hook) %>
    <% end %>
    """
  end
end

defmodule LiveElementTest.HooksLive.HandleParamsNotDefined do
  use LiveElement, namespace: LiveElementTest

  def mount(_, _, socket) do
    {:ok, attach_hook(socket, :assign_url, :handle_params, fn _, url, socket ->
      {:cont, assign(socket, :url, url)}
    end)}
  end

  def render(assigns), do: ~H"url=<%= assigns[:url] %>"
end

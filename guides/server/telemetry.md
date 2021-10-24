# Telemetry

LiveView currently exposes the following [`telemetry`](https://hexdocs.pm/telemetry) events:

  * `[:phoenix, :live_view, :mount, :start]` - Dispatched by a `LiveElement`
    immediately before [`mount/3`](`c:LiveElement.mount/3`) is invoked.

    * Measurement:

          %{system_time: System.monotonic_time}

    * Metadata:

          %{
            socket: LiveElement.Socket.t,
            params: unsigned_params | :not_mounted_at_router,
            session: map
          }


  * `[:phoenix, :live_view, :mount, :stop]` - Dispatched by a `LiveElement`
    when the [`mount/3`](`c:LiveElement.mount/3`) callback completes successfully.

    * Measurement:

          %{duration: native_time}

    * Metadata:

          %{
            socket: LiveElement.Socket.t,
            params: unsigned_params | :not_mounted_at_router,
            session: map
          }


  * `[:phoenix, :live_view, :mount, :exception]` - Dispatched by a `LiveElement`
    when an exception is raised in the [`mount/3`](`c:LiveElement.mount/3`) callback.

    * Measurement: `%{duration: native_time}`

    * Metadata:

          %{
            socket: LiveElement.Socket.t,
            kind: atom,
            reason: term,
            params: unsigned_params | :not_mounted_at_router,
            session: map
          }

  * `[:phoenix, :live_view, :handle_params, :start]` - Dispatched by a `LiveElement`
    immediately before [`handle_params/3`](`c:LiveElement.handle_params/3`) is invoked.

    * Measurement:

          %{system_time: System.monotonic_time}

    * Metadata:

          %{
            socket: LiveElement.Socket.t,
            params: unsigned_params,
            uri: String.t()
          }


  * `[:phoenix, :live_view, :handle_params, :stop]` - Dispatched by a `LiveElement`
    when the [`handle_params/3`](`c:LiveElement.handle_params/3`) callback completes successfully.

    * Measurement:

          %{duration: native_time}

    * Metadata:

          %{
            socket: LiveElement.Socket.t,
            params: unsigned_params,
            uri: String.t()
          }

  * `[:phoenix, :live_view, :handle_params, :exception]` - Dispatched by a `LiveElement`
    when the when an exception is raised in the [`handle_params/3`](`c:LiveElement.handle_params/3`) callback.

    * Measurement:

          %{duration: native_time}

    * Metadata:

          %{
            socket: LiveElement.Socket.t,
            kind: atom,
            reason: term,
            params: unsigned_params,
            uri: String.t()
          }

  * `[:phoenix, :live_view, :handle_event, :start]` - Dispatched by a `LiveElement`
    immediately before [`handle_event/3`](`c:LiveElement.handle_event/3`) is invoked.

    * Measurement:

          %{system_time: System.monotonic_time}

    * Metadata:

          %{
            socket: LiveElement.Socket.t,
            event: String.t(),
            params: unsigned_params
          }


  * `[:phoenix, :live_view, :handle_event, :stop]` - Dispatched by a `LiveElement`
    when the [`handle_event/3`](`c:LiveElement.handle_event/3`) callback completes successfully.

    * Measurement:

          %{duration: native_time}

    * Metadata:

          %{
            socket: LiveElement.Socket.t,
            event: String.t(),
            params: unsigned_params
          }

  * `[:phoenix, :live_view, :handle_event, :exception]` - Dispatched by a `LiveElement`
    when an exception is raised in the [`handle_event/3`](`c:LiveElement.handle_event/3`) callback.

    * Measurement:

          %{duration: native_time}

    * Metadata:

          %{
            socket: LiveElement.Socket.t,
            kind: atom,
            reason: term,
            event: String.t(),
            params: unsigned_params
          }

  * `[:phoenix, :live_component, :handle_event, :start]` - Dispatched by a `Phoenix.LiveComponent`
    immediately before [`handle_event/3`](`c:Phoenix.LiveComponent.handle_event/3`) is invoked.

    * Measurement:

          %{system_time: System.monotonic_time}

    * Metadata:

          %{
            socket: LiveElement.Socket.t,
            component: atom,
            event: String.t(),
            params: unsigned_params
          }


  * `[:phoenix, :live_component, :handle_event, :stop]` - Dispatched by a `Phoenix.LiveComponent`
    when the [`handle_event/3`](`c:Phoenix.LiveComponent.handle_event/3`) callback completes successfully.

    * Measurement:

          %{duration: native_time}

    * Metadata:

          %{
            socket: LiveElement.Socket.t,
            component: atom,
            event: String.t(),
            params: unsigned_params
          }

  * `[:phoenix, :live_component, :handle_event, :exception]` - Dispatched by a `Phoenix.LiveComponent`
    when an exception is raised in the [`handle_event/3`](`c:Phoenix.LiveComponent.handle_event/3`) callback.

    * Measurement:

          %{duration: native_time}

    * Metadata:

          %{
            socket: LiveElement.Socket.t,
            kind: atom,
            reason: term,
            component: atom,
            event: String.t(),
            params: unsigned_params
          }

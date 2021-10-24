defmodule LiveElementTest.View do
  @moduledoc """
  The struct for testing LiveViews.

  The following public fields represent the LiveView:

    * `id` - The DOM id of the LiveView
    * `module` - The module of the running LiveView
    * `pid` - The Pid of the running LiveView
    * `endpoint` - The endpoint for the LiveView
    * `target` - The target to scope events to

  See the `LiveElementTest` documentation for usage.
  """
  if Version.match?(System.version(), ">= 1.8.0") do
    @derive {Inspect, only: [:id, :module, :pid, :endpoint]}
  end

  defstruct id: nil,
            module: nil,
            pid: nil,
            proxy: nil,
            endpoint: nil,
            target: nil
end

defmodule LiveElementTest.Element do
  @moduledoc """
  The struct returned by `LiveElementTest.element/3`.

  The following public fields represent the element:

    * `selector` - The query selector
    * `text_filter` - The text to further filter the element

  See the `LiveElementTest` documentation for usage.
  """
  if Version.match?(System.version(), ">= 1.8.0") do
    @derive {Inspect, only: [:selector, :text_filter]}
  end

  defstruct proxy: nil,
            selector: nil,
            text_filter: nil,
            event: nil,
            form_data: nil,
            meta: %{}
end

defmodule LiveElementTest.Upload do
  @moduledoc """
  The struct returned by `LiveElementTest.file_input/4`.

  The following public fields represent the element:

    * `selector` - The query selector
    * `entries` - The list of selected file entries

  See the `LiveElementTest` documentation for usage.
  """

  alias LiveElementTest.{Upload, Element}

  if Version.match?(System.version(), ">= 1.8.0") do
    @derive {Inspect, only: [:selector, :entries]}
  end

  defstruct pid: nil,
            view: nil,
            element: nil,
            ref: nil,
            selector: nil,
            config: %{},
            entries: [],
            cid: nil

  @doc false
  def new(pid, %LiveElementTest.View{} = view, form_selector, name, entries, cid) do
    populated_entries = Enum.map(entries, fn entry -> populate_entry(entry) end)
    selector = "#{form_selector} input[type=\"file\"][name=\"#{name}\"]"

    %Upload{
      pid: pid,
      view: view,
      element: %Element{proxy: view.proxy, selector: selector},
      entries: populated_entries,
      cid: cid
    }
  end

  defp populate_entry(%{} = entry) do
    name =
      Map.get(entry, :name) ||
        raise ArgumentError, "a :name of the entry filename is required."

    content =
      Map.get(entry, :content) ||
        raise ArgumentError, "the :content of the binary entry file data is required."

    %{
      "name" => name,
      "content" => content,
      "ref" => to_string(System.unique_integer([:positive])),
      "size" => entry[:size] || byte_size(content),
      "type" => entry[:type] || MIME.from_path(name)
    }
  end
end

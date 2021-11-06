defmodule LiveElement.LiveElementTest do
  use ExUnit.Case, async: true
  import Phoenix.ConnTest

  import LiveElementTest
  alias Plug.Conn
  alias LiveElementTest.{Endpoint}

  @endpoint Endpoint

  test "rendering a thing" do
    # conn = Phoenix.ConnTest.build_conn() |> Conn.put_private(:phoenix_endpoint, @endpoint)

    # {:ok, view, _} =
    #   LiveElement.Static.render(conn, LiveElementTest.ElementsLive,
    #     session: %{"hello" => "world"}
    #   )

    view = LiveElementTest.ElementsLive.render(%{})
    IO.inspect(view)
    assert render(view) =~ "This"
  end
end

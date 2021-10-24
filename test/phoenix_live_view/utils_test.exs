defmodule LiveElement.UtilsTest do
  use ExUnit.Case, async: true

  alias LiveElement.Utils
  alias LiveElementTest.Endpoint

  test "sign" do
    assert is_binary(Utils.sign_flash(Endpoint, %{"info" => "hi"}))
  end

  test "verify with valid flash token" do
    token = Utils.sign_flash(Endpoint, %{"info" => "hi"})
    assert Utils.verify_flash(Endpoint, token) == %{"info" => "hi"}
  end

  test "verify with invalid flash token" do
    assert Utils.verify_flash(Endpoint, "bad") == %{}
    assert Utils.verify_flash(Endpoint, nil) == %{}
  end
end

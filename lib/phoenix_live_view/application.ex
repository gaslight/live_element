defmodule LiveElement.Application do
  @moduledoc false
  use Application

  require Logger

  # TODO: Remove this whole module once we require Elixir v1.10+.
  def start(_, _) do
    if List.to_integer(:erlang.system_info(:otp_release)) < 21 do
      Logger.error("LiveElement requires Erlang/OTP 21+")
      raise "LiveElement requires Erlang/OTP 21+"
    end

    Supervisor.start_link([], strategy: :one_for_one)
  end
end

import {LiveSocket} from "live_element"
import * as LiveSocket2 from "live_element/live_socket"

describe("Named Imports", () => {
  test("LiveSocket is equal to the actual LiveSocket", () => {
    expect(LiveSocket).toBe(LiveSocket2.default)
  })
})

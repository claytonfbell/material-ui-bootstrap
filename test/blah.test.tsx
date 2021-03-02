import * as React from "react"
import * as ReactDOM from "react-dom"
import { Alert } from "../src"

describe("it", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Alert>hello</Alert>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

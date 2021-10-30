import React from "react"
import { Snippet } from "./Snippet"
export default function ButtonSnippet() {
  const codeString = `
import React from "react"
import { Button } from "material-ui-bootstrap"

export default function ButtonExample() {
  return (
    <Button variant="contained" color="info">Example</Button>
  )
}
`
  return <Snippet>{codeString}</Snippet>
}

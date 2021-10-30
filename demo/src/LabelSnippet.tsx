import React from "react"
import { Snippet } from "./Snippet"
export default function LabelSnippet() {
  const codeString = `
import React from "react"
import { Label } from "material-ui-bootstrap"

export default function LabelExample() {
  return (
    <Label color="info">Example</Label>
  )
}
`
  return <Snippet>{codeString}</Snippet>
}

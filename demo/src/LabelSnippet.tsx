import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
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
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  )
}

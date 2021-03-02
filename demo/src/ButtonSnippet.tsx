import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
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
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  )
}

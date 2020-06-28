import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
export default function TypographySnippet() {
  const codeString = `
  import React from "react"
  import { Typography } from "material-ui-bootstrap"
  
  export default function TypographyExample() {
    return <Typography color="success">Example</Typography>
  }
`
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  )
}

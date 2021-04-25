import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
export default function TooltipSnippet() {
  const codeString = `
import { Button, Tooltip } from "material-ui-bootstrap"
import React from "react"

export default function TooltipExample() {
return (
    <Tooltip title="Tooltip Example" placement="right">
        <Button color="primary" variant="contained">
            Mouse Over
        </Button>
    </Tooltip>
  )
}
  
`
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  )
}

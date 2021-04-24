import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
export default function LabelSnippet() {
  const codeString = `
import React from "react"
import { Panel, PanelBody, PanelHeader } from "material-ui-bootstrap"

export default function PanelExample() {
  return (
    <Panel color="info">
      <PanelHeader>Header</PanelHeader>
      <PanelBody>Body</PanelBody>
    </Panel>
  )
}
`
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  )
}

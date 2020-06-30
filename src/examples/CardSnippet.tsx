import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
export default function CardSnippet() {
  const codeString = `
  import React from "react"
  import Card, { CardContent, CardHeader, CardTitle } from "material-ui-bootstrap"
  
  export default function CardExample() {
    return (
      <Card color="success">
        <CardHeader>CardHeader</CardHeader>
        <CardContent>
          <CardTitle>Title</CardTitle>
          Example card content.
        </CardContent>
      </Card>
    )
  }
`
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  )
}

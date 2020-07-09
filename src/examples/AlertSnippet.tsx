import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
export default function AlertSnippet() {
  const codeString = `
  import React from "react"
  import { Alert, Button } from "material-ui-bootstrap"
  
  export default function AlertExample() {
    const [show, setShow] = React.useState(true)
    return (
      <>
        <Alert
          color="danger"
          dismissible
          show={show}
          onClose={() => setShow(false)}
        >
          <Alert.Heading>Control State</Alert.Heading>
          This is a dismissable one where you control the dismissed state
          externally.
        </Alert>
        <Button onClick={() => setShow(true)}>Show</Button>
        <Button onClick={() => setShow(false)}>Hide</Button>
      </>
    )
  }
  
`
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  )
}

import React from "react"
import { Snippet } from "./Snippet"
export default function CardSnippet() {
  const codeString = `
  import React from "react"
  import { Card, CardContent, CardHeader, CardTitle } from "material-ui-bootstrap"
  
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
  return <Snippet>{codeString}</Snippet>
}

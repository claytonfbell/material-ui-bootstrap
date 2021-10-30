import React from "react"
import { Snippet } from "./Snippet"

export default function TypographySnippet() {
  const codeString = `
  import React from "react"
  import { Typography } from "material-ui-bootstrap"
  
  export default function TypographyExample() {
    return <Typography color="success">Example</Typography>
  }
`
  return <Snippet>{codeString}</Snippet>
}

import React from "react"
import { Snippet } from "./Snippet"

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
  return <Snippet>{codeString}</Snippet>
}

import React from "react"
import { Snippet } from "./Snippet"
export default function PanelSnippet() {
  const codeString = `
import React from "react"
import { Panel, PanelBody, PanelHeader } from "material-ui-bootstrap"
import { Snippet } from './Snippet';

export default function PanelExample() {
  return (
    <Panel color="info">
      <PanelHeader>Header</PanelHeader>
      <PanelBody>Body</PanelBody>
    </Panel>
  )
}
`
  return <Snippet>{codeString}</Snippet>
}

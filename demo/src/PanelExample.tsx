import Grid from "@material-ui/core/Grid"
import {
  bootstrapColors,
  Panel,
  PanelBody,
  PanelHeader,
} from "material-ui-bootstrap"
import React from "react"
import PanelSnippet from "./PanelSnippet"

export default function PanelExample() {
  return (
    <>
      <Grid container spacing={3}>
        {bootstrapColors.map((color, idx) => (
          <React.Fragment key={idx}>
            <Grid item xs={6} sm={3}>
              <Panel color={color}>
                <PanelHeader>Header</PanelHeader>
                <PanelBody>Body</PanelBody>
              </Panel>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <br />
      <PanelSnippet />
      <br />
    </>
  )
}

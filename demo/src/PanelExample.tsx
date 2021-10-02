import Grid from "@mui/material/Grid"
import {
  bootstrapColors,
  Panel,
  PanelBody,
  PanelHeader,
} from "material-ui-bootstrap"
import React from "react"

export default function PanelExample() {
  return (
    <>
      <Grid container spacing={3}>
        {bootstrapColors.map((color, idx) => (
          <React.Fragment key={idx}>
            <Grid item xs={6} md={3}>
              <Panel color={color}>
                <PanelHeader>{color}</PanelHeader>
                <PanelBody>{color}</PanelBody>
              </Panel>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </>
  )
}

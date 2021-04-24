import { Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import { bootstrapColors, Label } from "material-ui-bootstrap"
import React from "react"
import LabelSnippet from "./LabelSnippet"

export default function LabelExample() {
  return (
    <>
      <Grid container spacing={3}>
        {bootstrapColors.map((color, idx) => (
          <React.Fragment key={idx}>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" style={{ marginBottom: 4 }}>
                <Label color={color}>{color}</Label>
              </Typography>
              <Typography variant="body1" style={{ marginBottom: 4 }}>
                <Label color={color}>{color}</Label>
              </Typography>
              <Typography variant="caption" style={{ marginBottom: 4 }}>
                <Label color={color}>{color}</Label>
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <br />
      <LabelSnippet />
      <br />
    </>
  )
}

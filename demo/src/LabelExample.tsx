import { Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import { bootstrapColors, Label } from "material-ui-bootstrap"
import React from "react"

export default function LabelExample() {
  return (
    <>
      <Grid container spacing={1}>
        {bootstrapColors.map((color, idx) => (
          <React.Fragment key={idx}>
            <Grid item>
              <Typography variant="body1">
                <Label color={color}>{color}</Label>
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </>
  )
}

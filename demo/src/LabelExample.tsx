import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { bootstrapColors, Label } from "material-ui-bootstrap"
import React from "react"

export default function LabelExample() {
  return (
    <>
      <Grid container spacing={2}>
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

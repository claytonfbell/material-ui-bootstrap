import Grid from "@material-ui/core/Grid"
import { bootstrapColors, Typography } from "material-ui-bootstrap"
import React from "react"

export default function TypographyExample() {
  return (
    <>
      <Grid container spacing={3}>
        {bootstrapColors.map((color, idx) => (
          <React.Fragment key={idx}>
            <Grid item>
              <Typography color={color}>{color}</Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </>
  )
}

import Grid from "@material-ui/core/Grid"
import { bootstrapColors, Button } from "material-ui-bootstrap"
import React from "react"

export default function ButtonExample() {
  return (
    <Grid container spacing={1}>
      {bootstrapColors.map((color, idx) => (
        <React.Fragment key={idx}>
          <Grid item>
            <Button variant="contained" color={color}>
              {color}
            </Button>
            <div style={{ marginBottom: 12 }} />
            <Button variant="outlined" color={color}>
              {color}
            </Button>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  )
}

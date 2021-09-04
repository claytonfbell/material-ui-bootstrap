import Grid from "@material-ui/core/Grid"
import { bootstrapColors, Button, Tooltip } from "material-ui-bootstrap"
import React from "react"

export default function ButtonExample() {
  return (
    <Grid container spacing={1}>
      {bootstrapColors.map((color, idx) => (
        <React.Fragment key={idx}>
          <Grid item>
            <Tooltip title={`uppercase & boxShadow`}>
              <Button variant="contained" color={color} uppercase boxShadow>
                {color}
              </Button>
            </Tooltip>
            <div style={{ marginBottom: 12 }} />
            <Button variant="contained" color={color}>
              {color}
            </Button>
            <div style={{ marginBottom: 12 }} />
            <Button variant="outlined" color={color}>
              {color}
            </Button>
            <div style={{ marginBottom: 12 }} />
            <Button variant="text" color={color}>
              {color}
            </Button>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  )
}

import Alert from "@mui/material/Alert"
import Grid from "@mui/material/Grid"
import {
  bootstrapColors,
  Button,
  Tooltip,
  Typography,
} from "material-ui-bootstrap"
import React from "react"

export default function ButtonExample() {
  return (
    <>
      <Typography color="warning">
        <Alert severity="warning">
          DEPRECATED: MUI v5 Button supports success, error, info, and warning
          colors, you can style the rest in your theme.
        </Alert>
      </Typography>
      <br />
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
    </>
  )
}

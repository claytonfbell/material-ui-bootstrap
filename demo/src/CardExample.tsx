import Grid from "@mui/material/Grid"
import {
  bootstrapColors,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "material-ui-bootstrap"
import React from "react"

export default function CardExample() {
  return (
    <>
      <Grid container spacing={3}>
        {bootstrapColors.map((color, idx) => (
          <React.Fragment key={idx}>
            <Grid item xs={6} md={3}>
              <Card color={color}>
                <CardHeader>{color}</CardHeader>
                <CardContent>
                  <CardTitle>{color}</CardTitle>
                  {color}
                </CardContent>
              </Card>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </>
  )
}

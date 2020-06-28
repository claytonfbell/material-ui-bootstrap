import Grid from "@material-ui/core/Grid"
import React from "react"
import { bootstrapColors } from "../Alert"
import Typography from "../Typography"
import TypographySnippet from "./TypographySnippet"

export default function TypographyExample() {
  return (
    <>
      <br />
      <br />
      <Grid container spacing={3}>
        {bootstrapColors.map((color, idx) => (
          <React.Fragment key={idx}>
            <Grid item xs={12} sm={4}>
              <Typography color={color}>{color}</Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <br />
      <TypographySnippet />
      <br />
    </>
  )
}

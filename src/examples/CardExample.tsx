import Grid from "@material-ui/core/Grid"
import React from "react"
import { bootstrapColors } from "../Alert"
import Card, { CardContent, CardHeader, CardTitle } from "../Card"
import CardSnippet from "./CardSnippet"

export default function CardExample() {
  return (
    <>
      <Grid container spacing={3}>
        {bootstrapColors.map((color, idx) => (
          <React.Fragment key={idx}>
            <Grid item xs={6} sm={3}>
              <Card color={color}>
                <CardHeader>CardHeader</CardHeader>
                <CardContent>
                  <CardTitle>Title</CardTitle>
                  {color}
                </CardContent>
              </Card>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <br />
      <CardSnippet />
      <br />
    </>
  )
}
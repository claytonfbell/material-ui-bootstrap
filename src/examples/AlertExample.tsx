import React from "react"
import Alert, { bootstrapColors } from "../Alert"
import Typography from "../Typography"
import AlertSnippet from "./AlertSnippet"

export default function AlertExample() {
  return (
    <>
      {bootstrapColors.map((color, idx) => (
        <React.Fragment key={idx}>
          <Alert color={color}>
            <Alert.Heading>Heading</Alert.Heading>
            Alert {color}
          </Alert>
          <br />
          <Typography color={color}>Hello world</Typography>
          <br />
        </React.Fragment>
      ))}
      <AlertSnippet />
    </>
  )
}

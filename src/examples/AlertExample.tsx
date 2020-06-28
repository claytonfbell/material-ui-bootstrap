import React from "react"
import Alert, { bootstrapColors } from "../Alert"
import AlertSnippet from "./AlertSnippet"

export default function AlertExample() {
  return (
    <>
      {bootstrapColors.map((color, idx) => (
        <React.Fragment key={idx}>
          <Alert color={color}>Alert {color}</Alert>
          <br />
          <br />
        </React.Fragment>
      ))}
      <AlertSnippet />
    </>
  )
}

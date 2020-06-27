import React from "react"
import Alert, { bootstrapColors } from "../Alert"

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
    </>
  )
}

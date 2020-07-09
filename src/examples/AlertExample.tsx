import Grid from "@material-ui/core/Grid"
import InfoIcon from "@material-ui/icons/Info"
import React from "react"
import Alert from "../Alert"
import bootstrapColors from "../bootstrapColors"
import Button from "../Button"
import AlertSnippet from "./AlertSnippet"

export default function AlertExample() {
  const [show, setShow] = React.useState(true)
  return (
    <>
      <Grid container spacing={3}>
        {bootstrapColors.map((color, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4}>
            <Alert color={color}>
              <Alert.Heading>Heading</Alert.Heading>
              Alert {color} with a{" "}
              <a href="https://google.com" target="google">
                link
              </a>
              .
            </Alert>
          </Grid>
        ))}
      </Grid>

      <br />
      <br />
      {/* Info Box */}
      <Alert color="info">
        <Alert.Heading icon={<InfoIcon />}>Heading With Icon</Alert.Heading>
        <p>You can drop in an icon to make helpful info boxes.</p>
        <p>
          <code>{`<Alert.Heading icon={<InfoIcon />}>`}</code>
        </p>
      </Alert>
      <br />
      <br />
      <Alert color="danger" dismissible maxWidth="md">
        This is a dismissable one.
      </Alert>

      <br />
      <br />

      <Alert
        color="danger"
        dismissible
        show={show}
        onClose={() => setShow(false)}
      >
        <Alert.Heading>Control State</Alert.Heading>
        This is a dismissable one where you control the dismissed state
        externally.
      </Alert>
      <Button onClick={() => setShow(true)}>Show</Button>
      <Button onClick={() => setShow(false)}>Hide</Button>

      <AlertSnippet />
    </>
  )
}

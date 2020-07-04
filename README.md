# material-ui-bootstrap

[![npm version](https://badge.fury.io/js/material-ui-bootstrap.svg)](https://badge.fury.io/js/material-ui-bootstrap)
[![Build Status](https://travis-ci.org/claytonfbell/material-ui-bootstrap.svg?branch=master)](https://travis-ci.org/claytonfbell/material-ui-bootstrap)

If you prefer the [Material UI](https://material-ui.com/) api but also like Bootstrap's clean buttons and useful color variants then this package is here for you. It wraps material-ui's `<Button>` and `<Card>` and `<Typography>` components and adds a new component `<Alert>`. Inspired by <https://react-bootstrap.github.io>.

[DEMO HERE](https://material-ui-bootstrap.xyz)

<!-- toc -->

- [Install](#install)
- [Button](#button)
- [Alert](#alert)
- [Typography](#typography)
- [Card](#card)

<!-- tocstop -->

## Install

```bash
npm i material-ui-bootstrap
```

## Button

Drop this in place of the material-ui `Button`. You may use the following color props: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`.

```tsx
import React from "react"
import { Button } from "material-ui-bootstrap"

export default function App() {
  return (
    <Button color="success" variant="contained">
      Success
    </Button>
  )
}
```

## Alert

```tsx
import React from "react"
import { Alert } from "material-ui-bootstrap"

export default function App() {
  return (
    <Alert color="danger">
      <Alert.Heading>Heading</Alert.Heading>
      Alert danger
    </Alert>
  )
}
```

## Typography

```tsx
import React from "react"
import { Typography } from "material-ui-bootstrap"

export default function TypographyExample() {
  return <Typography color="success">Example</Typography>
}
```

## Card

```tsx
import React from "react"
import Card, { CardContent, CardHeader, CardTitle } from "material-ui-bootstrap"

export default function CardExample() {
  return (
    <Card color="success">
      <CardHeader>CardHeader</CardHeader>
      <CardContent>
        <CardTitle>Title</CardTitle>
        Example card content.
      </CardContent>
    </Card>
  )
}
```

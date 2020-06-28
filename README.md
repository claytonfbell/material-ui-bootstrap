# material-ui-bootstrap

[![npm version](https://badge.fury.io/js/material-ui-bootstrap.svg)](https://badge.fury.io/js/material-ui-bootstrap)
[![Build Status](https://travis-ci.org/claytonfbell/material-ui-bootstrap.svg?branch=master)](https://travis-ci.org/claytonfbell/material-ui-bootstrap)

Why? Because I love the [Material UI](https://material-ui.com/) api but I've never been sold on the all-caps buttons miss the color variants available.

[DEMO HERE](https://material-ui-bootstrap.xyz)

<!-- toc -->

- [Install](#install)
- [Button](#button)

<!-- tocstop -->

## Install

```bash
# npm
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
  return <Alert color="success">Success message here</Alert>
}
```

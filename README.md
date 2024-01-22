# Webstudio Shopify

An Apollo GraphQL client for the Shopify Storefront API.

## Description

## Installation

```shell
yarn add webstudio-shopify --save
```

## Requirements

Install MUI and emotion libraries

```shell
yarn add @apollo/client apollo-link-context apollo-link-http
```

## Usage Example

```jsx
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
```

                                                      |

## License

The MIT License.

## Author

[Rami Bitar](https://github.com/rbitar)

# webstudio-mui-npm

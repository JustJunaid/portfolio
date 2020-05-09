import React from "react"
import PropTypes from "prop-types"
import { StateProvider } from "./state"
import { reducer, initialState } from "./reducer/layoutReducer"

export default class HTML extends React.Component {
  render() {
    console.log("this.props", this.props)
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link rel="stylesheet" href="/assets/css/page.min.css" />
          <link rel="stylesheet" href="/assets/css/custom-styles.css" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <StateProvider reducer={reducer} initialState={initialState}>
            <div
              style={{ backgroundColor: "rgb(35, 39, 65)", color: "#757575" }}
              key={`body`}
              id="___gatsby"
              dangerouslySetInnerHTML={{ __html: this.props.body }}
            />
          </StateProvider>
          {this.props.postBodyComponents}
        </body>
        <script
          src="https://kit.fontawesome.com/7e32bdc1ab.js"
          crossorigin="anonymous"
        ></script>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

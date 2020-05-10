import React, { Fragment } from "react"
import Layout from "./src/layouts"
import DownloadApp from "./src/components/DownloadApp"

export const wrapPageElement = ({ element, props }) => (
  <Fragment {...props}>
    {element}
    <DownloadApp />
  </Fragment>
)

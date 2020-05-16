import React, { Fragment } from "react"
import { StateProvider } from "./src/state"
import DownloadApp from "./src/components/DownloadApp"

export const wrapRootElement = ({ element }) => {
  return <StateProvider>{element}</StateProvider>
}

export const wrapPageElement = ({ element, props }) => (
  <Fragment {...props}>
    {element}
    <DownloadApp />
  </Fragment>
)

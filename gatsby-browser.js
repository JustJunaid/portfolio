import React from "react"
import { StateProvider } from "./src/state"

export const wrapRootElement = ({ element }) => {
  return <StateProvider>{element}</StateProvider>
}

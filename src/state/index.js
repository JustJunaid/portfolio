import React, { createContext, useContext, useReducer } from "react"
import { reducer, initialState } from "./reducer"

export const StateContext = createContext()

export const useStateValue = () => useContext(StateContext)

export const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import NavbarMobile from "../components/NavbarMobile/NavbarMobile"
import ParticleBackground from "../components/ParticleBackground"
import ToggleDarkTheme from "../components/ToggleDarkTheme"
import { useStateValue } from "../state"

const Index = ({ children }) => {
  const [state, dispatch] = useStateValue()
  return (
    <div
      style={{
        backgroundColor: state.darkTheme ? "rgb(35, 39, 65)" : "#87CEFA",
        color: "#757575",
      }}
    >
      {/* {typeof window !== 'undefined' && window.matchMedia("(max-width: 700px)").matches ? (
        <NavbarMobile />
      ) : (
        <Navbar />
      )} */}
      <Navbar />
      <ParticleBackground />
      {children}
      <ToggleDarkTheme state={state} dispatch={dispatch} />
      <Footer />
    </div>
  )
}

export default Index

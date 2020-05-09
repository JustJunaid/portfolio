import React, { createContext } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import NavbarMobile from "../components/NavbarMobile/NavbarMobile"
import ParticleBackground from "../components/ParticleBackground"
import DownloadApp from "../components/DownloadApp"
import ToggleDarkTheme from "../components/ToggleDarkTheme"

const index = ({ children }) => {
  return (
    <>
      {/* {typeof window !== 'undefined' && window.matchMedia("(max-width: 700px)").matches ? (
        <NavbarMobile />
      ) : (
        <Navbar />
      )} */}
      <Navbar />
      <ParticleBackground />
      {children}
      <ToggleDarkTheme />
      {typeof window !== "undefined" && <DownloadApp />}
      <Footer />
    </>
  )
}

export default index

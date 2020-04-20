import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import NavbarMobile from "../components/NavbarMobile/NavbarMobile"
import ParticleBackground from "../components/ParticleBackground"

const index = ({ children }) => {
  return (
    <div>
      {/* {typeof window !== 'undefined' && window.matchMedia("(max-width: 700px)").matches ? (
        <NavbarMobile />
      ) : (
        <Navbar />
      )} */}
      <Navbar />
      <ParticleBackground />
      {children}
      <Footer />
    </div>
  )
}

export default index

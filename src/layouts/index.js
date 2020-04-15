import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import NavbarMobile from "../components/NavbarMobile/NavbarMobile"

const index = ({ children }) => {
  return (
    <div>
      {window.matchMedia("(max-width: 700px)").matches ? (
        <NavbarMobile />
      ) : (
        <Navbar />
      )}
      {children}
      <Footer />
    </div>
  )
}

export default index

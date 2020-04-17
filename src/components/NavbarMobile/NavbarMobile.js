import React, { useState } from "react"
import "./NavbarMobile.css"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNavbarContent = styled.div`
  height: 100vh;
  /* animation: all 2s ease;
  transition: all 2s ease; */
  margin-top: 2rem;
  text-align: center;
  font-size: 32px;
`

const StyledContainerNavbarTop = styled.div`
  display: flex;
  justify-content: space-between;
`

const Navbar = [
  {
    link: "/",
    text: "ABOUT",
  },
  {
    link: "/portfolio",
    text: "PORTFOLIO",
  },
  {
    link: "/contact",
    text: "CONTACT",
  },
]

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="container">
      <StyledContainerNavbarTop>
        <img
          src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/glowing-star.png"
          // src="/assets/img/logo.jpeg"
          alt="Fire emoji"
          width="70"
        />
        <div
          id="nav-icon2"
          className={isOpen && "open"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </StyledContainerNavbarTop>
      {isOpen && (
        <StyledNavbarContent>
          <ul class="main-nav">
            {Navbar.map((nav) => (
              <li>
                <Link onClick={() => setIsOpen(false)} to={nav.link}>
                  {nav.text}
                </Link>
              </li>
            ))}
          </ul>
        </StyledNavbarContent>
      )}
    </div>
  )
}

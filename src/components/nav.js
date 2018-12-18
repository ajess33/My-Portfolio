import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import '../css/nav.css'

const Navbar = () => {
  return (
    <nav role="navigation">
      <div id="menu-toggle">
        <input type="checkbox" />

        <span />
        <span />
        <span />

        <ul id="menu">
          <a href="#">
            <li>HOME</li>
          </a>
          <a href="#about-me">
            <li>ABOUT ME</li>
          </a>
          <a href="#portfolio">
            <li>THE PORTFOLIO</li>
          </a>
          <a href="#contact">
            <li>CONTACT ME</li>
          </a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

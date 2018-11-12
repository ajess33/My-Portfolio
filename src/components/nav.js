import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import '../css/nav.css'
import { FaBars } from 'react-icons/fa'

const Nav = () => (
  <NavBar>
    <NavLink className="nav--menu">
      <FaBars size={30} />
    </NavLink>
    <NavLink className="nav--contact">CONTACT ME</NavLink>
  </NavBar>
)

const NavLink = styled(Link)`
  color: #888;
  margin-top: 20px;
`

const NavBar = styled.nav`
  list-style-type: none;
  display: flex;
  max-width: 1200px;
`
export default Nav

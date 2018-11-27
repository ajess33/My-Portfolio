import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import '../css/globals.css'
import { IoIosArrowDown } from 'react-icons/io'

const Portfolio = () => (
  <div>
    <div className="heading--wrapper">
      <div className="line-decoration" />
      <h2 className="section--title">
        THE <br /> PORTFOLIO
      </h2>
    </div>
    <div page--wrapper>
      <div className="div__center">
        <IoIosArrowDown className="bottom-icon" size={75} />
      </div>
    </div>
  </div>
)

export default Portfolio

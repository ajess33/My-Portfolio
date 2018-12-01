import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import '../css/globals.css'
import '../css/portfolio.css'
import { IoIosArrowDown } from 'react-icons/io'

const Portfolio = () => (
  <div name="portfolio">
    <div className="heading--wrapper">
      <div className="line-decoration" />
      <h3 className="section--title">
        THE <br /> PORTFOLIO
      </h3>
    </div>
    <div className="page--wrapper">
      <p className="desc-main">
        Here are a few projects I have made while teaching myself web
        development
      </p>
      <div className="project--list">
        <Dunder />
        <CleanWebsite />
        <PomoClock />
      </div>
      <div className="page--wrapper">
        <div className="div__center">
          <IoIosArrowDown className="bottom-icon" size={75} />
        </div>
      </div>
    </div>
  </div>
)

const Dunder = () => (
  <div className="project">
    <h4 className="project--title">DUNDERMIFFLIN-IPSUM</h4>
    <div className="flex-wrap">
      <div>
        <h4>'The Office' themed lorem ipsum generator</h4>
        <p>
          I created this while I was learning React.js. This was the first
          project I had made using React and it helped solidify some of what I
          had learned in tutorials. One challenge I had was working with state
          and getting the data to the correct component. After I lot of
          frustration I was able to solve the problem by rethinking the state.
          Despite the challenges, this was the project I fell in love with
          React!
        </p>
      </div>
      <div>
        <p>Image</p>
      </div>
    </div>
  </div>
)

const CleanWebsite = () => (
  <div className="project">
    <h4 className="project--title">A CLEAN GETAWAY WEBSITE</h4>
  </div>
)

const PomoClock = () => (
  <div className="project">
    <h4 className="project--title">POMODORO CLOCK</h4>
  </div>
)

export default Portfolio

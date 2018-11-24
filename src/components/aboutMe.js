import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import '../css/globals.css'
import '../css/aboutMe.css'
import { IoIosArrowDown } from 'react-icons/io'

const AboutMe = () => (
  <div name="about_me">
    <div className="heading--wrapper">
      <h2 className="section--title">
        ABOUT <br /> AUSTIN
      </h2>
    </div>
    <div className="page--wrapper">
      <p className="desc-main">
        I have a passion for building things, but I'm not good with my hands so
        I guess I'm stuck with computers 😉
      </p>
      <div className="flex-wrapper">
        <div>
          <p className="desc-body">
            Computers and learning have always been something I've enjoyed, and
            in late 2017, I began teaching myself web development. I quickly
            fell in love with writing code and being in an envrionment that
            allows for constant learning.
            <br />I
          </p>
        </div>
        <div>
          <p className="img">Picture of me</p>
        </div>
      </div>
      <div className="div__center">
        <IoIosArrowDown className="bottom-icon" size={75} />
      </div>
    </div>
  </div>
)

const TechSkills = () => <div className="flex-icons" />

export default AboutMe

// Javascript
// CSS
// HTML
// REACT
// GIT
//

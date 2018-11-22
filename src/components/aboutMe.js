import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import '../css/globals.css'
import '../css/aboutMe.css'
import { IoIosArrowDown } from 'react-icons/io'

const AboutMe = () => (
  <div name="about_me">
    <div className="heading--wrapper">
      <h2 className="section--title">ABOUT AUSTIN</h2>
    </div>
    <div className="page--wrapper">
      <div className="flex-wrapper">
        <div>
          <p className="desc-main">
            I have a passion for building things and I'm not good with my hands
            so I guess I'm stuck with computers 😉
          </p>

          <p className="desc-body">
            Learning has always been exciting for me, and in late 2017, I began
            teaching myself web development. I quickly fell in love with writing
            code and being in an envrionment where you are never done learning.{' '}
          </p>
        </div>
        <div>
          <h5>Picture of me</h5>
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

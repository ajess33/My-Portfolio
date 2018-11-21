import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import '../css/globals.css'
import '../css/aboutMe.css'
import { IoIosArrowDown } from 'react-icons/io'

const AboutMe = () => (
  <div className="page--wrapper" name="about_me">
    <h1 className="section--title">ABOUT AUSTIN</h1>
    <div className="about--wrapper">
      <p className="desc">
        I'm a web developer with a passion for building things and I'm not good
        with my hands so I guess I'm stuck with computers 😉
      </p>
    </div>
    <div className="div__center">
      <IoIosArrowDown className="bottom-icon" size={75} />
    </div>
  </div>
)

export default AboutMe

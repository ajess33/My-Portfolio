import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import '../css/globals.css'
import '../css/contact.css'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

const Contact = () => (
  <div id="contact">
    <div className="heading--wrapper">
      <div className="line-decoration" />
      <h1 className="section--title">
        GET <br /> IN TOUCH
      </h1>
    </div>
    <div className="page--wrapper">
      <p className="desc-main">
        I'm looking to gain more experience within the industry and meet new
        people so don't be afraid to say hi!
      </p>
      <div className="contact--wrapper">
        <p className="contact--desc">
          Feel free to send me an email at{' '}
          <span className="contact--email">ajess33@gmail.com</span> or reach out
          on one of these platforms
        </p>
        <div className="icon-wrapper">
          <a
            className="contact--links"
            href="https://twitter.com/ajessscript?lang=en"
          >
            TWITTER
          </a>
          <a
            className="contact--links"
            href="https://www.linkedin.com/in/austin-jess-7933b5154/"
          >
            LINKEDIN
          </a>
          <a className="contact--links" href="https://github.com/ajess33">
            GITHUB
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Contact

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import '../css/globals.css'
import '../css/contact.css'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

const Contact = () => (
  <div name="contact">
    <div className="heading--wrapper">
      <div className="line-decoration" />
      <h1 className="section--title">
        GET <br /> IN TOUCH
      </h1>
    </div>
    <div className="page--wrapper">
      <p className="desc-main">
        I am looking to gain more experience within the industry and meet new
        people so don't be afraid to say hi!
      </p>
      <div className="contact--wrapper">
        <p className="contact--desc">
          Feel free to reach out on any of these platforms or{' '}
          <span className="contact--email">email me at ajess33@gmail.com</span>:
        </p>
        <div className="icon-wrapper">
          <FiTwitter size={35} className="contact--icons" />
          <FiLinkedin size={35} className="contact--icons" />
          <FiGithub size={35} className="contact--icons" />
        </div>
      </div>
    </div>
  </div>
)

export default Contact

import React from 'react'
import { Link } from 'gatsby'
import '../css/globals.css'
import '../css/footer.css'
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => (
  <div className="footer-wrapper">
    <div className="flex-wrap">
      <Link to="#welcome">WELCOME</Link>
      <Link to="#about-me">ABOUT ME</Link>
      <Link to="#portfolio">THE PORTFOLIO</Link>
      <Link to="#contact">CONTACT</Link>
    </div>
    <div className="icon-wrap">
      <a href="https://github.com/ajess33">
        <FiGithub size={25} />
      </a>
      <a href="https://twitter.com/ajessscript?lang=en">
        <FiTwitter size={25} />
      </a>
      <a href="https://www.linkedin.com/in/austin-jess-7933b5154/">
        <FiLinkedin size={25} />
      </a>
      <a>
        <FiMail size={25} />
      </a>
    </div>
    <div className="footer--copy">
      <p>© 2018 Austin Jess. All Rights Reserved.</p>
      <p>Site designed and developed by Austin Jess</p>
    </div>
  </div>
)

export default Footer

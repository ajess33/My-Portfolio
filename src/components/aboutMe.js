import React from 'react'
import { Link } from 'gatsby'
import '../css/globals.css'
import '../css/aboutMe.css'
import { IoIosArrowDown } from 'react-icons/io'
import { FaReact, FaNodeJs, FaJs, FaGit, FaCss3 } from 'react-icons/fa'

const AboutMe = () => (
  <div id="about-me">
    <div className="heading--wrapper">
      <div className="line-decoration" />
      <h2 className="section--title">
        ABOUT <br /> ME
      </h2>
    </div>
    <div className="page--wrapper">
      <p className="desc-main">
        I have a passion for building things, but I'm not good with my hands so
        I guess I'm stuck with computers <span role="img">😉</span>
      </p>
      <div className="flex-wrapper">
        <div>
          <p className="desc-body">
            I am a web developer from the Iowa City, Iowa area and I've been
            teching myself web development since late 2017. The fast-paced
            environment seemed daunting at first, but I quickly realized how
            much I loved learning new technology and different ways to implement
            it. I also have a marketing degree from the University of Iowa that
            allows me to attack some problems with more of a business sense. I
            am looking to gain more real world experience in the industry so if
            you have an opportunity or would just like to talk, please feel free
            to contact!
          </p>
        </div>
        <div>
          <p className="img">Picture of me</p>
        </div>
      </div>
      <div className="skills">
        <FaJs size={75} />
        <FaReact size={75} />
        <FaNodeJs size={75} />
        <FaGit size={75} />
        <FaCss3 size={75} />
      </div>
      <div className="div__center">
        <Link to="#portfolio">
          <IoIosArrowDown className="bottom-icon" size={75} />
        </Link>
      </div>
    </div>
  </div>
)

export default AboutMe

// Javascript
// CSS
// HTML
// REACT
// GIT
//

// - love the learning

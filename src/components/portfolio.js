import React from 'react'
import '../css/globals.css'
import '../css/portfolio.css'
import { IoIosArrowDown } from 'react-icons/io'
import DunderScreenshot from '../images/dunder-screenshot.png'

const Portfolio = () => (
  <div name="portfolio">
    <div className="page--wrapper">
      <div className="heading--wrapper">
        <div className="line-decoration" />
        <h3 className="section--title">
          THE <br /> PORTFOLIO
        </h3>
      </div>
      <p className="desc-main spacer">
        Here are a few projects I have made while teaching myself web
        development
      </p>
      <div className="projects-list">
        <ProjIpsum />
      </div>
      <div className="div__center">
        <IoIosArrowDown className="bottom-icon" size={75} />
      </div>
    </div>
  </div>
)

const ProjIpsum = () => (
  <div className="project">
    <h4>DUNDER-MIFFLINIPSUM</h4>
    <div className="project--flex">
      <img src={DunderScreenshot} alt="Dunder-MifflinIpsum screenshot" />
      <div>
        <p className="project--desc">
          This is a lorem ipsum generator using quotes from the tv show, 'The
          Office'. I created this while I was learning React.js. Because of
          this, I didn't spend a whole lot of time styling. This was the first
          project I had made using React and it helped solidify some of what I
          had learned in tutorials. One challenge I had was working with state
          and getting the data to the correct component. After much frustration
          I was able to solve the problem by rethinking the state. Despite the
          challenges, this was the project I began to fell in love with React!
        </p>
        <ProjectLinks />
      </div>
      <div className="project__seperator" />
    </div>
  </div>
)

const ProjACG = () => (
  <div className="project--wrapper">
    <h4>A CLEAN GETAWAY WEBSITE</h4>
  </div>
)

const ProjectLinks = () => (
  <div className="buttons-flex">
    <a className="link" to="https://ajess33.github.io/dunder-mifflinipsum/">
      SEE IT LIVE
    </a>
    <a className="link" to="https://github.com/ajess33/dunder-mifflinipsum">
      SEE THE CODE
    </a>
  </div>
)

export default Portfolio

import React from 'react'
import { Link } from 'gatsby'
import '../css/globals.css'
import '../css/portfolio.css'
import { IoIosArrowDown } from 'react-icons/io'
import DunderScreenshot from '../images/dunder-screenshot.png'
import AcgScreenshot from '../images/acg-screenshot.png'
import PomoScreenshot from '../images/pomo-screenshot.png'

const Portfolio = () => (
  <div id="portfolio">
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
        <ProjAcg />
        <ProjPomo />
      </div>
      <div className="div__center">
        <Link to="#contact">
          <IoIosArrowDown className="bottom-icon" size={75} />
        </Link>
      </div>
    </div>
  </div>
)

const ProjIpsum = () => (
  <div className="project">
    <h4 className="project--title">DUNDER-MIFFLINIPSUM</h4>
    <div className="project--flex">
      <img src={DunderScreenshot} alt="Dunder-MifflinIpsum screenshot" />
      <div>
        <p className="project--desc">
          This is a lorem ipsum generator using quotes from the tv show, 'The
          Office'. I created the project while I was learning React.js. Because
          of this, I didn't spend a whole lot of time styling. This was the
          first project I had made using React and it helped solidify some of
          what I had learned in tutorials. One challenge I had was working with
          state and getting the data to the correct component. After much
          frustration I was able to solve the problem by rethinking the state.
          Despite the challenges, this was the project I began to fell in love
          with React!
        </p>
        <ProjectLinks
          live="https://ajess33.github.io/dunder-mifflinipsum/"
          code="https://github.com/ajess33/dunder-mifflinipsum"
        />
      </div>
    </div>
  </div>
)

const ProjAcg = () => (
  <div className="project">
    <h4 className="project--title">A CLEAN GETAWAY WEBSITE</h4>
    <div className="project--flex">
      <img src={AcgScreenshot} alt="A Clean Getaway website screenshot" />
      <div>
        <p className="project--desc">
          This was the first website I ever made for a client. This was also my
          first time I had used Gatsby.js, the static site generator and I have
          since used it in every project since. My biggest challenge was
          designing the website trying to make the content look pleasing to the
          eye. I spent a lot of time researching web design and I learned a
          bunch from it and am excited to learn more about design in the future.
        </p>
        <ProjectLinks
          live="https://acleangetawayllc.netlify.com/"
          code="https://github.com/ajess33/A-Clean-Getaway-Website"
        />
      </div>
    </div>
  </div>
)

const ProjPomo = () => (
  <div className="project">
    <h4 className="project--title">POMODORO CLOCK</h4>
    <div className="project--flex">
      <img src={PomoScreenshot} alt="Pomodoro clock screenshot" />
      <div>
        <p className="project--desc">
          I made this project as part of the FreeCodeCamp curriculum. It was the
          first project I had ever created when I began teaching myself and I
          learned so much, but most importantly, I learned how exciting it was
          to build something from the ground up. This was written in vanilla
          javascript so it really helped me nail some of the basics down.
        </p>
        <ProjectLinks
          live="https://ajess33.github.io/Pomodoro-Clock/"
          code="https://github.com/ajess33/Pomodoro-Clock"
        />
      </div>
    </div>
  </div>
)

const ProjectLinks = props => (
  <div className="buttons-flex">
    <a className="link" href={props.live}>
      SEE IT LIVE
    </a>
    <a className="link" href={props.code}>
      SEE THE CODE
    </a>
  </div>
)

export default Portfolio

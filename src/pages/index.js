import React from 'react'
import { Link } from 'gatsby'
// import Layout from '../components/layout'
// import Image from '../components/image'
import styled from 'styled-components'
import '../css/index.css'
import '../css/globals.css'
import Navbar from '../components/nav'
import AboutMe from '../components/aboutMe'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'
import Footer from '../components/footer'
import { IoIosArrowDown } from 'react-icons/io'
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi'

const Home = () => (
  <div>
    <Container>
      <Navbar />
      <div id="welcome" className="index--flex-wrapper">
        <Header>
          <H1>
            HELLO <br /> I'M <span className="white">AUSTIN JESS</span>
          </H1>
          <div className="title-small">
            <h2 className="title--desc">WEB DEVELOPER</h2>
            <div className="icon--wrapper">
              <a href="https://github.com/ajess33">
                <FiGithub size={35} />
              </a>
              <a href="https://twitter.com/ajessscript?lang=en">
                <FiTwitter size={35} />
              </a>
              <a href="https://www.linkedin.com/in/austin-jess-7933b5154/">
                <FiLinkedin size={35} />
              </a>
              <a>
                <FiMail size={35} />
              </a>
            </div>
          </div>
        </Header>
      </div>
      <CenterDiv>
        <IoIosArrowDown className="bottom-icon" size={75} />
      </CenterDiv>
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </Container>
  </div>
)

const CenterDiv = styled.div`
  text-align: center;
`

const Container = styled.div`
  background-color: #212121;
`

const H1 = styled.h1`
  font-size: 4.5rem;
  letter-spacing: 2px;
  line-height: 0.9;
  font-weight: 900;

  /* @media (max-width: 900px) {

  } */
`

const Header = styled.div`
  margin-top: 70px;
  color: #888;
  /* max-width: 655px; */
  /* margin: 180px auto 0 auto; */
  font-weight: bold;
`

export default Home

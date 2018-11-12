import React from 'react'
import { Link } from 'gatsby'
// import Layout from '../components/layout'
// import Image from '../components/image'
import styled from 'styled-components'
import '../css/index.css'
import Nav from '../components/nav'

const Home = () => (
  <Container>
    <Nav />
    <Title>
      HELLO <br /> I'M AUSTIN JESS <br />{' '}
      <span className="title--desc">WEB DEVELOPER</span>
    </Title>
  </Container>
)

const Container = styled.div`
  background-color: #212121;
  height: 100vh;
`

const Title = styled.h1`
  color: #888;
  font-size: 3rem;
  letter-spacing: 2px;
`

export default Home

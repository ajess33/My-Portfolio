import React from 'react'
import { Link } from 'gatsby'
// import Layout from '../components/layout'
// import Image from '../components/image'
import styled from 'styled-components'

const Home = () => (
  <Container>
    <Title>
      Hello <br /> I'm Austin Jess <br /> Web Developer
    </Title>
  </Container>
)

// injectGlobal`
//   @font-face {
//     font-family: 'montserrat';
//     src: url();
//   }}
// `

const Container = styled.div`
  background-color: #212121;
  height: 100vh;
`

const Title = styled.h1`
  color: #888;
`

export default Home

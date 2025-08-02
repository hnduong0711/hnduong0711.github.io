import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from './Intro'

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2, h3, h4, h5, h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
  padding: 2rem;
`

const Contact = styled.a`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`

const BLOG = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`

// const BLOG_MOBILE = styled(NavLink)`
//   color: ${props => props.theme.text};
//   position: absolute;
//   top: -120%;
//   right: calc(2.5rem + 2vw);
//   transform: translate(-50%, -50%);
//   text-decoration: none;
//   z-index: 1;
// `

const WORK = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`

// const WORK_MOBILE = styled(NavLink)`
//   color: ${props => props.theme.text};
//   position: absolute;
//   top: -120%;
//   left: calc(7rem + 2vw);
//   transform: translate(-50%, -50%);
//   text-decoration: none;
  // z-index: 1;
// `

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

    /* Show on tablet and mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 200px;
  }
`


const ABOUT = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const SKILLS = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`
const BLOG_MOBILE = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 15;
  display: none;

  /* Show on tablet and mobile (below 768px) */
  @media (max-width: 767px) {
    display: block;
  }
`

const WORK_MOBILE = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 15;
  display: none;

  /* Show on tablet and mobile (below 768px) */
  @media (max-width: 767px) {
    display: block;
  }
`

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />

        <BLOG to="/blog">
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', duration: 1.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </motion.h2>
        </BLOG>

        <WORK to="/work">
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', duration: 1.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Education
          </motion.h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about">
            <motion.h2
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1.5, delay: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1.5, delay: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills.
            </motion.h2>
          </SKILLS>
          {/* Add res */}
          <BLOG_MOBILE to="/blog">
            <motion.h2
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1.5, delay: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Projects
            </motion.h2>
          </BLOG_MOBILE>

          <WORK_MOBILE to="/work">
            <motion.h2
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1.5, delay: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Education
            </motion.h2>
          </WORK_MOBILE>
        </BottomBar>
      </Container>
      <Intro />
    </MainContainer>
  )
}

export default Main

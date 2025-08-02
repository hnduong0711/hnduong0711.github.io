import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Me from '../assets/Images/Duong.jpg'

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  background: ${props => props.theme.body};
  border: 2px solid ${props => props.theme.text};
  z-index: 10;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    width: 90vw;
    height: auto;
    flex-direction: column;
    padding: 1rem;
  }
`

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    width: 100%;
    min-height: 50%;
  }
`

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${props => props.theme.text};
  padding: 2rem;
  text-align: center;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    font-size: calc(0.8em + 1vw);
    padding: 1rem;
    h1 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    h6 {
      font-size: 0.9rem;
    }
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    height: auto;
    padding: 1rem;
  }
`

const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    max-width: 150px;
    height: auto;
    border-radius: 10px;
  }
`

const Intro = () => {
  return (
    <Box initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <SubBox>
        <Text>
          <div><h1>Huynh Nhut Duong</h1></div>
          <h3>Hi, I'm Developer</h3>
          <h6>I design and code simple yet beautiful websites.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <ImageContainer>
          <ProfilePic src={Me} alt="Profile Pic" />
        </ImageContainer>
      </SubBox>
    </Box>
  )
}

export default Intro
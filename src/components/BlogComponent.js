import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.a)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${props => props.theme.text};
  border: 2px solid ${props => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: 18rem;
    padding: 0.5rem;
  }
`;

const Image = styled.div`
  background-image: ${props => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${props => props.theme.body};
  }

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    height: 50%;
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${props => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${props => props.theme.body};
  }

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    font-size: 1rem;
    padding-top: 0.5rem;
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    padding: 0.3rem 0;
  }
`;

const Tag = styled.span`
  padding-right: 0.5rem;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Date = styled.span`
  padding: 0.5rem 0;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <Container variants={Item}>
      <Box target="_blank" href={link}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => (
            <Tag key={id}>#{t}</Tag>
          ))}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;
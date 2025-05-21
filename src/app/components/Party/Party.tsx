"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Styled Components for Party with background image
const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 5rem 2rem;
  background-image: url("/images/restaurant.jpg");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  color: #fff;
  font-family: "Georgia", serif;

  /* Overlay for readability */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-family: "Alex Brush", cursive;
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #fdf8f5;

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const PartyDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap-reverse;

  width: 100%;
  max-width: 60%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

const InfoBox = styled.div`
  flex: 1;
  min-width: 280px;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #fdf8f5;
  text-align: center;

  strong {
    display: block;
    margin: 1rem 0 0.5rem;
    font-size: 1.25rem;
    color: #ffecc9;
  }

  p {
    margin: 0.5rem 0;
  }

  a {
    color: #ffecc9;
    text-decoration: underline;
  }
`;

// Slider Styled Components
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 600px;
  margin: 2rem auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const SlideImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

// Slider component for Poza8 & Poza9
function ImageSlider({ images }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const index = ((page % images.length) + images.length) % images.length;
  const paginate = (dir) => setPage([page + dir, dir]);

  const variants = {
    enter: (d) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <SliderContainer>
      <AnimatePresence initial={false} custom={direction}>
        <SlideImage
          key={page}
          src={images[index]}
          alt={`Slide ${index + 1}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <ArrowButton onClick={() => paginate(-1)} style={{ left: "1rem" }}>
        <ChevronLeft size={24} />
      </ArrowButton>
      <ArrowButton onClick={() => paginate(1)} style={{ right: "1rem" }}>
        <ChevronRight size={24} />
      </ArrowButton>
    </SliderContainer>
  );
}

export default function Party() {
  return (
    <Section>
      <Container>
        <Title>Petrecerea</Title>
        <PartyDetails>
          <InfoBox>
            <p>Sărbătorim prin dans și voie bună la:</p>
            <strong>Secret Garden Dănești</strong>
            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Secret+Garden+D%C4%83ne%C8%99ti+DJ+184+A+61+437328"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dănești nr 61, DJ 184 A, 437328
              </a>
            </p>
            <strong>Ora 15:00</strong>
          </InfoBox>
        </PartyDetails>
        <ImageSlider images={["/images/poza8.jpg", "/images/poza9.jpg"]} />
      </Container>
    </Section>
  );
}

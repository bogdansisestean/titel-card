"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Styled Components
const Section = styled.section`
  padding: 5rem 2rem;
  width: 100%;
  background: #fdf8f5;
  color: #4b2e2e;
  font-family: "Georgia", serif;
`;

const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  font-family: "Alex Brush", cursive;
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #b38b59;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SlidersRow = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  height: 600px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const SlideImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  color: #fff;
  font-size: 1.125rem;
  line-height: 1.5;
  background: rgba(0, 0, 0, 0.4);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  max-height: 40%;
  overflow-y: auto;
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

// Slider component with its own state
function Slider({ images, text }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const idx = ((page % images.length) + images.length) % images.length;
  const paginate = (newDir) => setPage([page + newDir, newDir]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <SliderContainer>
      <AnimatePresence initial={false} custom={direction}>
        <SlideImage
          key={page}
          src={images[idx]}
          alt={`Slide ${idx + 1}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <OverlayText>{text}</OverlayText>
      <ArrowButton onClick={() => paginate(-1)} style={{ left: "1rem" }}>
        <ChevronLeft size={24} />
      </ArrowButton>
      <ArrowButton onClick={() => paginate(1)} style={{ right: "1rem" }}>
        <ChevronRight size={24} />
      </ArrowButton>
    </SliderContainer>
  );
}

// Data for each slider
const sliderData = [
  {
    images: ["/images/poza2.jpg", "/images/poza3.jpg"],
    text: `Ne-am cunoscut acum 20 de ani, tineri și neliniștiți, am legat o prietenie foarte frumoasă, dar viața ne-a purtat pe drumuri diferite și fiecare dintre noi a luat viața în piept cum a știut mai bine, devenind oamenii de azi!`,
  },
  {
    images: ["/images/poza4.jpg", "/images/poza5.jpg"],
    text: `Într-o seară oarecare, fiind amândoi la același concert, ne-am reîntâlnit și am petrecut timp de calitate împreună.`,
  },
  {
    images: ["/images/poza6.jpg", "/images/poza7.jpg"],
    text: `Cu trecerea timpului am ajuns să ne privim cu alți ochi, am descoperit unul în altul nu doar un prieten bun, ci și un partener pe care te poți sprijini și un om cu care să te completezi!`,
  },
];

export default function PovesteaNoastra() {
  return (
    <Section>
      <Container>
        <Title>Povestea noastră</Title>
        <SlidersRow>
          {sliderData.map((data, i) => (
            <Slider key={i} images={data.images} text={data.text} />
          ))}
        </SlidersRow>
      </Container>
    </Section>
  );
}

"use client";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeartWrapper = styled.div`
  width: 380px;
  height: 180px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }

  &:hover {
    animation: beat 0.6s infinite;
  }

  @keyframes beat {
    0%,
    100% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(0.95);
    }
    75% {
      transform: scale(1.05);
    }
  }
`;

const HeartImage = styled.img`
  width: 60%;
  height: auto;
`;

const Title = styled.h2`
  font-family: "Alex Brush", cursive;
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  max-width: 800px;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #333;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export default function IntroSection() {
  return (
    <Section>
      <HeartWrapper>
        <HeartImage src="/icons/heart2.png" alt="Heart" />
      </HeartWrapper>
      <Title>Dragi prieteni,</Title>
      <Text>
        Ne-am legat destinele și acum e timpul să dăm drumul la party! Vă
        invităm la o seară pe cinste, cu dansuri maramureșene, râsete cât
        cuprinde și voie bună. Promitem o petrecere plină de veselie și momente
        speciale, așa cum merită să fie sărbătorit un asemenea eveniment
        important din viața noastră.
      </Text>
    </Section>
  );
}

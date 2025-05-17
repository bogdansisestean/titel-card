"use client";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 2rem;
  background: #fdf8f5;
  color: #4b2e2e;
  font-family: "Georgia", serif;
`;

const Title = styled.h2`
  font-family: "Alex Brush", cursive;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #b38b59;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 3rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  flex: 1;
  font-size: 1.125rem;
  line-height: 1.8;
  max-width: 600px;
`;

const ImageRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const ImagePlaceholder = styled.div`
  width: 180px;
  height: 180px;
  background-color: #e5d7c6;
  border: 3px dashed #b38b59;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8a6744;
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

export default function PovesteaNoastra() {
  return (
    <Section>
      <Title>Povestea noastră</Title>

      <ContentBlock>
        <Text>
          Ne-am cunoscut acum 20 de ani, tineri și neliniștiți, am legat o
          prietenie foarte frumoasă, dar viața ne-a purtat pe drumuri diferite
          și fiecare dintre noi a luat viața în piept cum a știut mai bine,
          devenind oamenii de azi!
        </Text>
        <ImageRow>
          <ImagePlaceholder>Poza 1</ImagePlaceholder>
          <ImagePlaceholder>Poza 2</ImagePlaceholder>
          <ImagePlaceholder>Poza 3</ImagePlaceholder>
        </ImageRow>
      </ContentBlock>

      <ContentBlock>
        <Text>
          Într-o seară oarecare, fiind amândoi la același concert, ne-am
          reîntâlnit și am petrecut timp de calitate împreună.
        </Text>
        <ImageRow>
          <ImagePlaceholder>Poza 4</ImagePlaceholder>
          <ImagePlaceholder>Poza 5</ImagePlaceholder>
        </ImageRow>
      </ContentBlock>

      <ContentBlock>
        <Text>
          Cu trecerea timpului am ajuns să ne privim cu alți ochi, am descoperit
          unul în altul nu doar un prieten bun, ci și un partener pe care te
          poți sprijini și un om cu care să te completezi!
        </Text>
        <ImageRow>
          <ImagePlaceholder>Poza 6</ImagePlaceholder>
          <ImagePlaceholder>Poza 7</ImagePlaceholder>
        </ImageRow>
      </ContentBlock>
    </Section>
  );
}

"use client";
import React from "react";
import styled from "styled-components";

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
`;

const Title = styled.h2`
  font-family: "Alex Brush", cursive;
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #b38b59;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ImageRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.img`
  width: 180px;
  height: 250px;
  object-fit: cover;
  object-position: top center;
  border: 3px dashed #b38b59;
  border-radius: 12px;

  @media (max-width: 480px) {
    width: 120px;
    height: 180px;
  }
`;

/* New: Wider variant for bottom two photos */
const WideImage = styled(Image)`
  width: 460px;
  height: 360px;

  @media (max-width: 480px) {
    width: 240px;
    height: 150px;
  }
`;

export default function PovesteaNoastra() {
  return (
    <Section>
      <Container>
        <Title>Povestea noastră</Title>

        <ContentBlock>
          <Text>
            Ne-am cunoscut acum 20 de ani, tineri și neliniștiți, am legat o
            prietenie foarte frumoasă, dar viața ne-a purtat pe drumuri diferite
            și fiecare dintre noi a luat viața în piept cum a știut mai bine,
            devenind oamenii de azi!
          </Text>
          <ImageRow>
            <Image src="/images/poza2.jpg" alt="Poza 2" />
            <Image src="/images/poza3.jpg" alt="Poza 3" />
          </ImageRow>
        </ContentBlock>

        <ContentBlock>
          <Text>
            Într-o seară oarecare, fiind amândoi la același concert, ne-am
            reîntâlnit și am petrecut timp de calitate împreună.
          </Text>
          <ImageRow>
            <Image src="/images/poza4.jpg" alt="Poza 4" />
            <Image src="/images/poza5.jpg" alt="Poza 5" />
          </ImageRow>
        </ContentBlock>

        <ContentBlock>
          <Text>
            Cu trecerea timpului am ajuns să ne privim cu alți ochi, am
            descoperit unul în altul nu doar un prieten bun, ci și un partener
            pe care te poți sprijini și un om cu care să te completezi!
          </Text>
          <ImageRow>
            <Image src="/images/poza6.jpg" alt="Poza 6" />
            <Image src="/images/poza7.jpg" alt="Poza 7" />
          </ImageRow>
        </ContentBlock>

        {/* Bottom two photos, now wider */}
        <ContentBlock>
          <ImageRow>
            <WideImage src="/images/poza8.jpg" alt="Poza 8" />
            <WideImage src="/images/poza9.jpg" alt="Poza 9" />
          </ImageRow>
        </ContentBlock>
      </Container>
    </Section>
  );
}

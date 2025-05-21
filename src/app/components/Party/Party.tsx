"use client";
import React from "react";
import styled from "styled-components";

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
  text-align: center; /* Center all text */

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
      </Container>
    </Section>
  );
}

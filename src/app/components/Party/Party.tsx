"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Section = styled.section`
  background-color: #fffaf7;
  width: -webkit-fill-available;
  padding: 5rem 2rem;
  color: #5c3a1d;
  font-family: "Georgia", serif;
`;

const Title = styled.h2`
  font-family: "Alex Brush", cursive;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #b38b59;

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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  flex: 1;
  min-width: 280px;
  font-size: 1.125rem;
  line-height: 1.6;

  strong {
    display: block;
    margin: 1rem 0 0.5rem;
    font-size: 1.25rem;
    color: #7b4f2b;
  }

  p {
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export default function Party() {
  return (
    <Section>
      <Title>Petrecerea</Title>
      <PartyDetails>
        <Image
          src="/images/restaurant.jpg" // Replace with your image
          alt="Secret Garden Dănești"
          width={400}
          height={250}
          style={{
            borderRadius: "12px",
            objectFit: "cover",
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <InfoBox>
          <p>Sărbătorim prin dans și voie bună la:</p>
          <strong>Secret Garden Dănești</strong>
          <p>Dănești nr 61, DJ 184 A, 437328</p>
          <p>Ora 15:00</p>
        </InfoBox>
      </PartyDetails>
    </Section>
  );
}

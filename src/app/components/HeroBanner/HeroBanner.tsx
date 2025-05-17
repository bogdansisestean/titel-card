// components/HeroBanner/HeroBanner.tsx
"use client";
import React from "react";
import styled from "styled-components";

const BannerSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("/images/titel-noemi-banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.1); // Dark overlay with 10% opacity
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Title = styled.h1`
  font-family: "Alex Brush", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 6rem;
  color: white;
  margin: 0.5rem;

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export default function HeroBanner() {
  return (
    <BannerSection>
      <Title>Invitație</Title>
      <Title>Noemi & Titel</Title>
    </BannerSection>
  );
}

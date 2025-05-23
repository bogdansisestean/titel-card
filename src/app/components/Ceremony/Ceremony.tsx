"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

// Styled Components for Ceremony with background
const Section = styled.section`
  width: 100%;
  padding: 5rem 2rem;
  color: #fff;
  font-family: "Georgia", serif;
  background-image: url("/images/biserica.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  /* Overlay to darken background for text readability */
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
  margin-bottom: 2rem;
  color: #fdf8f5;

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: #f0e7e0;

  strong {
    display: block;
    font-weight: 700;
    font-size: 1.25rem;
    margin-top: 1.5rem;
    color: #ffecc9;
  }
`;

const NasiTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #ffecc9;
  font-weight: 700;
  text-align: center;
`;

const GuestList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const GuestCard = styled.li`
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  color: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.07);
  }
`;

const CeremonyDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ChurchText = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  text-align: center;

  strong {
    font-size: 1.5rem;
    color: #ffecc9;
    margin-bottom: 0.25rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 1.125rem;
    color: #fdf8f5;
  }
`;

export default function Ceremony() {
  return (
    <Section>
      <Container>
        <Title>Unde?</Title>

        <Paragraph>
          Ne unim destinele în fața lui Dumnezeu, înconjurați de cei dragi care
          ne-au fost alături în momentele importante din viața noastră.
        </Paragraph>

        <NasiTitle>Nași noștri:</NasiTitle>
        <GuestList>
          <GuestCard>Monika și Șerban Chisacof</GuestCard>
          <GuestCard>Mădălina și Valentin Tulics</GuestCard>
          <GuestCard>Natalia și Dennis Debreczeni</GuestCard>
          <GuestCard>Crina și Ionuț Pascu</GuestCard>
        </GuestList>

        <CeremonyDetails>
          <ChurchText>
            <strong>Catedrala Episcopală “Sfânta Treime”</strong>
            <p>Baia Mare</p>
            <strong>Ora 12:30</strong>
          </ChurchText>
        </CeremonyDetails>
      </Container>
    </Section>
  );
}

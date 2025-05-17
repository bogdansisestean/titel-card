"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 2rem;
  text-align: center;
  color: #5c3a1d;
  font-family: "Georgia", serif;
`;

const Title = styled.h2`
  font-family: "Alex Brush", cursive;
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #b38b59;

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;

  strong {
    display: block;
    font-weight: 700;
    font-size: 1.25rem;
    margin-top: 1.5rem;
    color: #7b4f2b;
  }
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
  background: #fff4ec;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  font-weight: 500;
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ChurchText = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  strong {
    font-size: 1.5rem;
    color: #7b4f2b;
    margin-bottom: 0.25rem;
  }

  p {
    margin: 0;
    font-size: 1.125rem;
  }
`;

export default function Ceremony() {
  return (
    <Section>
      <Title>Unde?</Title>

      <Paragraph>
        Ne unim destinele în fața lui Dumnezeu, înconjurați de cei dragi care
        ne-au fost alături în momentele importante din viața noastră.
      </Paragraph>

      <GuestList>
        <GuestCard>Monika și Serba Chisacof</GuestCard>
        <GuestCard>Mădălina și Valentin Tulics</GuestCard>
        <GuestCard>Natalia și Dennis Debreczeni</GuestCard>
        <GuestCard>Crina și Ionuț Pascu</GuestCard>
      </GuestList>

      <CeremonyDetails>
        <ChurchText>
          <strong>Catedrala Episcopală “Sfânta Treime”</strong>
          <p>Baia Mare</p>
          <p>Ora 12:30</p>
        </ChurchText>
        <Image
          src="/images/biserica.jpg"
          alt="Catedrala Episcopală Sfânta Treime"
          width={400}
          height={250}
          style={{
            borderRadius: "12px",
            objectFit: "cover",
            width: "100%",
            height: "auto",
            maxWidth: "400px",
          }}
        />
      </CeremonyDetails>
    </Section>
  );
}

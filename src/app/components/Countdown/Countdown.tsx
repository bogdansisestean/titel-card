"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  position: relative;
  background-image: url("/images/countdown.jpg");
  background-size: cover;
  background-position: center;
  padding: 6rem 1rem 4rem;
  text-align: center;
  color: white;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Subheading = styled.h3`
  font-family: "Georgia", serif;
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  font-family: "Alex Brush", cursive;
  font-size: 3.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const DateText = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
`;

const TimeNumber = styled.span`
  font-size: 3rem;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const TimeLabel = styled.span`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function SaveTheDateBanner() {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = "2025-07-20T12:30:00";
    const target = new Date(targetDate);

    if (isNaN(target.getTime())) {
      console.error(`Invalid target date: ${targetDate}`);
      return;
    }

    const updateCountdown = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Subheading>Save the Date</Subheading>
      <Heading>Noemi & Titel</Heading>
      <DateText>20 Iulie 2025 · Cluj-Napoca</DateText>
      <Timer>
        <TimeBox>
          <TimeNumber>{countdown.days}</TimeNumber>
          <TimeLabel>days</TimeLabel>
        </TimeBox>
        <TimeBox>
          <TimeNumber>{countdown.hours}</TimeNumber>
          <TimeLabel>hours</TimeLabel>
        </TimeBox>
        <TimeBox>
          <TimeNumber>{countdown.minutes}</TimeNumber>
          <TimeLabel>minutes</TimeLabel>
        </TimeBox>
        <TimeBox>
          <TimeNumber>{countdown.seconds}</TimeNumber>
          <TimeLabel>seconds</TimeLabel>
        </TimeBox>
      </Timer>
    </Wrapper>
  );
}

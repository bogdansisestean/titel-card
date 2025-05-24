"use client";
import GlobalStyle from "../../styles/GlobalStyle";
import React, { useEffect, useRef, useState } from "react";
import Countdown from "../Countdown/Countdown";
import Ceremony from "../Ceremony/Ceremony";
import Party from "../Party/Party";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";
import Footer from "../Footer/Footer";
import styled from "styled-components";
import HeroBanner from "../HeroBanner/HeroBanner";
import IntroSection from "../IntroSection/IntroSection";
import PovesteaNoastra from "../Story/PovesteaNoastra";

const Page = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Main = styled.main`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Attempt muted autoplay to satisfy browser policies
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true;
      audioRef.current.play().catch((e) => {
        console.warn("Muted autoplay failed:", e);
      });
    }
  }, []);

  // On first user interaction, unmute and play
  const handleUserInteraction = () => {
    if (!isPlaying && audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          console.log("Background music is playing");
        })
        .catch((e) => {
          console.warn("Playback failed on interaction:", e);
        });
    }
  };

  return (
    <Page onClick={handleUserInteraction}>
      <GlobalStyle />
      <Main>
        {/* Background music autoplay fallback */}
        <audio
          ref={audioRef}
          src="/audio/Scorpions-You_and_I.mp3"
          autoPlay
          loop
          playsInline
        />

        <HeroBanner />
        <IntroSection />
        <Countdown />
        <PovesteaNoastra />
        <Ceremony />
        <Party />
        <ConfirmationForm />
        <Footer />
      </Main>
    </Page>
  );
}

"use client";
import GlobalStyle from "../../styles/GlobalStyle";
import React from "react";
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
  //   max-width: 800px;
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
  return (
    <Page>
      <GlobalStyle />
      <Main>
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

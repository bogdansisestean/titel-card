"use client";
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #f7f1eb;
  padding: 3rem 1rem;
  text-align: center;
  font-family: "Georgia", serif;
  color: #5c3a1d;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.03);
  border-top: 2px solid #e6d5c3;
`;

const Names = styled.h2`
  font-family: "Alex Brush", cursive;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #b38b59;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const PhoneLine = styled.p`
  margin: 0;
  font-size: 1.125rem;

  a {
    color: #8a6744;
    text-decoration: none;
    font-weight: 600;
    margin: 0 0.75rem;
    transition: color 0.3s ease;

    &:hover {
      color: #b38b59;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Names>Noemi & Titel</Names>
      <PhoneLine>
        📞 <a href="tel:0747540859">0747 540 859</a>
        <a href="tel:0742212629">0742 212 629</a>
      </PhoneLine>
    </FooterWrapper>
  );
}

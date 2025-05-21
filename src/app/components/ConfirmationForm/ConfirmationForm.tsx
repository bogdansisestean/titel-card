"use client";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: white;
  width: 100%;
  padding: 5rem 2rem;
  color: #5c3a1d;
  font-family: "Georgia", serif;
  text-align: center;
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

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #d6bfae;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #fff;
  color: #5c3a1d;

  &:focus {
    outline: none;
    border-color: #b38b59;
    box-shadow: 0 0 0 2px rgba(179, 139, 89, 0.3);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid #d6bfae;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #fff;
  color: #5c3a1d;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #b38b59;
    box-shadow: 0 0 0 2px rgba(179, 139, 89, 0.3);
  }
`;

const Button = styled.button`
  background-color: #b38b59;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a07240;
  }
`;

export default function ConfirmationForm() {
  return (
    <Section>
      <Title>Veți fi alături de noi?</Title>
      <Form>
        <Input type="text" placeholder="Nume" required />
        <Input type="text" placeholder="Prenume" required />
        <Input type="number" placeholder="Nr persoane" required />
        <Input type="tel" placeholder="Nr telefon" required />
        <TextArea placeholder="Alte mențiuni (vegetarian, copii etc.)" />
        <Button type="submit">Trimite</Button>
      </Form>
    </Section>
  );
}

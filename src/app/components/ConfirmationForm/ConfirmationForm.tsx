"use client";
import React, { useState } from "react";
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

const ErrorMessage = styled.p`
  font-family: "Georgia", serif;
  color: #d32f2f;
  margin-top: 1rem;
  font-size: 1rem;
`;

const SuccessMessage = styled.p`
  font-family: "Georgia", serif;
  color: #388e3c;
  margin-top: 1rem;
  font-size: 1rem;
`;

export default function ConfirmationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const formData = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("Response status:", res.status, "ok?", res.ok);
      if (!res.ok) {
        const errText = await res.text();
        console.error("Error text:", errText);
        throw new Error(errText);
      }
      setStatus("sent");
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  }

  return (
    <Section>
      <Title>Veți fi alături de noi?</Title>
      <Form onSubmit={handleSubmit}>
        <Input name="nume" type="text" placeholder="Nume" required />
        <Input name="prenume" type="text" placeholder="Prenume" required />
        <Input
          name="nrPersoane"
          type="number"
          placeholder="Nr persoane"
          required
        />
        <Input name="telefon" type="tel" placeholder="Nr telefon" required />
        <TextArea
          name="mentions"
          placeholder="Alte mențiuni (vegetarian, copii etc.)"
        />
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending"
            ? "Se trimite…"
            : status === "sent"
            ? "Trimis!"
            : "Trimite"}
        </Button>
        {status === "error" && (
          <ErrorMessage>A apărut o eroare. Încearcă din nou.</ErrorMessage>
        )}
        {status === "sent" && (
          <SuccessMessage>
            Mulțumim! Răspunsul tău a fost trimis cu succes.
          </SuccessMessage>
        )}
      </Form>
    </Section>
  );
}

import React from "react";
import styled from "styled-components";
const Section = styled.section`...`;
const Form = styled.form`...`;
const Input = styled.input`...`;
const TextArea = styled.textarea`...`;
const Button = styled.button`...`;

export default function ConfirmationForm() {
  return (
    <Section>
      <h2>Veți fi alături de noi?</h2>
      <Form>
        <Input type="text" placeholder="Nume" required />
        <Input type="number" placeholder="Nr persoane" required />
        <Input type="tel" placeholder="Nr telefon" required />
        <TextArea placeholder="Alte mențiuni" />
        <Button type="submit">Trimite</Button>
      </Form>
    </Section>
  );
}

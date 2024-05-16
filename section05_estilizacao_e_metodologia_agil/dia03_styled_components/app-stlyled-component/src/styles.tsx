// src/styles.tsx

import styled from "styled-components";

// utilize styled.{tag que deve ser renderizada} para escolher qual elemento HTML você quer renderizar
export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    background-color: #022c16;
    color:#ffffff;
    margin-bottom: 3em;
  `;

// adicione os estilos CSS entre as crases ``
export const Container = styled.div`
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
  `;

type TitleProps = {
  color: string;
};

/* Lembre-se de sempre adicionar ${} para ler as props. */
export const Title = styled.h1<TitleProps>`
    color: ${props => props.color};
    font-size: 2rem;
    text-align: center;
  `;

// src/styles.tsx
export const TTitle = styled.h1`
    border: 2px solid ${props => props.theme.borderColor};
    color: ${props => props.theme.textColor};
    margin: 5px auto;
    padding: 10px 20px;
  `;
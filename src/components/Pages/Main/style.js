import { styled } from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img `
  width: 130px;
`;

export const Title = styled.h1 `
margin-top: .5rem;
  font-size: 2.2rem;
`;

export const Form = styled.form `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 583px;
`;

export const Input = styled.input `
  background: rgba(0, 0, 0, 0.8);
  color: aliceblue;
  width: 100%;
  height: 64px;
  border: none;
  border-radius: 4px;
  font-size: 24px;
  margin-top: 1rem;
  margin-right: 24px;
  padding: 0 24px;

  &::placeholder {
    color: #323232;
  }
`;

export const Button = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 80px;
  height: 64px;
  margin-top: 1rem;
  border-radius: 4px;
  border: 1px solid aliceblue;
  color: aliceblue;
  transition: background 0.3s;

  &:hover {
    cursor: pointer;
    background: #2d2d2d;
  }
`;

export const Footer = styled.footer`
  width: 50%;
  padding-top: 1rem;
  border-top: 1px solid aliceblue;
  margin: 10rem auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
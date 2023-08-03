import { styled } from "styled-components";

export const Title = styled.h1`
  margin-left: 2rem;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.2rem;
  margin: 1rem auto;
  padding-right: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto auto;
    gap: 0.8rem;
    padding: 0 1rem;
  }
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #303030;
  color: ${(props) => props.color || 'aliceblue'};
  width: 100%;
  min-height: 2rem;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.3s, transform 0.3s;
  padding: 0 1rem;
  
  &:hover,
  &.selected {
    cursor: pointer;
    background: ${(props) => props.color || '#404040'};
    color: aliceblue;
  }

  @media screen and (max-width: 768px) {
    border-radius: 20px;
    min-height: 3rem;
     &:hover,
     &.selected {
      transform: translateX(0) scale(1.02);
     }
  }
`;

export const Cleaner = styled.button`
  background: transparent;
  color: aliceblue;
  border: none;
  text-align: left;
  padding: 1rem;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5)
  }

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;
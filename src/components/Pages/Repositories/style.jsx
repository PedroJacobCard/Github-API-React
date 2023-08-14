import { styled } from "styled-components";

export const Loading = styled.div`
  background-image: linear-gradient(to top, #303030, #404040);
  color: aliceblue;
  display:flex;
  flex-direction: column;
  padding-top: 1rem;
  min-height: 100vh;
  overflow: hidden;
`;

export const LoadingProfileTop = styled.div`
  color: aliceblue;
  display:grid;
  grid-template-columns: repeat(2, 40%);
  grid-template-rows: 90px;
  place-items: center;
  
    @media only screen and (max-width: 768px){
      grid-template-columns: 10rem 10rem;
    }

    @media only screen and (min-width: 1024px){
      grid-template-columns: auto;
      grid-template-rows: 20rem 2rem;
      margin-left: 2rem;
      place-items: start;
    }
  `;

export const LoadingProfileMidle = styled.div`
  color: aliceblue;
  display:grid;
  grid-template-columns: repeat(1, 40%);
  grid-template-rows: 50px 50px;
  place-items: start;
  margin-top: 4rem;
  margin-left: 2rem;
  `;

export const LoadingProfileBottom = styled.div`
  color: aliceblue;
  display:grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 50px 50px;
  place-items: center;
  margin-top: 5rem;
  `;

export const LoadingPict = styled.div`
  background: linear-gradient(to right, #606060, #404040, #606060);
  height: 6rem;
  width: 6rem;
  background-size: 200% 100%;
  animation: animateGradient 2s linear infinite;  
  margin-left: 0rem;
  border-radius: 50%;

  @media only screen and (min-width: 1024px){
    margin-right: 0rem;
    height: 15rem;
    width: 15rem;
  }

  @keyframes animateGradient {
    0% {
      background-position: 200% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const LoadingText1 = styled.div`
  background: linear-gradient(to right, #606060, #404040, #606060);
  height: 10px;
  width: 10rem;
  background-size: 200% 100%;
  animation: animateGradient 2s linear infinite;

  @keyframes animateGradient {
    0% {
      background-position: 200% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const LoadingText2 = styled.div`
  background: linear-gradient(to right, #606060, #404040, #606060);
  height: 10px;
  width: 15rem;
  background-size: 200% 100%;
  animation: animateGradient 2s linear infinite;

  @keyframes animateGradient {
    0% {
      background-position: 200% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const LoadingText3 = styled.div`
  background: linear-gradient(to right, #606060, #404040, #606060);
  height: 10px;
  width: 20rem;
  background-size: 200% 100%;
  animation: animateGradient 2s linear infinite;

  @keyframes animateGradient {
    0% {
      background-position: 200% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Container = styled.main `
  display: flex;
  min-height: 100vh;
  
  @media screen and (max-width: 768px){
    flex-direction: column;
  }
  `;

export const Sidebar = styled.aside `
  background: #202020;
  color: aliceblue;
  min-width: 8rem;
  min-height: 100vh;
  overflow-y: hidden;
  `;

export const Main = styled.section `
  background: linear-gradient(to top, #303030, #404040);
  color: aliceblue;
  width: 100%;
  min-height: 100vh;
  overflow-y: hidden;
  padding: 40px;

  @media screen and (max-width: 768px){
    height: 100%;
  }
  @media screen and (max-width: 425px){
    padding: 40px 20px;
  }
`;
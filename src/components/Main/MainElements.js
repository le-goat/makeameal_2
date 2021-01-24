import styled from "styled-components";
import KB2 from "../../Images/KB2.jfif";

export const MainContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${KB2});
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
`;

export const MainContent = styled.div`
  height: calc(100vh-80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const MainItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const MainH1 = styled.h1`
  font-size: clamp(1rem, 3vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px yellow;
  letter-spacing: 3px;
`;

export const MainP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;
import React from "react";
import Navbar from "../Navbar";
import {
  MainContainer,
  MainContent,
  MainItems,
  MainH1,
  MainP
} from "./MainElements";

const Main = () => {
  return (
    <MainContainer>
      <Navbar />
      <MainContent>
        <MainItems>
          <MainH1>
            CooK from home with the ingredients you already have in your Kitchen
          </MainH1>
          <MainP>Right now</MainP>
        </MainItems>
      </MainContent>
    </MainContainer>
  );
};

export default Main;

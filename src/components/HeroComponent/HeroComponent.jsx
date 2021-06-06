/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import Slider from "../Slider/Slider";
import { Container, InfoWrapper, Info, Title, Button, Wrapper } from "./Style";
import data from "../Slider/data";

const HeroComponent = () => {
  return (
    <>
      <Container bg_url={data[0].bg_url}>
        <Wrapper>
          <InfoWrapper>
            <Title>{data[0].name}</Title>
            <Info>{data[0].description}</Info>
            <Button>View</Button>
          </InfoWrapper>
          <Slider />
        </Wrapper>
      </Container>
    </>
  );
};

export default HeroComponent;

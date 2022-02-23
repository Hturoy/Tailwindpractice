import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: ${(props) => (props.tall ? "400px" : "40px")};
  width: ${(props) => (props.wide ? "400px" : "40px")};
  background-color: ${(props) => (props.primary ? "red" : "green")};
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  height: 300px;
  width: 300px;
  background-color: coral;
`;

const Headline = styled.h1`
  color: ${(props) => (props.main ? "blue" : "yellow")};
`;

export const Card = () => {
  return (
    <>
      <Container primary tall wide>
        <h1>sdhfsh</h1>
      </Container>

      <FlexDiv>
        <Headline main>Hey!</Headline>
        <Headline main>Hey!</Headline>
        <Headline main>Hey!</Headline>
      </FlexDiv>
    </>
  );
};

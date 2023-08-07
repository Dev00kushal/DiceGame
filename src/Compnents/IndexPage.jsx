import React from "react";
import "../index.css";
import { styled } from "styled-components";
const IndexPage = ({NextPage}) => {
  return (
    <Wrapper>
      <img src="public/dices 1.png" alt="Dices_Home_png" />
      <Container>
        <H1>DICE GAME</H1>
        <Button onClick={NextPage}>Play Now</Button>
      </Container>
    </Wrapper>
  );
};

export default IndexPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:120px ;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
`;

const H1 = styled.h1`
    color: #000;
    font-family: Poppins;
    font-size: 96px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const Button = styled.button`
    display: flex;
    width: 220px;
    padding: 10px 18px;
    flex-direction: column;
    font-weight: 600;
    color: #FFF;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 10px;
    border-radius: 5px;
    background: #000;
    &:hover{
        background-color: white;
        border-color: 1px solid black;
        color: black;
        transition: 0.25s background ease-in;
    }
`

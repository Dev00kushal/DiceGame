import React from "react";
import "../index.css";
import { styled } from "styled-components";
function GamePlay({ScoreValue}) {
  return (
    <>
        <FirstContainer>
          <h1>{ScoreValue}</h1>
          <p>Total Score</p>
        </FirstContainer>
      
    </>
  );
}

export default GamePlay;

const FirstContainer = styled.div`
h1{
  font-size: 100px;
}
p{
  color: #000;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

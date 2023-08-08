import React, { useState } from "react";
import { styled } from "styled-components";
export default function RollDice({ value, SetValue,RoleDice,RandomValue }) {
  return (
    <>
      <DiceContainer>
        <img
          onClick={RoleDice}
          src={`src/Images/dice_${value}.png`}
          alt="Dices"
        />
        <h1>Click on Dice to roll</h1>
      </DiceContainer>
    </>
  );
}
const DiceContainer = styled.div`
  h1 {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  img {
    cursor: pointer;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

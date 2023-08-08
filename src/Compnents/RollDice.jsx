import React, { useState } from "react";
import { styled } from "styled-components";
export default function RollDice() {
  const [value, SetValue] = useState(1);
  const RandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };  
  const RoleDice = () => {
    const randomNum = RandomValue(1, 6);
    SetValue((prev) => randomNum);
  };
  return (
    <>
      <DiceContainer>
        <img onClick={RoleDice} src={`src/Images/dice_${value}.png`} alt="Dices" />
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

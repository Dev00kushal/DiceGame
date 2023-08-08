import React, { useState } from "react";
import TotalScore from "./TotalScore.jsx";
import InputBoxes from "./InputBoxes.jsx";
import { styled } from "styled-components";
import RollDice from "./RollDice.jsx";
const SecondPage = () => {
  const [number, Setnumber] = useState();
  const [value, SetValue] = useState(1);
  const [score, Setscore] = useState(0);
  const [error, Seterror] = useState("");
  const RandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const RoleDice = () => {
    if (!score) {
      Seterror("You have not selected any number");
      return;
    }
    const randomNum = RandomValue(1, 6);
    SetValue((prev) => randomNum);
    if (score == randomNum) {
      Setscore((prev) => prev + randomNum);
    } else {
      Setscore((prev) => prev - randomNum);
    }
    Setnumber(undefined);
  };
  return (
    <>
      <Sp_wrapper>
        <TotalScore ScoreValue={score} />
        <InputBoxes
          SetError={Seterror}
          error={error}
          number={number}
          Setnumber={Setnumber}
        />
      </Sp_wrapper>
      <RollDice
        RandomValue={RandomValue}
        RoleDice={RoleDice}
        value={value}
        SetValue={SetValue}
      />
    </>
  );
};

const Sp_wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export default SecondPage;

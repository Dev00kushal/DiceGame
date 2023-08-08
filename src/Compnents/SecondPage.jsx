import React from 'react'
import TotalScore  from './TotalScore.jsx'
import InputBoxes  from './InputBoxes.jsx'
import { styled } from "styled-components";
import RollDice from './RollDice.jsx';
const SecondPage = () => {
  return (
    <>
    <Sp_wrapper>
      <TotalScore/>
      <InputBoxes/>
    </Sp_wrapper>
    <RollDice/>
    </>
  )
}

const Sp_wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`
export default SecondPage
import React, { useState } from "react";
import "../index.css";
import { styled } from "styled-components";
export default function InputBoxes({number,Setnumber,error,SetError}) {
  const arr = [1, 2, 3, 4, 5, 6];
  const ErrorHandler = (el)=>{
      Setnumber(el)
    SetError("")
  }
  return (
    <div>
      <InputBox>
         <p style={{color:"red"}}>{error}</p>
        <SecondContainer>
          {arr.map((el, index) => {
            return (
              <Box
                ischoosed={el === number}
                onClick={ () => ErrorHandler(el)}
                key={index}
              >
                {el}
              </Box>
            );
          })}
        </SecondContainer>
      <h1>Select Number</h1>
      </InputBox>
    </div>
  );
}
const SecondContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;
const InputBox = styled.div`
h1{
  color: #000;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
display: flex;
margin-top: 20px;
  align-items: flex-end;
  flex-direction: column;
  gap: 30px;
`;
const Box = styled.div`
  display: flex;
  width: 72px;
  height: 72px;
  padding: 18px 0px;
  font-family: 500;
  border: 1px solid #000;
  background-color: ${(props)=>(props.ischoosed ? "black":"white")};
  color: ${(props)=>(props.ischoosed && "white")};
  justify-content: center;
  align-items: center;
  &:hover{
    cursor: pointer;
  }
`;


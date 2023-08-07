import React, { useState } from "react";
import "../index.css";
import { styled } from "styled-components";
export default function InputBoxes({isChoosed}) {
  const [number, Setnumber] = useState();
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <InputBox>
        <SecondContainer>
          {arr.map((el, index) => {
            return (
              <Box isChoosed={el==Setnumber} onClick={() => Setnumber(el)} key={index}>
                {el}
              </Box>
            );
          })}
        </SecondContainer>
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
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 30px;
`;
const Box = styled.div`
  display: flex;
  width: 72px;
  height: 72px;
  padding: 18px 0px;
  border: 1px solid #000;
  background: #fff;
  justify-content: center;
  align-items: center;
  background-color:${isChoosed && "black"}`;

import { React, useState } from "react";
import IndexPage from "./Compnents/IndexPage";
import SecondPage from "./Compnents/SecondPage";
export default function App() {
  const [GameStarted, SetGameStarted] = useState(true);
  const GameStartHandler = () => {
    SetGameStarted((game) => !game);
  };

  return (
    <>
      {GameStarted ? <SecondPage /> : <IndexPage NextPage={GameStartHandler} />}
    </>
  );
}

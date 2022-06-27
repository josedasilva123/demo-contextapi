import React, { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext";

const Counter = () => {
  //Importação dos itens exportados no contexto por meio de
  const { counter, incrementar, decrementar } = useContext(CounterContext);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => incrementar()}>+</button>
      <button onClick={() => decrementar()}>-</button>
    </>
  );
};

export default Counter;

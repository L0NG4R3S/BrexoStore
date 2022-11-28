import React from "react";
import * as C from "./styles";

const Button = ({ Text, onClick, Type = "button", color = null, style }) => {
  return (
    <C.Button style={style} type={Type} onClick={onClick} color={color ? color : "#046ee5"}>
      {Text}
    </C.Button>
  );
};

export default Button;

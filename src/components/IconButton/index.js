import React from "react";
import * as C from "./styles";

const IconButton = ({ Text, onClick, Type = "button", color = null, style, icon }) => {
  return (
    <C.Button style={style} type={Type} onClick={onClick} color={color ? color : "#046ee5"}>
      {Text || icon}
    </C.Button>
  );
};

export default IconButton;

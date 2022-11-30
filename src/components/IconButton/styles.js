import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: ${({color}) => color ? color : "#046ee5"};
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  margin: 10px
`;

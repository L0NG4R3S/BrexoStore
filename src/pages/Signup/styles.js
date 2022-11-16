import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  padding-bottom: 100px;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: row;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 750px;
  padding: 50px;
  border-radius: 5px;
`;

export const Column = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  padding: 30px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-color: #ACFCE9;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const NavBar = styled.div`
  display: flex;
  gap: 10px;
  height: 100px;
  box-shadow: 0 1px 2px #0003;
  background-color: #82E0AA;
  width: 100%;
  align-items: center;
  flex-direction: row;
`;

export const NavBeggining = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  flex-direction: row;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

export const LabelSignup = styled.p`
  font-size: 19px;
  color: white;
  padding: 0px 30px;
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
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ACFCE9;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
`;

export const BoldLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

export const Title = styled.label`
  font-size: 22px;
  font-weight: bold;
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

export const ListContent = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  padding: 50px;
  min-height: 100vh;
  border-radius: 5px;
  align-items: center;
`;

export const ProductButtonsRow = styled.div`
  flex-direction: row;
  width: 100%;
  padding: 10px 0px;
  bottom: 0;
  justify-content: space-evenly;
`;

export const ProductView = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: #AFFFA6;
  padding-top: 50px;
  border-radius: 5px;
`;

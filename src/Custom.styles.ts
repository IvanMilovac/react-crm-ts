import styled from "styled-components";
import bgLogin from "./assets/bg-login.jpg";
import Card from "@mui/material/Card";

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background: radial-gradient(#ffffff7f, #0000007f), url(${bgLogin});
  background-size: cover;
  background-repeat: no-repeat;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LandingCard = styled(Card)`
  width: 90%;
  max-width: 750px;
  min-height: 500px;
`;

export const ImageCustom = styled.img`
  width: 100%;
`;

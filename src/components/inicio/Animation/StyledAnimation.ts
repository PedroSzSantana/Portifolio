import styled from "styled-components";

interface Props {
    Conteiner: "up" | "bottom";
  }
  export const AnimationGif = styled.div<Props>`
    width: 100%;
    border-bottom: solid 1px rgb(39, 39, 39);
    overflow: hidden;
    position: absolute;
    height: 70px;
    margin-left: ${({ Conteiner }) => (Conteiner === "up" ? "20px" : "0px")};
    margin-top: ${({ Conteiner }) => (Conteiner === "up" ? "20vh" : "70vh")};
    transform: ${({ Conteiner }) =>
      Conteiner === "up" ? "rotateZ(15deg);" : "rotateZ(-13.5deg);"};
    img {
      position: absolute;
      width: 80px;
      animation: ${({ Conteiner }) =>
        Conteiner === "up"
          ? "movimentBNC 15s infinite;"
          : "movimentBNC2 15s infinite;"};
      transform: ${({ Conteiner }) =>
        Conteiner === "bottom" ? "rotateY(180deg)" : ""};
    }
    @keyframes movimentBNC {
      0% {
        margin-left: -50px;
      }
      100% {
        margin-left: 200%;
      }
    }
    @keyframes movimentBNC2 {
      0% {
        margin-left: 200%;
      }
      100% {
        margin-left: -50px;
      }
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
  `;
  
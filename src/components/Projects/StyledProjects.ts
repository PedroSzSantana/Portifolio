import styled from "styled-components";

export const StyleSectionProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: left;
  background: linear-gradient(#383838, #383838);
  overflow: hidden;
  a {
    padding: 10px 20px !important;
  }
  div {
    display: flex;
    gap: 15px;
    overflow: hidden;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      border: solid 6px rgb(105, 102, 102);
      border-radius: 10px;
      width: 200px;
      height: 200px;
      background-color: darkgrey;

      P {
        color: #ffff;
        text-align: center;
        width: 100%;
        background-color: rgb(105, 102, 102);
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      div {
        width: 150px;
      }
    }
  }
`;

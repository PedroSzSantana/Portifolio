import styled from "styled-components";

export const StyledCertificates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(#383838, #383838);
  div:nth-child(1){
    width: 730px;

    @media screen and (max-width: 700px){
      width: 350px;
    }
  }
  img {
    width: 350px;
    height: 250px;
    border-radius: 30px;
    cursor: pointer;
    :hover {
      transform: scale(1.05);
      transition: 0.5s;
    }
  }
`;

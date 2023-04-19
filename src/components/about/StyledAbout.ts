import styled from "styled-components";

export const StyleAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: left;
  background: linear-gradient(#535353, #353535);

  article {
    width: 50%;
    color: #ffff;
    font-size: 22px;
    font-weight: 600;
  }
  @media screen and (max-width: 500px) {
    article {
      padding-top: 80px;
      width: 85%;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

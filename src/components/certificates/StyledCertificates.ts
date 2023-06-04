import styled from 'styled-components'

export const StyledCertificates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(#383838, #383838);
  overflow-x: hidden;

  div:nth-child(1) {
    width: 820px;
    @media screen and (max-width: 800px) {
      width: 400px;
    }
    @media screen and (max-width: 400px) {
      width: 250px;
    }
  }
  img {
    width: 400px;
    height: 250px;
    border-radius: 30px;
    cursor: pointer;
    :hover {
      transform: scale(1.05);
      transition: 0.5s;
    }
    @media screen and (max-width: 400px) {
      width: 250px;
    }
  }
`

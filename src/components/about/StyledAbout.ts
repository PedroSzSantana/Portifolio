import styled from 'styled-components'

export const StyleAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: left;
  overflow-x: hidden;
  background: linear-gradient(#535353, #353535);

  article {
    cursor: default;
    width: 50%;
    color: #ffff;
    font-size: 20px;
    font-weight: 500;
  }
  @media screen and (max-width: 700px) {
    article {
      padding-top: 20px;
      width: 85%;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 400px) {
    article {
      padding-top: 20px;
      width: 85%;
      font-size: 12px;
    }
  }
`

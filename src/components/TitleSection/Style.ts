import styled from 'styled-components'

export const StyleTitleSection = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: default;
  font-size: 70px;
  color: #ffff;
  overflow: hidden;
  margin-bottom: 20px;
  :after {
    content: ' ';
    display: block;
    background-color: #2e2828;
    border-radius: 20px;
    height: 6px;
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    font-size: 60px;
  }
  @media screen and (max-width: 400px) {
    font-size: 40px;
  }
`

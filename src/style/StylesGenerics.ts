import styled from 'styled-components'

export const TitleSection = styled.h1`
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 70px;
  justify-content: center;
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
interface ButtonProps {
  btnType: '1' | '2'
}
export const ButtonGeneric = styled.a<ButtonProps>`
  text-align: center;
  background-color: ${({ btnType }) =>
    btnType === '1' ? 'darkgray' : 'rgb(73, 73, 73)'};
  color: #ffff;
  width: ${({ btnType }) => (btnType === '1' ? '340px' : '170px')};
  text-decoration: none;
  padding: ${({ btnType }) => (btnType === '1' ? '10px 120px' : '5px 30px')};
  border-radius: 20px;
  margin-top: 20px;

  :hover {
    background-color: rgb(104, 104, 104);
  }
  @media screen and (max-width: 500px) {
    width: ${({ btnType }) => (btnType === '1' ? '200px' : '100px !important')};
    padding: ${({ btnType }) => (btnType === '1' ? '10px 60px' : '10px 30px')};
    text-align: center;
    ${({ btnType }) => btnType !== '1' && 'width: 50px;'}
  }
`
export const ModelSections = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: left;
`

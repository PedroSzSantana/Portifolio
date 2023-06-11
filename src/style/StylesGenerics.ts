import styled from 'styled-components'

interface ButtonProps {
  btnType: '1' | '2'
}
export const ButtonGeneric = styled.a<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
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
    width: ${({ btnType }) => (btnType === '1' ? '270px' : '125px')};
    padding: ${({ btnType }) => (btnType === '1' ? '10px 60px' : '10px 30px')};
    height: ${({ btnType }) => (btnType === '1' ? '30px' : null)};
    text-align: center;
  }
`
export const ModelSections = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

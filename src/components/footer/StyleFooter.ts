import styled from 'styled-components'
const flex = ['display:flex;']
export const StyleFooter = styled.footer`
  height: 70px;
  ${flex}
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(#383838, #2c2b2b);

  a {
    display: flex;
    color: #ffff;
    gap: 5px;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    :hover {
      transform: translateY(-10px);
      transition: all ease-in-out 0.4s;
    }
  }
`

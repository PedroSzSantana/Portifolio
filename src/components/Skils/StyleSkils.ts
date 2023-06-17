import styled, { keyframes } from 'styled-components'
import { ModelSections } from '../../style/StylesGenerics'

export const StyleHability = styled(ModelSections)`
  height: 100vh;
  text-align: left;
  background: linear-gradient(#353535, #383838);
  overflow-x: hidden;
`
export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  color: #ffff;
  flex-wrap: wrap;
  cursor: default;
`
export const CardSkils = styled.div`
  background: rgb(105, 102, 102);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: solid 2px black;
  border-radius: 20px;
  width: 500px;
  height: 300px;

  h1 {
    margin-bottom: 10px;
    text-align: center;
  }
  @media screen and (max-width: 700px) {
    width: 400px;
  }
  @media screen and (max-width: 490px) {
    justify-content: center;
    width: 300px;
  }
  @media screen and (max-width: 400px) {
    height: 200px;
  }
`
export const ContainerSkilsCard = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (max-width: 700px) {
    gap: 40px;
  }
  @media screen and (max-width: 490px) {
    div {
      gap: 0px;
    }
  }
`

const row = keyframes`
  from{
    left: -150%;
  }to{
    left: 10%;
  }
  
  `
interface Props {
  background: string
}
export const SpanSkils = styled.span<Props>`
  display: flex;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  gap: 5px;

  svg {
    z-index: 2;
  }
  p {
    font-weight: 600;
    font-size: 20px;
    z-index: 2;
  }
  :hover {
    color: #000;
    transition: 0.8s;
  }
  ::before {
    content: '';
    position: absolute;
    background-color: ${(props) => props.background};
    width: 100%;
    height: 300px;
    transform: rotate(50deg);
    opacity: 0;
    z-index: 0;
  }

  :hover::before {
    opacity: 0.5;
    animation: ${row} 0.8s;
  }
  @media screen and (max-width: 490px) {
    p {
      font-weight: 500;
      font-size: 16px;
    }
    svg {
      width: 15px;
    }
  }
`

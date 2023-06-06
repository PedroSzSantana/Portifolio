import styled from 'styled-components'
import { ModelSections } from '../../style/StylesGenerics'

export const StyleHability = styled(ModelSections)`
  gap: 20px;
  height: 100vh;
  text-align: left;
  background: linear-gradient(#353535, #383838);
  overflow-x: hidden;
`
export const CardSkils = styled.div`
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
`
export const ContainerHability = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  color: #ffff;
  flex-wrap: wrap;
  cursor: default;
`
export const ContainerSkils = styled.div`
  background: rgb(105, 102, 102);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: solid 2px black;
  border-radius: 20px;
  width: 500px;
  height: 300px;
  :hover {
    border: solid 2px #ffff;
  }
  h1 {
    margin-bottom: 10px;
    text-align: center;
  }

  span {
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
    :hover {
      color: rgb(186, 186, 186);
    }
  }
  @media screen and (max-width: 700px) {
    width: 400px;
  }
  @media screen and (max-width: 490px) {
    justify-content: center;
    width: 300px;
    span {
      font-size: 16px;
      img {
        width: 15px;
      }
    }
  }
  @media screen and (max-width: 400px) {
    height: 200px;
  }
`

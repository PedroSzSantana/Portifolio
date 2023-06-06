import styled from 'styled-components'
import { ModelSections } from '../../style/StylesGenerics'

export const StyleSectionProjects = styled(ModelSections)`
  text-align: left;
  background: linear-gradient(#383838, #383838);
  overflow: hidden;
  a {
    padding: 10px 20px !important;
  }
  .conteinerProjects {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    overflow: hidden;
    flex-wrap: wrap;
  }
`
export const CardProject = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 6px rgb(105, 102, 102);
  border-radius: 10px;
  width: 200px;
  height: 200px;
  background-color: darkgrey;

  P {
    color: #ffff;
    text-align: center;
    width: 100%;
    background-color: rgb(105, 102, 102);
  }

  @media screen and (max-width: 700px) {
    width: 150px;
  }
  @media screen and (max-width: 400px) {
    width: 120px;
    height: 120px;
  }
`

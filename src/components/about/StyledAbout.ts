import styled from 'styled-components'
import { ModelSections } from '../../style/StylesGenerics'
import { Fade } from 'react-awesome-reveal'

export const StyleAbout = styled(ModelSections)`
  background: linear-gradient(#535353, #353535);
`
export const ContainerArticle = styled(Fade)`
  overflow-y: hidden;
  width: 50%;
  @media screen and (max-width: 730px) {
    padding-top: 5px;
    width: 85%;
  }
`
export const Paragraph = styled.p`
  text-align: start;
  cursor: default;
  color: #ffff;
  font-size: 20px;
  font-weight: 500;
  @media screen and (max-width: 730px) {
    font-size: 18px;
  }
  @media screen and (max-width: 700px) {
    font-size: 14px;
    font-weight: 500;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`

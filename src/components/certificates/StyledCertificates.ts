import styled from 'styled-components'
import { ModelSections } from '../../style/StylesGenerics'
import { Fade } from 'react-awesome-reveal'

export const StyledCertificates = styled(ModelSections)`
  background: linear-gradient(#383838, #383838);
`
export const ContainerSlider = styled(Fade)`
  width: 820px;
  @media screen and (max-width: 800px) {
    width: 400px;
  }
  @media screen and (max-width: 400px) {
    width: 250px;
  }
`
export const ImageSlider = styled.img`
  width: 400px;
  height: 250px;
  border-radius: 30px;
  cursor: pointer;
  :hover {
    transform: scale(1.04);
    transition: 0.5s;
  }
  @media screen and (max-width: 400px) {
    width: 250px;
  }
`

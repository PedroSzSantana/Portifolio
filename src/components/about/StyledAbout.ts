import styled from 'styled-components'
import { ModelSections } from '../../style/StylesGenerics'

export const StyleAbout = styled(ModelSections)`
  text-align: left;
  overflow-x: hidden;
  background: linear-gradient(#535353, #353535);
  .FadeArticle {
    display: flex;
    justify-content: center;
  }
`
export const TextAbout = styled.article`
  cursor: default;
  width: 50%;
  color: #ffff;
  font-size: 20px;
  font-weight: 500;

  @media screen and (max-width: 730px) {
    padding-top: 20px;
    width: 85%;
    font-size: 18px;
  }
  @media screen and (max-width: 700px) {
    padding-top: 20px;
    width: 85%;
    font-size: 14px;
    font-weight: 400;
  }
  @media screen and (max-width: 400px) {
    width: 85%;
    font-size: 12px;
  }
`

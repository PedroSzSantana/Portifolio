import styled from 'styled-components'
import { ModelSections } from '../../style/StylesGenerics'

export const StylePerfil = styled(ModelSections)`
  flex-direction: row;
  text-align: left;
  background: linear-gradient(#a9a9a9, #535353);
  padding-top: 100px;
  overflow-y: hidden;
  overflow-x: hidden;
  cursor: default;

  div {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    color: #ffff;
    flex-direction: column;

    h1 {
      font-size: 55px;
    }

    img {
      margin-left: 3%;
      width: 150px;
      border-radius: 100px;
    }
    .btns {
      display: flex;
      flex-direction: row;
    }
  }

  @media screen and (max-width: 500px) {
    margin-top: 0;
    flex-direction: column;
    div {
      align-items: center;
      h1 {
        font-size: 25px;
      }
      h2 {
        font-size: 20px;
      }
      a {
        padding: 0;
        text-align: center;
      }
    }
    img {
      margin-top: 20px;
      margin-left: 0;
    }
  }
`

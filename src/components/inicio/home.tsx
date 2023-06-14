import { ContainerData, ImageProfile, StylePerfil } from './StyledHome'
import Profile from '../../assets/images/Profile.webp'
import CV from '../../assets/Pedro_Souza Santana_Curriculo.pdf'
import { ButtonGeneric } from '../../style/StylesGenerics'
import { Animation } from './Animation/Animation'
import { Fade } from 'react-awesome-reveal'
import { DownloadOutlined, GithubOutlined } from '@ant-design/icons'

export const Home = () => {
  return (
    <>
      <Animation />
      <StylePerfil id="home">
        <Fade delay={1000} direction="up" cascade>
          <ContainerData>
            <h3>Olá eu sou</h3>
            <h1 className="font-name" id="name">
              Pedro Souza
            </h1>
            <h2>Desenvolvedor Web Full Stack</h2>
            <Fade delay={1700} direction="up" cascade>
              <ButtonGeneric
                btnType={'1'}
                href="https://www.linkedin.com/in/pedro-souza-3ab330226/"
                rel="noreferrer"
                target="_blank"
              >
                Meu Linkedin
              </ButtonGeneric>
            </Fade>
            <div className="lowerbtns">
              <Fade delay={1200} direction="up" cascade>
                <ButtonGeneric btnType={'2'} download href={CV}>
                  <DownloadOutlined />
                  Baixar CV
                </ButtonGeneric>
              </Fade>
              <Fade delay={1400} direction="up" cascade>
                <ButtonGeneric
                  btnType={'2'}
                  href="https://github.com/PedroSzSantana"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GithubOutlined />
                  GitHub
                </ButtonGeneric>
              </Fade>
            </div>
          </ContainerData>
        </Fade>
        <Fade direction="right">
          <ImageProfile src={Profile} alt="Foto Perfil" />
        </Fade>
      </StylePerfil>
    </>
  )
}

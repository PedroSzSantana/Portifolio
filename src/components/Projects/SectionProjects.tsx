import {
  CardProject,
  ContainerProjects,
  StyleSectionProjects,
} from './StyledProjects'
import { ButtonGeneric } from '../../style/StylesGenerics'
import { Fade } from 'react-awesome-reveal'
import { TitleSection } from '../TitleSection/TitleSection'

export const SectionProjects = () => {
  return (
    <StyleSectionProjects id="projects">
      <TitleSection>Portifólio</TitleSection>
      <ContainerProjects>
        <Fade direction="left" delay={500} triggerOnce={true}>
          <CardProject>
            <p>EM BREVE</p>
          </CardProject>

          <CardProject>
            <p>EM BREVE</p>
          </CardProject>
          <CardProject>
            <p>EM BREVE</p>
          </CardProject>
        </Fade>
      </ContainerProjects>
      <Fade direction="down" delay={500} triggerOnce={true}>
        <ButtonGeneric
          btnType={'1'}
          href="https://github.com/PedroSzSantana?tab=repositories"
          rel="noreferrer"
          target="_blank"
          className="button-generic"
        >
          Ver meu repositorio do Github
        </ButtonGeneric>
      </Fade>
    </StyleSectionProjects>
  )
}

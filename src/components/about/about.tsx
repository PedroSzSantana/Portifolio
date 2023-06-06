import { StyleAbout, TextAbout } from './StyledAbout'
import { TitleSection } from '../../style/StylesGenerics'
import { Fade } from 'react-awesome-reveal'

export const SectionAbout = () => {
  return (
    <StyleAbout id="about">
      <Fade direction="right" delay={500}>
        <TitleSection>Sobre Mim</TitleSection>
      </Fade>
      <Fade
        direction="left"
        delay={600}
        duration={2000}
        className="FadeArticle"
      >
        <TextAbout>
          <p>
            Meu nome é Pedro Souza, tenho 19 anos e sou apaixonado por
            tecnologia desde muito jovem. Não sei ao certo como me interessei
            pela programação, mas parece que foi destino. Quando percebi,
            descobri que programar é realmente minha paixão.
          </p>
          <p>
            Comecei a estudar programação em 2021 e, desde então, adquiri
            conhecimento em desenvolvimento front-end, back-end e mobile.
            Atualmente, estou dedicado a aprimorar e aprofundar ainda mais meus
            conhecimentos nessa área.
          </p>
          <p>
            Através do estudo contínuo, estou em busca de oportunidades para
            aplicar minhas habilidades e contribuir para projetos desafiadores.
            Estou sempre aberto a novas tecnologias e tendências, buscando me
            manter atualizado e expandir meu conjunto de habilidades.
          </p>
          <p>
            Estou animado com o futuro da programação e ansioso para enfrentar
            novos desafios que me permitam crescer como profissional e continuar
            fazendo o que amo.
          </p>
        </TextAbout>
      </Fade>
    </StyleAbout>
  )
}

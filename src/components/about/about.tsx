import { TitleSection } from '../TitleSection/TitleSection'
import { ContainerArticle, Paragraph, StyleAbout } from './StyledAbout'

export const SectionAbout = () => {
  return (
    <StyleAbout id="about">
      <TitleSection>Sobre Mim</TitleSection>
      <ContainerArticle
        direction="left"
        delay={500}
        duration={2000}
        className="FadeArticle"
        triggerOnce={true}
      >
        <Paragraph>
          Meu nome é Pedro Souza, 21 anos. Minha paixão pela tecnologia me acompanha desde jovem e, na programação, encontrei meu objetivo de carreira.
        </Paragraph>
        <Paragraph>
          Iniciei meus estudos em 2021 e, desde então, venho desenvolvendo competências em front-end, back-end e mobile. Meu foco atual é aprofundar esse conhecimento, sempre conectado às novas tendências do mercado.
        </Paragraph>
        <Paragraph>
          Busco uma oportunidade para aplicar o que aprendi em projetos que me desafiem a crescer. Estou animado para contribuir com equipes e continuar evoluindo como profissional.
        </Paragraph>
        <Paragraph>
          Estou animado com o futuro da programação e ansioso para enfrentar
          novos desafios que me permitam crescer como profissional e continuar
          fazendo o que amo.
        </Paragraph>
      </ContainerArticle>
    </StyleAbout>
  )
}

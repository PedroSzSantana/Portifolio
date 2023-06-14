import { TitleSection } from '../TitleSection/TitleSection'
import { ContainerArticle, Paragraph, StyleAbout } from './StyledAbout'

export const SectionAbout = () => {
  return (
    <StyleAbout id="about">
      <TitleSection>Sobre Mim</TitleSection>
      <ContainerArticle
        direction="left"
        delay={600}
        duration={2000}
        className="FadeArticle"
      >
        <Paragraph>
          Meu nome é Pedro Souza, tenho 19 anos e sou apaixonado por tecnologia
          desde muito jovem. Não sei ao certo como me interessei pela
          programação, mas parece que foi destino. Quando percebi, descobri que
          programar é realmente minha paixão.
        </Paragraph>
        <Paragraph>
          Comecei a estudar programação em 2021 e, desde então, adquiri
          conhecimento em desenvolvimento front-end, back-end e mobile.
          Atualmente, estou dedicado a aprimorar e aprofundar ainda mais meus
          conhecimentos nessa área.
        </Paragraph>
        <Paragraph>
          Através do estudo contínuo, estou em busca de oportunidades para
          aplicar minhas habilidades e contribuir para projetos desafiadores.
          Estou sempre aberto a novas tecnologias e tendências, buscando me
          manter atualizado e expandir meu conjunto de habilidades.
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

import { StyleAbout } from "./StyledAbout";
import { TitleSection } from "../../style/StylesGenerics";
import { Fade } from "react-awesome-reveal";

export const SectionAbout = () => {

  return (
    <StyleAbout id="about">
      <Fade direction="right" delay={800}>
        <TitleSection>Sobre Mim</TitleSection>
      </Fade>
      <article>
        <Fade direction="left" delay={1000} duration={2000}>
          Meu nome é Pedro Souza, sempre estive em contado com tecnologia desde
          muito novo, bom não sei como eu realmente me interessei em estudar
          programação parece que foi o destino, quando me dei conta percebi que
          programar era realmente o que eu amo fazer. Comecei a estudar
          programação em 2021, atualmente com conhecimento em font-end,
          estudando novas tecnologias para virar um programador Full-Stack.
        </Fade>
      </article>
    </StyleAbout>
  );
};

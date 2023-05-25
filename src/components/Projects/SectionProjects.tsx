import { StyleSectionProjects } from "./StyledProjects";
import { ButtonGeneric, TitleSection } from "../../style/StylesGenerics";
import { Fade } from "react-awesome-reveal";

export const SectionProjects = () => {
  return (
    <StyleSectionProjects id="projects">
      <Fade direction="up" cascade delay={500}>
        <TitleSection>Portifólio</TitleSection>
      </Fade>
      <div>
        <Fade direction="left" delay={800}>
          <div>
            <p>EM BREVE</p>
          </div>
        </Fade>

        <Fade direction="down" delay={800}>
          <div>
            <p>EM BREVE</p>
          </div>
        </Fade>
        <Fade direction="right" delay={800}>
          <div>
            <p>EM BREVE</p>
          </div>
        </Fade>
      </div>
      <Fade direction="down" delay={800}>
        <ButtonGeneric
          btnType={"1"}
          href="https://github.com/PedroSzSantana?tab=repositories"
          rel="noreferrer"
          target="_blank"
          className="button-generic"
        >
          Ver meu repositorio do Github
        </ButtonGeneric>
      </Fade>
    </StyleSectionProjects>
  );
};

import { TitleSection } from "../../style/StylesGenerics";
import { ContainerHability, StyleHability } from "./StyleSkils";
import iconCheck from "../../assets/images/iconCheck.png";
import { Fade } from "react-awesome-reveal";


const SectionSkils = () => {
  const icon = <img src={iconCheck} alt="IconCheck" />;
  return (
    <StyleHability id="skils" >
      <TitleSection>Skils</TitleSection>
      <ContainerHability>
        <Fade delay={1000} direction="left">
          <div className="Skils">
            <h1>Front-End</h1>
            <div className="front">
              <div>
                <span>{icon} HTML</span>
                <span>{icon}CSS</span>
                <span>{icon}JAVASCRIPT</span>
              </div>
              <div>
                <span>{icon}TYPESCRIPT</span>
                <span>{icon}REACTJS</span>
              </div>
            </div>
          </div>
        </Fade>
        <Fade delay={1000} direction="right">
          <div className="Skils">
            <h1>Back-End</h1>
            <div className="front">
              <div>
                <span>{icon}NODE-JS</span>
                <span>{icon}MONGODB</span>
              </div>
              <span>{icon}API</span>
            </div>
          </div>
        </Fade>
      </ContainerHability>
    </StyleHability>
  );
};
export default SectionSkils;

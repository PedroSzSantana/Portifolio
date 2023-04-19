import { StylePerfil } from "./StyledHome";
import PicPerfil from "../../assets/images/20220918_13310111.png";
import CV from "../../assets/DECLARAO-DE-AUTNOMO.pdf";
import { ButtonGeneric } from "../../style/StylesGenerics";
import { Animation } from "./Animation/Animation";
import { Fade } from "react-awesome-reveal";
import { DownloadOutlined } from "@ant-design/icons";

export const Home = () => {
  return (
    < >
      <Animation />
      <StylePerfil id="home">
        <Fade delay={1000} direction="up" cascade>
          <div>
            <h3>Olá eu sou</h3>
            <h1 className="font-name" id="name">
              Pedro Souza
            </h1>
            <h2>Desenvolvedor Web Full Stack</h2>
            <Fade delay={1700} direction="up" cascade>
              <ButtonGeneric
                btnType={"1"}
                href="https://www.linkedin.com/in/pedro-souza-3ab330226/"
                rel="noreferrer"
                target="_blank">
                Meu Linkedin
              </ButtonGeneric>
            </Fade>
            <div className="btns">
              <Fade delay={1200} direction="up" cascade>
                <ButtonGeneric btnType={"2"} download href={CV}>
                <DownloadOutlined />Baixar CV
                </ButtonGeneric>
              </Fade>
              <Fade delay={1400} direction="up" cascade>
                <ButtonGeneric btnType={"2"}>
                  agerggg
                </ButtonGeneric>
              </Fade>
            </div>
          </div>
        </Fade>
        <Fade direction="right">
          <div>
            <img src={PicPerfil} alt="Foto Perfil" />
          </div>
        </Fade>
      </StylePerfil>
    </>
  );
};

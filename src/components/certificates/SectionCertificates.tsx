import {
  ContainerSlider,
  StyledCertificates,
  ImageSlider,
} from "./StyledCertificates";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import JS from "../../assets/images/img-certificates/CertificadoJS.png";
import NODE from "../../assets/images/img-certificates/CertificadoNode.png";
import REACT from "../../assets/images/img-certificates/CertificadoReact.png";
import MONGODB from "../../assets/images/img-certificates/CertificadoMongodb.png";
import LEIGO from "../../assets/images/img-certificates/CertificadoIntr.jpg";
import REACTNATIVE from "../../assets/images/img-certificates/CertificadoReactNative.jpeg";
import FULLSTACK from "../../assets/images/img-certificates/CertificadoFullStack.png";
import FORMACAONODEJS from "../../assets/images/img-certificates/CursoFormacaoNodejs.jpg";

import { TitleSection } from "../TitleSection/TitleSection";

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  speed: 400,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const SectionCertificates = () => {
  return (
    <StyledCertificates id="certificates">
      <TitleSection>Certificados</TitleSection>
      <ContainerSlider
        direction="left"
        delay={500}
        duration={2000}
        triggerOnce={true}
      >
        <Slider {...settings}>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoJavascript.jpeg"
              target="_blank"
              rel="noreferrer"
            >
              <ImageSlider src={JS} alt="Imagem Certificado Javascript" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoNodeJs.jpeg"
              target="_blank"
              rel="noreferrer"
            >
              <ImageSlider src={NODE} alt="Imagem Certificado NodeJS" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoReact.jpeg"
              target="_blank"
              rel="noreferrer"
            >
              <ImageSlider src={REACT} alt="Imagem Certificado React" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoIntr.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <ImageSlider src={LEIGO} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoMongoDB.jpeg"
              target="_blank"
              rel="noreferrer"
            >
              <ImageSlider src={MONGODB} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoReactNative.jpeg"
              target="_blank"
              rel="noreferrer"
            >
              <ImageSlider src={REACTNATIVE} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoFullStack.png"
              target="_blank"
              rel="noreferrer"
            >
              <ImageSlider src={FULLSTACK} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CursoNodeJS.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <ImageSlider src={FORMACAONODEJS} alt="" />
            </a>
          </div>
        </Slider>
      </ContainerSlider>
    </StyledCertificates>
  );
};

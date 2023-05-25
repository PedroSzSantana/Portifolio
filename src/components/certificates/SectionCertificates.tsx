import { StyledCertificates } from "./StyledCertificates";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JS from "../../assets/images/img-certificates/CertificadoJS.png";
import NODE from "../../assets/images/img-certificates/CertificadoNode.png";
import REACT from "../../assets/images/img-certificates/CertificadoReact.png";
import MONGODB from "../../assets/images/img-certificates/CertificadoMongodb.png";
import LEIGO from "../../assets/images/img-certificates/CertificadoIntr.jpg";
import { TitleSection } from "../../style/StylesGenerics";

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1 
      }
    }
  ]
};

export const SectionCertificates = () => {
  return (
    //@ts-ignore
    <StyledCertificates id="certificates">
      <TitleSection>Certificates</TitleSection>
      <div>
        <Slider {...settings}>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoJS.png"
              target="_blank"
            >
              <img src={JS} alt="Imagem Certificado Javascript" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoNode.png"
              target="_blank"
            >
              <img src={NODE} alt="Imagem Certificado NodeJS" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoReact.png"
              target="_blank"
            >
              <img src={REACT} alt="Imagem Certificado React" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoIntr.pdf"
              target="_blank"
            >
              <img src={LEIGO} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoMongodb.pdf"
              target="_blank"
            >
              <img src={MONGODB} alt="" />
            </a>
          </div>
        </Slider>
      </div>
    </StyledCertificates>
  );
};

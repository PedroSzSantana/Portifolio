import { StyledCertificates } from './StyledCertificates'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import JS from '../../assets/images/img-certificates/CertificadoJS.png'
import NODE from '../../assets/images/img-certificates/CertificadoNode.png'
import REACT from '../../assets/images/img-certificates/CertificadoReact.png'
import MONGODB from '../../assets/images/img-certificates/CertificadoMongodb.png'
import LEIGO from '../../assets/images/img-certificates/CertificadoIntr.jpg'
import REACTNATIVE from '../../assets/images/img-certificates/CertificadoReactNative.jpeg'
import FULLSTACK from '../../assets/images/img-certificates/CertificadoFullStack.png'

import { TitleSection } from '../TitleSection/TitleSection'

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  speed: 500,
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
}

export const SectionCertificates = () => {
  return (
    <StyledCertificates id="certificates">
      <TitleSection>Certificados</TitleSection>
      <div>
        <Slider {...settings}>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoJavascript.jpeg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={JS} alt="Imagem Certificado Javascript" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoNodeJs.jpeg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={NODE} alt="Imagem Certificado NodeJS" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoReact.jpeg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={REACT} alt="Imagem Certificado React" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoIntr.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LEIGO} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoMongoDB.jpeg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={MONGODB} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoReactNative.jpeg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={REACTNATIVE} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/PedroSzSantana/certificates/blob/main/CertificadoFullStack.png"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FULLSTACK} alt="" />
            </a>
          </div>
        </Slider>
      </div>
    </StyledCertificates>
  )
}

import { TitleSection } from '../../style/StylesGenerics'
import {
  CardSkils,
  ContainerHability,
  ContainerSkils,
  StyleHability,
} from './StyleSkils'
import iconHtml from '../../assets/images/logos/html5.png'
import iconCss from '../../assets/images/logos/css3.png'
import iconJs from '../../assets/images/logos/javascript.png'
import iconTs from '../../assets/images/logos/typescript.png'
import iconRs from '../../assets/images/logos/react.png'
import iconNode from '../../assets/images/logos/node-js.png'
import iconMongo from '../../assets/images/logos/mongodb.png'

import { Fade } from 'react-awesome-reveal'

const SectionSkils = () => {
  const iconHTML = <img src={iconHtml} alt="IconCheck" />
  const iconCSS = <img src={iconCss} alt="IconCheck" />
  const iconJS = <img src={iconJs} alt="IconCheck" />
  const iconTS = <img src={iconTs} alt="IconCheck" />
  const iconRS = <img src={iconRs} alt="IconCheck" />
  const iconNODE = <img src={iconNode} alt="IconCheck" />
  const iconMONGO = <img src={iconMongo} alt="IconCheck" />

  return (
    <StyleHability id="skils">
      <TitleSection>Skils</TitleSection>
      <ContainerHability>
        <Fade delay={1000} direction="left">
          <ContainerSkils>
            <h1>Front-End</h1>
            <CardSkils>
              <div>
                <span>{iconHTML} HTML</span>
                <span>{iconCSS}CSS</span>
                <span>{iconJS}JAVASCRIPT</span>
              </div>
              <div>
                <span>{iconTS}TYPESCRIPT</span>
                <span>{iconRS}REACTJS</span>
                <span>{iconRS}REACT NATIVE</span>
              </div>
            </CardSkils>
          </ContainerSkils>
        </Fade>
        <Fade delay={1000} direction="right">
          <ContainerSkils>
            <h1>Back-End</h1>
            <CardSkils>
              <div>
                <span>{iconNODE}NODE-JS</span>
                <span>{iconMONGO}MONGODB</span>
              </div>
              <div>
                <span>{iconNODE}MYSQL</span>
              </div>
            </CardSkils>
          </ContainerSkils>
        </Fade>
      </ContainerHability>
    </StyleHability>
  )
}
export default SectionSkils

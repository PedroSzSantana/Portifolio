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
import iconReactNative from '../../assets/images/logos/ReactNative.png'
import iconMysql from '../../assets/images/logos/mysql.png'

import { Fade } from 'react-awesome-reveal'

const iconHTML = <img src={iconHtml} alt="Icon HTML" />
const iconCSS = <img src={iconCss} alt="Icon CSS" />
const iconJS = <img src={iconJs} alt="Icon Javascript" />
const iconTS = <img src={iconTs} alt="Icon Typescript" />
const iconRS = <img src={iconRs} alt="Icon React" />
const iconNODE = <img src={iconNode} alt="Icon Nodejs" />
const iconMONGO = <img src={iconMongo} alt="Icon Mongo" />
const iconREACTNATIVE = <img src={iconReactNative} alt="Icon React Native" />
const iconMYSQL = <img src={iconMysql} alt="Icon React Native" />

const SectionSkils = () => {
  return (
    <StyleHability id="skils">
      <Fade delay={500} direction="up">
        <TitleSection>Skils</TitleSection>
      </Fade>
      <ContainerHability>
        <Fade delay={600} direction="left">
          <ContainerSkils>
            <h1>Front-End</h1>
            <CardSkils>
              <div>
                <span>{iconHTML}HTML</span>
                <span>{iconCSS}CSS</span>
                <span>{iconJS}JAVASCRIPT</span>
              </div>
              <div>
                <span>{iconTS}TYPESCRIPT</span>
                <span>{iconRS}REACTJS</span>
                <span>{iconREACTNATIVE}REACT NATIVE</span>
              </div>
            </CardSkils>
          </ContainerSkils>
        </Fade>
        <Fade delay={600} direction="right">
          <ContainerSkils>
            <h1>Back-End</h1>
            <CardSkils>
              <div>
                <span>{iconNODE}NODE-JS</span>
                <span>{iconMONGO}MONGODB</span>
              </div>
              <div>
                <span>{iconMYSQL}MYSQL</span>
              </div>
            </CardSkils>
          </ContainerSkils>
        </Fade>
      </ContainerHability>
    </StyleHability>
  )
}
export default SectionSkils

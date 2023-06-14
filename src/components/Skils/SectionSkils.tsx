import {
  CardSkils,
  ContainerCards,
  ContainerSkilsCard,
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
import { TitleSection } from '../TitleSection/TitleSection'

const SectionSkils = () => {
  return (
    <StyleHability id="skils">
      <TitleSection>Skils</TitleSection>
      <ContainerCards>
        <Fade delay={500} direction="left">
          <CardSkils>
            <h1>Front-End</h1>
            <ContainerSkilsCard>
              <div>
                <span>
                  <img src={iconHtml} alt="Icon HTML" />
                  HTML
                </span>
                <span>
                  <img src={iconCss} alt="Icon CSS" />
                  CSS
                </span>
                <span>
                  <img src={iconJs} alt="Icon Javascript" />
                  JAVASCRIPT
                </span>
              </div>
              <div>
                <span>
                  <img src={iconTs} alt="Icon Typescript" />
                  TYPESCRIPT
                </span>
                <span>
                  <img src={iconRs} alt="Icon React" />
                  REACTJS
                </span>
                <span>
                  <img src={iconReactNative} alt="Icon React Native" />
                  REACT NATIVE
                </span>
              </div>
            </ContainerSkilsCard>
          </CardSkils>
        </Fade>
        <Fade delay={500} direction="right">
          <CardSkils>
            <h1>Back-End</h1>
            <ContainerSkilsCard>
              <div>
                <span>
                  <img src={iconNode} alt="Icon Nodejs" />
                  NODE-JS
                </span>
                <span>
                  <img src={iconMongo} alt="Icon Mongo" />
                  MONGODB
                </span>
              </div>
              <div>
                <span>
                  <img src={iconMysql} alt="Icon React Native" />
                  MYSQL
                </span>
              </div>
            </ContainerSkilsCard>
          </CardSkils>
        </Fade>
      </ContainerCards>
    </StyleHability>
  )
}
export default SectionSkils

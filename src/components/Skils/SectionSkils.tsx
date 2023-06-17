import {
  CardSkils,
  ContainerCards,
  ContainerSkilsCard,
  SpanSkils,
  StyleHability,
} from './StyleSkils'

import { Fade } from 'react-awesome-reveal'
import { TitleSection } from '../TitleSection/TitleSection'
import { Icon } from '@iconify/react'

const SectionSkils = () => {
  return (
    <StyleHability id="skils">
      <TitleSection>Skils</TitleSection>
      <ContainerCards>
        <Fade delay={500} direction="left" triggerOnce={true}>
          <CardSkils>
            <h1>Front-End</h1>
            <ContainerSkilsCard>
              <div>
                <SpanSkils background={'#E95828'}>
                  <Icon
                    icon="vscode-icons:file-type-html"
                    color="black"
                    width="48"
                    height="48"
                  />
                  <p>HTML</p>
                </SpanSkils>
                <SpanSkils background={'#1572B6'}>
                  <Icon
                    icon="vscode-icons:file-type-css"
                    color="black"
                    width="48"
                    height="48"
                  />
                  <p>CSS</p>
                </SpanSkils>
                <SpanSkils background={'#F5DE19'}>
                  <Icon
                    icon="vscode-icons:file-type-js-official"
                    width="48"
                    height="48"
                  />
                  <p>JAVASCRIPT</p>
                </SpanSkils>
              </div>
              <div>
                <SpanSkils background={'#007ACC'}>
                  <Icon
                    icon="skill-icons:typescript"
                    color="black"
                    width="48"
                    height="48"
                  />
                  <p>TYPESCRIPT</p>
                </SpanSkils>
                <SpanSkils background={'#00D8FF'}>
                  <Icon
                    icon="logos:react"
                    color="black"
                    width="48"
                    height="48"
                  />
                  <p>REACTJS</p>
                </SpanSkils>
                <SpanSkils background={'#4C4C4E'}>
                  <Icon
                    icon="teenyicons:react-outline"
                    color="black"
                    width="48"
                  />{' '}
                  <p>REACT NATIVE</p>
                </SpanSkils>
              </div>
            </ContainerSkilsCard>
          </CardSkils>
        </Fade>
        <Fade delay={500} direction="right" triggerOnce={true}>
          <CardSkils>
            <h1>Back-End</h1>
            <ContainerSkilsCard>
              <div>
                <SpanSkils background={'#539E43'}>
                  <Icon icon="logos:nodejs-icon" width="48" height="48" />
                  <p>NODE-JS</p>
                </SpanSkils>
                <SpanSkils background={'#539547'}>
                  <Icon
                    icon="devicon:mongodb-wordmark"
                    color="black"
                    width="48"
                    height="48"
                  />
                  <p>MONGODB</p>
                </SpanSkils>
              </div>
              <div>
                <SpanSkils background={'#2A4B59'}>
                  <Icon
                    icon="tabler:brand-mysql"
                    color="black"
                    width="48"
                    height="48"
                  />
                  <p>MYSQL</p>
                </SpanSkils>
              </div>
            </ContainerSkilsCard>
          </CardSkils>
        </Fade>
      </ContainerCards>
    </StyleHability>
  )
}
export default SectionSkils

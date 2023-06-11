import { ReactNode } from 'react'
import { Fade } from 'react-awesome-reveal'
import { StyleTitleSection } from './Style'

type Children = {
  children: ReactNode
}
export const TitleSection = ({ children }: Children) => {
  return (
    <Fade direction="up" cascade delay={500} style={{ width: 'auto' }}>
      <StyleTitleSection>{children}</StyleTitleSection>
    </Fade>
  )
}

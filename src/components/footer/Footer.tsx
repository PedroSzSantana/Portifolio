import { StyleFooter } from './StyleFooter'
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons'

const Footer = () => {
  return (
    <StyleFooter>
      <small>
        <a href="mailto:pedrosouza-dev@hotmail.com">
          <MailOutlined />
          Email
        </a>
      </small>
      <small>
        <a
          href="https://github.com/PedroSzSantana"
          rel="noreferrer"
          target="_blank"
        >
          <GithubOutlined />
          GitHub
        </a>
      </small>
      <small>
        <a
          href="https://www.linkedin.com/in/pedrosouzadev"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedinOutlined />
          Linkedin
        </a>
      </small>
    </StyleFooter>
  )
}

export default Footer

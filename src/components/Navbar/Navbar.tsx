import {
  HomeOutlined,
  UserOutlined,
  ThunderboltOutlined,
  ReadOutlined,
  SolutionOutlined,
} from '@ant-design/icons'
import { StyleNavbar } from './StyleNavbar'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Navbar = () => {
  return (
    <StyleNavbar>
      <nav>
        <ul>
          <AnchorLink href="#home">
            <HomeOutlined />
          </AnchorLink>
          <AnchorLink href="#about">
            <UserOutlined />
          </AnchorLink>
          <AnchorLink href="#skils">
            <ThunderboltOutlined />
          </AnchorLink>
          <AnchorLink href="#projects">
            <ReadOutlined />
          </AnchorLink>
          <AnchorLink href="#certificates">
            <SolutionOutlined />
          </AnchorLink>
        </ul>
      </nav>
    </StyleNavbar>
  )
}

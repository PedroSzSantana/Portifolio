import {
  HomeOutlined,
  UserOutlined,
  ThunderboltOutlined,
  ReadOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { StyleNavbar } from "./StyleNavbar";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const active = (e: any) => {
  const list = document.querySelectorAll(".list");

  list.forEach((item) => item.classList.remove("active"));
  e.currentTarget.classList.add("active");
};
export const Navbar = () => {
    const activeLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const list = document.querySelectorAll(".list");

    list.forEach((item) => item.classList.remove("active"));
    e.currentTarget.classList.add("active");
  };
  return (
    <StyleNavbar>
      <nav>
        <ul>
          <AnchorLink className="list active" onClick={activeLink} href="#home">
            <HomeOutlined />
          </AnchorLink>
          <AnchorLink className="list" onClick={activeLink} href="#about">
            <UserOutlined />
          </AnchorLink>
          <AnchorLink className="list" onClick={activeLink} href="#skils">
            <ThunderboltOutlined />
          </AnchorLink>
          <AnchorLink className="list" onClick={activeLink} href="#projects">
            <ReadOutlined />
          </AnchorLink>
          <AnchorLink
            className="list"
            onClick={activeLink}
            href="#certificates"
          >
            <SolutionOutlined />
          </AnchorLink>
        </ul>
      </nav>
    </StyleNavbar>
  );
};

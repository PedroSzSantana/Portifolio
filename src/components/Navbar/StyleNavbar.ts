import styled from "styled-components";

export const StyleNavbar = styled.header`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  transform: rotateZ(90deg);
  position: fixed;
  border-radius: 20px;
  margin: 300px 0px 0px -100px;
  width: 300px;
  z-index: 9;
  opacity: 0.7;
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;

    ul {
      display: inline-flex;
      gap: 25px;
      list-style: none;

      a {
        display: flex;
        padding: 5px;
        text-decoration: none;
        color: #ffff;
        border-radius: 50%;
        :hover {
          background: #ffff;
          color: #1f1f38;
        }
        :active {
          outline: 0;
          background: black;
          color: #1f1f38;
        }
        
        svg {
          transform: rotateZ(-90deg);
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .active{
    background: #ffff;
    color: #1f1f38;
  }
  @media screen and (max-width: 700px) {
    transform: rotateZ(0deg);
    margin: 0px 0px 0px 30%;
    nav {
      svg {
        transform: rotateZ(0deg) !important;
      }
    }
  }
  @media screen and (max-width: 500px) {
    transform: rotateZ(0deg);
    margin: 0px 0px 0px 100px;
  }
`;

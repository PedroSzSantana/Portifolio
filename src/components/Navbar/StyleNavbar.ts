import styled from 'styled-components'

export const StyleNavbar = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 40px;
  position: fixed;
  left: -100px;
  top: 35%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  transform: rotateZ(90deg);
  border-radius: 20px;
  z-index: 9;
  opacity: 0.7;
  nav {
    display: inline-flex;
    justify-content: center;
    align-items: center;
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
  .active {
    background: #ffff;
    color: #1f1f38;
  }
  @media screen and (max-width: 700px) {
    transform: rotateZ(0deg);
    top: 10px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    nav {
      svg {
        transform: rotateZ(0deg) !important;
      }
    }
  }
  @media screen and (max-width: 400px) {
    width: 250px;
  }
`

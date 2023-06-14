import styled, { keyframes } from 'styled-components'

const ContAnimationGenerc = styled.div`
  width: 99%;
  border-bottom: solid 1px rgb(39, 39, 39);
  overflow: hidden;
  position: absolute;
  height: 50px;
  img {
    width: 60px;
  }
`
const movimentBNC = keyframes`
  0% {
    margin-left: -50px;
  }
  100% {
    margin-left: 200%;
  }
`
const movimentBNC2 = keyframes`
  0% {
    margin-left: 200%;
  }
  100% {
    margin-left: -50px;
  }
`
export const AnimationGif1 = styled(ContAnimationGenerc)`
  top: 20vh;
  transform: rotatez(15.2deg);
  img {
    animation: ${movimentBNC} 20s infinite;
  }
`
export const AnimationGif2 = styled(ContAnimationGenerc)`
  top: 70vh;
  transform: rotateZ(-15deg);
  img {
    transform: rotateY(180deg);
    animation: ${movimentBNC2} 20s infinite;
  }
`

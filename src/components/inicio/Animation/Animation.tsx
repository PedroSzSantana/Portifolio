import Gif from '../../../assets/images/d7b3da3d4b19b7f0c44673374158df0a.gif'
import { AnimationGif1, AnimationGif2 } from './StyledAnimation'

export const Animation = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <AnimationGif1>
        <img src={Gif} alt="" />
      </AnimationGif1>
      <AnimationGif2>
        <img src={Gif} alt="" />
      </AnimationGif2>
    </div>
  )
}

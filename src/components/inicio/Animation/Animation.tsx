import Gif from '../../../assets/images/d7b3da3d4b19b7f0c44673374158df0a.gif'
import { AnimationGif } from './StyledAnimation'

export const Animation = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <AnimationGif Conteiner="up">
        <img className="gif_bnc animationgif" src={Gif} alt="" />
      </AnimationGif>
      <AnimationGif Conteiner="bottom">
        <img className="gif_bnc gif_bnc2 animationgif2" src={Gif} alt="" />
      </AnimationGif>
    </div>
  )
}

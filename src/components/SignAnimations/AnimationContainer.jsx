import ShuffleArray from "../../utils/ShuffleArray";
import Animations from "./Animations"
import { useMediaQuery } from "@mui/material"

export default function AnimamtionContainer() {

  const mobileScreen = useMediaQuery('(max-width: 750px)');
  const ShuffledAnimations = ShuffleArray(Animations)
  const SelectedAnimation = ShuffledAnimations.slice(0, 1);

  return (
    <>
      {mobileScreen ? (
        <div>
          <img
            src={SelectedAnimation[0].src}
            alt="AnimationGif"
            style={{ minHeight: 300, maxHeight: 350, margin: '20% 0' }} />
        </div>
      ) : (
        <div>
          <img
            src={SelectedAnimation[0].src}
            alt="AnimationGif"
            style={{ minHeight: 400, margin: '10% 0' }} />
        </div>
      )}
    </>
  )
};
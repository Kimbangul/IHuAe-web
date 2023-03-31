import { Bubble } from "./ChatStyle";
import { BubbleParamType } from "./ChatType";

const BubbleView : React.FC<BubbleParamType> = ({content}) => {
  return (
    <Bubble>
      {content}
    </Bubble>
  )
}

export default BubbleView;
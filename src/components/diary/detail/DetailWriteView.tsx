import Header from "@/components/common/Header";
import {Menu, Detail} from "./DetailStyle";
import AskStyle from "../ask/AskStyle";

const DetailWrite = () => {
  return (
    <Detail.Wrap>
      <Header title='일기 작성' back={true} menu={DetailWriteMenu()}/>
      <Detail.Inner>
        <Detail.Title>
          <input type="text" />
        </Detail.Title>
        <Detail.Textarea>
          
        </Detail.Textarea>
      </Detail.Inner>
      <AskStyle.Info>0 / 1000자</AskStyle.Info>
    </Detail.Wrap>
  )
}

const DetailWriteMenu = () => {
  return(
    <div>
      <Menu.Item as='button'>작성 완료</Menu.Item>
    </div>
  )
}

export default DetailWrite;
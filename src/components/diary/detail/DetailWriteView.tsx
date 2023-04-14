import Header from "@/components/common/Header";
import {Menu, Detail} from "./DetailStyle";
import AskStyle from "../ask/AskStyle";

const DetailWrite = () => {
  return (
    <Detail.Wrap>
      <Header title='일기 작성' back={true} menu={DetailWriteMenu()}/>
      <Detail.Inner>
        <Detail.Title>
          <Detail.TitleInput type="text" />
        </Detail.Title>
        <Detail.Content>
        <Detail.Textarea>
          
        </Detail.Textarea>
        </Detail.Content>
      </Detail.Inner>
      <Detail.Info>0 / 1000자</Detail.Info>
    </Detail.Wrap>
  )
}

const DetailWriteMenu = () => {
  return(
    <Menu.List as='div'>
      <Menu.Item as='button'>작성 완료</Menu.Item>
    </Menu.List>
  )
}

export default DetailWrite;
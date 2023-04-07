import DetailView from "./DetailView";
import {useState} from "react";

const DetailContainer = () => {
  const [content, setContent] = useState('컨텐츠 입니당');
  const [isEdit, setIsEdit] = useState(false);
  
  return(
    <DetailView content={content} setContent={setContent} isEdit={isEdit} setIsEdit={setIsEdit}/>
  )
}

export default DetailContainer;
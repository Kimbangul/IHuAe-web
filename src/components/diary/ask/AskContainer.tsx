import AskView from "./AskView";
import { useState } from "react";

const AskContainer = () => {
  const [content, setContent] = useState('컨텐츠 내용입니다.');
  const [isEdit, setIsEdit] = useState(false);

  return(
    <AskView content={content} setContent={setContent} isEdit={isEdit} setIsEdit={setIsEdit}/>    
  )
}

export default AskContainer;
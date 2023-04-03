import moment from "moment"
import { Dispatch, SetStateAction } from "react";

export interface BubbleParamType {
  content: string,
}

export interface ChatViewPropsType{
  list: ChatBubble[];
  sendMsg: (e:React.KeyboardEvent<HTMLTextAreaElement>) => void;
  inputVal: string;
  setInputVal: Dispatch<SetStateAction<string>>
}


export class ChatBubble {
  date: moment.Moment;
  message: string;

  constructor(date:moment.Moment, message: string){
    this.date = date;
    this.message = message;
  }
}

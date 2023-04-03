import moment from "moment"

export interface BubbleParamType {
  content: string,
}

export interface ChatViewPropsType{
  list: ChatBubble[];
  sendMsg: (message:string) => void;
}

export class ChatBubble {
  date: moment.Moment;
  message: string;

  constructor(date:moment.Moment, message: string){
    this.date = date;
    this.message = message;
  }
}

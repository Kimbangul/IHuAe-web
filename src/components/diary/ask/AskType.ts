import { type } from "os";
import { Dispatch, SetStateAction } from "react";

export interface ContentType {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}

export interface EditType {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

export type AskParamType = ContentType & EditType;
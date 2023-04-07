import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface ContentType {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}

export interface EditType {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

export interface MenuParamType extends ContentType {
  editRef: MutableRefObject<HTMLTextAreaElement | null>
}
export type AskParamType = ContentType & EditType;
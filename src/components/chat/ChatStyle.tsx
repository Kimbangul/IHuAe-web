import theme from "@/assets/style/Theme";
import styled from "styled-components";

const Chat = {
  Container: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  Content: styled.section`
    flex-grow: 1;
    background: ${({theme}) => theme.color.bg.bg_01};
  `,
  Desc: styled.p`
    font-size: 1rem;
    text-align: center;
    color: ${({theme}) => theme.color.text.text_04};
    ${({theme}) => theme.font.sans.medium};
    margin-top: 1.4rem;
  `,
  Input: {
    Container: styled.div`
      /* position: absolute;
      bottom: 0;
      left: 0; */
      width: 100%;
      min-height: 5.8rem;
      flex-shrink: 0;
      padding: 1.2rem 2rem;
      background: ${({theme}) => theme.color.main.third};
    `,
    Input: styled.textarea`
      width: 100%;
      min-height: 3.6rem;
      border: none;
      background: ${({theme}) => theme.color.white};
      border-radius: 10rem;
      padding: 0.8rem 1.6rem;
      color: ${({theme}) => theme.color.text.text_10};
      resize: none;
      ${({theme}) => theme.font.sans.medium};
    `
  }
}

export default Chat;
import styled from "styled-components";

const Chat = {
  Container: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,
  Content: styled.section`
    flex-grow: 1;
    background: ${({theme}) => theme.color.bg.bg_01};
    overflow: hidden;
    overflow-y:scroll;
    padding-bottom: 3.6rem;
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
      height: 3.6rem;
      border: none;
      background: ${({theme}) => theme.color.white};
      border-radius: 10rem;
      padding: 1rem 1.6rem;
      color: ${({theme}) => theme.color.text.text_10};
      resize: none;
      ${({theme}) => theme.font.sans.medium};
    `
  },
  ChatList: styled.div`
    padding: 0 2rem;
    margin-top: 1.2rem;
  `,
}
export const Bubble = styled.p`
  width: 24.6rem;
  padding: 1.2rem 1.4rem;
  border-radius: 1rem 1rem 0 1rem;
  color: #F8FAFF;
  font-size: 1.6rem;
  margin-left: auto;
  margin-right: 0;
  margin-top : 2rem;
  line-height: 1.5;
  background: ${({theme}) => theme.color.main.secondary};
  ${({theme}) => theme.font.sans.medium};

  &:first-child{
    margin-top: 0;
  }
`;

export default Chat;
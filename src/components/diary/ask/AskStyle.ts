import styled from 'styled-components';
import { Detail, Menu } from '@/components/diary/detail/DetailStyle';

const AskStyle = {
  Wrap: styled(Detail.Wrap)``,
  Inner: styled(Detail.Inner)`    
  `,
  Title: {
    Container: styled.div`
      background: #fafafa;
      padding: 2rem;
      padding-bottom: 3rem;
    `,
    Question: styled.span`
      font-size: 1.8rem;
      color: ${({theme}) => theme.color.text_09};
      ${({theme}) => theme.font.sans.regular};
    `,
    Text: styled.h2`
      font-size: 1.8rem;
      color: ${({theme}) => theme.color.text_09};
      ${({theme}) => theme.font.sans.regular};
      margin-top: 1.2rem;
    `,
  },
  Content: styled(Detail.Content)`
    padding: 1.8rem 0;
  `,
  Text: styled(Detail.Text)`
    padding: 2rem;
  `,
  Textarea: styled.textarea`
    flex-grow: 1;
    padding: 2rem;
  `,
  Info: styled(Detail.Date)`
    text-align: right;
    padding: 0 2rem;
  `,
};

export const AskMenu = {
  Button: styled(Menu.Item)`
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  `
}

export default AskStyle;

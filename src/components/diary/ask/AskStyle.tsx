import styled from 'styled-components';
import { Detail } from '../detail/DetailStyle';

const AskStyle = {
  Wrap: styled(Detail.Wrap)``,
  Inner: styled(Detail.Inner)``,
  Title: {
    Container: styled.div`
      padding: 2rem;
      padding-bottom: 3rem;
      background: #fafafa;
      border-top: 0.1rem solid #d9d9d9;
    `,
    Text: styled.h2`
      font-size: 1.8rem;
      color: ${({ theme }) => theme.color.text.text_09};
      line-height: 1.6;
      ${({ theme }) => theme.font.sans.regular};
    `,
  },
  Content: styled(Detail.Content)`
    padding: 0;
  `,
  Text: styled(Detail.Text)`
    padding: 2rem 2.5rem;
    padding-bottom: 3.6rem;
  `,
  Info: styled(Detail.Date)`
    padding: 2rem;
    text-align: right;
  `,
};

export const AskMenu = {
  Button: styled.button`
    position: absolute;
    right: 2rem;
    gap: 2rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.main.main};
    ${({ theme }) => theme.font.sans.medium};
  `,
};

export default AskStyle;

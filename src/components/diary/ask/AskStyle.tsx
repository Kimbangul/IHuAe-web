import styled from 'styled-components';
import { Detail } from '@/components/diary/detail/DetailStyle';

const AskStyle = {
  Wrap: styled(Detail.Wrap)``,
  Inner: styled(Detail.Inner)``,
  Title: {
    Container: styled.div``,
  },
  Content: styled(Detail.Content)``,
  Text: styled(Detail.Text)``,
  Info: styled(Detail.Date)`
    text-align: right;
  `,
};

export default AskStyle;

import styled, {css} from "styled-components";
import Header from '@/components/home/header/HomeHeaderStyle';

export const Calendar= {
  Wrap: styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;    
  `,
  Content: styled.div`
    background: ${({theme})=> theme.color.bg.bg_01};
    flex-grow: 1;    
  `,
  Calendar : {
    Container : styled.section`
      background-color: ${({theme})=> theme.color.white};
      border-radius: 0 0 2.3rem 2.3rem;
      padding: 2rem 2.4rem 4rem 2.4rem;
      box-shadow: 0 0.4rem 1rem rgba(0,0,0,0.14);    
    `,
    MonthInfo : styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
    `,
    Button: styled.button<{direction: 'prev' | 'next'}>`
      padding: 0.8rem;
      svg{
        width: 1.3rem;
        height: auto;
      }
      ${({direction})=> direction === 'next' &&
        css`
          transform: rotate(180deg);
        ` 
      };
    `,
    MonthText: styled.h2`
      color: ${({theme}) => theme.color.text.text_09};
      font-size: 2rem;
      ${({theme}) => theme.font.sans.bold};
    `,
    Week: styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      margin-top: 3.6rem;
      margin-bottom: 1.6rem;
    `,
    WeekItem: styled.span`
      display: inline-block;
      text-align: center;
      font-size: 1rem;
      font-weight: 600;
    `,
    Row: styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    `,
    Date: styled.span<{current: boolean}>`
      display: inline-block;
      width: 100%;
      text-align: center;
      height: 5.2rem;
      line-height: 5.2rem;
      font-size: 1.2rem;
      color: ${({theme}) => theme.color.text.text_08};
     ${({theme}) => theme.font.sans.regular};
     ${({current}) => !current && css`
        opacity: 0;
     `};
    `
  },
};

export const Feel = {
  Container: styled.section`
   margin-top: 2.8rem;
   padding: 0 2.4rem;
  `,
  Title: styled.h2`
    font-size: 1.4rem;
    color: ${({theme}) => theme.color.text.text_09};    
    ${({theme}) => theme.font.sans.bold};
  `,
  Content: {
    Container: styled.div`
     background:  ${({theme}) => theme.color.white};
     border-radius: 0.8rem;
     box-shadow: 0 0.4rem 1rem rgba(0,0,0,0.14);
     margin-top: 1.6rem;
     padding: 2rem;
     cursor: pointer;
    `,
    Title: styled.div`
      display: flex;
      align-items: center;
      gap: 1.4rem;
    `,
    TitleText: styled.p`
      font-size: 1.4rem;
      color: ${({theme}) => theme.color.text.text_09};
    `,
    Icon: styled(Header.Today.Icon)`
      width: 4.6rem;
      height: 4.6rem;
    `,
    Desc: styled.p`
     font-size: 1.4rem;
     margin-top: 2.2rem;
     min-height: 3.6rem;
     color: ${({theme}) => theme.color.text.text_09};
    `,
  }
}
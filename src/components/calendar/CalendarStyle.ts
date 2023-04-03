import { ReactNode } from "react";
import styled, {css} from "styled-components";

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
      cursor: pointer;
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
    Date: styled.span<{current: boolean, today: boolean}>`
      display: inline-block;
      width: 100%;
      text-align: center;
      height: 5.2rem;
      line-height: 5.2rem;
      font-size: 1.2rem;
      position: relative;
      color: ${({theme}) => theme.color.text.text_08};
     ${({theme}) => theme.font.sans.regular};
     ${({current}) => !current && css`
        opacity: 0;
     `};
     ${({today}) => today && css`
        color: #2d2d2d;
        ${({theme}) => theme.font.sans.bold};
     `};
     .date__number{
      position:relative;
      z-index:1; 
      }
    `,
    TodayIcon : styled.span`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 100%;
      height: 100%;
      padding: 0.8rem;
      user-select: none;
      z-index: 0;
      opacity: 0.3;
      display: flex;
      justify-content: center;
      align-items: center;
    `
  },
};

export const Feel = {
  Container: styled.section`
   margin-top: 2.8rem;
   padding: 0 2.4rem;
   padding-bottom: 3.2rem;
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
    Icon: styled.span<{feelIcon: null | ReactNode}>`
      width: 4.6rem;
      height: 4.6rem;
      display: inline-block;
      border-radius: 100%;
      svg{
        width: 100%;
        height: 100%;
      }
      ${({feelIcon}) => feelIcon === null && css`
        border: 0.2rem dashed ${({theme}) => theme.color.main.main};
      `
    };
    `,
    Desc: styled.p`
     font-size: 1.4rem;
     margin-top: 2.2rem;
     min-height: 3.6rem;
     word-wrap: break-word;
     color: ${({theme}) => theme.color.text.text_09};
    `,
  }
}
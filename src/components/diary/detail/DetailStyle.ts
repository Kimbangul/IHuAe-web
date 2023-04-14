import styled from "styled-components";

export const Detail = {
  Wrap: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  Inner: styled.section`
    border-top: 0.1rem solid ${({theme}) => theme.color.text.text_01};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `,
  Title: styled.h2`
    font-size: 1.8rem;
    padding: 1.2rem 0rem;
    margin: 0 2rem;
    color: ${({theme}) => theme.color.text.text_09};
    border-bottom: 0.1rem solid ${({theme}) => theme.color.text.text_01};
    ${({theme}) => theme.font.sans.regular};
  `,
  Content: styled.div`
    padding: 1.8rem 2rem;
    padding-bottom: 2.2rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  `,
  Text: styled.p`
    flex-grow: 1;
    font-size: 1.6rem;
    color: ${({theme}) => theme.color.text.text_09};
    ${({theme}) => theme.font.sans.regular};
  `,
  Date: styled.div`
    font-size: 1.4rem;
    color: ${({theme}) => theme.color.text.text_03};
  `,
  Textarea: styled.textarea`
    flex-grow: 1;
    padding: 0rem;
    font-size: 1.6rem;
    border: none;
    color: ${({theme}) => theme.color.text.text_09};
    resize: none;
    outline: none;
    ${({theme}) => theme.font.sans.regular};
  `,
}

export const Menu = {
  List: styled.ul`
    position: absolute;
    right: 2rem;
    gap: 2rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
  `,
  Item: styled.li`
    font-size: 1.2rem;   
    color: ${({theme}) => theme.color.main.main};
    ${({theme}) => theme.font.sans.medium};
    cursor: pointer;
  `,
}
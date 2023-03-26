import { ReactNode } from 'react';
import styled from 'styled-components';

const Header = ({ title, back, menu }: HeaderPropsType) => {
  return (
    <Hd.Container>
      <Hd.Inner>
        {back && <Hd.Back></Hd.Back>}
        <Hd.Title>{title}</Hd.Title>
        {menu && <Hd.Menu.Container>{menu}</Hd.Menu.Container>}
      </Hd.Inner>
    </Hd.Container>
  );
};

// PARAM type
interface HeaderPropsType {
  title: string;
  back?: boolean;
  menu?: ReactNode;
}

// COMPONENT style
const Hd = {
  Container: styled.header`
    height: 5rem;
    flex-shrink: 0;
  `,
  Inner: styled.div`
    height: 100%;
    position: relative;
    padding: 0 2rem;
  `,
  Title: styled.h1`
    font-size: 1.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.sans.medium};
    ${({ theme }) => theme.color.text.text_09};
  `,
  Back: styled.button``,
  Menu: {
    Container: styled.div``,
  },
};

export default Header;

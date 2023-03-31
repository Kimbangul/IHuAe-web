import { ReactNode } from 'react';
import Hd from './HedaerStyle';

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


export default Header;

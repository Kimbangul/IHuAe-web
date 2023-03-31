import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Hd from './HeaderStyle';
import HEADER_CHEVRON_8 from '@/assets/icons/common/header_chevron_8.svg';

const Header = ({ title, back, menu, onClickBackBtn }: HeaderPropsType) => {
  const router=useRouter();

  return (
    <Hd.Container>
      <Hd.Inner>
        {back && 
        <Hd.Back onClick={onClickBackBtn ? onClickBackBtn : ()=>router.back()}>
          <HEADER_CHEVRON_8 />
        </Hd.Back>
        }
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
  onClickBackBtn? : () => void;
  menu?: ReactNode;
}


export default Header;

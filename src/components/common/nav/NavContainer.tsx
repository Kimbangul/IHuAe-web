import NavView from './NavView';

import HOME_30 from '@/assets/icons/common/home_30.svg';
import CALENDAR_30 from '@/assets/icons/common/calendar_30.svg';
import MESSAGE_30 from '@/assets/icons/common/message_30.svg';
import PEN_33 from '@/assets/icons/common/pen_33.svg';
import { useEffect, useState } from 'react';

const NavContainer = () => {
  const [activeMenu, setActiveMenu] = useState('home');

  // PARAM navigation menu
  const navMenu = [
    { link: '/', title: 'home', icon: <HOME_30 /> },
    { link: '/calendar', title: 'calendar', icon: <CALENDAR_30 /> },
    { link: '/diary', title: 'diary', icon: <MESSAGE_30 /> },
    { link: '/chat', title: 'chat', icon: <PEN_33 /> },
  ];

  // FUNCTION get path
  useEffect(() => {
    const path = window.location.pathname.split('/');
    setActiveMenu(path[1] || 'home');
  }, []);

  return <NavView menu={navMenu} activeMenu={activeMenu} />;
};

export default NavContainer;

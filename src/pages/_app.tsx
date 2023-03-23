import '@/assets/style/fontStyle.css';
import { ThemeProvider } from 'styled-components';

import DefaultStyle from '@/assets/style';
import theme from '@/assets/style/Theme';
import HeadInfo from '@/components/common/HeadInfo';
import ModalView from '@/components/common/modal/ModalView';
import type { AppProps } from 'next/app';
import { Provider, useSelector } from 'react-redux';
import indexStore, { RootStateType } from '@/redux';

export default function App({ Component, pageProps }: AppProps) {
  // const rootState = useSelector((state: RootStateType) => state);

  return (
    <>
      <HeadInfo />
      <DefaultStyle />
      <Provider store={indexStore}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <ModalView />
        </ThemeProvider>
      </Provider>
    </>
  );
}

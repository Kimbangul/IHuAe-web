import '@/assets/style/fontStyle.css';
import { ThemeProvider } from 'styled-components';

import DefaultStyle from '@/assets/style';
import theme from '@/assets/style/Theme';
import HeadInfo from '@/components/common/HeadInfo';
import ModalView from '@/components/common/modal/ModalView';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadInfo />
      <DefaultStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ModalView>hello!</ModalView>
      </ThemeProvider>
    </>
  );
}

import DefaultStyle from '@/assets/style';
import HeadInfo from '@/components/common/HeadInfo';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadInfo />
      <DefaultStyle />
      <Component {...pageProps} />
    </>
  );
}

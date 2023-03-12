import Head from 'next/head';

const HeadInfo: React.FC = () => {
  return (
    <Head>
      <title>이후애</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charSet='UTF-8' />
      <meta property='og:url' content='' />
      <meta property='og:title' content='이후애' />
      <meta property='og:type' content='website' />
      {/* <meta property='og:description' content='' /> */}
      {/* <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      <link rel='icon' href='favicon.ico' type='image/x-icon' /> */}
    </Head>
  );
};

export default HeadInfo;

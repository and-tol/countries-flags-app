import type { AppProps } from 'next/app';

import { AppView } from '../views/app';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppView>
      <Component {...pageProps} />
    </AppView>
  );
}

export default MyApp;

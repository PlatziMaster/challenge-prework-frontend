import { ThemeProvider } from 'styled-components';
import GenerealState from 'context/GeneralState';

const theme = {
  primary: 'blue'
};

function MyApp({ Component, pageProps }) {
  return (
    <GenerealState>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </GenerealState>
  );
}

export default MyApp;

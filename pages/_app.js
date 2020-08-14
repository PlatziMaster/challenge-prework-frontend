import { ThemeProvider } from 'styled-components';

const theme = {
  primary: 'blue'
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;

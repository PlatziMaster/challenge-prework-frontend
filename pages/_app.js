import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import GenerealState from 'context/GeneralState';

const theme = {
  primary: 'blue'
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <GenerealState>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GenerealState>
    );
  }
}

export default MyApp;

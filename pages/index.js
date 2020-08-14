import Head from 'next/head';
import Home from 'components/Home';

const Index = () => {
  return (
    <>
      <Head>
        <title>Platzi Game</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Home />
    </>
  );
};

export default Index;

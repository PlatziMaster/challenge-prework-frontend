import Head from 'next/head';
import Home from 'components/Home';

const Index = ({ data }) => {
  return (
    <>
      <Head>
        <title>Platzi Game</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Home image={data} />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${process.env.NEXT_PUBLIC_API_KEY}&tag=winner&rating=g`
  );
  const data = await res.json();
  return {
    props: {
      data
    }
  };
}

export default Index;

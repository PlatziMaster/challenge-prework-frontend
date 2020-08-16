import Head from 'next/head';
import Home from 'components/Home';

const Index = ({ title, image }) => {
  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Funny mini-game build with javascript'
        />
        <meta name='author' content='Diego Alejandro Osorio Escobar' />
        <meta
          name='keywords'
          content='Game, platzi, platzi game, javascript, javascript game'
        />
        <title>Platzi Game</title>
        <link
          rel='preconnect'
          href='https://api.giphy.com'
          crossOrigin='true'
        />
        <link rel='dns-prefetch' href='https://api.giphy.com' />
        <link
          rel='preconnect'
          href='https://img.icons8.com'
          crossOrigin='true'
        />
        <link rel='dns-prefetch' href='https://img.icons8.com' />
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
          crossOrigin='true'
        />
        <link rel='dns-prefetch' href='https://fonts.googleapis.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Home image={image} title={title} />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${process.env.NEXT_PUBLIC_API_KEY}&tag=winner&rating=g`
  );
  const data = await res.json();
  const {
    data: {
      title,
      images: { fixed_height_downsampled }
    }
  } = data;
  const image = fixed_height_downsampled.url;
  return {
    props: {
      title,
      image
    }
  };
}

export default Index;

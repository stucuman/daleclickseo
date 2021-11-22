import Head from 'next/head';

const Home = () => (
  <div>
    <Head>
      <title>Dale Click - Marketing digital</title>
    </Head>
    <h1>
      trabajamos en  <a href="https://argentinosenbarcelona.com">Argentinos en Barcelona</a>
    </h1>
<h1>
      Viajamos en <a href="https://Tolkeyenpatagonia.com">tolkeyen</a>
    </h1>
<h1>
      Vivimos el   <a href="https://www.destinosur.com.ar/es/excursiones/d-el-calafate/c-terrestres/12/descubri-el-glaciar-perito-moreno/">Glaciar perito Moreno</a>
    </h1>

    <h3>
      Hooray 🎉 - you've built this with{' '}
      <a href="https://nextjs.org">Next.js</a>!
    </h3>

    <style jsx>{`
      :global(html, body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        font-size: calc(10px + 1vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #282c34;
        color: white;
      }

      a {
        color: pink;
        text-decoration: none;
      }

      .content {
        padding: 0 32px;
      }
    `}</style>
  </div>
);

export default Home;

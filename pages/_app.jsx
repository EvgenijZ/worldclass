import 'normalize.css/normalize.css';
import '../styles/style.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Attention from '../components/attention';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='main'>
        <Component {...pageProps} />
      </main>
      <Footer />
      <Attention />
    </>
  );
}

export default MyApp;

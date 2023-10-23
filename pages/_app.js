import '../public/icons/mdb-flags.css'
import '../public/icons/flaticon.css'
import '../styles/global.scss'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'


const App = ({Component, pageProps}) => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Acme&family=Fira+Sans:ital,wght@0,200;0,300;0,400;0,500;0,800;0,900;1,600;1,700&family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500&family=Roboto:wght@100;300;400;500;700;900&display=swap');

        :root{
          --font-acme: 'Acme', sans-serif;
          --font-firaCode: 'Fira Sans', sans-serif;
          --font-roboto: 'Roboto', sans-serif;
          --font-robotoMono: 'Roboto Mono', monospace;
        }
      `}</style>
      <Header/>
        <Component {...{pageProps}}/>
      <Footer/>
    </>
  )
}

export default App
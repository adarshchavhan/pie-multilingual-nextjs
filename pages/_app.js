import '../public/icons/mdb-flags.css'
import '../public/icons/flaticon.css'
import '../styles/global.scss'
import { Acme, Fira_Code, Roboto } from 'next/font/google'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'

const acme = Acme({
  subsets:['latin'],
  weight: ['400']
});

const firaCode = Fira_Code({
  subsets:['latin'],
  weight: ['300','400','500']
});


const roboto = Roboto({
  subsets:['latin'],
  weight: ['100','300','400','500','700','900']
})


const App = ({Component, pageProps}) => {
  return (
    <>
      <style jsx global>{`
        :root{
          --font-acme: ${acme.style.fontFamily};
          --font-firaCode: ${firaCode.style.fontFamily};
          --font-roboto: ${roboto.style.fontFamily};
        }
      `}</style>
      <Header/>
        <Component {...{pageProps}}/>
      <Footer/>
    </>
  )
}

export default App
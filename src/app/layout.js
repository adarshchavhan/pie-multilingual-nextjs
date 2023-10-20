import Header from '@/components/layout/header/Header';
import './global.scss'
import '../../public/icons/flaticon.css'
import { Acme, Fira_Code, Roboto } from 'next/font/google'
import Footer from '@/components/layout/footer/Footer';

// const inter = Inter({ subsets: ['latin'] })

const acme = Acme({
  subsets:['latin'],
  weight: ['400'],
  variable: '--font-acme'
});

const firaCode = Fira_Code({
  subsets:['latin'],
  weight: ['300','400','500'],
  variable: '--font-firaCode'
});


const roboto = Roboto({
  subsets:['latin'],
  weight: ['100','300','400','500','700','900'],
  variable: '--font-roboto'
})


export const metadata = {
  title: 'Multilingual Business Process Outsourcing Solutions, PIE Multi',
  description: 'Outsource to India and save cost by 50% on business service outsourcing. ✓ 24/7 Support ✓ Multilingual Business Process Outsourcing Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${acme.variable} ${firaCode.variable} ${roboto.variable}`}>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

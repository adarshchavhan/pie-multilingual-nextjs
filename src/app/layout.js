import Header from '@/components/header/Header';
import './globals.css'
import '@flaticon/flaticon-uicons/css/all/all.css'
import '../../public/icons/flaticon.css'
import { Acme, Roboto } from 'next/font/google'

const controller = new AbortController();
const signal = controller.signal;

// Later in your code, you might abort the request.
controller.abort();


const acme = Acme({ 
 weight: ['400'],
 subsets: ['latin'],
 variable: '--font-acme'
});

const roboto = Roboto({ 
  weight: ['100','300','400','500','700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto'
});



export const metadata = {
  title: "Pie Multilingual",
  description: "Outsource to India and save cost by 50% on business service outsourcing. ✓ 24/7 Support ✓ Multilingual Business Process Outsourcing Solutions"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${acme.variable} ${roboto.variable}`}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}

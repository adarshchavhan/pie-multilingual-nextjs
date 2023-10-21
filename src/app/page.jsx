import Banner from '@/components/home/banner/Banner'
import { CaseStudies } from '@/components/home/caseStudies/CaseStudies'
import { ChooseUs } from '@/components/home/chooseUs/ChooseUs'
import Contact from '@/components/home/contact/Contact'
import Countries from '@/components/home/countries/Countries'
import Industries from '@/components/home/industries/Industries'
import Pricing from '@/components/home/pricing/Pricing'
import Services from '@/components/home/services/Services'
import Testimonials from '@/components/home/testimonials/Testimonials'
import Video from '@/components/home/video/Video'
import axios from 'axios'

const getData = async() => {
  // const res = await axios.get('https://ipapi.co/json/');

  const data = {
    countryCode: 'IN',
    callingCode: +91
  }

  return data;
}

const page = async() => {
  const userCountry = await getData();
  

  return (
    <div>
      <Banner {...{userCountry}}/>
      <Video/>
      <Services/>
      <Countries/>
      <Industries/>
      <CaseStudies/>
      <ChooseUs/>
      <Testimonials/>
      <Pricing/>
      <Contact {...{userCountry}}/>
    </div>
  )
}

export default page

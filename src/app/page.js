import Banner from '@/components/home/banner/Banner'
import styles from './page.module.css'
import Video from '@/components/home/video/Video'
import Country from '@/components/home/country/Country'
import Services from '@/components/home/services/Services'
import Industries from '@/components/home/Indrustries/Industries'
import SuccessStories from '@/components/home/successStories/SuccessStories'
import Testimonials from '@/components/home/testimonials/Testimonials'
import ExpertTalk from '@/components/home/expertTalk/ExpertTalk'
import KnowPrice from '@/components/home/knowPrice/KnowPrice'
import ChooseUs from '@/components/home/ChooseUs/ChooseUs'

const page = () => {
  return (
    <>
      <Banner/>
      <Video/>
      <Services/>
      <Country/>
      <Industries/>
      <SuccessStories/>
      <ChooseUs/>
      <Testimonials/>
      <KnowPrice/>
      <ExpertTalk/>
    </>
  )
}

export default page
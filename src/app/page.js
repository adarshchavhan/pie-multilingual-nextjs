import Banner from '@/components/banner/Banner'
import styles from './page.module.css'
import Video from '@/components/video/Video'
import Country from '@/components/country/Country'
import Services from '@/components/services/Services'

const page = () => {
  return (
    <>
      <Banner/>
      <Video/>
      <Country/>
      <Services/>
    </>
  )
}

export default page
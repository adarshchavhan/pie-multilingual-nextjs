import Navbar from "@/components/foreign-language-services/language-translation/Navbar/Navbar"
import Banner from "@/components/foreign-language-services/language-translation/banner/Banner"
import Content from "@/components/foreign-language-services/language-translation/content/Content"

const index = () => {
  return (
    <div className='main-container'>
        <Banner/>
        <Navbar/>
        <Content/>
    </div>
  )
}

export default index
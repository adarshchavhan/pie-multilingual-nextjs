import styles from './testimonials.module.css';
import {testimonialsData} from '../../../../public/data/testimonialsData';
import Reviews from './Reviews';


const data = {
  heading: 'Testonomials',
  reviews: [
    {
      name: 'John Doe',
      role: 'Developer',
      location: 'Ohio, USA',
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
      name: 'John Doe',
      role: 'Developer',
      location: 'Ohio, USA',
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
      name: 'John Doe',
      role: 'Developer',
      location: 'Ohio, USA',
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
      name: 'John Doe',
      role: 'Developer',
      location: 'Ohio, USA',
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    }
  ]
}

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.heading}>{data.heading}</h3>
        <Reviews reviews={data.reviews}/>
      </div>
    </div>
  )
}

export default Testimonials
import styles from './successStories.module.css'
import {successStories} from '../../../../public/data/successStoriesData'
import Image from 'next/image'

const SuccessStories = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.topLeft}>
                <h4 className={styles.heading}>{successStories.heading}</h4>
                <h2 className={styles.bigText}>{successStories.bigText}</h2>
            </div>
            <div className={styles.topRight}>
                <div>
                    <p>Read our case studies to find out how we have helped our clients succeed.</p>
                    <a href='#'>ALL CASES</a>
                </div>
            </div>
        </div>

        <div className={styles.stories}>
            <div className={styles.storiesLeft}>
                <div className={styles.storyBig}>
                    <Image src={successStories.stories[0].img} width={568} height={568} alt="" />
                    <div className={styles.storyBigText}>
                        <h3>{successStories.stories[0].title}</h3>
                        <p>{successStories.stories[0].brief}</p>
                        <a href={successStories.stories[0].url}>Find out More</a>
                    </div>
                </div>
            </div>
            <div className={styles.storiesRight}>
                {successStories.stories.filter((item, i)=> i!==0).map((item, i)=> (
                    <div className={styles.story} key={i}>
                        <div className={styles.storyText}>
                            <h3>{item.title}</h3>
                            <p>{item.brief}</p>
                        </div>
                        <Image src={item.img} width={300} height={300} alt="" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SuccessStories
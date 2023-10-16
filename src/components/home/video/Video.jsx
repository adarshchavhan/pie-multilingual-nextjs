import Image from 'next/image';
import styles from './video.module.css';
import {videoData} from '@./../../public/data/videoData'

const Video = async() => {
  const {data} = videoData;


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className={styles.heading}>{data.attributes.heading}</h1>
          <div className={styles.description} dangerouslySetInnerHTML={{__html: data.attributes.description}}></div>
        </div>
        <div className={styles.right}>
          <div className={styles.videoWrapper}>
            <Image className={styles.videoBg1} src='/imgs/videoBg.png' alt="" width={100} height={100}/>
            <Image className={styles.videoBg2} src='/imgs/videoBg.png' alt="" width={100} height={100}/>
            <iframe 
              className={styles.video}
              src={`https://youtube.com/embed/${data.attributes?.videoId}`}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video


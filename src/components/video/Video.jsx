import styles from './video.module.css';
import {videoData} from '@./../../public/data/videoData'

const Video = async() => {
  const {data} = videoData;


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{data.attributes.heading}</h1>
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
  )
}

export default Video


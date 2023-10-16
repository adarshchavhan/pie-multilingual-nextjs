import Link from 'next/link';
import styles from './expertTalk.module.css';

const ExpertTalk = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <p className={styles.description}>
                Being pioneer in Multiilingual Business Services, we provide complete solutions for foreign languages. Our teams provide multilingual solutions that excatly match your requirement. Our experts understand that quality is most important in foreign language support hence our native & multi-industry expert provide superior solution on all of your business requirements.
            </p>

            <div className={styles.formContainer}>
              <h2 className={styles.formHeading}>Request a <span>FREE QUOTE</span></h2>
              <p className={styles.formBrief}>Partner with Multilingual Experts!</p>
              <p className={styles.formBrief}>Save your cost within 12 Hours.</p>

              <form className={styles.form}>
                <input type="text" className={styles.input} placeholder='Name' />
                <input type="email" className={styles.input} placeholder='Email' />
                <span className={styles.span}>
                  <button disabled>IN</button>
                  <input type="number" className={styles.input} placeholder='Phone' />
                </span>
                <textarea className={styles.textarea} cols="30" rows="7" placeholder='Write requirements'></textarea>

                <button className={styles.button}>➤ SEND</button>
                <p className={styles.text}>We respect your privacy <Link href="#">Policy</Link></p>
              </form>
          </div>
        </div>
    </div>
  )
}

export default ExpertTalk
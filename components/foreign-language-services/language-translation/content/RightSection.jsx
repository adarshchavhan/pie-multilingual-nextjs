import Link from 'next/link';
import styles from './content.module.scss';

const RightSection = () => {
  return (
    <div className={styles.right}>
      <div className={styles.formContainer}>
              <h2 className={styles.formHeading}>Request a <span>FREE QUOTE</span></h2>
              <p className={styles.formBrief}>Partner with Multilingual Experts!</p>
              <p className={styles.formBrief}>Save your cost within 12 Hours.</p>

              <form className={styles.form}>
                <input type="text" className={styles.input} placeholder='Name' />
                <input type="email" className={styles.input} placeholder='Email' />
                <span className={styles.span}>
                  <button disabled>{'IN'}</button>
                  <input type="number" className={styles.input} placeholder='Phone' />
                </span>
                <textarea className={styles.textarea} cols="30" rows="7" placeholder='Write requirements'></textarea>

                <div>
                  <input type="file" name="" id="" />
                </div>

                <button className={styles.button}>➤ SEND</button>
                <p className={styles.text}>We respect your privacy <Link href="/">Policy</Link></p>
              </form>
          </div>
    </div>
  )
}

export default RightSection
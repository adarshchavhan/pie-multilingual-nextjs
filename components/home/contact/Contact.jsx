import styles from './contact.module.scss'
import Link from 'next/link';

const Contact = ({userCountry}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>
            <span className={styles.blueText}>Connect with</span>
          <span className={styles.orangeText}>Foreign language Experts</span></h2>

        

          <p className={styles.description}>
            Being pioneer in Multiilingual Business Services, we provide
            complete solutions for foreign languages. Our teams provide
            multilingual solutions that excatly match your requirement. Our
            experts understand that quality is most important in foreign
            language support hence our native & multi-industry expert provide
            superior solution on all of your business requirements.
          </p>
        </div>

        <div className={styles.formContainer}>
          <h2 className={styles.formHeading}>HAVE QUESTIONS?</h2>
          <p className={styles.formBrief}>Send us a Message</p>

          <form className={styles.form}>
            <div>
              <input type="text" className={styles.input} placeholder="Name" />
              <span className={styles.span}>
                <button disabled>{userCountry.countryCode}</button>
                <input
                  type="number"
                  className={styles.input}
                  placeholder="Phone"
                />
              </span>
            </div>
            <input type="email" className={styles.input} placeholder="Email*" />
            <textarea
              className={styles.textarea}
              cols="30"
              rows="7"
              placeholder="Tell Us About Project*"
            ></textarea>

            <button type="submit" name="submit" className={styles.button}>
              <i className="fa fa-paper-plane"></i> Get in Touch
            </button>
            <p className={styles.text}>We respect your privacy. Read our <Link href="/">policy</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
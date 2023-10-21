import styles from './banner.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import coverImg from './cover.png'

export const bannerData = {
  data: {
      attributes: {
          bannerImg: {
              data: {
                  attributes: {
                      url: '/imgs/cover.png'
                  }
              }
          },

          clientImgs: {
              data: [
                  {
                      attributes: {
                          url: '/imgs/client-1.png'
                      }
                  },
                  {
                      attributes: {
                          url: '/imgs/client-2.png'
                      }
                  },
                  {
                      attributes: {
                          url: '/imgs/client-3.png'
                      }
                  },
                  {
                      attributes: {
                          url: '/imgs/client-4.png'
                      }
                  },
              ]
          },

          serviceTitle: 'Get Ahead of Competition with',
          serviceSubTitle: 'FOREIGN LANGUAGE SERVICE COMPANY',
          
          services: {
              data: [
                  {
                      attributes: {
                          icon: {
                              attributes: {
                                  name: 'flaticon-medal'
                              }
                          },
                          title: '250+',
                          description: 'Happy Customer'
                      }
                  },
                  {
                      attributes: {
                          icon: {
                              attributes: {
                                  name: 'flaticon-typing'
                              }
                          },
                          title: '600+',
                          description: 'Completed Projects'
                      }
                  },
                  {
                      attributes: {
                          icon: {
                              attributes: {
                                  name: 'flaticon-world'
                              }
                          },
                          title: '108K+',
                          description: 'Available Resources'
                      }
                  },
                  {
                      attributes: {
                          icon: {
                              attributes: {
                                  name: 'flaticon-customer-service'
                              }
                          },
                          title: '11K+',
                          description: 'Subscribers'
                      }
                  }
              ]
          }
      }
  }
}


const Banner = ({userCountry}) => {
  const {data: {attributes: {bannerImg, clientImgs}}} = bannerData;

  return (
    <div className={styles.container}>
      <Image 
        src={coverImg} alt='banner_image'
        fill
        className={styles.bannerImg}
        priority
      />


      <div className={styles.contentContainer}>
        <div className={styles.content}>

          <div className={styles.leftContainer}>
            <div className={styles.box}>
              <h2 className={styles.whiteText}>{bannerData.data.attributes.serviceTitle}</h2>
              <h2 className={styles.orangeText}>{bannerData.data.attributes.serviceSubTitle}</h2>

              <ul className={styles.serviceCards}>
                {
                  bannerData.data.attributes.services.data.map((item, i)=> (
                    <li className={styles.serviceCard} key={i}>
                      <div className={styles.serviceIcon}>
                        <i className={item.attributes.icon.attributes.name}></i>
                      </div>
                      <div className={styles.serviceText}>
                        <h4>{item.attributes.title}</h4>
                        <p>{item.attributes.description}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className={styles.clientContainer}>
              <h3 className={styles.clientHeading}>Trusted by</h3>
              <div className={styles.clients}>
                {clientImgs.data.map((item, i) =><span key={i}>
                  <Image src={item.attributes.url} alt='client' className={styles.clientImg} width={160} height={40} />
                </span>
                  )}
              </div>
            </div>
          </div>

          <div className={styles.formContainer}>
              <h2 className={styles.formHeading}>Request a <span>FREE QUOTE</span></h2>
              <p className={styles.formBrief}>Partner with Multilingual Experts!</p>
              <p className={styles.formBrief}>Save your cost within 12 Hours.</p>

              <form className={styles.form}>
                <input type="text" className={styles.input} placeholder='Name' />
                <input type="email" className={styles.input} placeholder='Email' />
                <span className={styles.span}>
                  <button disabled>{userCountry.countryCode}</button>
                  <input type="number" className={styles.input} placeholder='Phone' />
                </span>
                <textarea className={styles.textarea} cols="30" rows="7" placeholder='Write requirements'></textarea>

                <button className={styles.button}>➤ SEND</button>
                <p className={styles.text}>We respect your privacy <Link href="/">Policy</Link></p>
              </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Banner
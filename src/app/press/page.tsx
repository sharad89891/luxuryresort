import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Press Room | Aura Hotels',
  description: 'Explore the latest news, press releases, media coverage, and brand announcements from Aura Hotels globally.',
};

export default function PressRoomPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/presidential_villa_1778416375029.png"
            alt="Press Room"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Discover</span>
          <h1 className={styles.title}>Press Room</h1>
          <div className={styles.goldLine} />
          <p className={styles.desc}>Experience the finest collection of press room curated for our discerning guests.</p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Overview</span>
          <h2 className={styles.introTitle}>Latest Updates</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Explore the latest news, press releases, media coverage, and brand announcements from Aura Hotels globally.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {[{"name":"Forbes Travel Guide","location":"Award","desc":"Aura Hotels secures the highest number of 5-star ratings in the hospitality industry.","price":"2025","image":"/images/hotel_lobby_grand_1778416389976.png"},{"name":"New Resort Opening","location":"Launch","desc":"Announcing the opening of our newest eco-luxury resort in the Himalayas.","price":"Recent","image":"/images/infinity_pool_view_1778416175800.png"},{"name":"Culinary Excellence","location":"Award","desc":"Three of our flagship restaurants receive prestigious Michelin stars.","price":"2025","image":"/images/fine_dining_restaurant_1778416112215.png"}].map((item, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardImgWrap}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={styles.cardOverlay} />
                  <span className={styles.cardLocation}>{item.location}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardPrice}>{item.price}</span>
                    <Link href="/book" className={styles.cardBtn}>
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
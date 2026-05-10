import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Early Bird | Aura Hotels',
  description: 'The early bird catches the finest suites. Plan your travels well in advance to unlock our most lucrative savings and secure your preferred room types.',
};

export default function EarlyBirdPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/special_offers_banner_1778416333572.png"
            alt="Early Bird"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Discover</span>
          <h1 className={styles.title}>Early Bird</h1>
          <div className={styles.goldLine} />
          <p className={styles.desc}>Experience the finest collection of early bird curated for our discerning guests.</p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Overview</span>
          <h2 className={styles.introTitle}>Plan Ahead & Save</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            The early bird catches the finest suites. Plan your travels well in advance to unlock our most lucrative savings and secure your preferred room types.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {[{"name":"Advance Purchase 60","location":"All Properties","desc":"Book 60 days in advance and enjoy up to 35% savings on our Best Available Rate.","price":"Valid all year","image":"/images/special_offers_banner_1778416333572.png"},{"name":"Advance Purchase 30","location":"All Properties","desc":"Book 30 days in advance and enjoy up to 20% savings on our Best Available Rate.","price":"Valid all year","image":"/images/hotel_lobby_grand_1778416389976.png"},{"name":"Early Bird Weddings","location":"Palaces & Resorts","desc":"Confirm your wedding venue 12 months prior for exclusive waivers on venue rentals.","price":"Valid all year","image":"/images/wedding_banquet_hall_1778416202576.png"}].map((item, idx) => (
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
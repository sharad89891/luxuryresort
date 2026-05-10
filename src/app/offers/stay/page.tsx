import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Stay Offers | Aura Hotels',
  description: 'Discover exclusive room packages and rates designed to make your stay even more rewarding. From long weekend escapes to suite upgrades, find the perfect offer.',
};

export default function StayOffersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/presidential_villa_1778416375029.png"
            alt="Stay Offers"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Discover</span>
          <h1 className={styles.title}>Stay Offers</h1>
          <div className={styles.goldLine} />
          <p className={styles.desc}>Experience the finest collection of stay offers curated for our discerning guests.</p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Overview</span>
          <h2 className={styles.introTitle}>Luxurious Getaways</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Discover exclusive room packages and rates designed to make your stay even more rewarding. From long weekend escapes to suite upgrades, find the perfect offer.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {[{"name":"Suite Dreams","location":"All Properties","desc":"Book a suite and enjoy complimentary airport transfers, lounge access, and a spa voucher.","price":"Valid all year","image":"/images/luxury_suite_interior_1778416076439.png"},{"name":"Stay A Little Longer","location":"Resorts","desc":"Stay for 4 nights and pay for 3. Includes complimentary daily breakfast.","price":"Valid till Nov","image":"/images/beach_resort_view_1778416217181.png"},{"name":"Business Travel Rate","location":"City Hotels","desc":"Special rates for corporate travellers including high-speed Wi-Fi and express laundry.","price":"Valid all year","image":"/images/hotel_lobby_grand_1778416389976.png"}].map((item, idx) => (
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
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Aura Circle | Aura Hotels',
  description: 'Welcome to Aura Circle, a loyalty programme designed to recognize and reward your relationship with us. Earn points across stays, dining, and spa treatments, and redeem them for extraordinary experiences.',
};

export default function AuraCirclePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/presidential_villa_1778416375029.png"
            alt="Aura Circle"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Discover</span>
          <h1 className={styles.title}>Aura Circle</h1>
          <div className={styles.goldLine} />
          <p className={styles.desc}>Experience the finest collection of aura circle curated for our discerning guests.</p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Overview</span>
          <h2 className={styles.introTitle}>Loyalty Reimagined</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Welcome to Aura Circle, a loyalty programme designed to recognize and reward your relationship with us. Earn points across stays, dining, and spa treatments, and redeem them for extraordinary experiences.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {[{"name":"Silver Tier","location":"Entry Level","desc":"Enjoy members-only rates, complimentary Wi-Fi, and late checkout up to 2 PM.","price":"Free to join","image":"/images/hotel_lobby_grand_1778416389976.png"},{"name":"Gold Tier","location":"Mid Level","desc":"All Silver benefits plus complimentary room upgrades, early check-in, and 15% dining discount.","price":"Requires 20 Nights","image":"/images/luxury_suite_interior_1778416076439.png"},{"name":"Platinum Tier","location":"Top Level","desc":"The ultimate privilege: guaranteed room availability, suite upgrades, and bespoke gifts.","price":"Requires 60 Nights","image":"/images/presidential_villa_1778416375029.png"}].map((item, idx) => (
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
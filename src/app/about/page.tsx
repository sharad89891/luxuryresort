import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Story | Majesty Hotels',
  description: 'For over a century, Majesty Hotels has defined the art of luxury hospitality. From building India&apos;s first luxury hotel to restoring historic palaces, our legacy is built on the foundation of soulful, heartfelt service.',
};

export default function OurStoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/heritage_palace_exterior_1778416158734.png"
            alt="Our Story"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Discover</span>
          <h1 className={styles.title}>Our Story</h1>
          <div className={styles.goldLine} />
          <p className={styles.desc}>Experience the finest collection of our story curated for our discerning guests.</p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Overview</span>
          <h2 className={styles.introTitle}>Soulful Luxury Since 1903</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            For over a century, Majesty Hotels has defined the art of luxury hospitality. From building India's first luxury hotel to restoring historic palaces, our legacy is built on the foundation of soulful, heartfelt service.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {[{"name":"The Original Icon","location":"1903","desc":"The opening of our first hotel in Mumbai, setting a new global standard for luxury.","price":"History","image":"/images/hotel_lobby_grand_1778416389976.png"},{"name":"Palace Restorations","location":"1970s","desc":"Pioneering the conversion of authentic royal palaces into world-class luxury hotels.","price":"Heritage","image":"/images/heritage_palace_exterior_1778416158734.png"},{"name":"Global Expansion","location":"Present","desc":"Taking the warmth of Indian hospitality to iconic destinations across the globe.","price":"Global","image":"/images/presidential_villa_1778416375029.png"}].map((item, idx) => (
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
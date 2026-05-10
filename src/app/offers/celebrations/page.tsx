import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Celebration Packages | Aura Hotels',
  description: 'Whether it&apos;s the holiday season, a honeymoon, or a milestone birthday, our celebration packages are bundled with surprises to make your moments magical.',
};

export default function CelebrationPackagesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/wedding_banquet_hall_1778416202576.png"
            alt="Celebration Packages"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Discover</span>
          <h1 className={styles.title}>Celebration Packages</h1>
          <div className={styles.goldLine} />
          <p className={styles.desc}>Experience the finest collection of celebration packages curated for our discerning guests.</p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Overview</span>
          <h2 className={styles.introTitle}>Festive Joy</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Whether it's the holiday season, a honeymoon, or a milestone birthday, our celebration packages are bundled with surprises to make your moments magical.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {[{"name":"Honeymoon Bliss","location":"Resorts & Palaces","desc":"Romantic room decor, a bottle of champagne, and a private dinner under the stars.","price":"Bespoke","image":"/images/luxury_suite_interior_1778416076439.png"},{"name":"Festive Gala","location":"All Properties","desc":"New Year and Christmas specials featuring grand gala dinners and live entertainment.","price":"Seasonal","image":"/images/wedding_banquet_hall_1778416202576.png"},{"name":"Anniversary Retreat","location":"All Properties","desc":"Complimentary cake, room upgrade subject to availability, and 20% off on spa services.","price":"Valid all year","image":"/images/heritage_palace_exterior_1778416158734.png"}].map((item, idx) => (
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
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Careers | Aura Hotels',
  description: 'Our people are our greatest asset. Build a rewarding career with a brand that champions continuous learning, diversity, and the art of soulful service.',
};

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hotel_lobby_grand_1778416389976.png"
            alt="Careers"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Discover</span>
          <h1 className={styles.title}>Careers</h1>
          <div className={styles.goldLine} />
          <p className={styles.desc}>Experience the finest collection of careers curated for our discerning guests.</p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Overview</span>
          <h2 className={styles.introTitle}>Join the Family</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Our people are our greatest asset. Build a rewarding career with a brand that champions continuous learning, diversity, and the art of soulful service.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {[{"name":"Hotel Operations","location":"Global","desc":"Roles in front office, housekeeping, and guest relations.","price":"Full Time","image":"/images/hotel_lobby_grand_1778416389976.png"},{"name":"Culinary Arts","location":"Global","desc":"Join our kitchens as a chef and learn from industry maestros.","price":"Full Time","image":"/images/gourmet_cuisine_dish_1778416264157.png"},{"name":"Management Trainee","location":"Global","desc":"Our rigorous leadership program designed to groom the hoteliers of tomorrow.","price":"Training","image":"/images/luxury_suite_interior_1778416076439.png"}].map((item, idx) => (
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
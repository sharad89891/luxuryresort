'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './WeddingsSection.module.css';

export default function WeddingsSection() {
  return (
    <section className={styles.section} id="weddings-section">
      <div className={styles.imageWrap}>
        <Image
          src="/images/wedding_banquet_hall_1778416202576.png"
          alt="Timeless Aura Weddings"
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <span className={styles.eyebrow}>Timeless Celebrations</span>
        <div className={styles.goldLine} />
        <h2 className={styles.title}>
          Weddings at Aura
        </h2>
        <p className={styles.subtitle}>
          Every love story is unique, and at Majesty Hotels, we craft bespoke weddings 
          that honour the grandeur of your moment. From opulent palace celebrations 
          to intimate beachside ceremonies, we make every wish come true.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>100+</span>
            <span className={styles.statLabel}>Venues</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>120</span>
            <span className={styles.statLabel}>Years of Legacy</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>50K+</span>
            <span className={styles.statLabel}>Celebrations</span>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href="/experiences/weddings" className={styles.btnPrimary} id="weddings-explore">
            Explore Weddings
          </Link>
          <Link href="/contact" className={styles.btnOutline} id="weddings-enquire">
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
}

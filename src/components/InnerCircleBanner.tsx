'use client';
import Link from 'next/link';
import styles from './InnerCircleBanner.module.css';

export default function InnerCircleBanner() {
  return (
    <section className={styles.section} id="inner-circle-banner">
      <div className={styles.inner}>
        <div className={styles.decoration}>
          <span className={styles.decorLine} />
          <span className={styles.decorIcon}>✦</span>
          <span className={styles.decorLine} />
        </div>
        <span className={styles.eyebrow}>Loyalty Reimagined</span>
        <h2 className={styles.title}>Aura Circle</h2>
        <p className={styles.subtitle}>
          Become a member and discover a world of privileges — exclusive rates, 
          room upgrades, curated experiences, and a personalised journey at every Aura property.
        </p>
        <div className={styles.tiers}>
          {['Silver', 'Gold', 'Platinum', 'Epicure'].map((tier) => (
            <div key={tier} className={styles.tier}>
              <span className={styles.tierName}>{tier}</span>
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <Link href="/innercircle" className={styles.joinBtn} id="inner-circle-join">
            Join Now — It's Free
          </Link>
          <Link href="/innercircle#benefits" className={styles.learnBtn} id="inner-circle-learn">
            Explore Benefits
          </Link>
        </div>
      </div>
    </section>
  );
}

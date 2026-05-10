'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './DiningHighlight.module.css';

export default function DiningHighlight() {
  return (
    <section className={styles.section} id="dining-highlight">
      <div className={styles.grid}>
        {/* Left Image */}
        <div className={styles.imageCol}>
          <div className={styles.mainImage}>
            <Image
              src="/images/gourmet_cuisine_dish_1778416264157.png"
              alt="Award-winning gourmet cuisine"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={styles.subImage}>
            <Image
              src="/images/rooftop_bar_city_1778416307700.png"
              alt="Rooftop bar with city views"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className={styles.contentCol}>
          <span className={styles.eyebrow}>Award-Winning Gastronomy</span>
          <div className={styles.goldLine} />
          <h2 className={styles.title}>A Culinary Legacy Like No Other</h2>
          <p className={styles.desc}>
            Across our portfolio, the finest chefs craft menus that celebrate India's 
            extraordinary culinary heritage — from royal Mughlai feasts to coastal 
            delicacies, spice-route revelations, and contemporary Indian fusion.
          </p>
          <ul className={styles.features}>
            <li className={styles.feature}>
              <span className={styles.featureIcon}>◆</span>
              <div>
                <strong>Fine Dining</strong>
                <p>Michelin-star inspirations, locally sourced ingredients, and flawless presentation</p>
              </div>
            </li>
            <li className={styles.feature}>
              <span className={styles.featureIcon}>◆</span>
              <div>
                <strong>Bars & Lounges</strong>
                <p>Crafted cocktails, rare whiskies, and curated wine lists with panoramic views</p>
              </div>
            </li>
            <li className={styles.feature}>
              <span className={styles.featureIcon}>◆</span>
              <div>
                <strong>High Tea</strong>
                <p>The legendary Aura tradition — exquisite teas, pastries, and afternoon indulgence</p>
              </div>
            </li>
          </ul>
          <Link href="/dining" className={styles.cta} id="dining-explore-btn">
            Explore Dining →
          </Link>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Gift Cards | Majesty Hotels',
  description: 'Give the gift of Aura luxury. Purchase Aura gift cards for stays, dining, spa treatments, and more.',
};

export default function GiftingPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/presidential_villa_1778416375029.png"
            alt="Aura Gift Cards"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>The Perfect Gift</span>
          <h1 className={styles.heroTitle}>Aura Gift Cards</h1>
          <div className={styles.goldLine} />
          <p className={styles.heroDesc}>
            Give the extraordinary gift of Aura luxury — a gift card that opens doors 
            to iconic stays, world-class dining, and transformative spa experiences.
          </p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {[
              { amount: '₹5,000', desc: 'Perfect for a luxurious dining experience or spa treatment', id: 'gc-5000' },
              { amount: '₹15,000', desc: 'Ideal for a weekend getaway or special celebration package', id: 'gc-15000' },
              { amount: '₹50,000', desc: 'The ultimate gift for a memorable palace stay experience', id: 'gc-50000' },
              { amount: 'Custom', desc: 'Choose your own amount for a truly personalised gift', id: 'gc-custom' },
            ].map((gc) => (
              <div key={gc.id} className={styles.card} id={gc.id}>
                <div className={styles.cardTop}>
                  <span className={styles.logoSmall}>MAJESTY</span>
                  <span className={styles.logoSubSmall}>GIFT CARD</span>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.amount}>{gc.amount}</span>
                  <p className={styles.cardDesc}>{gc.desc}</p>
                  <Link href="/gifting/buy" className={styles.buyBtn}>
                    Purchase Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

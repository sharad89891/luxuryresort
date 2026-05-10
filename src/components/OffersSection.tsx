'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './OffersSection.module.css';

const offers = [
  {
    id: 'summer-escape',
    tag: 'Exclusive',
    title: 'Summer Escape',
    desc: 'Enjoy up to 30% off on room rates with complimentary breakfast for two at select Aura properties.',
    validity: 'Valid till 30 Sep 2025',
    image: '/images/special_offers_banner_1778416333572.png',
    href: '/offers/summer-escape',
    badge: '30% Off',
  },
  {
    id: 'romance-package',
    tag: 'Romantic',
    title: 'Romantic Rendezvous',
    desc: 'Celebrate love with a curated package — candlelit dinners, spa for two, and rose-petal turndown.',
    validity: 'Available year-round',
    image: '/images/presidential_villa_1778416375029.png',
    href: '/offers/romance',
    badge: 'Couple\'s Special',
  },
  {
    id: 'weekend-getaway',
    tag: 'Weekend',
    title: 'Weekend Getaway',
    desc: 'Escape the city with our weekend wellness package including yoga sessions and spa treatments.',
    validity: 'Fri–Sun stays',
    image: '/images/ayurveda_spa_treatment_1778416350069.png',
    href: '/offers/weekend',
    badge: 'Wellness Included',
  },
];

export default function OffersSection() {
  return (
    <section className={styles.section} id="offers-section">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Curated For You</span>
          <h2 className={styles.title}>Exclusive Offers</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Discover our handpicked offers, crafted to make every stay more memorable.
          </p>
        </div>

        <div className={styles.grid}>
          {offers.map((offer) => (
            <div key={offer.id} className={styles.card} id={`offer-${offer.id}`}>
              <div className={styles.imageWrap}>
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={styles.imageOverlay} />
                <span className={styles.badge}>{offer.badge}</span>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.tag}>{offer.tag}</span>
                <h3 className={styles.cardTitle}>{offer.title}</h3>
                <p className={styles.cardDesc}>{offer.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.validity}>{offer.validity}</span>
                  <Link href={offer.href} className={styles.viewOffer}>
                    View Offer →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link href="/offers" className={styles.viewAllBtn} id="view-all-offers">
            View All Offers
          </Link>
        </div>
      </div>
    </section>
  );
}

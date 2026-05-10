'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedHotels.module.css';

const hotels = [
  {
    id: 'the-majesty-palace',
    name: 'The Majesty Palace',
    logo: '/images/the_majesty_palace_logo.png',
    location: 'Mumbai',
    image: '/images/hotel_lobby_grand_1778416389976.png',
    tag: 'Icon',
    desc: 'An icon of Mumbai waterfront since 1903',
    href: '/hotels/the-majesty-palace',
  },
  {
    id: 'rambagh-palace',
    name: 'Rambagh Palace',
    location: 'Jaipur',
    image: '/images/heritage_palace_exterior_1778416158734.png',
    tag: 'Heritage',
    desc: 'The Jewel of Jaipur, a royal retreat',
    href: '/hotels/rambagh-palace',
  },
  {
    id: 'aura-exotica',
    name: 'Majesty Exotica Resort & Spa',
    location: 'Goa',
    image: '/images/beach_resort_view_1778416217181.png',
    tag: 'Resort',
    desc: 'Where the sea meets pure luxury',
    href: '/hotels/aura-exotica-goa',
  },
  {
    id: 'aura-lake-palace',
    name: 'Majesty Lake Palace',
    location: 'Udaipur',
    image: '/images/infinity_pool_view_1778416175800.png',
    tag: 'Palace',
    desc: 'A floating marble palace on Lake Pichola',
    href: '/hotels/aura-lake-palace',
  },
];

export default function FeaturedHotels() {
  return (
    <section className={styles.section} id="featured-hotels">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Our Legendary Properties</span>
          <h2 className={styles.title}>Iconic Hotels & Resorts</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            From majestic palaces to serene beachfronts, each Aura property is a world unto itself — 
            steeped in heritage, enriched by nature, and defined by extraordinary service.
          </p>
        </div>

        {/* Hotel Grid */}
        <div className={styles.grid}>
          {hotels.map((hotel) => (
            <Link href={hotel.href} key={hotel.id} className={styles.card} id={`hotel-card-${hotel.id}`}>
              <div className={styles.imageWrap}>
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className={styles.cardOverlay} />
                <span className={styles.tag}>{hotel.tag}</span>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardLocation}>{hotel.location}</p>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardName}>{hotel.name}</h3>
                  {hotel.logo && (
                    <div className={styles.hotelLogo}>
                      <Image src={hotel.logo} alt="Hotel Logo" width={24} height={24} />
                    </div>
                  )}
                </div>
                <p className={styles.cardDesc}>{hotel.desc}</p>
                <span className={styles.cardLink}>
                  Explore <span className={styles.arrow}>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link href="/hotels" className={styles.viewAllBtn} id="view-all-hotels">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}

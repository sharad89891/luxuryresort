import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Beach Resorts | Majesty Hotels',
  description: 'Wake up to the gentle lullaby of ocean waves. Our beachfront resorts are sanctuaries of coastal luxury, offering private beaches, world-class water sports, and endless horizons. Designed to blend seamlessly with nature, they offer the ultimate tropical escape.',
};

export default function BeachResortsPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/beach_resort_view_1778416217181.png"
            alt="Beach Resorts"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>The Collection</span>
          <h1 className={styles.title}>Beach Resorts</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>Sun, Sand & Soul</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Wake up to the gentle lullaby of ocean waves. Our beachfront resorts are sanctuaries of coastal luxury, offering private beaches, world-class water sports, and endless horizons. Designed to blend seamlessly with nature, they offer the ultimate tropical escape.
          </p>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Majesty Exotica Resort","location":"Goa","desc":"Spread across 56 acres of lush gardens along Benaulim Beach, this Mediterranean-inspired resort offers an oasis of tranquility. Featuring private pool villas, an award-winning spa, and unparalleled coastal dining.","image":"/images/beach_resort_view_1778416217181.png","highlights":["Private Beach Access","Golf Course","Award-winning Spa"]},{"name":"Aura Coral Reef","location":"Maldives","desc":"Set in a private lagoon, our Maldivian retreat features spectacular overwater villas with glass floors, vibrant coral reefs right at your doorstep, and personalized butler service on untouched white sands.","image":"/images/infinity_pool_view_1778416175800.png","highlights":["Overwater Villas","PADI Dive Centre","Submarine Dining"]}].map((feat: any, idx: number) => (
            <div key={idx} className={styles.featuredRow}>
              <div className={styles.featImgWrap}>
                <Image
                  src={feat.image}
                  alt={feat.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1100px) 100vw, 50vw"
                />
              </div>
              <div className={styles.featContent}>
                <h3 className={styles.featName}>{feat.name}</h3>
                <span className={styles.featLoc}>{feat.location}</span>
                <p className={styles.featDesc}>{feat.desc}</p>
                <ul className={styles.featHighlights}>
                  {feat.highlights.map((h: string) => (
                    <li key={h} className={styles.featHighlight}>{h}</li>
                  ))}
                </ul>
                <Link href="/book" className={styles.featBtn}>
                  Reserve Your Stay
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>More Beach Resorts</h2>
          <div className={styles.grid}>
            {[{"name":"Fisherman's Cove","location":"Chennai","image":"/images/presidential_villa_1778416375029.png","desc":"Built on the ramparts of an old Dutch Fort, offering rugged luxury on the Bay of Bengal."},{"name":"Aura Green Cove","location":"Kovalam","image":"/images/infinity_pool_view_1778416175800.png","desc":"A Balinese-style resort nestled on a hill overlooking the majestic Arabian Sea."},{"name":"Aura Bentota","location":"Sri Lanka","image":"/images/beach_resort_view_1778416217181.png","desc":"Situated on the finest beach in Sri Lanka, offering perfect waves and golden sands."}].map((item: any, idx: number) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardImgWrap}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardLoc}>{item.location}</span>
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  <Link href="/book" className={styles.cardLink}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities/Experiences Section */}
      <section className={styles.amenitiesSection}>
        <div className={styles.container}>
          <h2 className={styles.amTitle}>Signature Experiences</h2>
          <div className={styles.amGrid}>
            {[{"title":"Water Sports","icon":"🏄","desc":"From jet skiing to parasailing, thrills on the open water."},{"title":"Scuba Diving","icon":"🤿","desc":"Explore vibrant coral reefs with PADI certified instructors."},{"title":"Beach Dining","icon":"🕯️","desc":"Private, candlelit dinners arranged on pristine sands."},{"title":"Infinity Pools","icon":"🏊","desc":"Seamlessly blending into the horizon of the ocean."}].map((am: any, idx: number) => (
              <div key={idx} className={styles.amCard}>
                <span className={styles.amIcon}>{am.icon}</span>
                <h3 className={styles.amName}>{am.name || am.title}</h3>
                <p className={styles.amDesc}>{am.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Experience Aura?</h2>
          <p className={styles.ctaDesc}>Join Majesty Circle for exclusive rates, or book your next extraordinary escape today.</p>
          <Link href="/book" className={styles.ctaBtn}>
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
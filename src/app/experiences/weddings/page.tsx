import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Timeless Weddings | Majesty Hotels Experiences',
  description: 'From intimate beachside vows to grand palatial extravaganzas, Majesty Hotels has been the magnificent backdrop to the world&apos;s most beautiful love stories. Our dedicated wedding specialists orchestrate every detail flawlessly, ensuring your special day is nothing short of magical.',
};

export default function TimelessWeddingsPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/wedding_banquet_hall_1778416202576.png"
            alt="Timeless Weddings"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Curated Journeys</span>
          <h1 className={styles.title}>Timeless Weddings</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>Your Perfect Day</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            From intimate beachside vows to grand palatial extravaganzas, Majesty Hotels has been the magnificent backdrop to the world's most beautiful love stories. Our dedicated wedding specialists orchestrate every detail flawlessly, ensuring your special day is nothing short of magical.
          </p>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Palace Weddings","location":"Rajasthan & Hyderabad","desc":"Exchange vows in majestic courtyards under the stars. Experience a royal wedding complete with caparisoned elephants, traditional folk musicians, spectacular fireworks, and feasts fit for kings.","image":"/images/heritage_palace_exterior_1778416158734.png","highlights":["Royal Processions","Palatial Venues","Heritage Feasts"]},{"name":"Beachside Ceremonies","location":"Goa, Maldives & Sri Lanka","desc":"Say \"I do\" with the ocean as your witness. Barefoot luxury ceremonies on pristine white sands at sunset, followed by a romantic seaside reception illuminated by hundreds of tiki torches and lanterns.","image":"/images/beach_resort_view_1778416217181.png","highlights":["Sunset Vows","Seaside Receptions","Tropical Florals"]}].map((feat: any, idx: number) => (
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
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>More Timeless Weddings</h2>
          <div className={styles.grid}>
            {[{"name":"City Grandeur","location":"Mumbai & Delhi","image":"/images/hotel_lobby_grand_1778416389976.png","desc":"Opulent ballroom celebrations accommodating thousands with world-class catering."},{"name":"Intimate Ceremonies","location":"Mountain Retreats","image":"/images/infinity_pool_view_1778416175800.png","desc":"Cozy, private weddings surrounded by cedar forests and mountain mists."},{"name":"Pre-Wedding Shoots","location":"All Properties","image":"/images/wedding_banquet_hall_1778416202576.png","desc":"Exclusive access to our iconic locations for breathtaking photography."}].map((item: any, idx: number) => (
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

      {/* Signature Elements */}
      <section className={styles.amenitiesSection}>
        <div className={styles.container}>
          <h2 className={styles.amTitle}>The Aura Difference</h2>
          <div className={styles.amGrid}>
            {[{"title":"Wedding Planners","icon":"📋","desc":"Dedicated specialists to manage every detail from decor to logistics."},{"title":"Master Chefs","icon":"🎂","desc":"Customized multi-cuisine menus and spectacular wedding cakes."},{"title":"Bridal Spa","icon":"💆‍♀️","desc":"Pre-wedding rejuvenation packages at the J Wellness Circle."},{"title":"Luxury Fleet","icon":"🚗","desc":"Vintage cars and luxury limousines for the perfect bridal entry."}].map((am: any, idx: number) => (
              <div key={idx} className={styles.amCard}>
                <span className={styles.amIcon}>{am.icon}</span>
                <h3 className={styles.amName}>{am.title}</h3>
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
          <h2 className={styles.ctaTitle}>Craft Your Journey</h2>
          <p className={styles.ctaDesc}>Let our concierges weave the perfect itinerary for your next unforgettable escape.</p>
          <Link href="/book" className={styles.ctaBtn}>
            Plan Your Experience
          </Link>
        </div>
      </section>
    </div>
  );
}
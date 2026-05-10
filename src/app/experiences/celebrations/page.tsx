import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Celebrations & Events | Aura Hotels Experiences',
  description: 'Anniversaries, milestone birthdays, corporate retreats, or family reunions — we elevate every special occasion with bespoke dining, curated activities, and our signature heartfelt hospitality. Let us turn your celebrations into lifelong memories.',
};

export default function CelebrationsEventsPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/luxury_suite_interior_1778416076439.png"
            alt="Celebrations & Events"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Curated Journeys</span>
          <h1 className={styles.title}>Celebrations & Events</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>Milestones Matter</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Anniversaries, milestone birthdays, corporate retreats, or family reunions — we elevate every special occasion with bespoke dining, curated activities, and our signature heartfelt hospitality. Let us turn your celebrations into lifelong memories.
          </p>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Bespoke Private Dining","location":"All Properties","desc":"Surprise your loved one with a candlelit dinner in an exclusive, secluded location. Whether it's a floating pontoon on a lake, a private beach cove, or a palace rooftop, our master chefs will curate a personalized menu just for you.","image":"/images/fine_dining_restaurant_1778416112215.png","highlights":["Exclusive Locations","Personalized Menus","Private Butler Service"]},{"name":"Honeymoon Retreats","location":"Resorts & Palaces","desc":"Begin your life together in unparalleled luxury. Enjoy romantic room setups with rose petals and champagne, couple's spa therapies, private yacht cruises, and breakfast in bed served by your personal butler.","image":"/images/luxury_suite_interior_1778416076439.png","highlights":["Romantic Turndown","Couples Spa Rituals","Breakfast in Bed"]}].map((feat: any, idx: number) => (
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
          <h2 className={styles.sectionTitle}>More Celebrations & Events</h2>
          <div className={styles.grid}>
            {[{"name":"Gala Events","location":"City Hotels","image":"/images/wedding_banquet_hall_1778416202576.png","desc":"Flawlessly executed grand parties and corporate galas in our spectacular banquet halls."},{"name":"Family Reunions","location":"Resorts","image":"/images/beach_resort_view_1778416217181.png","desc":"Multi-villa bookings with private pools, personalized activities, and group dining."},{"name":"Proposals","location":"Iconic Spots","image":"/images/heritage_palace_exterior_1778416158734.png","desc":"Meticulously planned, picture-perfect proposal setups at our most romantic locations."}].map((item: any, idx: number) => (
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
            {[{"title":"Event Concierge","icon":"✨","desc":"Personalized assistance to orchestrate surprises and manage details."},{"title":"Custom Decor","icon":"💐","desc":"In-house florists and designers to match your exact theme."},{"title":"Entertainment","icon":"🎻","desc":"Arranging everything from classical quartets to contemporary DJs."},{"title":"Memories","icon":"📷","desc":"Professional photography and videography services on request."}].map((am: any, idx: number) => (
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
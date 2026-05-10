import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Experiences | Aura Hotels Experiences',
  description: 'At Aura Hotels, we believe that true luxury lies in the experiences that stay with you forever. From tracking Bengal tigers in the wild to renewing your vows in a centuries-old palace, our curated experiences are designed to immerse you in the beauty, culture, and thrill of your destination.',
};

export default function ExperiencesPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/cultural_experiences_1778416250752.png"
            alt="Experiences"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Curated Journeys</span>
          <h1 className={styles.title}>Experiences</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>Journeys Beyond the Ordinary</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            At Aura Hotels, we believe that true luxury lies in the experiences that stay with you forever. From tracking Bengal tigers in the wild to renewing your vows in a centuries-old palace, our curated experiences are designed to immerse you in the beauty, culture, and thrill of your destination.
          </p>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Cultural Immersion","location":"Heritage Properties","desc":"Immerse yourself in the vibrant tapestry of Indian culture. From private classical concerts in centuries-old courtyards to guided heritage walks, we bring history to life.","image":"/images/cultural_experiences_1778416250752.png","highlights":["Heritage Walks","Artisan Workshops","Classical Arts"]},{"name":"Wildlife Safaris","location":"National Parks","desc":"Venture into the heart of India's most renowned national parks. Our expert naturalists will guide you on bespoke safaris to witness tigers, leopards, and diverse birdlife.","image":"/images/wildlife_safari_experience_1778416289320.png","highlights":["Tiger Tracking","Night Safaris","Expert Naturalists"]}].map((feat: any, idx: number) => (
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
          <h2 className={styles.sectionTitle}>More Experiences</h2>
          <div className={styles.grid}>
            {[{"name":"Adventure","location":"Mountains & Coasts","image":"/images/infinity_pool_view_1778416175800.png","desc":"Himalayan trekking, deep sea diving, and thrilling river rafting."},{"name":"Weddings","location":"Global Destinations","image":"/images/wedding_banquet_hall_1778416202576.png","desc":"Palatial extravaganzas and intimate beachside ceremonies."},{"name":"Celebrations","location":"All Properties","image":"/images/luxury_suite_interior_1778416076439.png","desc":"Bespoke private dining, honeymoons, and grand family reunions."}].map((item: any, idx: number) => (
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
            {[{"title":"Expert Guides","icon":"🧭","desc":"Every experience is led by certified professionals and local experts."},{"title":"Uncompromised Luxury","icon":"💎","desc":"Enjoy thrilling adventures without sacrificing five-star comfort."},{"title":"Bespoke Itineraries","icon":"🗺️","desc":"Activities tailored specifically to your interests and schedule."},{"title":"Authenticity","icon":"🏺","desc":"Genuine, deeply researched cultural and regional interactions."}].map((am: any, idx: number) => (
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
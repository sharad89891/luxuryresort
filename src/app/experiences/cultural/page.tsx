import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Cultural Heritage | Majesty Hotels Experiences',
  description: 'Immerse yourself in the vibrant tapestry of Indian culture. From private classical concerts in centuries-old courtyards to guided heritage walks through ancient monuments, we bring history to life. Our cultural experiences are curated to provide a profound connection to the local heritage, guided by historians, artisans, and storytellers.',
};

export default function CulturalHeritagePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/cultural_experiences_1778416250752.png"
            alt="Cultural Heritage"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Curated Journeys</span>
          <h1 className={styles.title}>Cultural Heritage</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>Living Traditions</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Immerse yourself in the vibrant tapestry of Indian culture. From private classical concerts in centuries-old courtyards to guided heritage walks through ancient monuments, we bring history to life. Our cultural experiences are curated to provide a profound connection to the local heritage, guided by historians, artisans, and storytellers.
          </p>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Royal Grandeur","location":"Palaces of Rajasthan","desc":"Experience a traditional royal welcome that harks back to the era of the Maharajas. Arrive in a vintage horse-drawn carriage accompanied by ceremonial elephants, royal trumpets, and a shower of rose petals.","image":"/images/heritage_palace_exterior_1778416158734.png","highlights":["Ceremonial Welcome","Vintage Carriages","Traditional Music"]},{"name":"Ganga Aarti","location":"Aura Rishikesh","desc":"Witness the mesmerizing evening Ganga Aarti ceremony from a private vantage point. The spiritual chanting, rhythmic drumming, and thousands of floating diyas create an unforgettable atmosphere of devotion.","image":"/images/infinity_pool_view_1778416175800.png","highlights":["Private Viewing","Spiritual Chanting","Floating Diyas"]}].map((feat: any, idx: number) => (
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
          <h2 className={styles.sectionTitle}>More Cultural Heritage</h2>
          <div className={styles.grid}>
            {[{"name":"Heritage Walks","location":"Multiple Locations","image":"/images/cultural_experiences_1778416250752.png","desc":"Guided tours through ancient forts, historic monuments, and bustling local bazaars."},{"name":"Classical Arts","location":"Cultural Hubs","image":"/images/hotel_lobby_grand_1778416389976.png","desc":"Private performances of classical Indian dance and music in historic courtyards."},{"name":"Artisan Workshops","location":"Jaipur & Varanasi","image":"/images/gourmet_cuisine_dish_1778416264157.png","desc":"Learn traditional block printing, pottery, or miniature painting from master craftsmen."}].map((item: any, idx: number) => (
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
            {[{"title":"Local Historians","icon":"🏛️","desc":"Tours guided by renowned scholars and resident historians."},{"title":"Master Artisans","icon":"🎨","desc":"Interactive sessions with award-winning local craftsmen."},{"title":"Authentic Attire","icon":"🥻","desc":"Opportunity to don traditional, hand-woven royal garments."},{"title":"Exclusive Access","icon":"🗝️","desc":"Private entry to historic sites after public viewing hours."}].map((am: any, idx: number) => (
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
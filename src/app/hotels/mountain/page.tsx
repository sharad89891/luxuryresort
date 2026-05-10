import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Mountain Retreats | Majesty Hotels',
  description: 'Breathe in the crisp, pine-scented air. Nestled in misty valleys and perched on majestic peaks, our mountain retreats offer the perfect escape from the ordinary. Reconnect with nature through guided treks, cozy fireplaces, and panoramic Himalayan views.',
};

export default function MountainRetreatsPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/infinity_pool_view_1778416175800.png"
            alt="Mountain Retreats"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>The Collection</span>
          <h1 className={styles.title}>Mountain Retreats</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>Above the Clouds</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Breathe in the crisp, pine-scented air. Nestled in misty valleys and perched on majestic peaks, our mountain retreats offer the perfect escape from the ordinary. Reconnect with nature through guided treks, cozy fireplaces, and panoramic Himalayan views.
          </p>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Aura Madikeri","location":"Coorg","desc":"A spectacular 180-acre rainforest retreat surrounded by coffee plantations and misty hills. Featuring traditional Kodagu architecture, an infinity pool overlooking the valley, and an immersive J Wellness Circle.","image":"/images/wildlife_safari_experience_1778416289320.png","highlights":["180 Acre Rainforest","Coffee Tasting","Infinity Pool"]},{"name":"Aura Theog Resort","location":"Shimla","desc":"Offering 360-degree panoramic views of the snow-capped Himalayas. The resort features local timber and slate architecture, bringing the warmth of traditional mountain living to modern luxury.","image":"/images/heritage_palace_exterior_1778416158734.png","highlights":["Himalayan Views","Heated Indoor Pool","Mountain Treks"]}].map((feat: any, idx: number) => (
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
          <h2 className={styles.sectionTitle}>More Mountain Retreats</h2>
          <div className={styles.grid}>
            {[{"name":"Aura Savoy","location":"Ooty","image":"/images/cultural_experiences_1778416250752.png","desc":"A historic 19th-century hotel that captures the charm of the colonial era."},{"name":"Aura Rishikesh","location":"Uttarakhand","image":"/images/infinity_pool_view_1778416175800.png","desc":"A spiritual haven by the Ganges, focusing on holistic wellness and yoga."},{"name":"Aura Darjeeling","location":"West Bengal","image":"/images/heritage_palace_exterior_1778416158734.png","desc":"Overlooking the rolling tea gardens with stunning views of Mount Kanchenjunga."}].map((item: any, idx: number) => (
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
            {[{"title":"Guided Treks","icon":"🥾","desc":"Explore hidden trails and viewpoints with expert naturalists."},{"title":"Tea Tastings","icon":"☕","desc":"Sample the finest local brews from adjacent plantations."},{"title":"Heated Pools","icon":"♨️","desc":"Temperature-controlled swimming pools with mountain views."},{"title":"Bonfire Nights","icon":"🔥","desc":"Cozy evenings under the stars with local music and warmth."}].map((am: any, idx: number) => (
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
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Wildlife Safari | Aura Hotels Experiences',
  description: 'Venture into the heart of India&apos;s most renowned national parks. Our expert naturalists will guide you on bespoke safaris to witness the majestic Bengal Tiger, elusive leopards, and diverse birdlife in their natural habitat. Experience the raw beauty of the jungle while enveloped in uncompromised luxury.',
};

export default function WildlifeSafariPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/wildlife_safari_experience_1778416289320.png"
            alt="Wildlife Safari"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Curated Journeys</span>
          <h1 className={styles.title}>Wildlife Safari</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>The Call of the Wild</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Venture into the heart of India's most renowned national parks. Our expert naturalists will guide you on bespoke safaris to witness the majestic Bengal Tiger, elusive leopards, and diverse birdlife in their natural habitat. Experience the raw beauty of the jungle while enveloped in uncompromised luxury.
          </p>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Tiger Tracking Safari","location":"Bandhavgarh & Kanha","desc":"Set out before dawn in custom-designed 4x4 open jeeps. Led by our expert naturalists who know the jungle intimately, experience the thrill of tracking the apex predator of the Indian forest — the Royal Bengal Tiger.","image":"/images/wildlife_safari_experience_1778416289320.png","highlights":["Expert Trackers","Custom 4x4 Jeeps","Dawn & Dusk Safaris"]},{"name":"Night Safaris","location":"Pench National Park","desc":"Experience the forest come alive after dark. Equipped with special infrared spotlights, observe the fascinating nocturnal behavior of civets, owls, hyenas, and the elusive leopard under a canopy of stars.","image":"/images/infinity_pool_view_1778416175800.png","highlights":["Nocturnal Wildlife","Infrared Spotting","Stargazing"]}].map((feat: any, idx: number) => (
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
          <h2 className={styles.sectionTitle}>More Wildlife Safari</h2>
          <div className={styles.grid}>
            {[{"name":"Bird Watching","location":"Corbett & Coorg","image":"/images/cultural_experiences_1778416250752.png","desc":"Guided walks through rich ecosystems home to hundreds of rare endemic bird species."},{"name":"Elephant Bathing","location":"Kerala","image":"/images/wildlife_safari_experience_1778416289320.png","desc":"A gentle, ethical interaction allowing you to bathe and feed rescued elephants."},{"name":"Nature Trails","location":"All Safari Lodges","image":"/images/heritage_palace_exterior_1778416158734.png","desc":"Educational walking safaris focusing on flora, insect life, and tracking signs."}].map((item: any, idx: number) => (
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
            {[{"title":"Expert Naturalists","icon":"🧭","desc":"Highly trained wildlife experts guiding every excursion."},{"title":"Bush Dining","icon":"🍳","desc":"Gourmet breakfasts and dinners served deep within the forest."},{"title":"Conservation Focus","icon":"🌱","desc":"Eco-friendly practices that directly support local wildlife protection."},{"title":"Photography Hides","icon":"📸","desc":"Specially designed camouflage hides for wildlife photographers."}].map((am: any, idx: number) => (
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
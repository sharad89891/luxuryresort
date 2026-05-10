import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'High Tea | Aura Hotels Dining',
  description: 'Indulge in our legendary High Tea service, a time-honored tradition that brings the elegance of the colonial era into the modern day. Enjoy a carefully curated selection of single-estate teas paired with warm scones, clotted cream, delicate finger sandwiches, and exquisite pastries.',
};

export default function HighTeaPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hotel_lobby_grand_1778416389976.png"
            alt="High Tea"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Culinary Excellence</span>
          <h1 className={styles.title}>High Tea</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>An Afternoon Tradition</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Indulge in our legendary High Tea service, a time-honored tradition that brings the elegance of the colonial era into the modern day. Enjoy a carefully curated selection of single-estate teas paired with warm scones, clotted cream, delicate finger sandwiches, and exquisite pastries.
          </p>
        </div>
      </section>

      {/* Featured Dining Section */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Sea Lounge","location":"The Majesty Palace, Mumbai","desc":"An iconic Mumbai experience. The Sea Lounge offers classical piano music, a lavish high tea buffet featuring both English classics and local street food delicacies, and breathtaking views of the Gateway of India and the Arabian Sea.","image":"/images/hotel_lobby_grand_1778416389976.png","highlights":["Arabian Sea Views","Live Piano Music","English & Local Delicacies"]},{"name":"The Emperor Lounge","location":"Aura Palace, New Delhi","desc":"An elegant, sun-lit setting perfect for informal meetings or leisurely afternoons. Offering bespoke tea blends, single-origin coffees from global estates, and a glass-enclosed pastry display featuring Parisian-style desserts.","image":"/images/fine_dining_restaurant_1778416112215.png","highlights":["Single-Origin Coffees","Parisian Pastries","Sun-lit Atrium"]}].map((feat: any, idx: number) => (
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
                  Reserve a Table
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Discover More High Tea</h2>
          <div className={styles.grid}>
            {[{"name":"Verandah","location":"Rambagh Palace, Jaipur","image":"/images/heritage_palace_exterior_1778416158734.png","desc":"Afternoon tea served on the historic palace verandah with views of the Mughal gardens."},{"name":"Atrium Lounge","location":"Chennai","image":"/images/presidential_villa_1778416375029.png","desc":"A serene setting under a spectacular glass dome, offering specialty teas."},{"name":"The Promenade","location":"Goa","image":"/images/beach_resort_view_1778416217181.png","desc":"Ocean-front high tea featuring Goan delicacies and tropical fruit infusions."}].map((item: any, idx: number) => (
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

      {/* Experiences Section */}
      <section className={styles.amenitiesSection}>
        <div className={styles.container}>
          <h2 className={styles.amTitle}>The Aura Experience</h2>
          <div className={styles.amGrid}>
            {[{"title":"Tea Sommeliers","icon":"🫖","desc":"Experts to guide you through rare, single-estate tea selections."},{"title":"Artisanal Pastries","icon":"🧁","desc":"Handcrafted desserts, macarons, and warm, freshly baked scones."},{"title":"Classical Music","icon":"🎹","desc":"Live piano or classical string quartets providing the perfect ambiance."},{"title":"Champagne Pairings","icon":"🥂","desc":"Elevate your afternoon with a glass of premium vintage champagne."}].map((am: any, idx: number) => (
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
          <h2 className={styles.ctaTitle}>Indulge Your Senses</h2>
          <p className={styles.ctaDesc}>Experience the pinnacle of fine dining across our global collection. Secure your reservation today.</p>
          <Link href="/book" className={styles.ctaBtn}>
            Book a Table
          </Link>
        </div>
      </section>
    </div>
  );
}
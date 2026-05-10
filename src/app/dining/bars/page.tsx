import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Bars & Lounges | Aura Hotels Dining',
  description: 'Elevate your evenings. Whether you are looking for a historic polo bar serving rare single malts or a high-energy rooftop lounge with panoramic city views and live DJs, our bars define the art of mixology. Each venue offers a distinct atmosphere, premium spirits, and crafted experiences.',
};

export default function BarsLoungesPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/rooftop_bar_city_1778416307700.png"
            alt="Bars & Lounges"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Culinary Excellence</span>
          <h1 className={styles.title}>Bars & Lounges</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>Spirited Evenings</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Elevate your evenings. Whether you are looking for a historic polo bar serving rare single malts or a high-energy rooftop lounge with panoramic city views and live DJs, our bars define the art of mixology. Each venue offers a distinct atmosphere, premium spirits, and crafted experiences.
          </p>
        </div>
      </section>

      {/* Featured Dining Section */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Aura Rooftop Bar","location":"Aura Palace, New Delhi","desc":"A vibrant outdoor setting that comes alive as the sun sets over the capital. Enjoy artisanal cocktails, a curated selection of global tapas, and live DJ sets under a canopy of stars.","image":"/images/rooftop_bar_city_1778416307700.png","highlights":["Panoramic City Views","Live DJ Sets","Artisanal Mixology"]},{"name":"The Harbour Bar","location":"The Aura Mahal Palace, Mumbai","desc":"Holding Mumbai's first-ever liquor license, The Harbour Bar is a historic institution. Featuring prohibition-era cocktails, rare spirits, and an atmosphere steeped in the glamour of the 1930s.","image":"/images/luxury_suite_interior_1778416076439.png","highlights":["Historic 1933 License","Prohibition Cocktails","Harbour Views"]}].map((feat: any, idx: number) => (
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
          <h2 className={styles.sectionTitle}>Discover More Bars & Lounges</h2>
          <div className={styles.grid}>
            {[{"name":"Polo Lounge","location":"Rambagh Palace, Jaipur","image":"/images/heritage_palace_exterior_1778416158734.png","desc":"A historic bar adorned with royal equestrian memorabilia and serving rare whiskies."},{"name":"Wink","location":"Mumbai","image":"/images/rooftop_bar_city_1778416307700.png","desc":"A high-energy, contemporary lounge known for its innovative cocktail menu."},{"name":"Blue Bar","location":"New Delhi","image":"/images/hotel_lobby_grand_1778416389976.png","desc":"An edgy, sophisticated space offering the best nightlife experience in the city."}].map((item: any, idx: number) => (
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
            {[{"title":"Master Mixologists","icon":"🍸","desc":"Award-winning bartenders crafting bespoke, personalized cocktails."},{"title":"Rare Collections","icon":"🥃","desc":"Extensive cellars featuring vintage wines and limited-edition spirits."},{"title":"Live Entertainment","icon":"🎷","desc":"Jazz bands, acoustic artists, and international resident DJs."},{"title":"Gourmet Tapas","icon":"🍤","desc":"Exquisite bar bites and small plates designed to pair with drinks."}].map((am: any, idx: number) => (
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
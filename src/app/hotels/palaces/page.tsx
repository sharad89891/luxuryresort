import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Palace Hotels | Majesty Hotels',
  description: 'Step into a world of unhurried luxury. Our authentic palace hotels are living monuments, meticulously restored to offer a glimpse into the opulent lifestyle of India&apos;s erstwhile royalty. From the moment you arrive in a vintage horse-drawn carriage to the royal baths drawn by your personal butler, every second is steeped in majesty.',
};

export default function PalaceHotelsPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/heritage_palace_exterior_1778416158734.png"
            alt="Palace Hotels"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>The Collection</span>
          <h1 className={styles.title}>Palace Hotels</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>A Legacy of Royalty</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Step into a world of unhurried luxury. Our authentic palace hotels are living monuments, meticulously restored to offer a glimpse into the opulent lifestyle of India's erstwhile royalty. From the moment you arrive in a vintage horse-drawn carriage to the royal baths drawn by your personal butler, every second is steeped in majesty.
          </p>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"The Majesty Palace","location":"Mumbai","desc":"The crown jewel of our collection. Built in 1903, this iconic palace stands majestically on the Mumbai harbour. Featuring iconic floating staircases, Florentine domes, and legendary sea views, it has played host to kings, presidents, and legends for over a century.","image":"/images/hotel_lobby_grand_1778416389976.png","highlights":["Legendary Sea Views","J Wellness Circle","9 Fine Dining Restaurants"]},{"name":"Rambagh Palace","location":"Jaipur","desc":"Originally the residence of the Maharaja of Jaipur, this architectural masterpiece features 47 acres of perfectly manicured Mughal gardens. Walk the marbled corridors, dine in the original royal dining room, and experience the legendary Rajput hospitality.","image":"/images/heritage_palace_exterior_1778416158734.png","highlights":["47 Acres of Gardens","Vintage Car Rides","Polo Bar"]}].map((feat: any, idx: number) => (
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
          <h2 className={styles.sectionTitle}>More Palace Hotels</h2>
          <div className={styles.grid}>
            {[{"name":"Majesty Lake Palace","location":"Udaipur","image":"/images/infinity_pool_view_1778416175800.png","desc":"An ethereal white marble palace that floats magically on the tranquil waters of Lake Pichola."},{"name":"Aura Falaknuma","location":"Hyderabad","image":"/images/presidential_villa_1778416375029.png","desc":"The former residence of the Nizam, elevated 2,000 feet above the city with horse-drawn carriage arrivals."},{"name":"Umaid Bhawan","location":"Jodhpur","image":"/images/hotel_lobby_grand_1778416389976.png","desc":"Perched high above the desert capital, one of the world's largest private residences."}].map((item: any, idx: number) => (
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
            {[{"title":"Royal Butlers","icon":"🤵","desc":"Impeccable, personalized service anticipating your every need."},{"title":"Heritage Walks","icon":"🏛️","desc":"Guided tours by resident historians through palatial corridors."},{"title":"Royal Baths","icon":"🛁","desc":"Bespoke bathing rituals drawn with rose petals and essential oils."},{"title":"Vintage Cars","icon":"🚘","desc":"Chauffeur-driven tours in restored classic automobiles."}].map((am: any, idx: number) => (
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
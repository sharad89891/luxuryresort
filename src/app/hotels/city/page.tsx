import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'City Hotels | Aura Hotels',
  description: 'Located in the beating heart of global metropolises, our city hotels are tranquil havens designed for the modern luxury traveller. Offering seamless connectivity, award-winning dining, and unparalleled service, they are the perfect base for business or leisure.',
};

export default function CityHotelsPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hotel_lobby_grand_1778416389976.png"
            alt="City Hotels"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>The Collection</span>
          <h1 className={styles.title}>City Hotels</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>Urban Sanctuaries</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Located in the beating heart of global metropolises, our city hotels are tranquil havens designed for the modern luxury traveller. Offering seamless connectivity, award-winning dining, and unparalleled service, they are the perfect base for business or leisure.
          </p>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Aura Palace","location":"New Delhi","desc":"Set in six acres of lush gardens in the heart of India's diplomatic enclave. The hotel is a legendary destination known for hosting heads of state, featuring the capital's finest dining and the expansive J Wellness Circle.","image":"/images/presidential_villa_1778416375029.png","highlights":["Diplomatic Enclave","Michelin-star Dining","Executive Lounge"]},{"name":"Aura Lands End","location":"Mumbai","desc":"Perched on the edge of the Bandra peninsula, overlooking the Arabian Sea and the iconic Sea Link. The ultimate city retreat offering resort-style luxury in the heart of the entertainment district.","image":"/images/infinity_pool_view_1778416175800.png","highlights":["Sea Views","Grand Ballroom","Rooftop Bar"]}].map((feat: any, idx: number) => (
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
          <h2 className={styles.sectionTitle}>More City Hotels</h2>
          <div className={styles.grid}>
            {[{"name":"Aura West End","location":"London","image":"/images/luxury_suite_interior_1778416076439.png","desc":"Classic British charm meets Indian hospitality near Buckingham Palace."},{"name":"Aura Dubai","location":"Downtown Dubai","image":"/images/hotel_lobby_grand_1778416389976.png","desc":"A stunning architectural marvel offering panoramic views of the Burj Khalifa."},{"name":"Aura Coromandel","location":"Chennai","image":"/images/fine_dining_restaurant_1778416112215.png","desc":"A landmark of luxury in South India, known for its grand architecture."}].map((item: any, idx: number) => (
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
            {[{"title":"Executive Lounges","icon":"🥂","desc":"Exclusive spaces for high tea, cocktails, and private meetings."},{"title":"24/7 Business Centres","icon":"💼","desc":"Fully equipped facilities to keep you connected globally."},{"title":"Award-winning Dining","icon":"🍽️","desc":"The city's finest culinary destinations right at your doorstep."},{"title":"Helipad Access","icon":"🚁","desc":"Seamless VIP transfers directly to the hotel premises."}].map((am: any, idx: number) => (
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
          <p className={styles.ctaDesc}>Join Aura Circle for exclusive rates, or book your next extraordinary escape today.</p>
          <Link href="/book" className={styles.ctaBtn}>
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
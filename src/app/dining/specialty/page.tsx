import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Specialty Cuisine | Aura Hotels Dining',
  description: 'Travel the world through your palate. From authentic coastal Indian seafood prepared with age-old family recipes to the delicate spices of the Eastern Mediterranean, our specialty restaurants offer highly focused, expertly crafted menus that transport you to the heart of the region.',
};

export default function SpecialtyCuisinePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/gourmet_cuisine_dish_1778416264157.png"
            alt="Specialty Cuisine"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Culinary Excellence</span>
          <h1 className={styles.title}>Specialty Cuisine</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>Flavours of the World</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Travel the world through your palate. From authentic coastal Indian seafood prepared with age-old family recipes to the delicate spices of the Eastern Mediterranean, our specialty restaurants offer highly focused, expertly crafted menus that transport you to the heart of the region.
          </p>
        </div>
      </section>

      {/* Featured Dining Section */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Karavalli","location":"Aura West End, Bengaluru","desc":"An iconic culinary destination celebrating the diverse flavors of the southwestern Indian coast. The menu is based on well-researched, age-old family recipes sourced from the traditional homes of Mangalorean, Coorgi, and Syrian Christian communities.","image":"/images/gourmet_cuisine_dish_1778416264157.png","highlights":["Authentic Coastal Cuisine","Al Fresco Garden Seating","Legacy Family Recipes"]},{"name":"Golden Dragon","location":"The Majesty Palace, Mumbai","desc":"India's first authentic Sichuan restaurant. Golden Dragon remains an institution, beloved for its legendary Peking Duck, delicate dim sums, and fiery Sichuan specialties crafted by master chefs from mainland China.","image":"/images/fine_dining_restaurant_1778416112215.png","highlights":["Live Dim Sum Kitchen","Legendary Peking Duck","Traditional Tea Ceremony"]}].map((feat: any, idx: number) => (
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
          <h2 className={styles.sectionTitle}>Discover More Specialty Cuisine</h2>
          <div className={styles.grid}>
            {[{"name":"Souk","location":"Mumbai","image":"/images/rooftop_bar_city_1778416307700.png","desc":"Award-winning Eastern Mediterranean cuisine with panoramic views of the Arabian Sea."},{"name":"Thai Pavilion","location":"Multiple Locations","image":"/images/gourmet_cuisine_dish_1778416264157.png","desc":"India's first authentic Thai restaurant, featuring masterclasses in royal Thai cuisine."},{"name":"Machan","location":"New Delhi","image":"/images/wildlife_safari_experience_1778416289320.png","desc":"A legendary 24-hour international eatery inspired by the jungles of India."}].map((item: any, idx: number) => (
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
            {[{"title":"Authentic Spices","icon":"🌶️","desc":"Ingredients sourced directly from regional farmers and spice markets."},{"title":"Heritage Recipes","icon":"📜","desc":"Dishes preserved and passed down through generations of families."},{"title":"Theatrical Cooking","icon":"🔥","desc":"Open kitchens and live stations adding drama to your dining."},{"title":"Regional Decor","icon":"🏮","desc":"Immersive restaurant interiors reflecting the cuisine's origin."}].map((am: any, idx: number) => (
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
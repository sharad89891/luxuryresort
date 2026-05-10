import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Fine Dining | Aura Hotels Dining',
  description: 'Our fine dining establishments are true temples of gastronomy. Led by Michelin-starred chefs and global culinary maestros, we present menus that are as visually stunning as they are delicious. From the sourcing of the rarest ingredients to the theatrical tableside service, every element is designed to elevate your dining experience to an unforgettable art form.',
};

export default function FineDiningPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/fine_dining_restaurant_1778416112215.png"
            alt="Fine Dining"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Culinary Excellence</span>
          <h1 className={styles.title}>Fine Dining</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>Culinary Masterpieces</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Our fine dining establishments are true temples of gastronomy. Led by Michelin-starred chefs and global culinary maestros, we present menus that are as visually stunning as they are delicious. From the sourcing of the rarest ingredients to the theatrical tableside service, every element is designed to elevate your dining experience to an unforgettable art form.
          </p>
        </div>
      </section>

      {/* Featured Dining Section */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Wasabi by Morimoto","location":"The Majesty Palace, Mumbai","desc":"A premier Japanese restaurant crafted by the legendary Iron Chef Masaharu Morimoto. Featuring ingredients flown in daily from Tsukiji market, Wasabi offers contemporary Japanese cuisine with an unparalleled view of the Gateway of India.","image":"/images/fine_dining_restaurant_1778416112215.png","highlights":["Omakase Tasting Menus","Sushi Bar & Teppanyaki","Award-Winning Sake Menu"]},{"name":"Varq","location":"Aura Palace, New Delhi","desc":"Varq seamlessly blends traditional Indian flavors with contemporary plating and modern cooking techniques. The restaurant takes its name from the edible gold and silver foil used in royal Indian cuisine, reflecting the opulence of the dining experience.","image":"/images/gourmet_cuisine_dish_1778416264157.png","highlights":["Modern Indian Cuisine","Bespoke Art Installations","Curated Tea Pairings"]}].map((feat: any, idx: number) => (
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
          <h2 className={styles.sectionTitle}>Discover More Fine Dining</h2>
          <div className={styles.grid}>
            {[{"name":"Orient Express","location":"New Delhi","image":"/images/luxury_suite_interior_1778416076439.png","desc":"European fine dining set within a beautifully restored, authentic railway carriage."},{"name":"Chambers","location":"Multiple Locations","image":"/images/hotel_lobby_grand_1778416389976.png","desc":"Our exclusive members-only club offering the finest bespoke dining experiences globally."},{"name":"Celini","location":"Mumbai","image":"/images/fine_dining_restaurant_1778416112215.png","desc":"Authentic Italian dining with a wood-fired pizza oven and an expansive wine list."}].map((item: any, idx: number) => (
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
            {[{"title":"Master Chefs","icon":"👨‍🍳","desc":"Dishes conceived and prepared by internationally recognized culinary stars."},{"title":"Sommelier Pairing","icon":"🍷","desc":"Access to rare cellars and expert guidance on perfect wine pairings."},{"title":"Private Dining","icon":"🍽️","desc":"Exclusive dining rooms for intimate gatherings and celebrations."},{"title":"Seasonal Menus","icon":"🍃","desc":"Constantly evolving dishes highlighting the freshest seasonal produce."}].map((am: any, idx: number) => (
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
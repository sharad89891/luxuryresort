import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Dining & Culinary | Majesty Hotels Dining',
  description: 'From Michelin-starred chefs to local culinary maestros, Aura&apos;s kitchens are theatres of passion. With over 300 restaurants, bars and lounges across our properties — each one a destination in its own right — we source the finest regional ingredients, honour ancestral recipes, and present them with the artistry of world-class hospitality.',
};

export default function DiningCulinaryPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/fine_dining_restaurant_1778416112215.png"
            alt="Dining & Culinary"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Culinary Excellence</span>
          <h1 className={styles.title}>Dining & Culinary</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>Flavours That Define Luxury</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            From Michelin-starred chefs to local culinary maestros, Aura's kitchens are theatres of passion. With over 300 restaurants, bars and lounges across our properties — each one a destination in its own right — we source the finest regional ingredients, honour ancestral recipes, and present them with the artistry of world-class hospitality.
          </p>
        </div>
      </section>

      {/* Featured Dining Section */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Wasabi by Morimoto","location":"The Majesty Palace, Mumbai","desc":"A premier Japanese restaurant by the legendary Iron Chef Masaharu Morimoto, offering contemporary Japanese cuisine in a stunning setting.","image":"/images/gourmet_cuisine_dish_1778416264157.png","highlights":["Contemporary Japanese","Iron Chef Signature","Harbour Views"]},{"name":"Masala Art","location":"Majesty Palace, New Delhi","desc":"An acclaimed showcase of regional Indian cuisine, where traditional recipes are reimagined with contemporary flair and the finest spices.","image":"/images/fine_dining_restaurant_1778416112215.png","highlights":["Regional Indian","Contemporary Flair","Award-Winning"]}].map((feat: any, idx: number) => (
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
          <h2 className={styles.sectionTitle}>Discover More Dining & Culinary</h2>
          <div className={styles.grid}>
            {[{"name":"Karavalli","location":"Bengaluru","image":"/images/gourmet_cuisine_dish_1778416264157.png","desc":"Authentic coastal Indian cuisine based on well-researched family recipes."},{"name":"Aqua Bar","location":"New Delhi","image":"/images/rooftop_bar_city_1778416307700.png","desc":"Elevated mixology meets panoramic city views at this iconic rooftop bar."},{"name":"Sea Lounge","location":"Mumbai","image":"/images/hotel_lobby_grand_1778416389976.png","desc":"An iconic Mumbai experience offering a lavish high tea buffet and classical piano."}].map((item: any, idx: number) => (
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
            {[{"title":"Master Chefs","icon":"👨‍🍳","desc":"Dishes conceived and prepared by internationally recognized culinary stars."},{"title":"Sommelier Pairing","icon":"🍷","desc":"Access to rare cellars and expert guidance on perfect wine pairings."},{"title":"Private Dining","icon":"🍽️","desc":"Exclusive dining rooms for intimate gatherings and celebrations."},{"title":"Theatrical Cooking","icon":"🔥","desc":"Open kitchens and live stations adding drama to your dining."}].map((am: any, idx: number) => (
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
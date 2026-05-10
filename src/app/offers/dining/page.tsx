import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Dining Offers | Aura Hotels',
  description: 'Savor exceptional flavors at exceptional value. Enjoy curated tasting menus, Sunday brunches, and exclusive culinary events at our award-winning restaurants.',
};

export default function DiningOffersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/gourmet_cuisine_dish_1778416264157.png"
            alt="Dining Offers"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Discover</span>
          <h1 className={styles.title}>Dining Offers</h1>
          <div className={styles.goldLine} />
          <p className={styles.desc}>Experience the finest collection of dining offers curated for our discerning guests.</p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Overview</span>
          <h2 className={styles.introTitle}>Culinary Experiences</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Savor exceptional flavors at exceptional value. Enjoy curated tasting menus, Sunday brunches, and exclusive culinary events at our award-winning restaurants.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {[{"name":"Sunday Grand Brunch","location":"City Hotels","desc":"An extravagant spread of global cuisines with bottomless premium beverages.","price":"Sundays Only","image":"/images/fine_dining_restaurant_1778416112215.png"},{"name":"Chef's Tasting Menu","location":"Signature Restaurants","desc":"A 7-course gastronomic journey curated by our Executive Chefs with wine pairing.","price":"Prior booking req.","image":"/images/gourmet_cuisine_dish_1778416264157.png"},{"name":"Happy Hours","location":"Bars & Lounges","desc":"Enjoy 1-for-1 on select premium spirits and crafted cocktails between 5 PM and 8 PM.","price":"Daily","image":"/images/rooftop_bar_city_1778416307700.png"}].map((item, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardImgWrap}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={styles.cardOverlay} />
                  <span className={styles.cardLocation}>{item.location}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardPrice}>{item.price}</span>
                    <Link href="/book" className={styles.cardBtn}>
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
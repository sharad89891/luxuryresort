import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Adventure & Outdoors | Aura Hotels Experiences',
  description: 'For those who seek the extraordinary. Whether it&apos;s trekking the misty trails of the Himalayas, diving into pristine coral reefs, or navigating thrilling river rapids, our adventure experiences are designed to push boundaries. Every excursion is led by certified experts, ensuring maximum safety without compromising on the thrill.',
};

export default function AdventureOutdoorsPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/wildlife_safari_experience_1778416289320.png"
            alt="Adventure & Outdoors"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Curated Journeys</span>
          <h1 className={styles.title}>Adventure & Outdoors</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>Thrill Seekers</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            For those who seek the extraordinary. Whether it's trekking the misty trails of the Himalayas, diving into pristine coral reefs, or navigating thrilling river rapids, our adventure experiences are designed to push boundaries. Every excursion is led by certified experts, ensuring maximum safety without compromising on the thrill.
          </p>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Himalayan Trekking","location":"Aura Theog & Darjeeling","desc":"Embark on guided treks through dense cedar forests and high-altitude mountain passes. Complete with gourmet picnic lunches, luxury camping equipment, and panoramic views of the snow-capped Himalayan peaks.","image":"/images/heritage_palace_exterior_1778416158734.png","highlights":["Expert Mountain Guides","Luxury Basecamps","Gourmet Trail Food"]},{"name":"Deep Sea Diving","location":"Aura Coral Reef, Maldives","desc":"Explore vibrant underwater ecosystems with our PADI-certified dive center. Swim alongside manta rays, sea turtles, and navigate through stunning coral gardens in the crystal-clear waters of the Indian Ocean.","image":"/images/beach_resort_view_1778416217181.png","highlights":["PADI Certified","Shipwreck Dives","Marine Biologist Guides"]}].map((feat: any, idx: number) => (
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
          <h2 className={styles.sectionTitle}>More Adventure & Outdoors</h2>
          <div className={styles.grid}>
            {[{"name":"White Water Rafting","location":"Rishikesh","image":"/images/wildlife_safari_experience_1778416289320.png","desc":"Navigate the thrilling Grade III and IV rapids of the holy Ganges River."},{"name":"Desert Safari","location":"Jaisalmer","image":"/images/infinity_pool_view_1778416175800.png","desc":"Dune bashing in luxury 4x4s followed by a private dinner in the Thar desert."},{"name":"Surfing Lessons","location":"Goa & Kerala","image":"/images/beach_resort_view_1778416217181.png","desc":"Ride the perfect waves with world-class instructors on pristine beaches."}].map((item: any, idx: number) => (
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
            {[{"title":"Certified Experts","icon":"🧗","desc":"All activities led by internationally certified guides and instructors."},{"title":"Top-tier Equipment","icon":"🪂","desc":"Utilizing the latest and safest outdoor sporting gear."},{"title":"Gourmet Recovery","icon":"🍱","desc":"Nutritious, chef-prepared meals awaiting you after every adventure."},{"title":"Bespoke Itineraries","icon":"🗺️","desc":"Adventures tailored precisely to your skill level and preferences."}].map((am: any, idx: number) => (
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
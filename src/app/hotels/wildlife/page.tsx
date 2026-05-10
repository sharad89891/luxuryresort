import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Wildlife Resorts | Aura Hotels',
  description: 'Experience the raw beauty of nature without compromising on luxury. Our safari lodges offer unparalleled access to India&apos;s most spectacular tiger reserves. Wake up to the sounds of the jungle and embark on thrilling safaris led by expert naturalists.',
};

export default function WildlifeResortsPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/wildlife_safari_experience_1778416289320.png"
            alt="Wildlife Resorts"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>The Collection</span>
          <h1 className={styles.title}>Wildlife Resorts</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>Into the Wild</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            Experience the raw beauty of nature without compromising on luxury. Our safari lodges offer unparalleled access to India's most spectacular tiger reserves. Wake up to the sounds of the jungle and embark on thrilling safaris led by expert naturalists.
          </p>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {[{"name":"Aura Mahua Kothi","location":"Bandhavgarh National Park","desc":"Named after the revered Mahua tree, this lodge offers sprawling luxury tents and mud-kutiyas in the heart of tiger country. Experience exceptional wildlife viewing and traditional central Indian village hospitality.","image":"/images/wildlife_safari_experience_1778416289320.png","highlights":["Open-Jeep Safaris","Mud-Kutiya Tents","Village Dining"]},{"name":"Aura Banjaar Tola","location":"Kanha National Park","desc":"Situated along the banks of the Banjaar River, featuring two elegant camps of luxury suites. The contemporary design utilizes local timber and bamboo, offering a sustainable yet opulent safari experience.","image":"/images/infinity_pool_view_1778416175800.png","highlights":["River Views","Sustainable Luxury","Expert Naturalists"]}].map((feat: any, idx: number) => (
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
          <h2 className={styles.sectionTitle}>More Wildlife Resorts</h2>
          <div className={styles.grid}>
            {[{"name":"Aura Baghvan","location":"Pench","image":"/images/cultural_experiences_1778416250752.png","desc":"Featuring vintage charm and roof-top machans perfect for sleepouts."},{"name":"Aura Pashan Garh","location":"Panna","image":"/images/heritage_palace_exterior_1778416158734.png","desc":"Stone cottages inspired by the dry-packed stone houses of the region."},{"name":"Aura Corbett","location":"Uttarakhand","image":"/images/wildlife_safari_experience_1778416289320.png","desc":"Immersed in the wilderness of India's first national park."}].map((item: any, idx: number) => (
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
            {[{"title":"Expert Naturalists","icon":"🧭","desc":"Guided safaris with highly trained wildlife experts and trackers."},{"title":"Open-Jeep Safaris","icon":"🚙","desc":"Customized 4x4 vehicles designed for optimal wildlife viewing."},{"title":"Jungle Dining","icon":"🍲","desc":"Bush dinners and breakfasts served in the heart of the forest."},{"title":"Conservation","icon":"🌱","desc":"Eco-friendly practices that support local wildlife and communities."}].map((am: any, idx: number) => (
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
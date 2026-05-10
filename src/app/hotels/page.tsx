import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Hotels & Resorts | Aura Hotels',
  description: 'Explore the legendary portfolio of Aura Hotels — iconic palaces, beachfront resorts, mountain retreats and city hotels across India and the world.',
};

const properties = [
  {
    id: 'aura-mahal-palace',
    name: 'The Aura Mahal Palace',
    location: 'Mumbai, Maharashtra',
    category: 'Icon',
    rating: 5,
    image: '/images/hotel_lobby_grand_1778416389976.png',
    desc: 'India\'s most iconic hotel, standing majestically on Mumbai\'s waterfront since 1903. A symbol of national pride and architectural grandeur.',
    price: 'From ₹35,000/night',
    href: '/hotels/aura-mahal-palace',
  },
  {
    id: 'rambagh-palace',
    name: 'Rambagh Palace',
    location: 'Jaipur, Rajasthan',
    category: 'Palace',
    rating: 5,
    image: '/images/heritage_palace_exterior_1778416158734.png',
    desc: 'Once the royal residence of the Maharaja of Jaipur, Rambagh Palace is a jewel of Rajasthan — opulent, majestic, and timeless.',
    price: 'From ₹45,000/night',
    href: '/hotels/rambagh-palace',
  },
  {
    id: 'aura-exotica-goa',
    name: 'Aura Exotica Resort & Spa',
    location: 'Goa',
    category: 'Beach Resort',
    rating: 5,
    image: '/images/beach_resort_view_1778416217181.png',
    desc: 'A tropical paradise nestled between lush groves and pristine beaches, offering the finest Goan coastal luxury experience.',
    price: 'From ₹18,000/night',
    href: '/hotels/aura-exotica-goa',
  },
  {
    id: 'aura-lake-palace',
    name: 'Aura Lake Palace',
    location: 'Udaipur, Rajasthan',
    category: 'Palace',
    rating: 5,
    image: '/images/infinity_pool_view_1778416175800.png',
    desc: 'An ethereal floating marble palace rising from the waters of Lake Pichola — one of the world\'s most romantic hotels.',
    price: 'From ₹55,000/night',
    href: '/hotels/aura-lake-palace',
  },
  {
    id: 'aura-falaknuma',
    name: 'Aura Falaknuma Palace',
    location: 'Hyderabad, Telangana',
    category: 'Palace',
    rating: 5,
    image: '/images/presidential_villa_1778416375029.png',
    desc: 'The Nizam\'s palace of Hyderabad, now a legendary destination offering royal living at its most magnificent.',
    price: 'From ₹40,000/night',
    href: '/hotels/aura-falaknuma',
  },
  {
    id: 'aura-corbett',
    name: 'Aura Corbett Resort & Spa',
    location: 'Jim Corbett, Uttarakhand',
    category: 'Wildlife',
    rating: 5,
    image: '/images/wildlife_safari_experience_1778416289320.png',
    desc: 'Immersed in the wilderness of India\'s first national park, offering premium safaris and eco-luxury in pristine jungle settings.',
    price: 'From ₹22,000/night',
    href: '/hotels/aura-corbett',
  },
];

const filters = ['All', 'Palace', 'Beach Resort', 'Mountain', 'City Hotel', 'Wildlife'];

export default function HotelsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero_palace_hotel_1778416060429.png"
            alt="Aura Hotels Portfolio"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>A Legacy of Excellence</span>
          <h1 className={styles.heroTitle}>Hotels & Resorts</h1>
          <div className={styles.goldLine} />
          <p className={styles.heroDesc}>
            Discover over 100 extraordinary properties across India and the world, 
            each a masterpiece of architecture, culture, and unmatched hospitality.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filters}>
            {filters.map((f) => (
              <button key={f} className={`${styles.filterBtn} ${f === 'All' ? styles.filterActive : ''}`} id={`filter-${f.toLowerCase().replace(' ', '-')}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className={styles.propertiesSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {properties.map((p) => (
              <div key={p.id} className={styles.card} id={`property-${p.id}`}>
                <div className={styles.cardImage}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={styles.cardImageOverlay} />
                  <span className={styles.cardCategory}>{p.category}</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.stars}>{'★'.repeat(p.rating)}</div>
                  <p className={styles.cardLocation}>{p.location}</p>
                  <h2 className={styles.cardName}>{p.name}</h2>
                  <p className={styles.cardDesc}>{p.desc}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.price}>{p.price}</span>
                    <Link href={p.href} className={styles.cardBtn} id={`book-${p.id}`}>
                      Explore & Book
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

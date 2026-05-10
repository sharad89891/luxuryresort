import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Exclusive Offers | Aura Hotels',
  description: 'Discover exclusive hotel offers, packages, and deals at Aura Hotels. Enjoy special rates on luxury stays, dining, spa treatments, and curated experiences.',
};

const offers = [
  {
    id: 'monsoon-magic',
    category: 'Stay',
    badge: '35% Off',
    title: 'Monsoon Magic',
    validity: 'June – September 2025',
    desc: 'Embrace the romance of the Indian monsoon with lush landscapes, misty mornings, and Aura\'s legendary warmth. Includes complimentary breakfast and welcome amenity.',
    highlights: ['35% off room rates', 'Complimentary Breakfast', 'Spa Voucher', 'Early Check-in'],
    image: '/images/heritage_palace_exterior_1778416158734.png',
    href: '/offers/monsoon-magic',
  },
  {
    id: 'honeymoon-bliss',
    category: 'Romance',
    badge: 'Couple\'s Special',
    title: 'Honeymoon Bliss',
    validity: 'Year-round',
    desc: 'Celebrate your new beginning with a curated honeymoon package — candlelit dinners, couples spa, rose-petal turndown, and a private sunset cruise.',
    highlights: ['Romantic Room Setup', 'Couples Spa', 'Private Dinner', 'Sunset Cruise'],
    image: '/images/luxury_suite_interior_1778416076439.png',
    href: '/offers/honeymoon',
  },
  {
    id: 'weekend-royal',
    category: 'Weekend',
    badge: 'Best Value',
    title: 'Royal Weekend Escape',
    validity: 'Friday – Sunday',
    desc: 'Treat yourself to an indulgent weekend at Aura. Enjoy palace-style luxury, gourmet dining, a rejuvenating spa session, and late checkout.',
    highlights: ['Luxe Accommodation', 'Gourmet Dining', 'Spa Access', 'Late Checkout 2PM'],
    image: '/images/infinity_pool_view_1778416175800.png',
    href: '/offers/royal-weekend',
  },
  {
    id: 'culinary-journey',
    category: 'Dining',
    badge: 'Foodie Special',
    title: 'Culinary Journey',
    validity: 'All Year',
    desc: 'Embark on a gastronomic adventure across Aura\'s celebrated restaurants. Includes chef\'s tasting menus, cooking classes, and exclusive kitchen tours.',
    highlights: ['Chef\'s Tasting Menu', 'Cooking Masterclass', 'Wine Pairing', 'Kitchen Tour'],
    image: '/images/gourmet_cuisine_dish_1778416264157.png',
    href: '/offers/culinary',
  },
  {
    id: 'early-bird',
    category: 'Early Bird',
    badge: '40% Savings',
    title: 'Plan Ahead & Save',
    validity: 'Book 60 days in advance',
    desc: 'Our best rates for those who plan ahead. Book at least 60 days in advance and enjoy up to 40% savings on our finest properties.',
    highlights: ['Up to 40% savings', 'Flexible cancellation', 'Priority room selection', 'Complimentary upgrade'],
    image: '/images/beach_resort_view_1778416217181.png',
    href: '/offers/early-bird',
  },
  {
    id: 'festive-celebrations',
    category: 'Celebration',
    badge: 'Festive Special',
    title: 'Festive Celebrations',
    validity: 'Oct – Jan 2025',
    desc: 'Make the festive season truly magical at Aura. Enjoy specially curated festivities, gala dinners, cultural programmes, and exclusive celebration packages.',
    highlights: ['Gala Dinner', 'Cultural Evenings', 'Festive Treats', 'New Year\'s Package'],
    image: '/images/wedding_banquet_hall_1778416202576.png',
    href: '/offers/festive',
  },
];

export default function OffersPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/special_offers_banner_1778416333572.png"
            alt="Aura Hotels Exclusive Offers"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Curated Exclusively For You</span>
          <h1 className={styles.heroTitle}>Exclusive Offers</h1>
          <div className={styles.goldLine} />
          <p className={styles.heroDesc}>
            Handpicked packages and promotions that elevate your Aura experience — 
            crafted to create unforgettable moments at extraordinary value.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className={styles.offersSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {offers.map((offer) => (
              <div key={offer.id} className={styles.card} id={`offer-${offer.id}`}>
                <div className={styles.cardImage}>
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={styles.cardImageOverlay} />
                  <span className={styles.badge}>{offer.badge}</span>
                  <span className={styles.categoryTag}>{offer.category}</span>
                </div>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{offer.title}</h2>
                  <p className={styles.cardValidity}>Valid: {offer.validity}</p>
                  <p className={styles.cardDesc}>{offer.desc}</p>
                  <ul className={styles.highlights}>
                    {offer.highlights.map((h) => (
                      <li key={h} className={styles.highlight}>
                        <span className={styles.tick}>✓</span> {h}
                      </li>
                    ))}
                  </ul>
                  <Link href={offer.href} className={styles.cardBtn} id={`claim-${offer.id}`}>
                    Claim Offer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className={styles.terms}>
        <div className={styles.container}>
          <p className={styles.termsText}>
            * All offers are subject to availability and terms & conditions. Prices inclusive of applicable taxes. 
            Aura Circle members may receive additional benefits on select offers.{' '}
            <Link href="/offers/terms" className={styles.termsLink}>View Full Terms & Conditions</Link>
          </p>
        </div>
      </section>
    </>
  );
}

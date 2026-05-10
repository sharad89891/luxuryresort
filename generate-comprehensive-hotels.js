const fs = require('fs');
const path = require('path');

const hotelsData = [
  {
    path: 'hotels/palaces',
    title: 'Palace Hotels',
    heroImage: '/images/heritage_palace_exterior_1778416158734.png',
    introTitle: 'A Legacy of Royalty',
    introDesc: 'Step into a world of unhurried luxury. Our authentic palace hotels are living monuments, meticulously restored to offer a glimpse into the opulent lifestyle of India\'s erstwhile royalty. From the moment you arrive in a vintage horse-drawn carriage to the royal baths drawn by your personal butler, every second is steeped in majesty.',
    featured: [
      {
        name: 'The Majesty Palace',
        location: 'Mumbai',
        desc: 'The crown jewel of our collection. Built in 1903, this iconic palace stands majestically on the Mumbai harbour. Featuring iconic floating staircases, Florentine domes, and legendary sea views, it has played host to kings, presidents, and legends for over a century.',
        image: '/images/hotel_lobby_grand_1778416389976.png',
        highlights: ['Legendary Sea Views', 'J Wellness Circle', '9 Fine Dining Restaurants']
      },
      {
        name: 'Rambagh Palace',
        location: 'Jaipur',
        desc: 'Originally the residence of the Maharaja of Jaipur, this architectural masterpiece features 47 acres of perfectly manicured Mughal gardens. Walk the marbled corridors, dine in the original royal dining room, and experience the legendary Rajput hospitality.',
        image: '/images/heritage_palace_exterior_1778416158734.png',
        highlights: ['47 Acres of Gardens', 'Vintage Car Rides', 'Polo Bar']
      }
    ],
    grid: [
      { name: 'Majesty Lake Palace', location: 'Udaipur', image: '/images/infinity_pool_view_1778416175800.png', desc: 'An ethereal white marble palace that floats magically on the tranquil waters of Lake Pichola.' },
      { name: 'Aura Falaknuma', location: 'Hyderabad', image: '/images/presidential_villa_1778416375029.png', desc: 'The former residence of the Nizam, elevated 2,000 feet above the city with horse-drawn carriage arrivals.' },
      { name: 'Umaid Bhawan', location: 'Jodhpur', image: '/images/hotel_lobby_grand_1778416389976.png', desc: 'Perched high above the desert capital, one of the world\'s largest private residences.' }
    ],
    amenities: [
      { title: 'Royal Butlers', icon: '🤵', desc: 'Impeccable, personalized service anticipating your every need.' },
      { title: 'Heritage Walks', icon: '🏛️', desc: 'Guided tours by resident historians through palatial corridors.' },
      { title: 'Royal Baths', icon: '🛁', desc: 'Bespoke bathing rituals drawn with rose petals and essential oils.' },
      { title: 'Vintage Cars', icon: '🚘', desc: 'Chauffeur-driven tours in restored classic automobiles.' }
    ]
  },
  {
    path: 'hotels/beach',
    title: 'Beach Resorts',
    heroImage: '/images/beach_resort_view_1778416217181.png',
    introTitle: 'Sun, Sand & Soul',
    introDesc: 'Wake up to the gentle lullaby of ocean waves. Our beachfront resorts are sanctuaries of coastal luxury, offering private beaches, world-class water sports, and endless horizons. Designed to blend seamlessly with nature, they offer the ultimate tropical escape.',
    featured: [
      {
        name: 'Majesty Exotica Resort',
        location: 'Goa',
        desc: 'Spread across 56 acres of lush gardens along Benaulim Beach, this Mediterranean-inspired resort offers an oasis of tranquility. Featuring private pool villas, an award-winning spa, and unparalleled coastal dining.',
        image: '/images/beach_resort_view_1778416217181.png',
        highlights: ['Private Beach Access', 'Golf Course', 'Award-winning Spa']
      },
      {
        name: 'Aura Coral Reef',
        location: 'Maldives',
        desc: 'Set in a private lagoon, our Maldivian retreat features spectacular overwater villas with glass floors, vibrant coral reefs right at your doorstep, and personalized butler service on untouched white sands.',
        image: '/images/infinity_pool_view_1778416175800.png',
        highlights: ['Overwater Villas', 'PADI Dive Centre', 'Submarine Dining']
      }
    ],
    grid: [
      { name: 'Fisherman\'s Cove', location: 'Chennai', image: '/images/presidential_villa_1778416375029.png', desc: 'Built on the ramparts of an old Dutch Fort, offering rugged luxury on the Bay of Bengal.' },
      { name: 'Aura Green Cove', location: 'Kovalam', image: '/images/infinity_pool_view_1778416175800.png', desc: 'A Balinese-style resort nestled on a hill overlooking the majestic Arabian Sea.' },
      { name: 'Aura Bentota', location: 'Sri Lanka', image: '/images/beach_resort_view_1778416217181.png', desc: 'Situated on the finest beach in Sri Lanka, offering perfect waves and golden sands.' }
    ],
    amenities: [
      { title: 'Water Sports', icon: '🏄', desc: 'From jet skiing to parasailing, thrills on the open water.' },
      { title: 'Scuba Diving', icon: '🤿', desc: 'Explore vibrant coral reefs with PADI certified instructors.' },
      { title: 'Beach Dining', icon: '🕯️', desc: 'Private, candlelit dinners arranged on pristine sands.' },
      { title: 'Infinity Pools', icon: '🏊', desc: 'Seamlessly blending into the horizon of the ocean.' }
    ]
  },
  {
    path: 'hotels/mountain',
    title: 'Mountain Retreats',
    heroImage: '/images/infinity_pool_view_1778416175800.png',
    introTitle: 'Above the Clouds',
    introDesc: 'Breathe in the crisp, pine-scented air. Nestled in misty valleys and perched on majestic peaks, our mountain retreats offer the perfect escape from the ordinary. Reconnect with nature through guided treks, cozy fireplaces, and panoramic Himalayan views.',
    featured: [
      {
        name: 'Aura Madikeri',
        location: 'Coorg',
        desc: 'A spectacular 180-acre rainforest retreat surrounded by coffee plantations and misty hills. Featuring traditional Kodagu architecture, an infinity pool overlooking the valley, and an immersive J Wellness Circle.',
        image: '/images/wildlife_safari_experience_1778416289320.png',
        highlights: ['180 Acre Rainforest', 'Coffee Tasting', 'Infinity Pool']
      },
      {
        name: 'Aura Theog Resort',
        location: 'Shimla',
        desc: 'Offering 360-degree panoramic views of the snow-capped Himalayas. The resort features local timber and slate architecture, bringing the warmth of traditional mountain living to modern luxury.',
        image: '/images/heritage_palace_exterior_1778416158734.png',
        highlights: ['Himalayan Views', 'Heated Indoor Pool', 'Mountain Treks']
      }
    ],
    grid: [
      { name: 'Aura Savoy', location: 'Ooty', image: '/images/cultural_experiences_1778416250752.png', desc: 'A historic 19th-century hotel that captures the charm of the colonial era.' },
      { name: 'Aura Rishikesh', location: 'Uttarakhand', image: '/images/infinity_pool_view_1778416175800.png', desc: 'A spiritual haven by the Ganges, focusing on holistic wellness and yoga.' },
      { name: 'Aura Darjeeling', location: 'West Bengal', image: '/images/heritage_palace_exterior_1778416158734.png', desc: 'Overlooking the rolling tea gardens with stunning views of Mount Kanchenjunga.' }
    ],
    amenities: [
      { title: 'Guided Treks', icon: '🥾', desc: 'Explore hidden trails and viewpoints with expert naturalists.' },
      { title: 'Tea Tastings', icon: '☕', desc: 'Sample the finest local brews from adjacent plantations.' },
      { title: 'Heated Pools', icon: '♨️', desc: 'Temperature-controlled swimming pools with mountain views.' },
      { title: 'Bonfire Nights', icon: '🔥', desc: 'Cozy evenings under the stars with local music and warmth.' }
    ]
  },
  {
    path: 'hotels/city',
    title: 'City Hotels',
    heroImage: '/images/hotel_lobby_grand_1778416389976.png',
    introTitle: 'Urban Sanctuaries',
    introDesc: 'Located in the beating heart of global metropolises, our city hotels are tranquil havens designed for the modern luxury traveller. Offering seamless connectivity, award-winning dining, and unparalleled service, they are the perfect base for business or leisure.',
    featured: [
      {
        name: 'Majesty Palace',
        location: 'New Delhi',
        desc: 'Set in six acres of lush gardens in the heart of India\'s diplomatic enclave. The hotel is a legendary destination known for hosting heads of state, featuring the capital\'s finest dining and the expansive J Wellness Circle.',
        image: '/images/presidential_villa_1778416375029.png',
        highlights: ['Diplomatic Enclave', 'Michelin-star Dining', 'Executive Lounge']
      },
      {
        name: 'Aura Lands End',
        location: 'Mumbai',
        desc: 'Perched on the edge of the Bandra peninsula, overlooking the Arabian Sea and the iconic Sea Link. The ultimate city retreat offering resort-style luxury in the heart of the entertainment district.',
        image: '/images/infinity_pool_view_1778416175800.png',
        highlights: ['Sea Views', 'Grand Ballroom', 'Rooftop Bar']
      }
    ],
    grid: [
      { name: 'Aura West End', location: 'London', image: '/images/luxury_suite_interior_1778416076439.png', desc: 'Classic British charm meets Indian hospitality near Buckingham Palace.' },
      { name: 'Aura Dubai', location: 'Downtown Dubai', image: '/images/hotel_lobby_grand_1778416389976.png', desc: 'A stunning architectural marvel offering panoramic views of the Burj Khalifa.' },
      { name: 'Aura Coromandel', location: 'Chennai', image: '/images/fine_dining_restaurant_1778416112215.png', desc: 'A landmark of luxury in South India, known for its grand architecture.' }
    ],
    amenities: [
      { title: 'Executive Lounges', icon: '🥂', desc: 'Exclusive spaces for high tea, cocktails, and private meetings.' },
      { title: '24/7 Business Centres', icon: '💼', desc: 'Fully equipped facilities to keep you connected globally.' },
      { title: 'Award-winning Dining', icon: '🍽️', desc: 'The city\'s finest culinary destinations right at your doorstep.' },
      { title: 'Helipad Access', icon: '🚁', desc: 'Seamless VIP transfers directly to the hotel premises.' }
    ]
  },
  {
    path: 'hotels/wildlife',
    title: 'Wildlife Resorts',
    heroImage: '/images/wildlife_safari_experience_1778416289320.png',
    introTitle: 'Into the Wild',
    introDesc: 'Experience the raw beauty of nature without compromising on luxury. Our safari lodges offer unparalleled access to India\'s most spectacular tiger reserves. Wake up to the sounds of the jungle and embark on thrilling safaris led by expert naturalists.',
    featured: [
      {
        name: 'Aura Mahua Kothi',
        location: 'Bandhavgarh National Park',
        desc: 'Named after the revered Mahua tree, this lodge offers sprawling luxury tents and mud-kutiyas in the heart of tiger country. Experience exceptional wildlife viewing and traditional central Indian village hospitality.',
        image: '/images/wildlife_safari_experience_1778416289320.png',
        highlights: ['Open-Jeep Safaris', 'Mud-Kutiya Tents', 'Village Dining']
      },
      {
        name: 'Aura Banjaar Tola',
        location: 'Kanha National Park',
        desc: 'Situated along the banks of the Banjaar River, featuring two elegant camps of luxury suites. The contemporary design utilizes local timber and bamboo, offering a sustainable yet opulent safari experience.',
        image: '/images/infinity_pool_view_1778416175800.png',
        highlights: ['River Views', 'Sustainable Luxury', 'Expert Naturalists']
      }
    ],
    grid: [
      { name: 'Aura Baghvan', location: 'Pench', image: '/images/cultural_experiences_1778416250752.png', desc: 'Featuring vintage charm and roof-top machans perfect for sleepouts.' },
      { name: 'Aura Pashan Garh', location: 'Panna', image: '/images/heritage_palace_exterior_1778416158734.png', desc: 'Stone cottages inspired by the dry-packed stone houses of the region.' },
      { name: 'Aura Corbett', location: 'Uttarakhand', image: '/images/wildlife_safari_experience_1778416289320.png', desc: 'Immersed in the wilderness of India\'s first national park.' }
    ],
    amenities: [
      { title: 'Expert Naturalists', icon: '🧭', desc: 'Guided safaris with highly trained wildlife experts and trackers.' },
      { title: 'Open-Jeep Safaris', icon: '🚙', desc: 'Customized 4x4 vehicles designed for optimal wildlife viewing.' },
      { title: 'Jungle Dining', icon: '🍲', desc: 'Bush dinners and breakfasts served in the heart of the forest.' },
      { title: 'Conservation', icon: '🌱', desc: 'Eco-friendly practices that support local wildlife and communities.' }
    ]
  }
];

// CSS Template for Comprehensive Pages
const generateCss = () => `
.pageWrapper { background: #FAF6F0; overflow-x: hidden; }

/* Hero */
.hero { position: relative; height: 75vh; min-height: 600px; display: flex; align-items: flex-end; padding-bottom: 80px; }
.heroBg { position: absolute; inset: 0; }
.heroOverlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%); }
.heroContent { position: relative; z-index: 2; max-width: 1400px; margin: 0 auto; padding: 0 40px; width: 100%; }
.eyebrow { display: block; font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; color: #C9A96E; margin-bottom: 12px; }
.title { font-family: 'Cormorant Garamond', serif; font-size: clamp(48px, 7vw, 96px); font-weight: 400; color: white; margin-bottom: 16px; line-height: 1; }
.goldLine { width: 80px; height: 2px; background: #8E744B; margin: 30px 0; }

/* Intro */
.introSection { padding: 120px 0; text-align: center; background: white; }
.introInner { max-width: 900px; margin: 0 auto; padding: 0 40px; }
.introTitle { font-family: 'Cormorant Garamond', serif; font-size: clamp(36px, 5vw, 56px); font-weight: 400; color: #1A1A1A; line-height: 1.2; }
.goldLineCenter { width: 60px; height: 2px; background: #8E744B; margin: 30px auto; }
.introText { font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 300; color: #4A4A4A; line-height: 1.9; }

/* Featured */
.featuredSection { padding: 80px 0; }
.container { max-width: 1400px; margin: 0 auto; padding: 0 40px; }
.featuredRow { display: flex; align-items: center; gap: 80px; margin-bottom: 120px; }
.featuredRow:nth-child(even) { flex-direction: row-reverse; }
.featImgWrap { flex: 1; position: relative; height: 600px; border-radius: 4px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
.featContent { flex: 1; }
.featName { font-family: 'Cormorant Garamond', serif; font-size: 48px; font-weight: 400; color: #1A1A1A; margin-bottom: 8px; line-height: 1.1; }
.featLoc { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #8E744B; margin-bottom: 30px; display: block; }
.featDesc { font-family: 'Montserrat', sans-serif; font-size: 15px; font-weight: 300; color: #4A4A4A; line-height: 1.8; margin-bottom: 40px; }
.featHighlights { list-style: none; padding: 0; margin: 0 0 40px 0; }
.featHighlight { display: flex; align-items: center; font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 400; color: #1A1A1A; margin-bottom: 12px; }
.featHighlight:before { content: '◆'; color: #8E744B; margin-right: 12px; font-size: 12px; }
.featBtn { display: inline-block; font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: white; background: #1A1A1A; padding: 18px 36px; transition: background 0.3s ease; }
.featBtn:hover { background: #8E744B; }

/* Grid */
.gridSection { padding: 80px 0 120px; background: white; }
.sectionTitle { text-align: center; font-family: 'Cormorant Garamond', serif; font-size: 48px; font-weight: 400; color: #1A1A1A; margin-bottom: 60px; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
.card { background: #FAF6F0; border: 1px solid #EBE3D5; transition: transform 0.4s ease; }
.card:hover { transform: translateY(-10px); }
.cardImgWrap { position: relative; height: 350px; }
.cardBody { padding: 40px 30px; text-align: center; }
.cardTitle { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 400; color: #1A1A1A; margin-bottom: 8px; }
.cardLoc { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #8E744B; margin-bottom: 20px; display: block; }
.cardDesc { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 300; color: #4A4A4A; line-height: 1.7; margin-bottom: 30px; }
.cardLink { font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #1A1A1A; text-decoration: underline; text-underline-offset: 6px; text-decoration-color: #8E744B; }

/* Amenities */
.amenitiesSection { padding: 120px 0; background: #1A1A1A; color: white; text-align: center; }
.amTitle { font-family: 'Cormorant Garamond', serif; font-size: 48px; font-weight: 400; margin-bottom: 80px; }
.amGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
.amCard { padding: 0 20px; }
.amIcon { font-size: 48px; margin-bottom: 24px; display: block; }
.amName { font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #C9A96E; margin-bottom: 16px; }
.amDesc { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 300; color: rgba(255,255,255,0.7); line-height: 1.7; }

/* CTA */
.ctaSection { padding: 120px 0; text-align: center; background: url('/images/infinity_pool_view_1778416175800.png') center/cover; position: relative; }
.ctaOverlay { position: absolute; inset: 0; background: rgba(0,0,0,0.7); }
.ctaContent { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; padding: 0 40px; }
.ctaTitle { font-family: 'Cormorant Garamond', serif; font-size: 56px; font-weight: 400; color: white; margin-bottom: 24px; }
.ctaDesc { font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 300; color: rgba(255,255,255,0.8); line-height: 1.8; margin-bottom: 40px; }
.ctaBtn { display: inline-block; font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #1A1A1A; background: #C9A96E; padding: 20px 48px; transition: background 0.3s ease; }
.ctaBtn:hover { background: white; }

@media (max-width: 1100px) {
  .featuredRow { flex-direction: column !important; gap: 40px; text-align: center; }
  .featHighlights { display: inline-block; text-align: left; }
  .grid, .amGrid { grid-template-columns: repeat(2, 1fr); }
  .featImgWrap { width: 100%; height: 400px; }
}
@media (max-width: 768px) {
  .heroContent, .introInner, .container { padding: 0 24px; }
  .grid, .amGrid { grid-template-columns: 1fr; }
}
`;

// TSX Template for Comprehensive Pages
const generateTsx = (page) => `
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '${page.title} | Majesty Hotels',
  description: '${page.introDesc.replace(/'/g, "&apos;")}',
};

export default function ${page.title.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="${page.heroImage}"
            alt="${page.title}"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>The Collection</span>
          <h1 className={styles.title}>${page.title}</h1>
          <div className={styles.goldLine} />
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>${page.introTitle}</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            ${page.introDesc}
          </p>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          {${JSON.stringify(page.featured)}.map((feat: any, idx: number) => (
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
          <h2 className={styles.sectionTitle}>More ${page.title}</h2>
          <div className={styles.grid}>
            {${JSON.stringify(page.grid)}.map((item: any, idx: number) => (
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
            {${JSON.stringify(page.amenities)}.map((am: any, idx: number) => (
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
`;

function generateAll() {
  const baseDir = path.join(__dirname, 'src', 'app');
  
  hotelsData.forEach(page => {
    const dir = path.join(baseDir, page.path);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write CSS
    fs.writeFileSync(path.join(dir, 'page.module.css'), generateCss());
    
    // Write TSX
    fs.writeFileSync(path.join(dir, 'page.tsx'), generateTsx(page).trim());
    console.log(`Generated comprehensive page: ${page.path}`);
  });
}

generateAll();

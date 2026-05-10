const fs = require('fs');
const path = require('path');

const diningData = [
  {
    path: 'dining/fine-dining',
    title: 'Fine Dining',
    heroImage: '/images/fine_dining_restaurant_1778416112215.png',
    introTitle: 'Culinary Masterpieces',
    introDesc: 'Our fine dining establishments are true temples of gastronomy. Led by Michelin-starred chefs and global culinary maestros, we present menus that are as visually stunning as they are delicious. From the sourcing of the rarest ingredients to the theatrical tableside service, every element is designed to elevate your dining experience to an unforgettable art form.',
    featured: [
      {
        name: 'Wasabi by Morimoto',
        location: 'The Majesty Palace, Mumbai',
        desc: 'A premier Japanese restaurant crafted by the legendary Iron Chef Masaharu Morimoto. Featuring ingredients flown in daily from Tsukiji market, Wasabi offers contemporary Japanese cuisine with an unparalleled view of the Gateway of India.',
        image: '/images/fine_dining_restaurant_1778416112215.png',
        highlights: ['Omakase Tasting Menus', 'Sushi Bar & Teppanyaki', 'Award-Winning Sake Menu']
      },
      {
        name: 'Varq',
        location: 'Majesty Palace, New Delhi',
        desc: 'Varq seamlessly blends traditional Indian flavors with contemporary plating and modern cooking techniques. The restaurant takes its name from the edible gold and silver foil used in royal Indian cuisine, reflecting the opulence of the dining experience.',
        image: '/images/gourmet_cuisine_dish_1778416264157.png',
        highlights: ['Modern Indian Cuisine', 'Bespoke Art Installations', 'Curated Tea Pairings']
      }
    ],
    grid: [
      { name: 'Orient Express', location: 'New Delhi', image: '/images/luxury_suite_interior_1778416076439.png', desc: 'European fine dining set within a beautifully restored, authentic railway carriage.' },
      { name: 'Chambers', location: 'Multiple Locations', image: '/images/hotel_lobby_grand_1778416389976.png', desc: 'Our exclusive members-only club offering the finest bespoke dining experiences globally.' },
      { name: 'Celini', location: 'Mumbai', image: '/images/fine_dining_restaurant_1778416112215.png', desc: 'Authentic Italian dining with a wood-fired pizza oven and an expansive wine list.' }
    ],
    experiences: [
      { title: 'Master Chefs', icon: '👨‍🍳', desc: 'Dishes conceived and prepared by internationally recognized culinary stars.' },
      { title: 'Sommelier Pairing', icon: '🍷', desc: 'Access to rare cellars and expert guidance on perfect wine pairings.' },
      { title: 'Private Dining', icon: '🍽️', desc: 'Exclusive dining rooms for intimate gatherings and celebrations.' },
      { title: 'Seasonal Menus', icon: '🍃', desc: 'Constantly evolving dishes highlighting the freshest seasonal produce.' }
    ]
  },
  {
    path: 'dining/specialty',
    title: 'Specialty Cuisine',
    heroImage: '/images/gourmet_cuisine_dish_1778416264157.png',
    introTitle: 'Flavours of the World',
    introDesc: 'Travel the world through your palate. From authentic coastal Indian seafood prepared with age-old family recipes to the delicate spices of the Eastern Mediterranean, our specialty restaurants offer highly focused, expertly crafted menus that transport you to the heart of the region.',
    featured: [
      {
        name: 'Karavalli',
        location: 'Aura West End, Bengaluru',
        desc: 'An iconic culinary destination celebrating the diverse flavors of the southwestern Indian coast. The menu is based on well-researched, age-old family recipes sourced from the traditional homes of Mangalorean, Coorgi, and Syrian Christian communities.',
        image: '/images/gourmet_cuisine_dish_1778416264157.png',
        highlights: ['Authentic Coastal Cuisine', 'Al Fresco Garden Seating', 'Legacy Family Recipes']
      },
      {
        name: 'Golden Dragon',
        location: 'The Majesty Palace, Mumbai',
        desc: 'India\'s first authentic Sichuan restaurant. Golden Dragon remains an institution, beloved for its legendary Peking Duck, delicate dim sums, and fiery Sichuan specialties crafted by master chefs from mainland China.',
        image: '/images/fine_dining_restaurant_1778416112215.png',
        highlights: ['Live Dim Sum Kitchen', 'Legendary Peking Duck', 'Traditional Tea Ceremony']
      }
    ],
    grid: [
      { name: 'Souk', location: 'Mumbai', image: '/images/rooftop_bar_city_1778416307700.png', desc: 'Award-winning Eastern Mediterranean cuisine with panoramic views of the Arabian Sea.' },
      { name: 'Thai Pavilion', location: 'Multiple Locations', image: '/images/gourmet_cuisine_dish_1778416264157.png', desc: 'India\'s first authentic Thai restaurant, featuring masterclasses in royal Thai cuisine.' },
      { name: 'Machan', location: 'New Delhi', image: '/images/wildlife_safari_experience_1778416289320.png', desc: 'A legendary 24-hour international eatery inspired by the jungles of India.' }
    ],
    experiences: [
      { title: 'Authentic Spices', icon: '🌶️', desc: 'Ingredients sourced directly from regional farmers and spice markets.' },
      { title: 'Heritage Recipes', icon: '📜', desc: 'Dishes preserved and passed down through generations of families.' },
      { title: 'Theatrical Cooking', icon: '🔥', desc: 'Open kitchens and live stations adding drama to your dining.' },
      { title: 'Regional Decor', icon: '🏮', desc: 'Immersive restaurant interiors reflecting the cuisine\'s origin.' }
    ]
  },
  {
    path: 'dining/bars',
    title: 'Bars & Lounges',
    heroImage: '/images/rooftop_bar_city_1778416307700.png',
    introTitle: 'Spirited Evenings',
    introDesc: 'Elevate your evenings. Whether you are looking for a historic polo bar serving rare single malts or a high-energy rooftop lounge with panoramic city views and live DJs, our bars define the art of mixology. Each venue offers a distinct atmosphere, premium spirits, and crafted experiences.',
    featured: [
      {
        name: 'Aura Rooftop Bar',
        location: 'Majesty Palace, New Delhi',
        desc: 'A vibrant outdoor setting that comes alive as the sun sets over the capital. Enjoy artisanal cocktails, a curated selection of global tapas, and live DJ sets under a canopy of stars.',
        image: '/images/rooftop_bar_city_1778416307700.png',
        highlights: ['Panoramic City Views', 'Live DJ Sets', 'Artisanal Mixology']
      },
      {
        name: 'The Harbour Bar',
        location: 'The Majesty Palace, Mumbai',
        desc: 'Holding Mumbai\'s first-ever liquor license, The Harbour Bar is a historic institution. Featuring prohibition-era cocktails, rare spirits, and an atmosphere steeped in the glamour of the 1930s.',
        image: '/images/luxury_suite_interior_1778416076439.png',
        highlights: ['Historic 1933 License', 'Prohibition Cocktails', 'Harbour Views']
      }
    ],
    grid: [
      { name: 'Polo Lounge', location: 'Rambagh Palace, Jaipur', image: '/images/heritage_palace_exterior_1778416158734.png', desc: 'A historic bar adorned with royal equestrian memorabilia and serving rare whiskies.' },
      { name: 'Wink', location: 'Mumbai', image: '/images/rooftop_bar_city_1778416307700.png', desc: 'A high-energy, contemporary lounge known for its innovative cocktail menu.' },
      { name: 'Blue Bar', location: 'New Delhi', image: '/images/hotel_lobby_grand_1778416389976.png', desc: 'An edgy, sophisticated space offering the best nightlife experience in the city.' }
    ],
    experiences: [
      { title: 'Master Mixologists', icon: '🍸', desc: 'Award-winning bartenders crafting bespoke, personalized cocktails.' },
      { title: 'Rare Collections', icon: '🥃', desc: 'Extensive cellars featuring vintage wines and limited-edition spirits.' },
      { title: 'Live Entertainment', icon: '🎷', desc: 'Jazz bands, acoustic artists, and international resident DJs.' },
      { title: 'Gourmet Tapas', icon: '🍤', desc: 'Exquisite bar bites and small plates designed to pair with drinks.' }
    ]
  },
  {
    path: 'dining/high-tea',
    title: 'High Tea',
    heroImage: '/images/hotel_lobby_grand_1778416389976.png',
    introTitle: 'An Afternoon Tradition',
    introDesc: 'Indulge in our legendary High Tea service, a time-honored tradition that brings the elegance of the colonial era into the modern day. Enjoy a carefully curated selection of single-estate teas paired with warm scones, clotted cream, delicate finger sandwiches, and exquisite pastries.',
    featured: [
      {
        name: 'Sea Lounge',
        location: 'The Majesty Palace, Mumbai',
        desc: 'An iconic Mumbai experience. The Sea Lounge offers classical piano music, a lavish high tea buffet featuring both English classics and local street food delicacies, and breathtaking views of the Gateway of India and the Arabian Sea.',
        image: '/images/hotel_lobby_grand_1778416389976.png',
        highlights: ['Arabian Sea Views', 'Live Piano Music', 'English & Local Delicacies']
      },
      {
        name: 'The Emperor Lounge',
        location: 'Majesty Palace, New Delhi',
        desc: 'An elegant, sun-lit setting perfect for informal meetings or leisurely afternoons. Offering bespoke tea blends, single-origin coffees from global estates, and a glass-enclosed pastry display featuring Parisian-style desserts.',
        image: '/images/fine_dining_restaurant_1778416112215.png',
        highlights: ['Single-Origin Coffees', 'Parisian Pastries', 'Sun-lit Atrium']
      }
    ],
    grid: [
      { name: 'Verandah', location: 'Rambagh Palace, Jaipur', image: '/images/heritage_palace_exterior_1778416158734.png', desc: 'Afternoon tea served on the historic palace verandah with views of the Mughal gardens.' },
      { name: 'Atrium Lounge', location: 'Chennai', image: '/images/presidential_villa_1778416375029.png', desc: 'A serene setting under a spectacular glass dome, offering specialty teas.' },
      { name: 'The Promenade', location: 'Goa', image: '/images/beach_resort_view_1778416217181.png', desc: 'Ocean-front high tea featuring Goan delicacies and tropical fruit infusions.' }
    ],
    experiences: [
      { title: 'Tea Sommeliers', icon: '🫖', desc: 'Experts to guide you through rare, single-estate tea selections.' },
      { title: 'Artisanal Pastries', icon: '🧁', desc: 'Handcrafted desserts, macarons, and warm, freshly baked scones.' },
      { title: 'Classical Music', icon: '🎹', desc: 'Live piano or classical string quartets providing the perfect ambiance.' },
      { title: 'Champagne Pairings', icon: '🥂', desc: 'Elevate your afternoon with a glass of premium vintage champagne.' }
    ]
  },
  {
    path: 'dining',
    title: 'Dining & Culinary',
    heroImage: '/images/fine_dining_restaurant_1778416112215.png',
    introTitle: 'Flavours That Define Luxury',
    introDesc: 'From Michelin-starred chefs to local culinary maestros, Aura\'s kitchens are theatres of passion. With over 300 restaurants, bars and lounges across our properties — each one a destination in its own right — we source the finest regional ingredients, honour ancestral recipes, and present them with the artistry of world-class hospitality.',
    featured: [
      {
        name: 'Wasabi by Morimoto',
        location: 'The Majesty Palace, Mumbai',
        desc: 'A premier Japanese restaurant by the legendary Iron Chef Masaharu Morimoto, offering contemporary Japanese cuisine in a stunning setting.',
        image: '/images/gourmet_cuisine_dish_1778416264157.png',
        highlights: ['Contemporary Japanese', 'Iron Chef Signature', 'Harbour Views']
      },
      {
        name: 'Masala Art',
        location: 'Majesty Palace, New Delhi',
        desc: 'An acclaimed showcase of regional Indian cuisine, where traditional recipes are reimagined with contemporary flair and the finest spices.',
        image: '/images/fine_dining_restaurant_1778416112215.png',
        highlights: ['Regional Indian', 'Contemporary Flair', 'Award-Winning']
      }
    ],
    grid: [
      { name: 'Karavalli', location: 'Bengaluru', image: '/images/gourmet_cuisine_dish_1778416264157.png', desc: 'Authentic coastal Indian cuisine based on well-researched family recipes.' },
      { name: 'Aqua Bar', location: 'New Delhi', image: '/images/rooftop_bar_city_1778416307700.png', desc: 'Elevated mixology meets panoramic city views at this iconic rooftop bar.' },
      { name: 'Sea Lounge', location: 'Mumbai', image: '/images/hotel_lobby_grand_1778416389976.png', desc: 'An iconic Mumbai experience offering a lavish high tea buffet and classical piano.' }
    ],
    experiences: [
      { title: 'Master Chefs', icon: '👨‍🍳', desc: 'Dishes conceived and prepared by internationally recognized culinary stars.' },
      { title: 'Sommelier Pairing', icon: '🍷', desc: 'Access to rare cellars and expert guidance on perfect wine pairings.' },
      { title: 'Private Dining', icon: '🍽️', desc: 'Exclusive dining rooms for intimate gatherings and celebrations.' },
      { title: 'Theatrical Cooking', icon: '🔥', desc: 'Open kitchens and live stations adding drama to your dining.' }
    ]
  }
];

// Reusing the same comprehensive CSS and TSX generators from the hotels script
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
.ctaSection { padding: 120px 0; text-align: center; background: url('/images/gourmet_cuisine_dish_1778416264157.png') center/cover; position: relative; }
.ctaOverlay { position: absolute; inset: 0; background: rgba(0,0,0,0.8); }
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

const generateTsx = (page) => `
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '${page.title} | Majesty Hotels Dining',
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
          <span className={styles.eyebrow}>Culinary Excellence</span>
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

      {/* Featured Dining Section */}
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
          <h2 className={styles.sectionTitle}>Discover More ${page.title}</h2>
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

      {/* Experiences Section */}
      <section className={styles.amenitiesSection}>
        <div className={styles.container}>
          <h2 className={styles.amTitle}>The Aura Experience</h2>
          <div className={styles.amGrid}>
            {${JSON.stringify(page.experiences)}.map((am: any, idx: number) => (
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
`;

function generateAll() {
  const baseDir = path.join(__dirname, 'src', 'app');
  
  diningData.forEach(page => {
    const dir = path.join(baseDir, page.path);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(dir, 'page.module.css'), generateCss());
    fs.writeFileSync(path.join(dir, 'page.tsx'), generateTsx(page).trim());
    console.log(`Generated comprehensive dining page: ${page.path}`);
  });
}

generateAll();

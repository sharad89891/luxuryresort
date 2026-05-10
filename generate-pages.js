const fs = require('fs');
const path = require('path');

const pages = [
  // Hotels
  { path: 'hotels/palaces', title: 'Palace Hotels', image: '/images/heritage_palace_exterior_1778416158734.png', desc: 'Step into a world of royal grandeur and live like a Maharaja.' },
  { path: 'hotels/beach', title: 'Beach Resorts', image: '/images/beach_resort_view_1778416217181.png', desc: 'Sun, sand, and soulful luxury on pristine coastlines.' },
  { path: 'hotels/mountain', title: 'Mountain Retreats', image: '/images/infinity_pool_view_1778416175800.png', desc: 'Tranquil escapes nestled amidst misty peaks and lush valleys.' },
  { path: 'hotels/city', title: 'City Hotels', image: '/images/hotel_lobby_grand_1778416389976.png', desc: 'Urban sanctuaries offering unmatched luxury in the heart of the metropolis.' },
  { path: 'hotels/wildlife', title: 'Wildlife Resorts', image: '/images/wildlife_safari_experience_1778416289320.png', desc: 'Immersive safari experiences in the heart of nature.' },
  
  // Dining
  { path: 'dining/fine-dining', title: 'Fine Dining', image: '/images/fine_dining_restaurant_1778416112215.png', desc: 'Award-winning gastronomy crafted by master chefs.' },
  { path: 'dining/specialty', title: 'Specialty Cuisine', image: '/images/gourmet_cuisine_dish_1778416264157.png', desc: 'Authentic regional flavours and international delicacies.' },
  { path: 'dining/bars', title: 'Bars & Lounges', image: '/images/rooftop_bar_city_1778416307700.png', desc: 'Crafted cocktails and rare spirits in sophisticated settings.' },
  { path: 'dining/high-tea', title: 'High Tea', image: '/images/fine_dining_restaurant_1778416112215.png', desc: 'The legendary afternoon tradition of exquisite teas and pastries.' },
  
  // Experiences
  { path: 'experiences/cultural', title: 'Cultural Heritage', image: '/images/cultural_experiences_1778416250752.png', desc: 'Immersive journeys through art, music, and timeless traditions.' },
  { path: 'experiences/adventure', title: 'Adventure', image: '/images/wildlife_safari_experience_1778416289320.png', desc: 'Thrilling excursions and outdoor pursuits for the intrepid traveller.' },
  { path: 'experiences/wildlife', title: 'Wildlife & Nature', image: '/images/wildlife_safari_experience_1778416289320.png', desc: 'Encounter majestic wildlife in their natural habitats.' },
  { path: 'experiences/weddings', title: 'Timeless Weddings', image: '/images/wedding_banquet_hall_1778416202576.png', desc: 'Bespoke celebrations crafted with unparalleled elegance.' },
  { path: 'experiences/celebrations', title: 'Celebrations', image: '/images/wedding_banquet_hall_1778416202576.png', desc: 'Make every milestone unforgettable with our signature hospitality.' },
  
  // Wellness
  { path: 'wellness/ayurveda', title: 'Ayurveda', image: '/images/ayurveda_spa_treatment_1778416350069.png', desc: 'Ancient healing therapies tailored to restore balance and vitality.' },
  { path: 'wellness/spa', title: 'Spa Treatments', image: '/images/spa_wellness_center_1778416130330.png', desc: 'Luxurious rituals designed to rejuvenate mind, body, and soul.' },
  { path: 'wellness/yoga', title: 'Yoga & Meditation', image: '/images/spa_wellness_center_1778416130330.png', desc: 'Find inner peace through guided practices in serene settings.' },
  { path: 'wellness/fitness', title: 'Fitness', image: '/images/infinity_pool_view_1778416175800.png', desc: 'State-of-the-art facilities for your wellness journey.' },
  
  // Offers
  { path: 'offers/stay', title: 'Stay Offers', image: '/images/presidential_villa_1778416375029.png', desc: 'Exclusive rates and packages for your next luxurious getaway.' },
  { path: 'offers/dining', title: 'Dining Offers', image: '/images/gourmet_cuisine_dish_1778416264157.png', desc: 'Special culinary experiences and tasting menus.' },
  { path: 'offers/celebrations', title: 'Celebration Packages', image: '/images/wedding_banquet_hall_1778416202576.png', desc: 'Curated offers for anniversaries, honeymoons, and special occasions.' },
  { path: 'offers/early-bird', title: 'Early Bird', image: '/images/special_offers_banner_1778416333572.png', desc: 'Plan ahead and enjoy significant savings on your reservations.' },
  
  // Also generating Innercircle and other missing pages referenced in footer/nav just in case
  { path: 'innercircle', title: 'Majesty Circle', image: '/images/presidential_villa_1778416375029.png', desc: 'Join our exclusive loyalty programme and unlock a world of privileges.' },
  { path: 'book', title: 'Book Your Stay', image: '/images/hero_palace_hotel_1778416060429.png', desc: 'Reserve your next unforgettable experience with Majesty Hotels.' },
  { path: 'about', title: 'Our Story', image: '/images/heritage_palace_exterior_1778416158734.png', desc: 'Discover the legacy of soulful luxury since 1903.' },
  { path: 'sustainability', title: 'Sustainability', image: '/images/cultural_experiences_1778416250752.png', desc: 'Our commitment to the environment and local communities.' },
  { path: 'careers', title: 'Careers', image: '/images/hotel_lobby_grand_1778416389976.png', desc: 'Join the team that defines world-class hospitality.' },
  { path: 'press', title: 'Press Room', image: '/images/presidential_villa_1778416375029.png', desc: 'Latest news and media updates from Majesty Hotels.' },
];

const cssContent = `
.hero {
  position: relative; height: 50vh; min-height: 400px;
  display: flex; align-items: center; justify-content: center; overflow: hidden;
}
.heroBg { position: absolute; inset: 0; }
.heroOverlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%);
}
.heroContent {
  position: relative; z-index: 2; text-align: center; max-width: 800px; padding: 0 24px;
}
.title {
  font-family: 'Cormorant Garamond', serif; font-size: clamp(40px, 6vw, 64px);
  font-weight: 400; color: white; margin-bottom: 16px;
}
.desc {
  font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 300;
  color: rgba(255,255,255,0.8); line-height: 1.6;
}
.contentSection {
  padding: 100px 24px; background: #FAF6F0; text-align: center; min-height: 40vh;
}
`;

function generate() {
  const baseDir = path.join(__dirname, 'src', 'app');
  
  pages.forEach(page => {
    const dir = path.join(baseDir, page.path);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Create CSS module
    fs.writeFileSync(path.join(dir, 'page.module.css'), cssContent);
    
    // Create TSX file
    const tsxContent = `
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '${page.title} | Majesty Hotels',
  description: '${page.desc}',
};

export default function Page() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="${page.image}"
            alt="${page.title}"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>${page.title}</h1>
          <p className={styles.desc}>${page.desc}</p>
        </div>
      </section>
      
      <section className={styles.contentSection}>
        <div className="container">
          <span className="eyebrow">Discover More</span>
          <h2 className="section-title">Coming Soon</h2>
          <div className="gold-divider-center" />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We are curating an extraordinary collection of experiences for this section. 
            Please check back soon to explore our ${page.title.toLowerCase()} offerings.
          </p>
          <div style={{ marginTop: '40px' }}>
            <Link href="/" className="btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
`;
    fs.writeFileSync(path.join(dir, 'page.tsx'), tsxContent.trim());
    console.log(`Created page: ${page.path}`);
  });
}

generate();

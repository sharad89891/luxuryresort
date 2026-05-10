const fs = require('fs');
const path = require('path');

const offersPages = [
  {
    path: 'src/app/offers/page.tsx',
    cssPath: 'src/app/offers/page.module.css',
    title: 'Exclusive Offers',
    subtitle: 'Exceptional Value, Legendary Experiences',
    description: 'Discover a curated collection of offers designed to elevate your stay at Aura Hotels. From seasonal retreats to bespoke dining experiences, explore the perfect package for your next journey.',
    heroImage: '/images/special_offers_banner_1778416333572.png',
    sections: [
      {
        title: 'Timeless Luxury',
        content: 'At Aura Hotels, we believe every stay should be extraordinary. Our exclusive offers are designed to provide you with the finest experiences, whether you are planning a family holiday, a romantic getaway, or a business trip. Immerse yourself in our world of soulful luxury.'
      },
      {
        title: 'Bespoke Inclusions',
        content: 'Each of our packages is thoughtfully curated to include meaningful benefits, from spa credits and airport transfers to curated city tours and gourmet breakfast spreads. Experience the legend of Aura hospitality with added value.'
      }
    ],
    features: [
      { title: 'Stay Packages', desc: 'Complimentary nights and upgrade offers.' },
      { title: 'Dining Delights', desc: 'Culinary credits and chef-curated menus.' },
      { title: 'Seasonal Retreats', desc: 'Exclusive benefits for your holiday escapes.' }
    ]
  },
  {
    path: 'src/app/offers/stay/page.tsx',
    cssPath: 'src/app/offers/stay/page.module.css',
    title: 'Stay Offers',
    subtitle: 'The Luxury of Time',
    description: 'Extended stays, suite upgrades, and family escapes. Explore our range of stay-focused offers designed to provide the perfect backdrop for your memories.',
    heroImage: '/images/luxury_suite_interior_1778416076439.png',
    sections: [
      {
        title: 'Suite Surprises',
        content: 'Experience our most opulent accommodations with our Suite Upgrade offers. Enjoy the space and elegance of our legendary suites with exclusive benefits like 24-hour butler service, private check-in, and access to executive lounges.'
      },
      {
        title: 'Family Getaways',
        content: 'Create lasting bonds with our curated family packages. From kids activities and special menus to extra rooms and babysitting services, we ensure every member of the family has a truly magical stay.'
      }
    ],
    features: [
      { title: 'Stay 3, Pay 2', desc: 'One complimentary night on every three-night stay.' },
      { title: 'Suite Upgrade', desc: 'Upgrade to the next category of luxury.' },
      { title: 'Royal Welcome', desc: 'In-room amenities and private airport transfers.' }
    ]
  },
  {
    path: 'src/app/offers/dining/page.tsx',
    cssPath: 'src/app/offers/dining/page.module.css',
    title: 'Dining Offers',
    subtitle: 'A Feast for the Senses',
    description: 'Savour the finest flavours with our exclusive culinary offers. From romantic dinners under the stars to indulgent weekend brunches, explore our world of gourmet delights.',
    heroImage: '/images/gourmet_cuisine_dish_1778416264157.png',
    sections: [
      {
        title: 'Epicurean Journeys',
        content: 'Indulge in a world of flavours with our chef-led culinary experiences. Our dining offers provide exceptional value at our award-winning restaurants, featuring everything from traditional regional specialities to global fine dining.'
      },
      {
        title: 'Curated Celebrations',
        content: 'Make your special occasions even more memorable with our bespoke dining packages. Whether it is an anniversary, a birthday, or a corporate milestone, we create the perfect setting and menu for your celebration.'
      }
    ],
    features: [
      { title: 'Gourmet Brunch', desc: 'Champagne weekend brunches with live music.' },
      { title: 'Chef\'s Table', desc: 'Private multi-course dinners with the Executive Chef.' },
      { title: 'Wine Pairing', desc: 'Curated wine selections for every course.' }
    ]
  },
  {
    path: 'src/app/offers/celebrations/page.tsx',
    cssPath: 'src/app/offers/celebrations/page.module.css',
    title: 'Celebration Packages',
    subtitle: 'Moments to Cherish',
    description: 'From fairytale weddings to milestone birthdays, celebrate life\'s most precious moments with the legendary hospitality of Aura Hotels. Our packages are designed to make every detail perfect.',
    heroImage: '/images/wedding_banquet_hall_1778416202576.png',
    sections: [
      {
        title: 'Legendary Weddings',
        content: 'Step into a world of timeless romance with our wedding packages. Our expert planners will assist you in every detail, from the choice of venue and menu to the floral arrangements and entertainment, ensuring your special day is truly unforgettable.'
      },
      {
        title: 'Milestone Events',
        content: 'Celebrate your achievements and milestones with our customized event packages. From grand galas in our historic ballrooms to intimate gatherings in our private salons, we provide the perfect setting for your success.'
      }
    ],
    features: [
      { title: 'Bridal Suite', desc: 'Complimentary stay in our most romantic suites.' },
      { title: 'Custom Menus', desc: 'Bespoke culinary creations for your guests.' },
      { title: 'Planning Services', desc: 'Dedicated event concierge for every detail.' }
    ]
  },
  {
    path: 'src/app/offers/early-bird/page.tsx',
    cssPath: 'src/app/offers/early-bird/page.module.css',
    title: 'Early Bird',
    subtitle: 'Plan Ahead for Perfection',
    description: 'Reward your foresight with our Early Bird offers. Book your stay in advance to enjoy exclusive savings and guaranteed availability at our most iconic destinations.',
    heroImage: '/images/hero_palace_hotel_1778416060429.png',
    sections: [
      {
        title: 'Advanced Bookings',
        content: 'Planning your holiday in advance has never been more rewarding. Secure your preferred dates at our most sought-after properties while enjoying significant savings on our best available rates.'
      },
      {
        title: 'Peace of Mind',
        content: 'Enjoy the confidence of having your travel plans perfectly arranged. With our Early Bird packages, you can relax and look forward to your journey, knowing that every detail of your Aura experience is already taken care of.'
      }
    ],
    features: [
      { title: 'Up to 25% Off', desc: 'Special savings on bookings made 30 days in advance.' },
      { title: 'Flexible Dates', desc: 'One-time date change option included.' },
      { title: 'Early Check-in', desc: 'Priority access to your room upon arrival.' }
    ]
  }
];

const sanitizeString = (str) => {
  return str.replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, ' ');
};

function generatePageComponent(pageData) {
  const featureItems = pageData.features.map(f => {
    return "            <div className={styles.featureItem}>\n              <h3 className={styles.featureTitle}>" + sanitizeString(f.title) + "</h3>\n              <p className={styles.featureDesc}>" + sanitizeString(f.desc) + "</p>\n            </div>";
  }).join('');

  const tsxContent = "'use client';\n" +
"import Image from 'next/image';\n" +
"import Link from 'next/link';\n" +
"import styles from './page.module.css';\n" +
"\n" +
"export default function OffersPage() {\n" +
"  return (\n" +
"    <div className={styles.pageWrapper}>\n" +
"      {/* Hero Section */}\n" +
"      <section className={styles.hero}>\n" +
"        <div className={styles.heroBg}>\n" +
"          <Image\n" +
"            src=\"" + pageData.heroImage + "\"\n" +
"            alt=\"" + sanitizeString(pageData.title) + "\"\n" +
"            fill\n" +
"            priority\n" +
"            style={{ objectFit: 'cover' }}\n" +
"          />\n" +
"          <div className={styles.overlay} />\n" +
"        </div>\n" +
"        <div className={styles.heroContent}>\n" +
"          <span className={styles.eyebrow}>" + sanitizeString(pageData.subtitle) + "</span>\n" +
"          <div className={styles.goldLine} />\n" +
"          <h1 className={styles.heroTitle}>" + sanitizeString(pageData.title) + "</h1>\n" +
"        </div>\n" +
"      </section>\n" +
"\n" +
"      {/* Intro Section */}\n" +
"      <section className={styles.introSection}>\n" +
"        <div className={styles.container}>\n" +
"          <p className={styles.introText}>" + sanitizeString(pageData.description) + "</p>\n" +
"        </div>\n" +
"      </section>\n" +
"\n" +
"      {/* Main Content Sections */}\n" +
"      <section className={styles.contentSection}>\n" +
"        <div className={styles.container}>\n" +
"          <div className={styles.grid2}>\n" +
"            {/* Section 1 */}\n" +
"            <div className={styles.contentCard}>\n" +
"              <h2 className={styles.cardTitle}>" + sanitizeString(pageData.sections[0].title) + "</h2>\n" +
"              <div className={styles.goldLineSmall} />\n" +
"              <p className={styles.cardDesc}>" + sanitizeString(pageData.sections[0].content) + "</p>\n" +
"            </div>\n" +
"            \n" +
"            {/* Section 2 */}\n" +
"            <div className={styles.contentCard}>\n" +
"              <h2 className={styles.cardTitle}>" + sanitizeString(pageData.sections[1].title) + "</h2>\n" +
"              <div className={styles.goldLineSmall} />\n" +
"              <p className={styles.cardDesc}>" + sanitizeString(pageData.sections[1].content) + "</p>\n" +
"            </div>\n" +
"          </div>\n" +
"        </div>\n" +
"      </section>\n" +
"\n" +
"      {/* Features Banner */}\n" +
"      <section className={styles.featuresBanner}>\n" +
"        <div className={styles.container}>\n" +
"          <h2 className={styles.bannerTitle}>Inclusions</h2>\n" +
"          <div className={styles.goldLineCenter} />\n" +
"          <div className={styles.featuresGrid}>\n" +
"            " + featureItems + "\n" +
"          </div>\n" +
"        </div>\n" +
"      </section>\n" +
"\n" +
"      {/* CTA Section */}\n" +
"      <section className={styles.ctaSection}>\n" +
"        <div className={styles.ctaContent}>\n" +
"          <h2 className={styles.ctaTitle}>Experience Exceptional Value</h2>\n" +
"          <p className={styles.ctaDesc}>Take advantage of our exclusive offers and book your next Aura escape today.</p>\n" +
"          <div className={styles.ctaButtons}>\n" +
"            <Link href=\"/book\" className={styles.btnPrimary}>View All Offers</Link>\n" +
"          </div>\n" +
"        </div>\n" +
"      </section>\n" +
"    </div>\n" +
"  );\n" +
"}\n";

  const cssContent = ".pageWrapper {\n" +
"  background: #FAF6F0;\n" +
"  min-height: 100vh;\n" +
"}\n" +
"\n" +
".hero {\n" +
"  position: relative;\n" +
"  height: 70vh;\n" +
"  min-height: 500px;\n" +
"  display: flex;\n" +
"  align-items: center;\n" +
"  justify-content: center;\n" +
"  text-align: center;\n" +
"}\n" +
"\n" +
".heroBg {\n" +
"  position: absolute;\n" +
"  inset: 0;\n" +
"}\n" +
"\n" +
".overlay {\n" +
"  position: absolute;\n" +
"  inset: 0;\n" +
"  background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6));\n" +
"}\n" +
"\n" +
".heroContent {\n" +
"  position: relative;\n" +
"  z-index: 2;\n" +
"  padding: 0 24px;\n" +
"  max-width: 800px;\n" +
"}\n" +
"\n" +
".eyebrow {\n" +
"  display: block;\n" +
"  color: #C9A96E;\n" +
"  font-family: 'Montserrat', sans-serif;\n" +
"  font-size: 12px;\n" +
"  font-weight: 600;\n" +
"  letter-spacing: 4px;\n" +
"  text-transform: uppercase;\n" +
"  margin-bottom: 20px;\n" +
"}\n" +
"\n" +
".goldLine {\n" +
"  width: 60px;\n" +
"  height: 1px;\n" +
"  background: #8E744B;\n" +
"  margin: 0 auto 24px;\n" +
"}\n" +
"\n" +
".heroTitle {\n" +
"  color: white;\n" +
"  font-family: 'Cormorant Garamond', serif;\n" +
"  font-size: clamp(40px, 6vw, 72px);\n" +
"  font-weight: 400;\n" +
"  line-height: 1.1;\n" +
"  text-shadow: 0 4px 20px rgba(0,0,0,0.3);\n" +
"}\n" +
"\n" +
".container {\n" +
"  max-width: 1400px;\n" +
"  margin: 0 auto;\n" +
"  padding: 0 24px;\n" +
"}\n" +
"\n" +
".introSection {\n" +
"  padding: 100px 0 60px;\n" +
"  text-align: center;\n" +
"}\n" +
"\n" +
".introText {\n" +
"  font-family: 'Cormorant Garamond', serif;\n" +
"  font-size: clamp(24px, 3vw, 36px);\n" +
"  color: #1A1A1A;\n" +
"  max-width: 900px;\n" +
"  margin: 0 auto;\n" +
"  line-height: 1.4;\n" +
"}\n" +
"\n" +
".contentSection {\n" +
"  padding: 40px 0 100px;\n" +
"}\n" +
"\n" +
".grid2 {\n" +
"  display: grid;\n" +
"  grid-template-columns: repeat(2, 1fr);\n" +
"  gap: 40px;\n" +
"}\n" +
"\n" +
".contentCard {\n" +
"  background: white;\n" +
"  padding: 60px 40px;\n" +
"  box-shadow: 0 10px 40px rgba(0,0,0,0.05);\n" +
"  transition: transform 0.4s ease;\n" +
"}\n" +
"\n" +
".contentCard:hover {\n" +
"  transform: translateY(-5px);\n" +
"}\n" +
"\n" +
".cardTitle {\n" +
"  font-family: 'Cormorant Garamond', serif;\n" +
"  font-size: 32px;\n" +
"  color: #1A1A1A;\n" +
"  margin-bottom: 20px;\n" +
"}\n" +
"\n" +
".goldLineSmall {\n" +
"  width: 40px;\n" +
"  height: 1px;\n" +
"  background: #8E744B;\n" +
"  margin-bottom: 24px;\n" +
"}\n" +
"\n" +
".cardDesc {\n" +
"  font-family: 'Montserrat', sans-serif;\n" +
"  font-size: 15px;\n" +
"  line-height: 1.8;\n" +
"  color: #4A4A4A;\n" +
"}\n" +
"\n" +
".featuresBanner {\n" +
"  background: #1A1A1A;\n" +
"  padding: 100px 0;\n" +
"  color: white;\n" +
"  text-align: center;\n" +
"}\n" +
"\n" +
".bannerTitle {\n" +
"  font-family: 'Cormorant Garamond', serif;\n" +
"  font-size: 48px;\n" +
"  margin-bottom: 24px;\n" +
"}\n" +
"\n" +
".goldLineCenter {\n" +
"  width: 60px;\n" +
"  height: 1px;\n" +
"  background: #8E744B;\n" +
"  margin: 0 auto 60px;\n" +
"}\n" +
"\n" +
".featuresGrid {\n" +
"  display: grid;\n" +
"  grid-template-columns: repeat(3, 1fr);\n" +
"  gap: 40px;\n" +
"}\n" +
"\n" +
".featureItem {\n" +
"  padding: 0 20px;\n" +
"}\n" +
"\n" +
".featureTitle {\n" +
"  font-family: 'Montserrat', sans-serif;\n" +
"  font-size: 16px;\n" +
"  font-weight: 600;\n" +
"  letter-spacing: 2px;\n" +
"  text-transform: uppercase;\n" +
"  color: #C9A96E;\n" +
"  margin-bottom: 16px;\n" +
"}\n" +
"\n" +
".featureDesc {\n" +
"  font-family: 'Montserrat', sans-serif;\n" +
"  font-size: 14px;\n" +
"  line-height: 1.6;\n" +
"  color: rgba(255,255,255,0.7);\n" +
"}\n" +
"\n" +
".ctaSection {\n" +
"  padding: 120px 24px;\n" +
"  background: #FAF6F0;\n" +
"  text-align: center;\n" +
"}\n" +
"\n" +
".ctaTitle {\n" +
"  font-family: 'Cormorant Garamond', serif;\n" +
"  font-size: 48px;\n" +
"  color: #1A1A1A;\n" +
"  margin-bottom: 16px;\n" +
"}\n" +
"\n" +
".ctaDesc {\n" +
"  font-family: 'Montserrat', sans-serif;\n" +
"  font-size: 16px;\n" +
"  color: #4A4A4A;\n" +
"  margin-bottom: 40px;\n" +
"}\n" +
"\n" +
".btnPrimary {\n" +
"  display: inline-block;\n" +
"  background: #8E744B;\n" +
"  color: white;\n" +
"  font-family: 'Montserrat', sans-serif;\n" +
"  font-size: 12px;\n" +
"  font-weight: 600;\n" +
"  letter-spacing: 2px;\n" +
"  text-transform: uppercase;\n" +
"  padding: 16px 40px;\n" +
"  border: 1px solid #8E744B;\n" +
"  transition: all 0.3s ease;\n" +
"}\n" +
"\n" +
".btnPrimary:hover {\n" +
"  background: #6B5535;\n" +
"  border-color: #6B5535;\n" +
"}\n" +
"\n" +
"@media (max-width: 900px) {\n" +
"  .grid2 {\n" +
"    grid-template-columns: 1fr;\n" +
"  }\n" +
"  .featuresGrid {\n" +
"    grid-template-columns: 1fr;\n" +
"    gap: 60px;\n" +
"  }\n" +
"}\n" +
"\n" +
"@media (max-width: 768px) {\n" +
"  .introSection { padding: 80px 0 40px; }\n" +
"  .contentCard { padding: 40px 24px; }\n" +
"  .featuresBanner { padding: 80px 0; }\n" +
"  .ctaSection { padding: 80px 24px; }\n" +
"}\n";

  return { tsxContent, cssContent };
}

offersPages.forEach(page => {
  const { tsxContent, cssContent } = generatePageComponent(page);
  
  // Ensure directory exists
  const dir = path.dirname(page.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write files
  fs.writeFileSync(page.path, tsxContent);
  fs.writeFileSync(page.cssPath, cssContent);
  console.log('Generated ' + page.title + ' at ' + page.path);
});

console.log('All offers pages generated successfully!');

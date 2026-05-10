const fs = require('fs');
const path = require('path');

const wellnessPages = [
  {
    path: 'src/app/wellness/page.tsx',
    cssPath: 'src/app/wellness/page.module.css',
    title: 'J Wellness Circle',
    subtitle: 'A Sanctuary for the Soul',
    description: 'Experience holistic healing and profound relaxation inspired by ancient Indian wellness traditions. The J Wellness Circle offers a seamless integration of body, mind, and spirit.',
    heroImage: '/images/spa_wellness_center_1778416130330.png',
    sections: [
      {
        title: 'Our Philosophy',
        content: 'At J Wellness Circle, we believe that true luxury lies in absolute wellbeing. Our therapies are deeply rooted in the ancient Indian healing sciences of Ayurveda and Yoga, elevated by the finest natural ingredients and expert therapists. We invite you on a journey of self-discovery and rejuvenation.'
      },
      {
        title: 'Signature Therapies',
        content: 'Discover our curated selection of signature therapies designed to restore balance and harmony. From the purifying Vishuddi body treatment to the deeply relaxing Sushupti sleep therapy, each experience is crafted to transport you to a state of profound tranquility.'
      }
    ],
    features: [
      { title: 'Ayurveda', desc: 'Ancient holistic healing tailored to your dosha.' },
      { title: 'Spa Retreats', desc: 'Luxurious treatments using bespoke natural blends.' },
      { title: 'Yoga & Meditation', desc: 'Find inner peace with guided mindful practices.' }
    ]
  },
  {
    path: 'src/app/wellness/ayurveda/page.tsx',
    cssPath: 'src/app/wellness/ayurveda/page.module.css',
    title: 'Ayurveda',
    subtitle: 'The Science of Life',
    description: 'Immerse yourself in authentic Ayurvedic healing. Our expert Vaidyas (physicians) curate personalized wellness programs designed to balance your doshas and restore optimal health.',
    heroImage: '/images/ayurveda_spa_treatment_1778416350069.png',
    sections: [
      {
        title: 'Personalized Consultations',
        content: 'Your Ayurvedic journey begins with a comprehensive consultation with our resident physician. Through pulse diagnosis and lifestyle assessment, we identify your unique constitution (Prakriti) and current imbalances (Vikriti) to design a bespoke healing pathway.'
      },
      {
        title: 'Panchakarma Detoxification',
        content: 'Experience the ultimate physical and mental reset with our intensive Panchakarma therapies. This rigorous detoxification process purges deep-seated toxins, revives the immune system, and reverses the effects of stress and aging.'
      }
    ],
    features: [
      { title: 'Abhyanga', desc: 'Therapeutic full-body massage with warm medicated oils.' },
      { title: 'Shirodhara', desc: 'Continuous flow of warm oil over the forehead to calm the mind.' },
      { title: 'Pizhichil', desc: 'A royal treatment combining oil massage and heat therapy.' }
    ]
  },
  {
    path: 'src/app/wellness/spa/page.tsx',
    cssPath: 'src/app/wellness/spa/page.module.css',
    title: 'Spa Treatments',
    subtitle: 'Indulgent Relaxation',
    description: 'Surrender to the healing touch of our expert therapists. Our spa menu features a fusion of traditional Indian therapies and contemporary wellness techniques, using exclusive natural formulations.',
    heroImage: '/images/spa_wellness_center_1778416130330.png',
    sections: [
      {
        title: 'Bespoke Therapies',
        content: 'Our therapies are crafted to address your specific needs, whether you seek deep tissue relief, intense hydration, or pure relaxation. We use only the finest natural ingredients, including pure essential oils, exotic herbs, and mineral-rich clays.'
      },
      {
        title: 'Couples Retreat',
        content: 'Share a journey of relaxation with your loved one in our exquisite couples suites. Enjoy side-by-side massages, private soaking tubs, and dedicated relaxation spaces designed for intimate tranquility.'
      }
    ],
    features: [
      { title: 'Signature Massages', desc: 'Deeply relaxing therapies to melt away tension.' },
      { title: 'Body Envelopments', desc: 'Nourishing wraps for radiant, silken skin.' },
      { title: 'Facial Rituals', desc: 'Rejuvenating treatments for a luminous complexion.' }
    ]
  },
  {
    path: 'src/app/wellness/yoga/page.tsx',
    cssPath: 'src/app/wellness/yoga/page.module.css',
    title: 'Yoga & Meditation',
    subtitle: 'Harmony of Mind and Body',
    description: 'Reconnect with your inner self through the ancient practice of Yoga. Set amidst serene surroundings, our sessions guide you towards physical strength, mental clarity, and spiritual peace.',
    heroImage: '/images/infinity_pool_view_1778416175800.png',
    sections: [
      {
        title: 'Guided Practices',
        content: 'Whether you are a beginner or an advanced practitioner, our expert Yoga instructors offer personalized guidance. Choose from Hatha, Vinyasa, or restorative Yoga styles, tailored to your flexibility and goals.'
      },
      {
        title: 'Mindfulness & Meditation',
        content: 'Calm the relentless chatter of the mind with our specialized meditation and Pranayama (breathwork) sessions. Learn techniques to manage stress, improve focus, and cultivate a deep sense of inner stillness.'
      }
    ],
    features: [
      { title: 'Sunrise Yoga', desc: 'Start your day with energizing asanas at dawn.' },
      { title: 'Pranayama', desc: 'Master the art of conscious breathing.' },
      { title: 'Sound Bath Healing', desc: 'Deep relaxation through acoustic vibrations.' }
    ]
  },
  {
    path: 'src/app/wellness/fitness/page.tsx',
    cssPath: 'src/app/wellness/fitness/page.module.css',
    title: 'Fitness',
    subtitle: 'Active Wellbeing',
    description: 'Maintain your fitness regime while traveling with our state-of-the-art gymnasiums and personalized training programs. Elevate your heart rate in environments designed to inspire.',
    heroImage: '/images/hotel_lobby_grand_1778416389976.png',
    sections: [
      {
        title: 'Modern Equipment',
        content: 'Our fitness centers are equipped with the latest cardiovascular and strength-training technology from world-leading brands. Enjoy panoramic views as you work out in fully air-conditioned, beautifully appointed spaces.'
      },
      {
        title: 'Personal Training',
        content: 'Maximize your workout with the guidance of our certified personal trainers. They will design customized routines based on your fitness level and goals, ensuring safe and effective progress during your stay.'
      }
    ],
    features: [
      { title: 'Cardio Zone', desc: 'Latest treadmills, ellipticals, and stationary bikes.' },
      { title: 'Free Weights', desc: 'Comprehensive strength training equipment.' },
      { title: 'Aqua Aerobics', desc: 'Low-impact, high-resistance workouts in the pool.' }
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
"export default function WellnessPage() {\n" +
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
"          <h2 className={styles.bannerTitle}>Highlights</h2>\n" +
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
"          <h2 className={styles.ctaTitle}>Begin Your Wellness Journey</h2>\n" +
"          <p className={styles.ctaDesc}>Book your stay or schedule an appointment with our expert therapists.</p>\n" +
"          <div className={styles.ctaButtons}>\n" +
"            <Link href=\"/book\" className={styles.btnPrimary}>Book Now</Link>\n" +
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

wellnessPages.forEach(page => {
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

console.log('All wellness pages generated successfully!');

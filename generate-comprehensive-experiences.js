const fs = require('fs');
const path = require('path');

const experiencesData = [
  {
    path: 'experiences/cultural',
    title: 'Cultural Heritage',
    heroImage: '/images/cultural_experiences_1778416250752.png',
    introTitle: 'Living Traditions',
    introDesc: 'Immerse yourself in the vibrant tapestry of Indian culture. From private classical concerts in centuries-old courtyards to guided heritage walks through ancient monuments, we bring history to life. Our cultural experiences are curated to provide a profound connection to the local heritage, guided by historians, artisans, and storytellers.',
    featured: [
      {
        name: 'Royal Grandeur',
        location: 'Palaces of Rajasthan',
        desc: 'Experience a traditional royal welcome that harks back to the era of the Maharajas. Arrive in a vintage horse-drawn carriage accompanied by ceremonial elephants, royal trumpets, and a shower of rose petals.',
        image: '/images/heritage_palace_exterior_1778416158734.png',
        highlights: ['Ceremonial Welcome', 'Vintage Carriages', 'Traditional Music']
      },
      {
        name: 'Ganga Aarti',
        location: 'Aura Rishikesh',
        desc: 'Witness the mesmerizing evening Ganga Aarti ceremony from a private vantage point. The spiritual chanting, rhythmic drumming, and thousands of floating diyas create an unforgettable atmosphere of devotion.',
        image: '/images/infinity_pool_view_1778416175800.png',
        highlights: ['Private Viewing', 'Spiritual Chanting', 'Floating Diyas']
      }
    ],
    grid: [
      { name: 'Heritage Walks', location: 'Multiple Locations', image: '/images/cultural_experiences_1778416250752.png', desc: 'Guided tours through ancient forts, historic monuments, and bustling local bazaars.' },
      { name: 'Classical Arts', location: 'Cultural Hubs', image: '/images/hotel_lobby_grand_1778416389976.png', desc: 'Private performances of classical Indian dance and music in historic courtyards.' },
      { name: 'Artisan Workshops', location: 'Jaipur & Varanasi', image: '/images/gourmet_cuisine_dish_1778416264157.png', desc: 'Learn traditional block printing, pottery, or miniature painting from master craftsmen.' }
    ],
    experiences: [
      { title: 'Local Historians', icon: '🏛️', desc: 'Tours guided by renowned scholars and resident historians.' },
      { title: 'Master Artisans', icon: '🎨', desc: 'Interactive sessions with award-winning local craftsmen.' },
      { title: 'Authentic Attire', icon: '🥻', desc: 'Opportunity to don traditional, hand-woven royal garments.' },
      { title: 'Exclusive Access', icon: '🗝️', desc: 'Private entry to historic sites after public viewing hours.' }
    ]
  },
  {
    path: 'experiences/adventure',
    title: 'Adventure & Outdoors',
    heroImage: '/images/wildlife_safari_experience_1778416289320.png',
    introTitle: 'Thrill Seekers',
    introDesc: 'For those who seek the extraordinary. Whether it\'s trekking the misty trails of the Himalayas, diving into pristine coral reefs, or navigating thrilling river rapids, our adventure experiences are designed to push boundaries. Every excursion is led by certified experts, ensuring maximum safety without compromising on the thrill.',
    featured: [
      {
        name: 'Himalayan Trekking',
        location: 'Aura Theog & Darjeeling',
        desc: 'Embark on guided treks through dense cedar forests and high-altitude mountain passes. Complete with gourmet picnic lunches, luxury camping equipment, and panoramic views of the snow-capped Himalayan peaks.',
        image: '/images/heritage_palace_exterior_1778416158734.png',
        highlights: ['Expert Mountain Guides', 'Luxury Basecamps', 'Gourmet Trail Food']
      },
      {
        name: 'Deep Sea Diving',
        location: 'Aura Coral Reef, Maldives',
        desc: 'Explore vibrant underwater ecosystems with our PADI-certified dive center. Swim alongside manta rays, sea turtles, and navigate through stunning coral gardens in the crystal-clear waters of the Indian Ocean.',
        image: '/images/beach_resort_view_1778416217181.png',
        highlights: ['PADI Certified', 'Shipwreck Dives', 'Marine Biologist Guides']
      }
    ],
    grid: [
      { name: 'White Water Rafting', location: 'Rishikesh', image: '/images/wildlife_safari_experience_1778416289320.png', desc: 'Navigate the thrilling Grade III and IV rapids of the holy Ganges River.' },
      { name: 'Desert Safari', location: 'Jaisalmer', image: '/images/infinity_pool_view_1778416175800.png', desc: 'Dune bashing in luxury 4x4s followed by a private dinner in the Thar desert.' },
      { name: 'Surfing Lessons', location: 'Goa & Kerala', image: '/images/beach_resort_view_1778416217181.png', desc: 'Ride the perfect waves with world-class instructors on pristine beaches.' }
    ],
    experiences: [
      { title: 'Certified Experts', icon: '🧗', desc: 'All activities led by internationally certified guides and instructors.' },
      { title: 'Top-tier Equipment', icon: '🪂', desc: 'Utilizing the latest and safest outdoor sporting gear.' },
      { title: 'Gourmet Recovery', icon: '🍱', desc: 'Nutritious, chef-prepared meals awaiting you after every adventure.' },
      { title: 'Bespoke Itineraries', icon: '🗺️', desc: 'Adventures tailored precisely to your skill level and preferences.' }
    ]
  },
  {
    path: 'experiences/wildlife',
    title: 'Wildlife Safari',
    heroImage: '/images/wildlife_safari_experience_1778416289320.png',
    introTitle: 'The Call of the Wild',
    introDesc: 'Venture into the heart of India\'s most renowned national parks. Our expert naturalists will guide you on bespoke safaris to witness the majestic Bengal Tiger, elusive leopards, and diverse birdlife in their natural habitat. Experience the raw beauty of the jungle while enveloped in uncompromised luxury.',
    featured: [
      {
        name: 'Tiger Tracking Safari',
        location: 'Bandhavgarh & Kanha',
        desc: 'Set out before dawn in custom-designed 4x4 open jeeps. Led by our expert naturalists who know the jungle intimately, experience the thrill of tracking the apex predator of the Indian forest — the Royal Bengal Tiger.',
        image: '/images/wildlife_safari_experience_1778416289320.png',
        highlights: ['Expert Trackers', 'Custom 4x4 Jeeps', 'Dawn & Dusk Safaris']
      },
      {
        name: 'Night Safaris',
        location: 'Pench National Park',
        desc: 'Experience the forest come alive after dark. Equipped with special infrared spotlights, observe the fascinating nocturnal behavior of civets, owls, hyenas, and the elusive leopard under a canopy of stars.',
        image: '/images/infinity_pool_view_1778416175800.png',
        highlights: ['Nocturnal Wildlife', 'Infrared Spotting', 'Stargazing']
      }
    ],
    grid: [
      { name: 'Bird Watching', location: 'Corbett & Coorg', image: '/images/cultural_experiences_1778416250752.png', desc: 'Guided walks through rich ecosystems home to hundreds of rare endemic bird species.' },
      { name: 'Elephant Bathing', location: 'Kerala', image: '/images/wildlife_safari_experience_1778416289320.png', desc: 'A gentle, ethical interaction allowing you to bathe and feed rescued elephants.' },
      { name: 'Nature Trails', location: 'All Safari Lodges', image: '/images/heritage_palace_exterior_1778416158734.png', desc: 'Educational walking safaris focusing on flora, insect life, and tracking signs.' }
    ],
    experiences: [
      { title: 'Expert Naturalists', icon: '🧭', desc: 'Highly trained wildlife experts guiding every excursion.' },
      { title: 'Bush Dining', icon: '🍳', desc: 'Gourmet breakfasts and dinners served deep within the forest.' },
      { title: 'Conservation Focus', icon: '🌱', desc: 'Eco-friendly practices that directly support local wildlife protection.' },
      { title: 'Photography Hides', icon: '📸', desc: 'Specially designed camouflage hides for wildlife photographers.' }
    ]
  },
  {
    path: 'experiences/weddings',
    title: 'Timeless Weddings',
    heroImage: '/images/wedding_banquet_hall_1778416202576.png',
    introTitle: 'Your Perfect Day',
    introDesc: 'From intimate beachside vows to grand palatial extravaganzas, Aura Hotels has been the magnificent backdrop to the world\'s most beautiful love stories. Our dedicated wedding specialists orchestrate every detail flawlessly, ensuring your special day is nothing short of magical.',
    featured: [
      {
        name: 'Palace Weddings',
        location: 'Rajasthan & Hyderabad',
        desc: 'Exchange vows in majestic courtyards under the stars. Experience a royal wedding complete with caparisoned elephants, traditional folk musicians, spectacular fireworks, and feasts fit for kings.',
        image: '/images/heritage_palace_exterior_1778416158734.png',
        highlights: ['Royal Processions', 'Palatial Venues', 'Heritage Feasts']
      },
      {
        name: 'Beachside Ceremonies',
        location: 'Goa, Maldives & Sri Lanka',
        desc: 'Say "I do" with the ocean as your witness. Barefoot luxury ceremonies on pristine white sands at sunset, followed by a romantic seaside reception illuminated by hundreds of tiki torches and lanterns.',
        image: '/images/beach_resort_view_1778416217181.png',
        highlights: ['Sunset Vows', 'Seaside Receptions', 'Tropical Florals']
      }
    ],
    grid: [
      { name: 'City Grandeur', location: 'Mumbai & Delhi', image: '/images/hotel_lobby_grand_1778416389976.png', desc: 'Opulent ballroom celebrations accommodating thousands with world-class catering.' },
      { name: 'Intimate Ceremonies', location: 'Mountain Retreats', image: '/images/infinity_pool_view_1778416175800.png', desc: 'Cozy, private weddings surrounded by cedar forests and mountain mists.' },
      { name: 'Pre-Wedding Shoots', location: 'All Properties', image: '/images/wedding_banquet_hall_1778416202576.png', desc: 'Exclusive access to our iconic locations for breathtaking photography.' }
    ],
    experiences: [
      { title: 'Wedding Planners', icon: '📋', desc: 'Dedicated specialists to manage every detail from decor to logistics.' },
      { title: 'Master Chefs', icon: '🎂', desc: 'Customized multi-cuisine menus and spectacular wedding cakes.' },
      { title: 'Bridal Spa', icon: '💆‍♀️', desc: 'Pre-wedding rejuvenation packages at the J Wellness Circle.' },
      { title: 'Luxury Fleet', icon: '🚗', desc: 'Vintage cars and luxury limousines for the perfect bridal entry.' }
    ]
  },
  {
    path: 'experiences/celebrations',
    title: 'Celebrations & Events',
    heroImage: '/images/luxury_suite_interior_1778416076439.png',
    introTitle: 'Milestones Matter',
    introDesc: 'Anniversaries, milestone birthdays, corporate retreats, or family reunions — we elevate every special occasion with bespoke dining, curated activities, and our signature heartfelt hospitality. Let us turn your celebrations into lifelong memories.',
    featured: [
      {
        name: 'Bespoke Private Dining',
        location: 'All Properties',
        desc: 'Surprise your loved one with a candlelit dinner in an exclusive, secluded location. Whether it\'s a floating pontoon on a lake, a private beach cove, or a palace rooftop, our master chefs will curate a personalized menu just for you.',
        image: '/images/fine_dining_restaurant_1778416112215.png',
        highlights: ['Exclusive Locations', 'Personalized Menus', 'Private Butler Service']
      },
      {
        name: 'Honeymoon Retreats',
        location: 'Resorts & Palaces',
        desc: 'Begin your life together in unparalleled luxury. Enjoy romantic room setups with rose petals and champagne, couple\'s spa therapies, private yacht cruises, and breakfast in bed served by your personal butler.',
        image: '/images/luxury_suite_interior_1778416076439.png',
        highlights: ['Romantic Turndown', 'Couples Spa Rituals', 'Breakfast in Bed']
      }
    ],
    grid: [
      { name: 'Gala Events', location: 'City Hotels', image: '/images/wedding_banquet_hall_1778416202576.png', desc: 'Flawlessly executed grand parties and corporate galas in our spectacular banquet halls.' },
      { name: 'Family Reunions', location: 'Resorts', image: '/images/beach_resort_view_1778416217181.png', desc: 'Multi-villa bookings with private pools, personalized activities, and group dining.' },
      { name: 'Proposals', location: 'Iconic Spots', image: '/images/heritage_palace_exterior_1778416158734.png', desc: 'Meticulously planned, picture-perfect proposal setups at our most romantic locations.' }
    ],
    experiences: [
      { title: 'Event Concierge', icon: '✨', desc: 'Personalized assistance to orchestrate surprises and manage details.' },
      { title: 'Custom Decor', icon: '💐', desc: 'In-house florists and designers to match your exact theme.' },
      { title: 'Entertainment', icon: '🎻', desc: 'Arranging everything from classical quartets to contemporary DJs.' },
      { title: 'Memories', icon: '📷', desc: 'Professional photography and videography services on request.' }
    ]
  },
  {
    path: 'experiences',
    title: 'Experiences',
    heroImage: '/images/cultural_experiences_1778416250752.png',
    introTitle: 'Journeys Beyond the Ordinary',
    introDesc: 'At Aura Hotels, we believe that true luxury lies in the experiences that stay with you forever. From tracking Bengal tigers in the wild to renewing your vows in a centuries-old palace, our curated experiences are designed to immerse you in the beauty, culture, and thrill of your destination.',
    featured: [
      {
        name: 'Cultural Immersion',
        location: 'Heritage Properties',
        desc: 'Immerse yourself in the vibrant tapestry of Indian culture. From private classical concerts in centuries-old courtyards to guided heritage walks, we bring history to life.',
        image: '/images/cultural_experiences_1778416250752.png',
        highlights: ['Heritage Walks', 'Artisan Workshops', 'Classical Arts']
      },
      {
        name: 'Wildlife Safaris',
        location: 'National Parks',
        desc: 'Venture into the heart of India\'s most renowned national parks. Our expert naturalists will guide you on bespoke safaris to witness tigers, leopards, and diverse birdlife.',
        image: '/images/wildlife_safari_experience_1778416289320.png',
        highlights: ['Tiger Tracking', 'Night Safaris', 'Expert Naturalists']
      }
    ],
    grid: [
      { name: 'Adventure', location: 'Mountains & Coasts', image: '/images/infinity_pool_view_1778416175800.png', desc: 'Himalayan trekking, deep sea diving, and thrilling river rafting.' },
      { name: 'Weddings', location: 'Global Destinations', image: '/images/wedding_banquet_hall_1778416202576.png', desc: 'Palatial extravaganzas and intimate beachside ceremonies.' },
      { name: 'Celebrations', location: 'All Properties', image: '/images/luxury_suite_interior_1778416076439.png', desc: 'Bespoke private dining, honeymoons, and grand family reunions.' }
    ],
    experiences: [
      { title: 'Expert Guides', icon: '🧭', desc: 'Every experience is led by certified professionals and local experts.' },
      { title: 'Uncompromised Luxury', icon: '💎', desc: 'Enjoy thrilling adventures without sacrificing five-star comfort.' },
      { title: 'Bespoke Itineraries', icon: '🗺️', desc: 'Activities tailored specifically to your interests and schedule.' },
      { title: 'Authenticity', icon: '🏺', desc: 'Genuine, deeply researched cultural and regional interactions.' }
    ]
  }
];

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

/* Amenities/Experiences */
.amenitiesSection { padding: 120px 0; background: #1A1A1A; color: white; text-align: center; }
.amTitle { font-family: 'Cormorant Garamond', serif; font-size: 48px; font-weight: 400; margin-bottom: 80px; }
.amGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
.amCard { padding: 0 20px; }
.amIcon { font-size: 48px; margin-bottom: 24px; display: block; }
.amName { font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #C9A96E; margin-bottom: 16px; }
.amDesc { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 300; color: rgba(255,255,255,0.7); line-height: 1.7; }

/* CTA */
.ctaSection { padding: 120px 0; text-align: center; background: url('/images/wildlife_safari_experience_1778416289320.png') center/cover; position: relative; }
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
  title: '${page.title} | Aura Hotels Experiences',
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
          <span className={styles.eyebrow}>Curated Journeys</span>
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

      {/* Featured Experiences */}
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

      {/* Signature Elements */}
      <section className={styles.amenitiesSection}>
        <div className={styles.container}>
          <h2 className={styles.amTitle}>The Aura Difference</h2>
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
`;

function generateAll() {
  const baseDir = path.join(__dirname, 'src', 'app');
  
  experiencesData.forEach(page => {
    const dir = path.join(baseDir, page.path);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(dir, 'page.module.css'), generateCss());
    fs.writeFileSync(path.join(dir, 'page.tsx'), generateTsx(page).trim());
    console.log(`Generated comprehensive experiences page: ${page.path}`);
  });
}

generateAll();

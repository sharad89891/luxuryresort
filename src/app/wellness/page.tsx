import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'J Wellness Circle | Aura Hotels',
  description: 'Discover holistic wellness at Aura Hotels. From Ayurvedic therapies and yoga to world-class spa treatments — the J Wellness Circle awaits.',
};

const treatments = [
  {
    id: 'ayurveda',
    name: 'Ayurveda Panchakarma',
    duration: '90 min',
    category: 'Ayurveda',
    image: '/images/ayurveda_spa_treatment_1778416350069.png',
    desc: 'Ancient Kerala Ayurvedic detoxification and rejuvenation through personalised herbal oil treatments and therapeutic massages.',
    href: '/wellness/ayurveda',
  },
  {
    id: 'jwellness',
    name: 'J Wellness Signature',
    duration: '120 min',
    category: 'Signature',
    image: '/images/spa_wellness_center_1778416130330.png',
    desc: 'Our flagship treatment combining ancient Indian healing wisdom with modern therapeutic techniques for deep restoration.',
    href: '/wellness/signature',
  },
  {
    id: 'infinity-pool',
    name: 'Thermal Bathing Experience',
    duration: '60 min',
    category: 'Hydrotherapy',
    image: '/images/infinity_pool_view_1778416175800.png',
    desc: 'A transformative journey through our thermal pools, steam rooms, and hydrotherapy circuits for complete sensory renewal.',
    href: '/wellness/thermal',
  },
];

export default function WellnessPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/spa_wellness_center_1778416130330.png"
            alt="J Wellness Circle Spa"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Ancient Wisdom · Modern Luxury</span>
          <h1 className={styles.heroTitle}>J Wellness Circle</h1>
          <div className={styles.goldLine} />
          <p className={styles.heroDesc}>
            A sanctuary of holistic healing where ancient Indian wellness traditions 
            meet world-class luxury spa therapies for complete mind, body, and soul transformation.
          </p>
          <Link href="/wellness/book" className={styles.heroBtn} id="wellness-book-btn">
            Book a Treatment
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className={styles.philosophy}>
        <div className={styles.container}>
          <div className={styles.philoContent}>
            <span className={styles.eyebrowDark}>Our Wellness Philosophy</span>
            <h2 className={styles.philoTitle}>Rooted in 5,000 Years of Indian Healing</h2>
            <div className={styles.goldLineDark} />
            <p className={styles.philoDesc}>
              Drawing from the ancient sciences of Ayurveda, Yoga, and Naturopathy, 
              J Wellness Circle offers a deeply personalised path to wellbeing. 
              Each treatment is tailored to your unique constitution, supporting your 
              journey towards optimal health, inner peace, and radiant vitality.
            </p>
          </div>
          <div className={styles.pillars}>
            {[
              { icon: '🌿', title: 'Ayurveda', desc: 'Personalised treatments based on your unique body type' },
              { icon: '🧘', title: 'Yoga & Meditation', desc: 'Daily sessions led by expert practitioners' },
              { icon: '💆', title: 'Spa Rituals', desc: 'Luxurious treatments with precious Indian botanicals' },
              { icon: '🏊', title: 'Thermal Wellness', desc: 'State-of-the-art hydrotherapy and bathing circuits' },
            ].map((p) => (
              <div key={p.title} className={styles.pillar}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className={styles.treatments}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrowDark}>Signature Therapies</span>
            <h2 className={styles.sectionTitle}>Our Healing Rituals</h2>
            <div className={styles.goldLineDark} />
          </div>
          <div className={styles.treatGrid}>
            {treatments.map((t) => (
              <div key={t.id} className={styles.treatCard} id={`treatment-${t.id}`}>
                <div className={styles.treatImage}>
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={styles.treatOverlay} />
                  <span className={styles.treatCategory}>{t.category}</span>
                </div>
                <div className={styles.treatBody}>
                  <div className={styles.treatMeta}>
                    <span className={styles.treatDuration}>⏱ {t.duration}</span>
                  </div>
                  <h3 className={styles.treatName}>{t.name}</h3>
                  <p className={styles.treatDesc}>{t.desc}</p>
                  <Link href={t.href} className={styles.treatBtn} id={`book-${t.id}`}>
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ayurveda Banner */}
      <section className={styles.ayurvedaBanner}>
        <div className={styles.ayurvedaImage}>
          <Image
            src="/images/ayurveda_spa_treatment_1778416350069.png"
            alt="Ayurveda at Aura"
            fill
            style={{ objectFit: 'cover' }}
            sizes="50vw"
          />
        </div>
        <div className={styles.ayurvedaContent}>
          <span className={styles.eyebrowLight}>The Path to Wholeness</span>
          <h2 className={styles.ayurvedaTitle}>Personalised Ayurveda Journeys</h2>
          <div className={styles.goldLineLight} />
          <p className={styles.ayurvedaDesc}>
            Embark on a transformative wellness retreat with our expert Ayurvedic physicians. 
            Each programme begins with a thorough consultation to understand your Prakriti 
            (body type) and crafts a personalised treatment journey just for you.
          </p>
          <Link href="/wellness/ayurveda" className={styles.ayurvedaBtn} id="ayurveda-explore">
            Explore Ayurveda
          </Link>
        </div>
      </section>
    </>
  );
}

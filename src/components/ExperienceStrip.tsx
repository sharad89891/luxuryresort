'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ExperienceStrip.module.css';

const experiences = [
  {
    id: 'dining-exp',
    category: 'Dining',
    title: 'Culinary Journeys',
    desc: 'Award-winning chefs, heritage recipes, and extraordinary flavours across India and beyond.',
    image: '/images/fine_dining_restaurant_1778416112215.png',
    href: '/dining',
  },
  {
    id: 'wellness-exp',
    category: 'Wellness',
    title: 'J Wellness Circle',
    desc: 'Ancient wisdom meets modern luxury through transformative Ayurvedic therapies and spa rituals.',
    image: '/images/spa_wellness_center_1778416130330.png',
    href: '/wellness',
  },
  {
    id: 'cultural-exp',
    category: 'Experiences',
    title: 'Cultural Immersion',
    desc: "Curated journeys through India's rich tapestry of art, music, dance, and timeless traditions.",
    image: '/images/cultural_experiences_1778416250752.png',
    href: '/experiences/cultural',
  },
];

export default function ExperienceStrip() {
  return (
    <section className={styles.section} id="experiences-section">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Beyond Stay</span>
        <h2 className={styles.title}>Defining Experiences</h2>
        <div className={styles.divider} />
      </div>
      <div className={styles.grid}>
        {experiences.map((exp) => (
          <Link href={exp.href} key={exp.id} className={styles.card} id={`exp-${exp.id}`}>
            <div className={styles.imageWrap}>
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <span className={styles.category}>{exp.category}</span>
                <h3 className={styles.cardTitle}>{exp.title}</h3>
                <p className={styles.cardDesc}>{exp.desc}</p>
                <span className={styles.cardCta}>Discover More →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

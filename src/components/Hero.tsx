'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const slides = [
  {
    id: 'slide-hero',
    image: '/images/hero_palace_hotel_1778416060429.png',
    eyebrow: 'Iconic Landmark Since 1903',
    title: 'The Majesty Palace',
    subtitle: 'Mumbai',
    description: 'Where history meets unparalleled luxury on the shores of the Arabian Sea',
    ctaPrimary: { label: 'Explore', href: '/hotels/the-majesty-palace' },
    ctaSecondary: { label: 'Book Now', href: '/book' },
  },
  {
    id: 'slide-heritage',
    image: '/images/heritage_palace_exterior_1778416158734.png',
    eyebrow: 'Royal Heritage',
    title: 'Rambagh Palace',
    subtitle: 'Jaipur',
    description: 'The Jewel of Jaipur — a royal palace reborn as a luxury hotel',
    ctaPrimary: { label: 'Discover', href: '/hotels/rambagh-palace' },
    ctaSecondary: { label: 'Book Now', href: '/book' },
  },
  {
    id: 'slide-beach',
    image: '/images/beach_resort_view_1778416217181.png',
    eyebrow: 'Coastal Paradise',
    title: 'Majesty Exotica Resort & Spa',
    subtitle: 'Goa',
    description: 'Nestled between lush groves and pristine beaches on the Goan coastline',
    ctaPrimary: { label: 'Explore', href: '/hotels/aura-exotica-goa' },
    ctaSecondary: { label: 'Book Now', href: '/book' },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 600);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (idx: number) => {
    if (idx === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsTransitioning(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <section className={styles.hero} aria-label="Hero carousel">
      {/* Background Image */}
      <div className={`${styles.heroBg} ${isTransitioning ? styles.transitioning : ''}`}>
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      {/* Hero Content */}
      <div className={`${styles.heroContent} ${isTransitioning ? styles.contentOut : styles.contentIn}`}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>{slide.eyebrow}</span>
          <div className={styles.goldLine} />
          <h1 className={styles.heroTitle}>{slide.title}</h1>
          <p className={styles.heroLocation}>{slide.subtitle}</p>
          <p className={styles.heroDesc}>{slide.description}</p>
          <div className={styles.heroCta}>
            <Link href={slide.ctaPrimary.href} className={styles.ctaPrimary}>
              {slide.ctaPrimary.label}
            </Link>
            <Link href={slide.ctaSecondary.href} className={styles.ctaSecondary}>
              {slide.ctaSecondary.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className={styles.indicators} role="tablist" aria-label="Carousel navigation">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`${styles.indicator} ${i === current ? styles.indicatorActive : ''}`}
            onClick={() => goToSlide(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}: ${s.title}`}
            id={`hero-indicator-${i}`}
          />
        ))}
      </div>

      {/* Scroll Prompt */}
      <div className={styles.scrollPrompt} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>

      {/* Quick Book Bar */}
      <div className={styles.quickBook}>
        <div className={styles.quickBookInner}>
          <div className={styles.quickBookField}>
            <label htmlFor="dest-input">Destination</label>
            <input id="dest-input" type="text" placeholder="Where would you like to go?" />
          </div>
          <div className={styles.quickBookField}>
            <label htmlFor="checkin-input">Check In</label>
            <input id="checkin-input" type="date" />
          </div>
          <div className={styles.quickBookField}>
            <label htmlFor="checkout-input">Check Out</label>
            <input id="checkout-input" type="date" />
          </div>
          <div className={styles.quickBookField}>
            <label htmlFor="guests-input">Guests</label>
            <select id="guests-input">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
          </div>
          <Link href="/book" className={styles.quickBookBtn} id="quick-book-btn">
            Check Availability
          </Link>
        </div>
      </div>
    </section>
  );
}

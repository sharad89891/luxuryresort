'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function BookPage() {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [rooms, setRooms] = useState('1');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking search
    alert(`Searching availability for ${destination || 'All Properties'} from ${checkIn || 'Today'} to ${checkOut || 'Tomorrow'} for ${guests} guests in ${rooms} room(s).`);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero_palace_hotel_1778416060429.png"
            alt="Book Your Stay"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Reservations</h1>
          <p className={styles.desc}>
            Experience the pinnacle of luxury. Begin your extraordinary journey with Aura Hotels.
          </p>
        </div>
      </section>

      {/* Booking Engine */}
      <section className={styles.bookingSection}>
        <form className={styles.bookingContainer} onSubmit={handleSearch}>
          <div className={styles.bookingHeader}>
            <h2 className={styles.headerTitle}>Find Your Escape</h2>
            <span className={styles.headerSubtitle}>BEST RATE GUARANTEED</span>
          </div>
          
          <div className={styles.formGrid}>
            {/* Destination */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                <span>📍</span> Destination or Hotel
              </label>
              <select 
                className={styles.input}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="">Where to next?</option>
                <optgroup label="Palaces">
                  <option value="aura-mahal-mumbai">The Majesty Palace, Mumbai</option>
                  <option value="rambagh-jaipur">Rambagh Palace, Jaipur</option>
                  <option value="aura-lake-udaipur">Aura Lake Palace, Udaipur</option>
                </optgroup>
                <optgroup label="Beach Resorts">
                  <option value="exotica-goa">Aura Exotica Resort, Goa</option>
                  <option value="coral-reef-maldives">Aura Coral Reef, Maldives</option>
                </optgroup>
                <optgroup label="City Hotels">
                  <option value="aura-palace-delhi">Aura Palace, New Delhi</option>
                  <option value="west-end-london">Aura West End, London</option>
                </optgroup>
              </select>
            </div>

            {/* Check-In */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                <span>📅</span> Check-In
              </label>
              <input 
                type="date" 
                className={styles.input} 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
              />
            </div>

            {/* Check-Out */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                <span>📅</span> Check-Out
              </label>
              <input 
                type="date" 
                className={styles.input}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
              />
            </div>

            {/* Guests & Rooms */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                <span>👥</span> Guests & Rooms
              </label>
              <div style={{ display: 'flex', gap: '16px' }}>
                <select 
                  className={styles.input} 
                  style={{ fontSize: '18px', fontFamily: 'Montserrat, sans-serif' }}
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
                <select 
                  className={styles.input} 
                  style={{ fontSize: '18px', fontFamily: 'Montserrat, sans-serif' }}
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                >
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                  <option value="4+">4+ Rooms</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.footerRow}>
            <div className={styles.promoCode}>
              <input 
                type="text" 
                className={styles.promoInput} 
                placeholder="Promo Code / Corporate Rate" 
              />
            </div>
            <button type="submit" className={styles.searchBtn}>
              Check Availability
            </button>
          </div>
        </form>
      </section>

      {/* Why Book Direct Perks */}
      <section className={styles.perksSection}>
        <h3 className={styles.perksTitle}>Why Book Directly With Us?</h3>
        <div className={styles.perksGrid}>
          <div className={styles.perkCard}>
            <span className={styles.perkIcon}>🏷️</span>
            <h4 className={styles.perkName}>Best Rate Guarantee</h4>
            <p className={styles.perkDesc}>
              We guarantee you will always find the lowest rates on our official website. If you find a lower rate, we'll match it.
            </p>
          </div>
          <div className={styles.perkCard}>
            <span className={styles.perkIcon}>✨</span>
            <h4 className={styles.perkName}>Exclusive Perks</h4>
            <p className={styles.perkDesc}>
              Enjoy complimentary high-speed Wi-Fi, priority room assignments, and flexible cancellation options.
            </p>
          </div>
          <div className={styles.perkCard}>
            <span className={styles.perkIcon}>🛎️</span>
            <h4 className={styles.perkName}>Aura Circle Rewards</h4>
            <p className={styles.perkDesc}>
              Earn points instantly on your stay and dining experiences, and redeem them for future upgrades and rewards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
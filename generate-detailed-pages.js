const fs = require('fs');
const path = require('path');

// 1. Data Structures for the pages
const pagesData = [
  // ================= HOTELS =================
  {
    path: 'hotels/palaces',
    title: 'Palace Hotels',
    heroImage: '/images/heritage_palace_exterior_1778416158734.png',
    introTitle: 'Live Like Royalty',
    introDesc: 'Step into a world of unhurried luxury and royal grandeur. Our authentic palace hotels are living monuments, offering a glimpse into the opulent lifestyle of India\'s erstwhile royalty. Every corridor whispers tales of valour, and every suite is a masterpiece of regal design.',
    items: [
      { name: 'The Majesty Palace', location: 'Mumbai', desc: 'The crown jewel of our collection, featuring iconic floating staircases, Florentine domes, and legendary sea views.', price: 'From ₹35,000', image: '/images/hotel_lobby_grand_1778416389976.png' },
      { name: 'Rambagh Palace', location: 'Jaipur', desc: 'Originally the residence of the Maharaja of Jaipur, featuring 47 acres of perfectly manicured Mughal gardens.', price: 'From ₹45,000', image: '/images/heritage_palace_exterior_1778416158734.png' },
      { name: 'Majesty Lake Palace', location: 'Udaipur', desc: 'An ethereal white marble palace that floats magically on the tranquil waters of Lake Pichola.', price: 'From ₹55,000', image: '/images/infinity_pool_view_1778416175800.png' }
    ]
  },
  {
    path: 'hotels/beach',
    title: 'Beach Resorts',
    heroImage: '/images/beach_resort_view_1778416217181.png',
    introTitle: 'Sun, Sand & Soul',
    introDesc: 'Wake up to the gentle lullaby of ocean waves. Our beachfront resorts are sanctuaries of coastal luxury, offering private beaches, world-class water sports, and endless horizons.',
    items: [
      { name: 'Majesty Exotica', location: 'Goa', desc: 'Mediterranean-inspired architecture spread across 56 acres of lush gardens along Benaulim Beach.', price: 'From ₹25,000', image: '/images/beach_resort_view_1778416217181.png' },
      { name: 'Aura Coral Reef', location: 'Maldives', desc: 'Overwater villas, vibrant coral reefs, and untouched white sands in a private lagoon.', price: 'From ₹85,000', image: '/images/infinity_pool_view_1778416175800.png' },
      { name: 'Aura Fisherman\'s Cove', location: 'Chennai', desc: 'Built on the ramparts of an old Dutch Fort, offering rugged luxury on the Bay of Bengal.', price: 'From ₹18,000', image: '/images/presidential_villa_1778416375029.png' }
    ]
  },
  {
    path: 'hotels/mountain',
    title: 'Mountain Retreats',
    heroImage: '/images/infinity_pool_view_1778416175800.png',
    introTitle: 'Above the Clouds',
    introDesc: 'Breathe in the crisp, pine-scented air. Nestled in misty valleys and perched on majestic peaks, our mountain retreats offer the perfect escape from the ordinary.',
    items: [
      { name: 'Aura Theog Resort', location: 'Shimla', desc: 'Panoramic views of the snow-capped Himalayas, featuring local timber and slate architecture.', price: 'From ₹22,000', image: '/images/heritage_palace_exterior_1778416158734.png' },
      { name: 'Aura Madikeri', location: 'Coorg', desc: 'A 180-acre rainforest retreat surrounded by coffee plantations and misty hills.', price: 'From ₹28,000', image: '/images/wildlife_safari_experience_1778416289320.png' },
      { name: 'Aura Savoy', location: 'Ooty', desc: 'A historic 19th-century hotel that captures the charm of the colonial era.', price: 'From ₹15,000', image: '/images/cultural_experiences_1778416250752.png' }
    ]
  },
  {
    path: 'hotels/city',
    title: 'City Hotels',
    heroImage: '/images/hotel_lobby_grand_1778416389976.png',
    introTitle: 'Urban Sanctuaries',
    introDesc: 'Located in the beating heart of global metropolises, our city hotels are tranquil havens designed for the modern luxury traveller and business elite.',
    items: [
      { name: 'Aura Lands End', location: 'Mumbai', desc: 'Overlooking the Arabian Sea and the Bandra-Worli Sea Link, the ultimate city retreat.', price: 'From ₹18,000', image: '/images/hotel_lobby_grand_1778416389976.png' },
      { name: 'Majesty Palace', location: 'New Delhi', desc: 'Set in six acres of lush gardens in the heart of India\'s capital.', price: 'From ₹20,000', image: '/images/presidential_villa_1778416375029.png' },
      { name: 'Aura West End', location: 'London', desc: 'Classic British charm meets Indian hospitality near Buckingham Palace.', price: 'From £450', image: '/images/luxury_suite_interior_1778416076439.png' }
    ]
  },
  {
    path: 'hotels/wildlife',
    title: 'Wildlife Resorts',
    heroImage: '/images/wildlife_safari_experience_1778416289320.png',
    introTitle: 'Into the Wild',
    introDesc: 'Experience the raw beauty of nature without compromising on luxury. Our safari lodges offer unparalleled access to India\'s most spectacular tiger reserves.',
    items: [
      { name: 'Aura Mahua Kothi', location: 'Bandhavgarh', desc: 'Sprawling luxury tents and mud-kutiyas in the heart of tiger country.', price: 'From ₹35,000', image: '/images/wildlife_safari_experience_1778416289320.png' },
      { name: 'Aura Banjaar Tola', location: 'Kanha', desc: 'Two elegant camps overlooking the Banjaar River, offering prime tiger spotting.', price: 'From ₹38,000', image: '/images/infinity_pool_view_1778416175800.png' },
      { name: 'Aura Baghvan', location: 'Pench', desc: 'Named after the Bengal Tiger, featuring vintage charm and roof-top machans.', price: 'From ₹32,000', image: '/images/cultural_experiences_1778416250752.png' }
    ]
  },

  // ================= DINING =================
  {
    path: 'dining/fine-dining',
    title: 'Fine Dining',
    heroImage: '/images/fine_dining_restaurant_1778416112215.png',
    introTitle: 'Culinary Masterpieces',
    introDesc: 'Our fine dining establishments are temples of gastronomy. Led by Michelin-starred chefs and culinary maestros, we present menus that are as visually stunning as they are delicious.',
    items: [
      { name: 'Wasabi by Morimoto', location: 'Mumbai', desc: 'Contemporary Japanese cuisine crafted by the legendary Iron Chef Masaharu Morimoto.', price: 'Lunch & Dinner', image: '/images/gourmet_cuisine_dish_1778416264157.png' },
      { name: 'Varq', location: 'New Delhi', desc: 'A modern Indian dining experience that artfully blends traditional flavors with contemporary plating.', price: 'Lunch & Dinner', image: '/images/fine_dining_restaurant_1778416112215.png' },
      { name: 'Orient Express', location: 'New Delhi', desc: 'European fine dining in an authentic, beautifully restored railway carriage.', price: 'Dinner Only', image: '/images/luxury_suite_interior_1778416076439.png' }
    ]
  },
  {
    path: 'dining/specialty',
    title: 'Specialty Cuisine',
    heroImage: '/images/gourmet_cuisine_dish_1778416264157.png',
    introTitle: 'Flavours of the World',
    introDesc: 'Travel the world through your palate. From authentic coastal Indian seafood to rich Mediterranean delicacies, our specialty restaurants offer highly focused, expertly crafted menus.',
    items: [
      { name: 'Karavalli', location: 'Bengaluru', desc: 'Award-winning coastal Indian cuisine based on well-researched, age-old family recipes.', price: 'Lunch & Dinner', image: '/images/gourmet_cuisine_dish_1778416264157.png' },
      { name: 'Golden Dragon', location: 'Mumbai', desc: 'India\'s first authentic Sichuan restaurant, known for its legendary Peking Duck.', price: 'Lunch & Dinner', image: '/images/fine_dining_restaurant_1778416112215.png' },
      { name: 'Souk', location: 'Mumbai', desc: 'Award-winning Eastern Mediterranean cuisine with panoramic views of the Arabian Sea.', price: 'Lunch & Dinner', image: '/images/rooftop_bar_city_1778416307700.png' }
    ]
  },
  {
    path: 'dining/bars',
    title: 'Bars & Lounges',
    heroImage: '/images/rooftop_bar_city_1778416307700.png',
    introTitle: 'Spirited Evenings',
    introDesc: 'Elevate your evenings. From historic polo bars serving rare single malts to high-energy rooftop lounges with panoramic city views, our bars define the art of mixology.',
    items: [
      { name: 'Aura Rooftop Bar', location: 'New Delhi', desc: 'Vibrant outdoor setting, artisanal cocktails, and live DJ sets under the stars.', price: 'Evening', image: '/images/rooftop_bar_city_1778416307700.png' },
      { name: 'The Harbour Bar', location: 'Mumbai', desc: 'Mumbai\'s first licensed bar, featuring a historic setting and prohibition-era cocktails.', price: 'All Day', image: '/images/luxury_suite_interior_1778416076439.png' },
      { name: 'Polo Lounge', location: 'Jaipur', desc: 'A historic bar adorned with royal equestrian memorabilia and serving rare whiskies.', price: 'Evening', image: '/images/heritage_palace_exterior_1778416158734.png' }
    ]
  },
  {
    path: 'dining/high-tea',
    title: 'High Tea',
    heroImage: '/images/fine_dining_restaurant_1778416112215.png',
    introTitle: 'An Afternoon Tradition',
    introDesc: 'Indulge in our legendary High Tea service. A carefully curated selection of single-estate teas paired with warm scones, clotted cream, and delicate finger sandwiches.',
    items: [
      { name: 'Sea Lounge', location: 'Mumbai', desc: 'The iconic high tea experience overlooking the Gateway of India and the Arabian Sea.', price: 'Afternoon', image: '/images/hotel_lobby_grand_1778416389976.png' },
      { name: 'The Emperor Lounge', location: 'New Delhi', desc: 'Elegant setting offering single origin coffees and bespoke tea blends.', price: 'Afternoon', image: '/images/fine_dining_restaurant_1778416112215.png' },
      { name: 'Verandah', location: 'Jaipur', desc: 'Afternoon tea served on the historic palace verandah with views of the Mughal gardens.', price: 'Afternoon', image: '/images/heritage_palace_exterior_1778416158734.png' }
    ]
  },

  // ================= EXPERIENCES =================
  {
    path: 'experiences/cultural',
    title: 'Cultural Heritage',
    heroImage: '/images/cultural_experiences_1778416250752.png',
    introTitle: 'Living Traditions',
    introDesc: 'Immerse yourself in the vibrant tapestry of Indian culture. From private classical concerts in centuries-old courtyards to guided heritage walks, we bring history to life.',
    items: [
      { name: 'Royal Grandeur', location: 'Rajasthan', desc: 'Experience a traditional royal welcome with ceremonial elephants, trumpets, and rose petals.', price: '2 Hours', image: '/images/cultural_experiences_1778416250752.png' },
      { name: 'Heritage Walks', location: 'Multiple Locations', desc: 'Guided tours through ancient forts, historic monuments, and bustling local bazaars.', price: 'Half Day', image: '/images/heritage_palace_exterior_1778416158734.png' },
      { name: 'Artisan Workshops', location: 'Jaipur', desc: 'Learn traditional block printing, pottery, or miniature painting from master craftsmen.', price: '3 Hours', image: '/images/gourmet_cuisine_dish_1778416264157.png' }
    ]
  },
  {
    path: 'experiences/adventure',
    title: 'Adventure',
    heroImage: '/images/wildlife_safari_experience_1778416289320.png',
    introTitle: 'Thrill Seekers',
    introDesc: 'For those who seek the extraordinary. Whether it\'s trekking the Himalayas or diving into coral reefs, our adventure experiences are safe, thrilling, and unforgettable.',
    items: [
      { name: 'Himalayan Trekking', location: 'Shimla & Beyond', desc: 'Guided treks through cedar forests with gourmet picnic lunches and luxury camping.', price: 'Full Day', image: '/images/infinity_pool_view_1778416175800.png' },
      { name: 'Scuba Diving', location: 'Andamans & Maldives', desc: 'PADI-certified dives exploring vibrant coral reefs and marine life.', price: 'Half Day', image: '/images/beach_resort_view_1778416217181.png' },
      { name: 'White Water Rafting', location: 'Rishikesh', desc: 'Navigate the thrilling rapids of the Ganges River with expert guides.', price: 'Half Day', image: '/images/wildlife_safari_experience_1778416289320.png' }
    ]
  },
  {
    path: 'experiences/wildlife',
    title: 'Wildlife & Nature',
    heroImage: '/images/wildlife_safari_experience_1778416289320.png',
    introTitle: 'The Call of the Wild',
    introDesc: 'Venture into the heart of India\'s most renowned national parks. Our expert naturalists will guide you on bespoke safaris to witness tigers, leopards, and diverse birdlife.',
    items: [
      { name: 'Tiger Safari', location: 'Central India', desc: 'Early morning open-jeep safaris in pristine reserves to spot the elusive Bengal Tiger.', price: '4 Hours', image: '/images/wildlife_safari_experience_1778416289320.png' },
      { name: 'Bird Watching', location: 'Corbett & Coorg', desc: 'Guided walks through rich ecosystems home to hundreds of rare bird species.', price: '3 Hours', image: '/images/cultural_experiences_1778416250752.png' },
      { name: 'Night Safaris', location: 'Pench', desc: 'Experience the jungle after dark to observe nocturnal wildlife in action.', price: '2 Hours', image: '/images/heritage_palace_exterior_1778416158734.png' }
    ]
  },
  {
    path: 'experiences/weddings',
    title: 'Timeless Weddings',
    heroImage: '/images/wedding_banquet_hall_1778416202576.png',
    introTitle: 'Your Perfect Day',
    introDesc: 'From intimate beachside vows to grand palatial extravaganzas, Majesty Hotels has been the backdrop to the world\'s most beautiful love stories. We orchestrate every detail flawlessly.',
    items: [
      { name: 'Palace Weddings', location: 'Rajasthan & Hyderabad', desc: 'Exchange vows in majestic courtyards with royal processions and fireworks.', price: 'Bespoke', image: '/images/heritage_palace_exterior_1778416158734.png' },
      { name: 'Beachside Ceremonies', location: 'Goa & Maldives', desc: 'Barefoot luxury ceremonies on pristine white sands at sunset.', price: 'Bespoke', image: '/images/beach_resort_view_1778416217181.png' },
      { name: 'City Grandeur', location: 'Mumbai & Delhi', desc: 'Opulent ballroom celebrations with world-class catering and decor.', price: 'Bespoke', image: '/images/wedding_banquet_hall_1778416202576.png' }
    ]
  },
  {
    path: 'experiences/celebrations',
    title: 'Celebrations',
    heroImage: '/images/wedding_banquet_hall_1778416202576.png',
    introTitle: 'Milestones Matter',
    introDesc: 'Anniversaries, milestone birthdays, or family reunions — we elevate every special occasion with bespoke dining, curated activities, and our signature hospitality.',
    items: [
      { name: 'Private Dining', location: 'All Properties', desc: 'Candlelit dinners curated by master chefs in exclusive, secluded locations.', price: 'From ₹15,000', image: '/images/fine_dining_restaurant_1778416112215.png' },
      { name: 'Honeymoon Retreat', location: 'Resorts & Palaces', desc: 'Romantic room setups, couple\'s spa therapies, and private yacht cruises.', price: 'Bespoke', image: '/images/luxury_suite_interior_1778416076439.png' },
      { name: 'Gala Events', location: 'City Hotels', desc: 'Flawlessly executed grand parties in our spectacular banquet halls.', price: 'Bespoke', image: '/images/wedding_banquet_hall_1778416202576.png' }
    ]
  },

  // ================= WELLNESS =================
  {
    path: 'wellness/ayurveda',
    title: 'Ayurveda',
    heroImage: '/images/ayurveda_spa_treatment_1778416350069.png',
    introTitle: 'Ancient Healing',
    introDesc: 'Rooted in 5,000 years of Indian wisdom, our Ayurvedic therapies restore balance to the doshas. Consult with our expert Vaidyas for a deeply personalized healing journey.',
    items: [
      { name: 'Panchakarma', location: 'J Wellness Circle', desc: 'A comprehensive 7-21 day detoxification and rejuvenation programme.', price: 'Consultation Required', image: '/images/ayurveda_spa_treatment_1778416350069.png' },
      { name: 'Abhyanga', location: 'J Wellness Circle', desc: 'Traditional synchronized full-body massage using warm, medicated herbal oils.', price: '90 Minutes', image: '/images/spa_wellness_center_1778416130330.png' },
      { name: 'Shirodhara', location: 'J Wellness Circle', desc: 'A deeply relaxing therapy where warm oil is continuously poured over the forehead.', price: '60 Minutes', image: '/images/infinity_pool_view_1778416175800.png' }
    ]
  },
  {
    path: 'wellness/spa',
    title: 'Spa Treatments',
    heroImage: '/images/spa_wellness_center_1778416130330.png',
    introTitle: 'Ultimate Relaxation',
    introDesc: 'Indulge in luxurious spa therapies that blend the best of Eastern wisdom and Western techniques. We use premium botanical ingredients to soothe, nourish, and revitalize.',
    items: [
      { name: 'Signature J Wellness', location: 'All Spas', desc: 'Our flagship massage combining multiple techniques to release deep muscular tension.', price: '120 Minutes', image: '/images/spa_wellness_center_1778416130330.png' },
      { name: 'Indian Aromatherapy', location: 'All Spas', desc: 'Gentle, flowing strokes using pure essential oils of jasmine, rose, and sandalwood.', price: '90 Minutes', image: '/images/ayurveda_spa_treatment_1778416350069.png' },
      { name: 'Couples Retreat', location: 'All Spas', desc: 'A shared journey of relaxation in our luxurious private couples\' suites.', price: '120 Minutes', image: '/images/luxury_suite_interior_1778416076439.png' }
    ]
  },
  {
    path: 'wellness/yoga',
    title: 'Yoga & Meditation',
    heroImage: '/images/spa_wellness_center_1778416130330.png',
    introTitle: 'Inner Peace',
    introDesc: 'Find stillness and flexibility through the ancient discipline of Yoga. Our expert practitioners guide you through asanas, pranayama, and meditation tailored to your level.',
    items: [
      { name: 'Sunrise Asanas', location: 'Beach & Mountain Resorts', desc: 'Invigorating morning yoga sessions surrounded by breathtaking natural beauty.', price: 'Complimentary', image: '/images/infinity_pool_view_1778416175800.png' },
      { name: 'Mindfulness Meditation', location: 'All Properties', desc: 'Guided sessions to reduce stress, improve focus, and cultivate inner calm.', price: '60 Minutes', image: '/images/spa_wellness_center_1778416130330.png' },
      { name: 'Private Instruction', location: 'All Properties', desc: 'One-on-one sessions addressing specific physical or mental wellness goals.', price: '90 Minutes', image: '/images/cultural_experiences_1778416250752.png' }
    ]
  },
  {
    path: 'wellness/fitness',
    title: 'Fitness',
    heroImage: '/images/infinity_pool_view_1778416175800.png',
    introTitle: 'Active Wellness',
    introDesc: 'Maintain your wellness routine with our state-of-the-art fitness centers, temperature-controlled pools, and personal training services available at all times.',
    items: [
      { name: 'Personal Training', location: 'City Hotels & Resorts', desc: 'Bespoke workout regimens designed by our certified fitness experts.', price: '60 Minutes', image: '/images/hotel_lobby_grand_1778416389976.png' },
      { name: 'Aqua Aerobics', location: 'Select Resorts', desc: 'Low-impact, high-resistance workouts in our luxurious outdoor pools.', price: '45 Minutes', image: '/images/infinity_pool_view_1778416175800.png' },
      { name: 'Functional Fitness', location: 'All Properties', desc: '24-hour access to gyms equipped with the latest cardio and strength training gear.', price: 'Complimentary', image: '/images/spa_wellness_center_1778416130330.png' }
    ]
  },

  // ================= OFFERS =================
  {
    path: 'offers/stay',
    title: 'Stay Offers',
    heroImage: '/images/presidential_villa_1778416375029.png',
    introTitle: 'Luxurious Getaways',
    introDesc: 'Discover exclusive room packages and rates designed to make your stay even more rewarding. From long weekend escapes to suite upgrades, find the perfect offer.',
    items: [
      { name: 'Suite Dreams', location: 'All Properties', desc: 'Book a suite and enjoy complimentary airport transfers, lounge access, and a spa voucher.', price: 'Valid all year', image: '/images/luxury_suite_interior_1778416076439.png' },
      { name: 'Stay A Little Longer', location: 'Resorts', desc: 'Stay for 4 nights and pay for 3. Includes complimentary daily breakfast.', price: 'Valid till Nov', image: '/images/beach_resort_view_1778416217181.png' },
      { name: 'Business Travel Rate', location: 'City Hotels', desc: 'Special rates for corporate travellers including high-speed Wi-Fi and express laundry.', price: 'Valid all year', image: '/images/hotel_lobby_grand_1778416389976.png' }
    ]
  },
  {
    path: 'offers/dining',
    title: 'Dining Offers',
    heroImage: '/images/gourmet_cuisine_dish_1778416264157.png',
    introTitle: 'Culinary Experiences',
    introDesc: 'Savor exceptional flavors at exceptional value. Enjoy curated tasting menus, Sunday brunches, and exclusive culinary events at our award-winning restaurants.',
    items: [
      { name: 'Sunday Grand Brunch', location: 'City Hotels', desc: 'An extravagant spread of global cuisines with bottomless premium beverages.', price: 'Sundays Only', image: '/images/fine_dining_restaurant_1778416112215.png' },
      { name: 'Chef\'s Tasting Menu', location: 'Signature Restaurants', desc: 'A 7-course gastronomic journey curated by our Executive Chefs with wine pairing.', price: 'Prior booking req.', image: '/images/gourmet_cuisine_dish_1778416264157.png' },
      { name: 'Happy Hours', location: 'Bars & Lounges', desc: 'Enjoy 1-for-1 on select premium spirits and crafted cocktails between 5 PM and 8 PM.', price: 'Daily', image: '/images/rooftop_bar_city_1778416307700.png' }
    ]
  },
  {
    path: 'offers/celebrations',
    title: 'Celebration Packages',
    heroImage: '/images/wedding_banquet_hall_1778416202576.png',
    introTitle: 'Festive Joy',
    introDesc: 'Whether it\'s the holiday season, a honeymoon, or a milestone birthday, our celebration packages are bundled with surprises to make your moments magical.',
    items: [
      { name: 'Honeymoon Bliss', location: 'Resorts & Palaces', desc: 'Romantic room decor, a bottle of champagne, and a private dinner under the stars.', price: 'Bespoke', image: '/images/luxury_suite_interior_1778416076439.png' },
      { name: 'Festive Gala', location: 'All Properties', desc: 'New Year and Christmas specials featuring grand gala dinners and live entertainment.', price: 'Seasonal', image: '/images/wedding_banquet_hall_1778416202576.png' },
      { name: 'Anniversary Retreat', location: 'All Properties', desc: 'Complimentary cake, room upgrade subject to availability, and 20% off on spa services.', price: 'Valid all year', image: '/images/heritage_palace_exterior_1778416158734.png' }
    ]
  },
  {
    path: 'offers/early-bird',
    title: 'Early Bird',
    heroImage: '/images/special_offers_banner_1778416333572.png',
    introTitle: 'Plan Ahead & Save',
    introDesc: 'The early bird catches the finest suites. Plan your travels well in advance to unlock our most lucrative savings and secure your preferred room types.',
    items: [
      { name: 'Advance Purchase 60', location: 'All Properties', desc: 'Book 60 days in advance and enjoy up to 35% savings on our Best Available Rate.', price: 'Valid all year', image: '/images/special_offers_banner_1778416333572.png' },
      { name: 'Advance Purchase 30', location: 'All Properties', desc: 'Book 30 days in advance and enjoy up to 20% savings on our Best Available Rate.', price: 'Valid all year', image: '/images/hotel_lobby_grand_1778416389976.png' },
      { name: 'Early Bird Weddings', location: 'Palaces & Resorts', desc: 'Confirm your wedding venue 12 months prior for exclusive waivers on venue rentals.', price: 'Valid all year', image: '/images/wedding_banquet_hall_1778416202576.png' }
    ]
  },

  // ================= EXTRAS (Footer etc) =================
  {
    path: 'innercircle',
    title: 'Majesty Circle',
    heroImage: '/images/presidential_villa_1778416375029.png',
    introTitle: 'Loyalty Reimagined',
    introDesc: 'Welcome to Majesty Circle, a loyalty programme designed to recognize and reward your relationship with us. Earn points across stays, dining, and spa treatments, and redeem them for extraordinary experiences.',
    items: [
      { name: 'Silver Tier', location: 'Entry Level', desc: 'Enjoy members-only rates, complimentary Wi-Fi, and late checkout up to 2 PM.', price: 'Free to join', image: '/images/hotel_lobby_grand_1778416389976.png' },
      { name: 'Gold Tier', location: 'Mid Level', desc: 'All Silver benefits plus complimentary room upgrades, early check-in, and 15% dining discount.', price: 'Requires 20 Nights', image: '/images/luxury_suite_interior_1778416076439.png' },
      { name: 'Platinum Tier', location: 'Top Level', desc: 'The ultimate privilege: guaranteed room availability, suite upgrades, and bespoke gifts.', price: 'Requires 60 Nights', image: '/images/presidential_villa_1778416375029.png' }
    ]
  },
  {
    path: 'book',
    title: 'Book Your Stay',
    heroImage: '/images/hero_palace_hotel_1778416060429.png',
    introTitle: 'Your Journey Begins Here',
    introDesc: 'Secure your reservation at any of our luxury properties globally. Experience our Best Rate Guarantee when you book directly with us.',
    items: [
      { name: 'Direct Booking Perks', location: 'Online', desc: 'Always get the best rate, free Wi-Fi, and priority room assignment.', price: 'Guaranteed', image: '/images/hotel_lobby_grand_1778416389976.png' },
      { name: 'Flexible Cancellations', location: 'Online', desc: 'Plans change. Enjoy hassle-free modifications and cancellations on standard rates.', price: 'Guaranteed', image: '/images/luxury_suite_interior_1778416076439.png' },
      { name: '24/7 Concierge Support', location: 'Global', desc: 'Our dedicated reservations team is available around the clock to assist you.', price: 'Included', image: '/images/cultural_experiences_1778416250752.png' }
    ]
  },
  {
    path: 'about',
    title: 'Our Story',
    heroImage: '/images/heritage_palace_exterior_1778416158734.png',
    introTitle: 'Soulful Luxury Since 1903',
    introDesc: 'For over a century, Majesty Hotels has defined the art of luxury hospitality. From building India\'s first luxury hotel to restoring historic palaces, our legacy is built on the foundation of soulful, heartfelt service.',
    items: [
      { name: 'The Original Icon', location: '1903', desc: 'The opening of our first hotel in Mumbai, setting a new global standard for luxury.', price: 'History', image: '/images/hotel_lobby_grand_1778416389976.png' },
      { name: 'Palace Restorations', location: '1970s', desc: 'Pioneering the conversion of authentic royal palaces into world-class luxury hotels.', price: 'Heritage', image: '/images/heritage_palace_exterior_1778416158734.png' },
      { name: 'Global Expansion', location: 'Present', desc: 'Taking the warmth of Indian hospitality to iconic destinations across the globe.', price: 'Global', image: '/images/presidential_villa_1778416375029.png' }
    ]
  },
  {
    path: 'sustainability',
    title: 'Sustainability',
    heroImage: '/images/cultural_experiences_1778416250752.png',
    introTitle: 'A Commitment to Tomorrow',
    introDesc: 'At Majesty Hotels, we believe that true luxury must be sustainable. Our environmental initiatives focus on renewable energy, water conservation, and supporting local artisan communities.',
    items: [
      { name: 'Renewable Energy', location: 'Operations', desc: 'Over 50% of our power requirements are met through wind and solar energy.', price: 'Eco-Friendly', image: '/images/infinity_pool_view_1778416175800.png' },
      { name: 'Zero Single-Use Plastic', location: 'Operations', desc: 'We have eliminated single-use plastics across our rooms, dining, and spa facilities.', price: 'Eco-Friendly', image: '/images/beach_resort_view_1778416217181.png' },
      { name: 'Community Support', location: 'Local Initiatives', desc: 'Sourcing ingredients and materials locally to empower artisans and farmers.', price: 'Social', image: '/images/cultural_experiences_1778416250752.png' }
    ]
  },
  {
    path: 'careers',
    title: 'Careers',
    heroImage: '/images/hotel_lobby_grand_1778416389976.png',
    introTitle: 'Join the Family',
    introDesc: 'Our people are our greatest asset. Build a rewarding career with a brand that champions continuous learning, diversity, and the art of soulful service.',
    items: [
      { name: 'Hotel Operations', location: 'Global', desc: 'Roles in front office, housekeeping, and guest relations.', price: 'Full Time', image: '/images/hotel_lobby_grand_1778416389976.png' },
      { name: 'Culinary Arts', location: 'Global', desc: 'Join our kitchens as a chef and learn from industry maestros.', price: 'Full Time', image: '/images/gourmet_cuisine_dish_1778416264157.png' },
      { name: 'Management Trainee', location: 'Global', desc: 'Our rigorous leadership program designed to groom the hoteliers of tomorrow.', price: 'Training', image: '/images/luxury_suite_interior_1778416076439.png' }
    ]
  },
  {
    path: 'press',
    title: 'Press Room',
    heroImage: '/images/presidential_villa_1778416375029.png',
    introTitle: 'Latest Updates',
    introDesc: 'Explore the latest news, press releases, media coverage, and brand announcements from Majesty Hotels globally.',
    items: [
      { name: 'Forbes Travel Guide', location: 'Award', desc: 'Majesty Hotels secures the highest number of 5-star ratings in the hospitality industry.', price: '2025', image: '/images/hotel_lobby_grand_1778416389976.png' },
      { name: 'New Resort Opening', location: 'Launch', desc: 'Announcing the opening of our newest eco-luxury resort in the Himalayas.', price: 'Recent', image: '/images/infinity_pool_view_1778416175800.png' },
      { name: 'Culinary Excellence', location: 'Award', desc: 'Three of our flagship restaurants receive prestigious Michelin stars.', price: '2025', image: '/images/fine_dining_restaurant_1778416112215.png' }
    ]
  }
];

// 2. CSS Template Generation
const generateCss = () => `
.hero {
  position: relative; height: 60vh; min-height: 480px;
  display: flex; align-items: flex-end; padding-bottom: 80px; overflow: hidden;
}
.heroBg { position: absolute; inset: 0; }
.heroOverlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%);
}
.heroContent {
  position: relative; z-index: 2; max-width: 1400px; margin: 0 auto; padding: 0 40px; width: 100%;
}
.eyebrow {
  display: block; font-family: 'Montserrat', sans-serif; font-size: 11px;
  font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #C9A96E; margin-bottom: 8px;
}
.title {
  font-family: 'Cormorant Garamond', serif; font-size: clamp(40px, 6vw, 72px);
  font-weight: 400; color: white; margin-bottom: 16px; line-height: 1.1;
}
.goldLine { width: 50px; height: 1px; background: #8E744B; margin: 20px 0; }
.desc {
  font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 300;
  color: rgba(255,255,255,0.8); line-height: 1.7; max-width: 600px;
}

/* Intro Section */
.introSection { padding: 100px 0; background: #FAF6F0; }
.introInner { max-width: 800px; margin: 0 auto; text-align: center; padding: 0 24px; }
.introEyebrow {
  display: block; font-family: 'Montserrat', sans-serif; font-size: 11px;
  font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #8E744B; margin-bottom: 12px;
}
.introTitle {
  font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 4vw, 48px);
  font-weight: 400; color: #1A1A1A; line-height: 1.2;
}
.goldLineCenter { width: 50px; height: 1px; background: #8E744B; margin: 24px auto; }
.introText {
  font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 300;
  color: #4A4A4A; line-height: 1.8;
}

/* Grid Section */
.gridSection { padding: 0 0 100px; background: #FAF6F0; }
.container { max-width: 1400px; margin: 0 auto; padding: 0 40px; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }

/* Card */
.card {
  background: white; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: all 0.4s ease; border: 1px solid #F0E8D8;
}
.card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,0,0,0.12); border-color: rgba(142,116,75,0.4); }
.cardImgWrap { position: relative; height: 300px; overflow: hidden; }
.cardImgWrap :global(img) { transition: transform 0.8s ease; }
.card:hover .cardImgWrap :global(img) { transform: scale(1.05); }
.cardOverlay {
  position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%);
}
.cardLocation {
  position: absolute; top: 16px; left: 16px; background: rgba(142,116,75,0.9);
  color: white; font-family: 'Montserrat', sans-serif; font-size: 9px; font-weight: 700;
  letter-spacing: 2px; text-transform: uppercase; padding: 6px 14px; z-index: 1;
}
.cardBody { padding: 32px; display: flex; flex-direction: column; height: calc(100% - 300px); }
.cardTitle {
  font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 500;
  color: #1A1A1A; margin-bottom: 12px; line-height: 1.2;
}
.cardDesc {
  font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 300;
  color: #4A4A4A; line-height: 1.7; margin-bottom: 24px; flex-grow: 1;
}
.cardFooter {
  display: flex; justify-content: space-between; align-items: center;
  padding-top: 20px; border-top: 1px solid #F0E8D8; margin-top: auto;
}
.cardPrice {
  font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600;
  color: #8E744B; text-transform: uppercase; letter-spacing: 1px;
}
.cardBtn {
  font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700;
  letter-spacing: 2px; text-transform: uppercase; color: white; background: #1A1A1A;
  padding: 12px 24px; transition: background 0.3s ease;
}
.cardBtn:hover { background: #8E744B; }

@media (max-width: 1100px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) {
  .heroContent, .container { padding: 0 24px; }
  .grid { grid-template-columns: 1fr; gap: 24px; }
  .cardImgWrap { height: 250px; }
}
@media (max-width: 480px) {
  .heroContent, .container { padding: 0 16px; }
}
`;

// 3. TSX Template Generation
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
    <>
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
          <span className={styles.eyebrow}>Discover</span>
          <h1 className={styles.title}>${page.title}</h1>
          <div className={styles.goldLine} />
          <p className={styles.desc}>Experience the finest collection of ${page.title.toLowerCase()} curated for our discerning guests.</p>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Overview</span>
          <h2 className={styles.introTitle}>${page.introTitle}</h2>
          <div className={styles.goldLineCenter} />
          <p className={styles.introText}>
            ${page.introDesc}
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {${JSON.stringify(page.items)}.map((item, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardImgWrap}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={styles.cardOverlay} />
                  <span className={styles.cardLocation}>{item.location}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardPrice}>{item.price}</span>
                    <Link href="/book" className={styles.cardBtn}>
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
`;

function generateAll() {
  const baseDir = path.join(__dirname, 'src', 'app');
  
  pagesData.forEach(page => {
    const dir = path.join(baseDir, page.path);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write CSS
    fs.writeFileSync(path.join(dir, 'page.module.css'), generateCss());
    
    // Write TSX
    fs.writeFileSync(path.join(dir, 'page.tsx'), generateTsx(page).trim() + '\\n');
    console.log(`Generated detailed page: ${page.path}`);
  });
}

generateAll();

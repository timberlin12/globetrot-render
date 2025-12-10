import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, Clock, ArrowLeft, ArrowRight, User, Share2, 
  Facebook, Twitter, Linkedin, BookOpen, Tag, ChevronRight,
  Heart, MessageCircle, Bookmark
} from "lucide-react";

// All blog articles data
const allArticles = [
  {
    id: 1,
    title: "10 Essential Packing Tips for Indian Travel",
    excerpt: "Master the art of packing light while staying prepared for India's diverse climates and cultural expectations.",
    image: "/images/hero-manali.jpg",
    date: "2024-12-05",
    readTime: "6 min read",
    category: "Travel Tips",
    author: "Priya Sharma",
    authorImage: "/images/hero-kerala.jpg",
    content: `
      <p>Traveling to India is an incredible adventure, but packing for such a diverse country can be challenging. From the snowy peaks of the Himalayas to the tropical beaches of Goa, India's climate varies dramatically. Here's your comprehensive guide to packing smart.</p>
      
      <h2>1. Layer Your Clothing</h2>
      <p>India's temperatures can swing dramatically between day and night, especially in northern regions. Pack lightweight layers that you can add or remove as needed. A light jacket or cardigan is essential even during summer for air-conditioned spaces and cool evenings.</p>
      
      <h2>2. Choose Breathable Fabrics</h2>
      <p>Cotton and linen are your best friends in India's humid climate. These natural fabrics allow your skin to breathe and dry quickly after washing. Avoid synthetic materials that trap heat and moisture.</p>
      
      <h2>3. Modest Clothing is Key</h2>
      <p>When visiting temples, religious sites, or rural areas, modest clothing is respectful and often required. Pack loose-fitting pants, long skirts, and tops that cover your shoulders. A lightweight scarf is versatile – use it as a cover-up, sun protection, or to filter dust.</p>
      
      <h2>4. Comfortable Walking Shoes</h2>
      <p>You'll be doing a lot of walking on various terrains. Pack comfortable, broken-in walking shoes that you can slip on and off easily for temple visits. Sandals with good arch support are great for casual days.</p>
      
      <h2>5. Pack a Day Bag</h2>
      <p>A small backpack or crossbody bag is essential for daily excursions. Choose one with secure closures and keep it in front of you in crowded areas.</p>
      
      <h2>6. Essential Toiletries</h2>
      <p>While most toiletries are available in Indian cities, pack your preferred brands of sunscreen (SPF 50+), insect repellent with DEET, hand sanitizer, and any prescription medications with copies of prescriptions.</p>
      
      <h2>7. Electronics and Adapters</h2>
      <p>India uses Type C and Type D plugs (230V). Bring a universal adapter and a portable charger for your devices. Consider a waterproof phone case for monsoon season or water activities.</p>
      
      <h2>8. Health Essentials</h2>
      <p>Pack a small first-aid kit with basics: band-aids, antiseptic cream, pain relievers, anti-diarrhea medication, and electrolyte packets. A water purification system or tablets is wise for remote areas.</p>
      
      <h2>9. Documentation</h2>
      <p>Keep physical and digital copies of your passport, visa, travel insurance, and hotel bookings. Store copies separately from originals and in cloud storage for emergency access.</p>
      
      <h2>10. Leave Room for Souvenirs</h2>
      <p>India is a shopper's paradise! Leave space in your luggage for textiles, spices, handicrafts, and other treasures you'll discover. Consider packing a foldable duffel bag for extra capacity on your return journey.</p>
      
      <h2>Pro Tips</h2>
      <ul>
        <li>Roll clothes instead of folding to save space and reduce wrinkles</li>
        <li>Use packing cubes to organize different categories</li>
        <li>Pack a reusable water bottle – India has many water refill stations</li>
        <li>Bring a small flashlight for power outages</li>
        <li>Pack a travel pillow and eye mask for long train journeys</li>
      </ul>
    `,
    tags: ["packing", "travel tips", "india travel", "backpacking"]
  },
  {
    id: 2,
    title: "Budget Travel Secrets: Explore India Under ₹1000/Day",
    excerpt: "Discover insider tips to experience incredible India without breaking the bank.",
    image: "/images/hero-rajasthan.jpg",
    date: "2024-12-03",
    readTime: "8 min read",
    category: "Travel Tips",
    author: "Rahul Mehta",
    authorImage: "/images/hero-goa.jpg",
    content: `
      <p>India is one of the most budget-friendly destinations in the world. With careful planning, you can experience the country's rich culture, stunning landscapes, and delicious cuisine for under ₹1000 per day. Here's how.</p>
      
      <h2>Accommodation: ₹200-400/night</h2>
      <p>Hostels and guesthouses offer clean, safe accommodation at incredible prices. Dormitory beds start from ₹200, while private rooms in budget guesthouses range from ₹400-600. Book directly with properties for the best rates.</p>
      
      <h2>Food: ₹200-300/day</h2>
      <p>Eat where the locals eat! Street food and small restaurants (dhabas) serve authentic, delicious meals for ₹30-60. A filling thali (complete meal) costs ₹80-120. Stick to busy stalls with high turnover for freshness and safety.</p>
      
      <h2>Transportation: ₹100-200/day</h2>
      <p>India's extensive train network is incredibly affordable. Sleeper class trains cover long distances for a fraction of bus costs. For local travel, use shared autos, local buses, or rent a bicycle. Walk wherever possible to discover hidden gems.</p>
      
      <h2>Activities: ₹100-200/day</h2>
      <p>Many of India's best experiences are free or very cheap. Temples, parks, and markets cost nothing. Entry fees to most monuments range from ₹10-50 for Indians. Free walking tours operate in major cities – tip what you can.</p>
      
      <h2>Sample Daily Budget</h2>
      <ul>
        <li>Hostel bed: ₹250</li>
        <li>Breakfast (chai + paratha): ₹40</li>
        <li>Lunch (thali): ₹80</li>
        <li>Dinner (street food): ₹60</li>
        <li>Local transport: ₹100</li>
        <li>Snacks/water: ₹50</li>
        <li>Activities: ₹100</li>
        <li><strong>Total: ₹680</strong></li>
      </ul>
      
      <h2>Money-Saving Tips</h2>
      <ul>
        <li>Travel in shoulder season (September-October, February-March)</li>
        <li>Negotiate prices at markets – start at 50% of asking price</li>
        <li>Carry a reusable water bottle with filter</li>
        <li>Use government buses instead of private tourist buses</li>
        <li>Book train tickets in advance via IRCTC for best prices</li>
      </ul>
    `,
    tags: ["budget travel", "backpacking", "travel tips", "india on a budget"]
  },
  {
    id: 3,
    title: "Solo Travel Safety Guide for Women in India",
    excerpt: "Comprehensive safety tips and must-know advice for women traveling alone in India.",
    image: "/images/hero-kerala.jpg",
    date: "2024-12-01",
    readTime: "10 min read",
    category: "Travel Tips",
    author: "Ananya Desai",
    authorImage: "/images/hero-manali.jpg",
    content: `
      <p>India welcomes millions of solo female travelers every year. While the country does require extra vigilance, it rewards those who visit with incredible experiences. This guide covers everything you need to know to travel safely and confidently.</p>
      
      <h2>Pre-Trip Planning</h2>
      <p>Research your destinations thoroughly. Some regions like Kerala, Rajasthan's tourist areas, Himachal Pradesh, and Goa are particularly welcoming for solo female travelers. Register with your embassy and share your itinerary with family or friends.</p>
      
      <h2>Dress Appropriately</h2>
      <p>Dressing modestly isn't about restrictions – it's about respect and reducing unwanted attention. Cover your shoulders and knees. Loose-fitting clothes are more comfortable in the heat anyway. Many women carry a scarf to cover up when needed.</p>
      
      <h2>Accommodation Safety</h2>
      <p>Book reputable hotels or hostels with good reviews from female travelers. Request rooms on upper floors away from ground level. Check that door locks work properly. Many hostels have female-only dorms – a great option for solo travelers.</p>
      
      <h2>Transportation Tips</h2>
      <p>Use official prepaid taxis or ride-sharing apps like Uber and Ola that track your journey. On trains, book upper berths in AC coaches or the ladies' compartment. Avoid empty carriages on buses and trains. During day travel, sit near other women or families.</p>
      
      <h2>Trust Your Instincts</h2>
      <p>If something feels wrong, remove yourself from the situation. Don't worry about being polite – your safety comes first. Ignore persistent attention and walk confidently toward crowded, well-lit areas.</p>
      
      <h2>Connect with Other Travelers</h2>
      <p>Join female travel groups on Facebook and forums. Apps like Tourlina connect women travelers. Consider organized tours for remote areas. Fellow travelers often become the best travel companions and sources of real-time safety information.</p>
      
      <h2>Emergency Contacts</h2>
      <p>Save these numbers in your phone:</p>
      <ul>
        <li>Police: 100</li>
        <li>Women Helpline: 1091</li>
        <li>Tourist Police: 1363</li>
        <li>Emergency: 112</li>
      </ul>
      
      <h2>The Reality</h2>
      <p>Millions of women travel solo in India every year and have wonderful experiences. The key is preparation, awareness, and trusting yourself. India's hospitality is legendary – you'll meet incredible people who go out of their way to help.</p>
    `,
    tags: ["solo travel", "women travel", "safety tips", "female travel"]
  },
  {
    id: 4,
    title: "Complete Kashmir Travel Guide 2024",
    excerpt: "Everything you need to know about visiting paradise on Earth - from Srinagar to Gulmarg.",
    image: "/images/hero-kashmir.jpg",
    date: "2024-11-28",
    readTime: "15 min read",
    category: "Destination Guides",
    featured: true,
    author: "Ahmed Khan",
    authorImage: "/images/hero-kashmir.jpg",
    content: `
      <p>Kashmir, often called "Paradise on Earth," is India's crown jewel. From the pristine Dal Lake to the snow-capped peaks of Gulmarg, this comprehensive guide covers everything you need for an unforgettable Kashmir experience.</p>
      
      <h2>Getting There</h2>
      <p>Srinagar's Sheikh ul-Alam International Airport connects to major Indian cities. Flights from Delhi take about 1.5 hours. Alternatively, take the spectacular Jammu-Srinagar Highway by road – a 9-hour journey through stunning mountain passes.</p>
      
      <h2>Best Time to Visit</h2>
      <p>Kashmir transforms with each season:</p>
      <ul>
        <li><strong>Spring (March-May):</strong> Tulip gardens bloom, pleasant weather</li>
        <li><strong>Summer (June-August):</strong> Perfect for trekking and houseboat stays</li>
        <li><strong>Autumn (September-November):</strong> Golden chinar leaves, clear skies</li>
        <li><strong>Winter (December-February):</strong> Snow activities, skiing in Gulmarg</li>
      </ul>
      
      <h2>Must-Visit Places</h2>
      <h3>Srinagar</h3>
      <p>The summer capital enchants with its houseboats on Dal Lake, Mughal gardens, and old city charm. Don't miss a shikara ride at sunset and shopping in the local bazaars for Pashmina shawls and carpets.</p>
      
      <h3>Gulmarg</h3>
      <p>Home to the world's highest gondola ride, Gulmarg is a paradise for adventure seekers. Ski in winter, trek through meadows in summer, and enjoy the stunning views year-round.</p>
      
      <h3>Pahalgam</h3>
      <p>This valley of shepherds offers serene landscapes, river rafting on the Lidder, and trekking routes to Kolahoi Glacier and Tarsar Marsar lakes.</p>
      
      <h3>Sonamarg</h3>
      <p>The "Meadow of Gold" is your gateway to Ladakh. Visit Thajiwas Glacier, camp by alpine lakes, and experience the Zoji La pass.</p>
      
      <h2>Where to Stay</h2>
      <p>Houseboats on Dal Lake offer a unique experience from ₹2,000-15,000 per night. Hotels in Srinagar range from budget guesthouses (₹800) to luxury heritage properties (₹25,000+). Book well in advance during peak season.</p>
      
      <h2>What to Eat</h2>
      <p>Kashmiri cuisine is a feast:</p>
      <ul>
        <li><strong>Wazwan:</strong> Multi-course feast for special occasions</li>
        <li><strong>Rogan Josh:</strong> Aromatic lamb curry</li>
        <li><strong>Yakhni:</strong> Yogurt-based meat curry</li>
        <li><strong>Kahwa:</strong> Saffron tea with almonds</li>
        <li><strong>Kashmiri Pulao:</strong> Sweet rice with dried fruits</li>
      </ul>
      
      <h2>Pro Tips</h2>
      <ul>
        <li>Carry cash – card acceptance is limited outside Srinagar</li>
        <li>Respect local customs and dress modestly</li>
        <li>Negotiate houseboat prices before boarding</li>
        <li>Book gondola tickets online to avoid long queues</li>
        <li>Pack for variable weather – it can change quickly in the mountains</li>
      </ul>
    `,
    tags: ["kashmir", "srinagar", "gulmarg", "destination guide", "himalaya"]
  },
  {
    id: 5,
    title: "Kerala Backwaters: A Complete Guide",
    excerpt: "Navigate the serene backwaters with our comprehensive guide to houseboats, villages, and hidden gems.",
    image: "/images/hero-kerala.jpg",
    date: "2024-11-25",
    readTime: "12 min read",
    category: "Destination Guides",
    author: "Maya Nair",
    authorImage: "/images/hero-kerala.jpg",
    content: `
      <p>Kerala's backwaters are a network of interconnected canals, rivers, lakes, and inlets stretching over 900 kilometers. This unique ecosystem supports a distinctive way of life and offers one of India's most tranquil travel experiences.</p>
      
      <h2>Understanding the Backwaters</h2>
      <p>The backwaters form a complex network along Kerala's coast. Key destinations include Alleppey (Alappuzha), Kumarakom, Kollam, and Kochi. Each offers unique experiences, from bustling waterways to serene village life.</p>
      
      <h2>Houseboat Experience</h2>
      <p>A kettuvallam (traditional houseboat) stay is the quintessential backwater experience. These converted rice barges offer bedrooms, bathrooms, living areas, and a crew including a cook who prepares fresh Kerala cuisine.</p>
      
      <h3>Types of Houseboats</h3>
      <ul>
        <li><strong>Standard:</strong> ₹6,000-8,000/night – Basic amenities, good value</li>
        <li><strong>Deluxe:</strong> ₹10,000-15,000/night – Better furnishings, AC</li>
        <li><strong>Premium:</strong> ₹20,000+/night – Luxury finishes, upper deck, superior cuisine</li>
      </ul>
      
      <h2>Best Time to Visit</h2>
      <p>October to March offers pleasant weather and clear skies. Avoid monsoon (June-September) when waterways can flood. August's Nehru Trophy Boat Race is spectacular if you time it right.</p>
      
      <h2>Alternative Experiences</h2>
      <h3>Canoe Tours</h3>
      <p>Small canoes access narrow canals where houseboats can't go. These tours reveal village life – see coir making, toddy tapping, and fishing communities up close.</p>
      
      <h3>Homestays</h3>
      <p>Stay with local families for authentic cultural immersion. Learn to cook Kerala dishes, watch traditional crafts, and participate in daily village life.</p>
      
      <h2>Must-Try Experiences</h2>
      <ul>
        <li>Watch the sunset from your houseboat deck</li>
        <li>Try fresh karimeen (pearl spot fish) cooked in banana leaf</li>
        <li>Witness toddy tapping at dawn</li>
        <li>Visit Alleppey Beach at sunrise</li>
        <li>Explore the Chinese fishing nets of Kochi</li>
      </ul>
      
      <h2>Practical Tips</h2>
      <ul>
        <li>Book houseboats during weekdays for lower prices</li>
        <li>Carry mosquito repellent</li>
        <li>Alcohol is available but pricey – bring your own</li>
        <li>Negotiate houseboat prices and verify amenities before booking</li>
        <li>Tipping the crew (₹500-1000) is appreciated</li>
      </ul>
    `,
    tags: ["kerala", "backwaters", "houseboat", "alleppey", "destination guide"]
  },
  {
    id: 6,
    title: "Rajasthan Heritage Tour: Palace to Palace",
    excerpt: "Explore the royal heritage of Rajasthan from Jaipur to Udaipur with detailed itineraries.",
    image: "/images/hero-rajasthan.jpg",
    date: "2024-11-22",
    readTime: "14 min read",
    category: "Destination Guides",
    author: "Vikram Singh",
    authorImage: "/images/hero-rajasthan.jpg",
    content: `
      <p>Rajasthan, the Land of Kings, offers a journey through centuries of royal heritage. From the pink walls of Jaipur to the romantic lakes of Udaipur, this guide takes you through the best palace experiences in the royal state.</p>
      
      <h2>Jaipur - The Pink City</h2>
      <p>Start your heritage journey in Rajasthan's capital. The City Palace, Hawa Mahal, and Amber Fort showcase Rajput architecture at its finest. Stay at converted havelis or splurge on the Rambagh Palace for true royal living.</p>
      
      <h2>Jodhpur - The Blue City</h2>
      <p>Mehrangarh Fort rises dramatically above the blue-painted houses of the old city. This impregnable fortress houses an impressive museum of royal artifacts. The Umaid Bhawan Palace, still a royal residence, offers one of India's most luxurious hotel experiences.</p>
      
      <h2>Udaipur - The City of Lakes</h2>
      <p>Often called India's most romantic city, Udaipur captivates with its lakeside palaces. The City Palace complex is Rajasthan's largest, while the Lake Palace appears to float on Lake Pichola. Stay at a lakeside haveli for magical sunset views.</p>
      
      <h2>Jaisalmer - The Golden City</h2>
      <p>The living fort of Jaisalmer rises from the Thar Desert like a golden mirage. Wander through its narrow lanes lined with ornate havelis, then venture into the desert for a camel safari and night under the stars.</p>
      
      <h2>Suggested Itinerary: 10-12 Days</h2>
      <ul>
        <li><strong>Days 1-3:</strong> Jaipur – Amber Fort, City Palace, local bazaars</li>
        <li><strong>Days 4-5:</strong> Jodhpur – Mehrangarh Fort, blue city walk, spice markets</li>
        <li><strong>Days 6-7:</strong> Jaisalmer – Fort exploration, desert safari</li>
        <li><strong>Days 8-10:</strong> Udaipur – Lake Palace, boat rides, cultural shows</li>
        <li><strong>Days 11-12:</strong> Pushkar or Bundi – Smaller towns, authentic experiences</li>
      </ul>
      
      <h2>Best Time to Visit</h2>
      <p>October to March offers pleasant temperatures. Summers (April-June) are extremely hot. The monsoon (July-September) brings occasional showers but also lush landscapes and fewer tourists.</p>
      
      <h2>Palace Stay Experiences</h2>
      <p>Many Rajasthan palaces now operate as heritage hotels:</p>
      <ul>
        <li><strong>Taj Rambagh Palace, Jaipur:</strong> Ultimate luxury in a Maharaja's former residence</li>
        <li><strong>Umaid Bhawan Palace, Jodhpur:</strong> Art Deco grandeur, still partly royal residence</li>
        <li><strong>Taj Lake Palace, Udaipur:</strong> Dream-like palace floating on Lake Pichola</li>
        <li><strong>Suryagarh, Jaisalmer:</strong> Modern palace luxury at the edge of the desert</li>
      </ul>
    `,
    tags: ["rajasthan", "jaipur", "udaipur", "heritage", "palace hotels"]
  },
  {
    id: 7,
    title: "Goa Beyond Beaches: Hidden Experiences",
    excerpt: "Discover the Portuguese heritage, spice plantations, and waterfalls that make Goa special.",
    image: "/images/hero-goa.jpg",
    date: "2024-11-20",
    readTime: "10 min read",
    category: "Destination Guides",
    author: "Carlos Fernandes",
    authorImage: "/images/hero-goa.jpg",
    content: `
      <p>While Goa's beaches are legendary, the state offers so much more. Portuguese churches, spice plantations, wildlife sanctuaries, and waterfalls await those who venture beyond the sand.</p>
      
      <h2>Portuguese Heritage</h2>
      <p>Goa's 450 years of Portuguese rule left an indelible mark. Old Goa's churches, including the Basilica of Bom Jesus (housing St. Francis Xavier's remains), are UNESCO World Heritage sites. The Latin Quarter of Fontainhas in Panjim features colorful colonial houses and art galleries.</p>
      
      <h2>Spice Plantations</h2>
      <p>Visit a working spice plantation to see how cardamom, vanilla, cinnamon, and black pepper grow. Guided tours include demonstrations, traditional Goan lunch, and spice shopping. Popular plantations include Sahakari, Tropical, and Pascoal.</p>
      
      <h2>Dudhsagar Falls</h2>
      <p>One of India's tallest waterfalls, Dudhsagar ("Sea of Milk") plunges 310 meters through lush forest. Best visited during monsoon or immediately after (July-December), reach it by jeep safari through Bhagwan Mahavir Wildlife Sanctuary.</p>
      
      <h2>Wildlife Sanctuaries</h2>
      <p>Goa has six wildlife sanctuaries covering 20% of the state:</p>
      <ul>
        <li><strong>Bhagwan Mahavir:</strong> Goa's largest, home to leopards and giant squirrels</li>
        <li><strong>Cotigao:</strong> Ancient forest with 300-year-old trees</li>
        <li><strong>Dr. Salim Ali Bird Sanctuary:</strong> Mangrove habitat for migratory birds</li>
      </ul>
      
      <h2>Goan Cuisine</h2>
      <p>Beyond beach shacks, explore authentic Goan food:</p>
      <ul>
        <li><strong>Xacuti:</strong> Complex curry with roasted spices and coconut</li>
        <li><strong>Bebinca:</strong> Traditional layered dessert</li>
        <li><strong>Feni:</strong> Local spirit from cashew or coconut</li>
        <li><strong>Poi:</strong> Goan bread rolls, perfect with curry</li>
      </ul>
      
      <h2>Hidden Beaches</h2>
      <p>Escape the crowds at these lesser-known beaches:</p>
      <ul>
        <li><strong>Butterfly Beach:</strong> Accessible only by boat, pristine and secluded</li>
        <li><strong>Kakolem Beach:</strong> Hidden gem requiring a short trek</li>
        <li><strong>Galgibaga:</strong> Olive Ridley turtle nesting site</li>
      </ul>
      
      <h2>Yoga and Wellness</h2>
      <p>Goa has evolved into a wellness destination. Ashrams and retreat centers offer yoga, Ayurveda, and meditation. The annual International Yoga Festival in January attracts practitioners worldwide.</p>
    `,
    tags: ["goa", "portuguese heritage", "waterfalls", "wildlife", "hidden gems"]
  },
  {
    id: 8,
    title: "Winter Wonderland: Best December Destinations",
    excerpt: "From snow-capped mountains to warm beaches, find your perfect winter escape in India.",
    image: "/images/hero-manali.jpg",
    date: "2024-12-01",
    readTime: "8 min read",
    category: "Seasonal Travel",
    author: "Deepak Kumar",
    authorImage: "/images/hero-manali.jpg",
    content: `
      <p>December in India offers incredible diversity – from fresh snowfall in the Himalayas to pleasant sunshine along the coasts. Here are the best destinations for your winter getaway.</p>
      
      <h2>For Snow Lovers</h2>
      
      <h3>Manali, Himachal Pradesh</h3>
      <p>December transforms Manali into a winter wonderland. Fresh snow covers the mountains, Solang Valley opens for skiing, and the town takes on a magical atmosphere. Pack warm layers and enjoy hot chocolate by a bonfire.</p>
      
      <h3>Gulmarg, Kashmir</h3>
      <p>India's premier ski destination comes alive in December. The world's highest gondola ride offers stunning views, and professional ski instructors are available. Even non-skiers enjoy the pristine snow landscapes.</p>
      
      <h3>Auli, Uttarakhand</h3>
      <p>Less crowded than other hill stations, Auli offers excellent skiing and panoramic Himalayan views. The ski resort has good facilities for beginners to advanced skiers.</p>
      
      <h2>For Beach Escapes</h2>
      
      <h3>Goa</h3>
      <p>Peak season in Goa means perfect weather, vibrant nightlife, and the famous Christmas and New Year celebrations. Book accommodation well in advance as prices peak during this period.</p>
      
      <h3>Andaman Islands</h3>
      <p>The perfect season for snorkeling and diving in crystal-clear waters. Visit Havelock Island for pristine beaches and Ross Island for history. December offers calm seas and excellent underwater visibility.</p>
      
      <h2>For Cultural Experiences</h2>
      
      <h3>Rajasthan</h3>
      <p>December's pleasant weather makes Rajasthan ideal for fort-hopping and desert safaris. The Pushkar Camel Fair (November) may have ended, but smaller cultural festivals continue.</p>
      
      <h3>Kerala</h3>
      <p>Comfortable temperatures make backwater cruises and Ayurvedic treatments especially enjoyable. The Cochin Carnival (December 31) features parades, music, and fireworks.</p>
      
      <h2>December Events</h2>
      <ul>
        <li><strong>Hornbill Festival, Nagaland:</strong> Dec 1-10 – Tribal culture showcase</li>
        <li><strong>Christmas in Goa:</strong> Unique Indo-Portuguese celebrations</li>
        <li><strong>International Film Festival, Goa:</strong> Nov-Dec – Cinema lovers' delight</li>
        <li><strong>Rann Utsav, Gujarat:</strong> Nov-Feb – White desert cultural festival</li>
      </ul>
    `,
    tags: ["winter travel", "december", "snow destinations", "seasonal travel"]
  }
];

// Related articles helper
const getRelatedArticles = (currentId: number, category: string) => {
  return allArticles
    .filter(article => article.id !== currentId && article.category === category)
    .slice(0, 3);
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = allArticles.find(a => a.id === parseInt(id || "1"));
  
  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article.id, article.category);
  const currentIndex = allArticles.findIndex(a => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} | TravelWorld Blog</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <Badge className="mb-4 bg-primary/80 text-primary-foreground">
            {article.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Share Bar */}
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg mb-8">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Heart className="w-4 h-4" /> 245
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <MessageCircle className="w-4 h-4" /> 32
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground mr-2">Share:</span>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="capitalize">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Card */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={article.authorImage}
                      alt={article.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{article.author}</h3>
                      <p className="text-sm text-muted-foreground mb-2">Travel Writer & Photographer</p>
                      <p className="text-sm text-muted-foreground">
                        Passionate about exploring India's hidden gems and sharing authentic travel experiences with fellow adventurers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {prevArticle && (
                  <Link to={`/blog/${prevArticle.id}`} className="group">
                    <Card className="h-full hover:shadow-lg transition-all">
                      <CardContent className="p-4 flex items-center gap-3">
                        <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <div>
                          <p className="text-xs text-muted-foreground">Previous Article</p>
                          <p className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
                            {prevArticle.title}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )}
                {nextArticle && (
                  <Link to={`/blog/${nextArticle.id}`} className="group md:ml-auto">
                    <Card className="h-full hover:shadow-lg transition-all">
                      <CardContent className="p-4 flex items-center gap-3 justify-end text-right">
                        <div>
                          <p className="text-xs text-muted-foreground">Next Article</p>
                          <p className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
                            {nextArticle.title}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Table of Contents
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                      Introduction
                    </a>
                    <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                      Main Points
                    </a>
                    <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                      Tips & Recommendations
                    </a>
                    <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                      Conclusion
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((related) => (
                      <Link 
                        key={related.id} 
                        to={`/blog/${related.id}`}
                        className="flex gap-3 group"
                      >
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-20 h-16 rounded object-cover flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                            {related.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {related.readTime}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {["Travel Tips", "Destination Guides", "Seasonal Travel", "Best Time to Visit", "News & Updates"].map((cat) => (
                      <Link 
                        key={cat}
                        to={`/blog?category=${encodeURIComponent(cat)}`}
                        className="flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span>{cat}</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Subscribe to Newsletter</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Get travel tips and destination guides delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder:text-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <Button variant="secondary" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
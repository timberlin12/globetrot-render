import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, Calendar, Clock, ArrowRight, TrendingUp, Mail, 
  Compass, MapPin, Sun, BookOpen, Newspaper, Lightbulb,
  Mountain, Palmtree, Snowflake, Flower2, ThermometerSun
} from "lucide-react";

// Categories with icons
const categories = [
  { name: "All", icon: BookOpen },
  { name: "Travel Tips", icon: Lightbulb },
  { name: "Destination Guides", icon: Compass },
  { name: "Seasonal Travel", icon: Sun },
  { name: "Best Time to Visit", icon: Calendar },
  { name: "News & Updates", icon: Newspaper }
];

// Travel Tips Articles
const travelTipsArticles = [
  {
    id: 1,
    title: "10 Essential Packing Tips for Indian Travel",
    excerpt: "Master the art of packing light while staying prepared for India's diverse climates and cultural expectations.",
    image: "/images/hero-manali.jpg",
    date: "2024-12-05",
    readTime: "6 min read",
    category: "Travel Tips"
  },
  {
    id: 2,
    title: "Budget Travel Secrets: Explore India Under ₹1000/Day",
    excerpt: "Discover insider tips to experience incredible India without breaking the bank.",
    image: "/images/hero-rajasthan.jpg",
    date: "2024-12-03",
    readTime: "8 min read",
    category: "Travel Tips"
  },
  {
    id: 3,
    title: "Solo Travel Safety Guide for Women in India",
    excerpt: "Comprehensive safety tips and must-know advice for women traveling alone in India.",
    image: "/images/hero-kerala.jpg",
    date: "2024-12-01",
    readTime: "10 min read",
    category: "Travel Tips"
  }
];

// Destination Guides
const destinationGuides = [
  {
    id: 4,
    title: "Complete Kashmir Travel Guide 2024",
    excerpt: "Everything you need to know about visiting paradise on Earth - from Srinagar to Gulmarg.",
    image: "/images/hero-kashmir.jpg",
    date: "2024-11-28",
    readTime: "15 min read",
    category: "Destination Guides",
    featured: true
  },
  {
    id: 5,
    title: "Kerala Backwaters: A Complete Guide",
    excerpt: "Navigate the serene backwaters with our comprehensive guide to houseboats, villages, and hidden gems.",
    image: "/images/hero-kerala.jpg",
    date: "2024-11-25",
    readTime: "12 min read",
    category: "Destination Guides"
  },
  {
    id: 6,
    title: "Rajasthan Heritage Tour: Palace to Palace",
    excerpt: "Explore the royal heritage of Rajasthan from Jaipur to Udaipur with detailed itineraries.",
    image: "/images/hero-rajasthan.jpg",
    date: "2024-11-22",
    readTime: "14 min read",
    category: "Destination Guides"
  },
  {
    id: 7,
    title: "Goa Beyond Beaches: Hidden Experiences",
    excerpt: "Discover the Portuguese heritage, spice plantations, and waterfalls that make Goa special.",
    image: "/images/hero-goa.jpg",
    date: "2024-11-20",
    readTime: "10 min read",
    category: "Destination Guides"
  }
];

// Seasonal Travel Recommendations
const seasonalArticles = [
  {
    id: 8,
    title: "Winter Wonderland: Best December Destinations",
    excerpt: "From snow-capped mountains to warm beaches, find your perfect winter escape in India.",
    image: "/images/hero-manali.jpg",
    date: "2024-12-01",
    readTime: "8 min read",
    category: "Seasonal Travel",
    season: "Winter",
    icon: Snowflake
  },
  {
    id: 9,
    title: "Monsoon Magic: Rainy Season Travel Guide",
    excerpt: "Experience India's dramatic monsoon season with waterfall treks and lush landscapes.",
    image: "/images/hero-kerala.jpg",
    date: "2024-06-15",
    readTime: "9 min read",
    category: "Seasonal Travel",
    season: "Monsoon",
    icon: Mountain
  },
  {
    id: 10,
    title: "Summer Escapes: Beat the Heat Destinations",
    excerpt: "Cool hill stations and coastal retreats to escape India's scorching summer months.",
    image: "/images/hero-kashmir.jpg",
    date: "2024-04-10",
    readTime: "7 min read",
    category: "Seasonal Travel",
    season: "Summer",
    icon: ThermometerSun
  },
  {
    id: 11,
    title: "Spring Blooms: Flower Festival Destinations",
    excerpt: "Witness nature's colorful display from Valley of Flowers to cherry blossoms in Shillong.",
    image: "/images/about-hero.jpg",
    date: "2024-03-01",
    readTime: "6 min read",
    category: "Seasonal Travel",
    season: "Spring",
    icon: Flower2
  }
];

// Best Time to Visit Articles
const bestTimeArticles = [
  {
    id: 12,
    title: "Best Time to Visit Goa: Month-by-Month Guide",
    excerpt: "Plan your Goa trip perfectly with insights on weather, crowds, prices, and events throughout the year.",
    image: "/images/hero-goa.jpg",
    date: "2024-11-15",
    readTime: "10 min read",
    category: "Best Time to Visit"
  },
  {
    id: 13,
    title: "When to Visit Kashmir: Seasonal Comparison",
    excerpt: "Compare spring tulips, summer meadows, autumn colors, and winter snow for your ideal Kashmir trip.",
    image: "/images/hero-kashmir.jpg",
    date: "2024-11-10",
    readTime: "12 min read",
    category: "Best Time to Visit"
  },
  {
    id: 14,
    title: "Ladakh Travel Calendar: Best Months Revealed",
    excerpt: "Navigate Ladakh's extreme climate with our detailed month-by-month travel planning guide.",
    image: "/images/hero-manali.jpg",
    date: "2024-11-05",
    readTime: "11 min read",
    category: "Best Time to Visit"
  }
];

// News and Updates
const newsArticles = [
  {
    id: 15,
    title: "New Direct Flights to Leh Announced for 2025",
    excerpt: "Major airlines expand connectivity to Ladakh with new routes from major Indian cities.",
    image: "/images/hero-kashmir.jpg",
    date: "2024-12-06",
    readTime: "3 min read",
    category: "News & Updates",
    isNew: true
  },
  {
    id: 16,
    title: "Goa Tourism Launches Eco-Friendly Initiative",
    excerpt: "New sustainability program aims to make Goa a model destination for responsible tourism.",
    image: "/images/hero-goa.jpg",
    date: "2024-12-04",
    readTime: "4 min read",
    category: "News & Updates",
    isNew: true
  },
  {
    id: 17,
    title: "Kerala Wins Best Wellness Destination Award",
    excerpt: "God's Own Country recognized globally for its Ayurvedic tourism and wellness offerings.",
    image: "/images/hero-kerala.jpg",
    date: "2024-12-02",
    readTime: "3 min read",
    category: "News & Updates"
  },
  {
    id: 18,
    title: "Rajasthan Palace Hotels Introduce Heritage Walks",
    excerpt: "Experience royal history with new guided heritage experiences at converted palace hotels.",
    image: "/images/hero-rajasthan.jpg",
    date: "2024-11-30",
    readTime: "5 min read",
    category: "News & Updates"
  }
];

// Combine all articles
const allArticles = [
  ...travelTipsArticles,
  ...destinationGuides,
  ...seasonalArticles,
  ...bestTimeArticles,
  ...newsArticles
];

const popularPosts = [
  { id: 1, title: "Top 10 Budget Travel Destinations in India", views: "12.5K" },
  { id: 2, title: "Essential Packing Tips for Mountain Treks", views: "10.2K" },
  { id: 3, title: "How to Travel Solo in India Safely", views: "9.8K" },
  { id: 4, title: "Best Photography Spots in the Himalayas", views: "8.5K" }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = destinationGuides.find(article => article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Travel Blog & Guides | TravelWorld - Expert Tips & Destination Insights</title>
        <meta name="description" content="Explore comprehensive travel guides, expert tips, seasonal recommendations, and the best time to visit destinations across India. Plan your perfect trip with TravelWorld." />
        <meta name="keywords" content="travel blog, destination guides, travel tips, best time to visit India, seasonal travel, Goa travel guide, Kashmir travel guide, Kerala backwaters" />
        <meta property="og:title" content="Travel Blog & Guides | TravelWorld" />
        <meta property="og:description" content="Expert travel tips, destination guides, and seasonal recommendations for India." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://travelworld.com/blog" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-kashmir.jpg')" }}
        />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Newspaper className="w-3 h-3 mr-1" /> Travel Blog & Guides
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Explore. Discover. Travel.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Expert travel tips, destination guides, and insider recommendations for your next adventure
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles, destinations, tips..."
              className="pl-12 py-6 bg-background text-foreground text-lg rounded-full shadow-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-white/80">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">{allArticles.length}+ Articles</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">50+ Destinations</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Compass className="w-4 h-4" />
              <span className="text-sm">Expert Guides</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-border bg-card sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.name)}
                  className="rounded-full gap-2"
                  size="sm"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          
          {/* Show All Categories View */}
          {selectedCategory === "All" && !searchQuery && (
            <>
              {/* Featured Article */}
              {featuredArticle && (
                <div className="mb-16">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold">Featured Guide</h2>
                  </div>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-96 overflow-hidden">
                        <img
                          src={featuredArticle.image}
                          alt={featuredArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                          Featured
                        </Badge>
                      </div>
                      <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                        <Badge className="w-fit mb-4" variant="secondary">
                          {featuredArticle.category}
                        </Badge>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {featuredArticle.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-lg">
                          {featuredArticle.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(featuredArticle.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {featuredArticle.readTime}
                          </span>
                        </div>
                        <Link to={`/blog/${featuredArticle.id}`}>
                          <Button className="w-fit" size="lg">
                            Read Full Guide <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              )}

              {/* Travel Tips Section */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold">Travel Tips</h2>
                  </div>
                  <Button variant="ghost" onClick={() => setSelectedCategory("Travel Tips")}>
                    View All <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {travelTipsArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>

              {/* Destination Guides Section */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold">Destination Guides</h2>
                  </div>
                  <Button variant="ghost" onClick={() => setSelectedCategory("Destination Guides")}>
                    View All <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {destinationGuides.filter(a => !a.featured).map((article) => (
                    <ArticleCard key={article.id} article={article} compact />
                  ))}
                </div>
              </div>

              {/* Seasonal Travel Section */}
              <div className="mb-16 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold">Seasonal Travel Recommendations</h2>
                  </div>
                  <Button variant="ghost" onClick={() => setSelectedCategory("Seasonal Travel")}>
                    View All <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {seasonalArticles.map((article) => (
                    <SeasonalCard key={article.id} article={article} />
                  ))}
                </div>
              </div>

              {/* Best Time to Visit Section */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold">Best Time to Visit</h2>
                  </div>
                  <Button variant="ghost" onClick={() => setSelectedCategory("Best Time to Visit")}>
                    View All <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {bestTimeArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>

              {/* News & Updates Section */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Newspaper className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold">News & Updates</h2>
                  </div>
                  <Button variant="ghost" onClick={() => setSelectedCategory("News & Updates")}>
                    View All <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {newsArticles.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Filtered View */}
          {(selectedCategory !== "All" || searchQuery) && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Articles Grid */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">
                    {searchQuery ? `Search Results for "${searchQuery}"` : selectedCategory}
                  </h2>
                  <Badge variant="secondary">{filteredArticles.length} Articles</Badge>
                </div>

                {filteredArticles.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredArticles.map((article) => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-muted/30 rounded-lg">
                    <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground text-lg">
                      No articles found matching your criteria.
                    </p>
                    <Button variant="ghost" className="mt-4" onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Popular Posts */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold">Popular Posts</h3>
                    </div>
                    <div className="space-y-4">
                      {popularPosts.map((post) => (
                        <div key={post.id} className="pb-4 border-b border-border last:border-0 last:pb-0">
                          <h4 className="font-semibold mb-2 hover:text-primary transition-colors cursor-pointer line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{post.views} views</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Mail className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold">Newsletter</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Get the latest travel tips and guides delivered to your inbox weekly.
                    </p>
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        className="bg-background"
                      />
                      <Button className="w-full">Subscribe Now</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Categories Widget */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.filter(cat => cat.name !== "All").map((category) => {
                        const IconComponent = category.icon;
                        const count = allArticles.filter(a => a.category === category.name).length;
                        return (
                          <button
                            key={category.name}
                            onClick={() => setSelectedCategory(category.name)}
                            className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-accent transition-colors text-left"
                          >
                            <span className="flex items-center gap-2">
                              <IconComponent className="w-4 h-4 text-primary" />
                              <span className="font-medium">{category.name}</span>
                            </span>
                            <Badge variant="secondary">{count}</Badge>
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Newsletter CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-white">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Travel Insights</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive weekly travel tips, destination guides, and exclusive offers directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Article Card Component
interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  isNew?: boolean;
  season?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const ArticleCard = ({ article, compact = false }: { article: Article; compact?: boolean }) => (
  <Link to={`/blog/${article.id}`} className="block h-full">
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
      <div className={`relative ${compact ? 'h-36' : 'h-48'} overflow-hidden`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {article.isNew && (
          <Badge className="absolute top-3 left-3 bg-red-500 text-white">New</Badge>
        )}
      </div>
      <CardContent className={compact ? 'p-4' : 'p-6'}>
        <Badge className="mb-2" variant="secondary">{article.category}</Badge>
        <h3 className={`font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors ${compact ? 'text-base' : 'text-lg'}`}>
          {article.title}
        </h3>
        {!compact && (
          <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
            {article.excerpt}
          </p>
        )}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>
      </CardContent>
    </Card>
  </Link>
);

// Seasonal Card Component
const SeasonalCard = ({ article }: { article: Article }) => {
  const IconComponent = article.icon || Sun;
  return (
    <Link to={`/blog/${article.id}`} className="block h-full">
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full bg-card">
        <div className="relative h-32 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
              <IconComponent className="w-4 h-4 text-primary" />
            </div>
            <span className="text-white font-semibold text-sm">{article.season}</span>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors text-sm">
            {article.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

// News Card Component
const NewsCard = ({ article }: { article: Article }) => (
  <Link to={`/blog/${article.id}`} className="block h-full">
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
      <div className="relative h-32 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {article.isNew && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">New</Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <Newspaper className="w-3 h-3" />
          <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors text-sm">
          {article.title}
        </h3>
        <p className="text-muted-foreground text-xs line-clamp-2">{article.excerpt}</p>
      </CardContent>
    </Card>
  </Link>
);

export default Blog;
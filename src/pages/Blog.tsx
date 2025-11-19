import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, ArrowRight, TrendingUp, Mail } from "lucide-react";

const categories = ["All", "Destinations", "Travel Tips", "Culture", "Adventure", "Food & Cuisine"];

const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Kashmir You Must Visit",
    excerpt: "Discover the lesser-known paradises in Kashmir that offer breathtaking views and serene experiences away from tourist crowds.",
    category: "Destinations",
    image: "/images/hero-kashmir.jpg",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 2,
    title: "Ultimate Guide to Kerala Backwaters",
    excerpt: "Experience the tranquil beauty of Kerala's backwaters with our comprehensive guide to houseboat tours and local attractions.",
    category: "Travel Tips",
    image: "/images/hero-kerala.jpg",
    author: "Raj Patel",
    date: "2024-01-12",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Best Time to Visit Goa: A Seasonal Guide",
    excerpt: "Plan your perfect Goa vacation with insights on weather, festivals, and crowd patterns throughout the year.",
    category: "Travel Tips",
    image: "/images/hero-goa.jpg",
    author: "Maria Costa",
    date: "2024-01-10",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "Adventure Sports in Manali: Thrill Seeker's Paradise",
    excerpt: "From paragliding to river rafting, explore the adrenaline-pumping activities that make Manali an adventure hub.",
    category: "Adventure",
    image: "/images/hero-manali.jpg",
    author: "Mike Anderson",
    date: "2024-01-08",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Rajasthan's Royal Cuisine: A Food Lover's Journey",
    excerpt: "Embark on a culinary adventure through Rajasthan's palaces and streets, discovering authentic flavors and traditional recipes.",
    category: "Food & Cuisine",
    image: "/images/hero-rajasthan.jpg",
    author: "Priya Sharma",
    date: "2024-01-05",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "Cultural Festivals of India: A Complete Calendar",
    excerpt: "Plan your travels around India's vibrant festivals and experience the rich cultural heritage firsthand.",
    category: "Culture",
    image: "/images/about-hero.jpg",
    author: "David Lee",
    date: "2024-01-03",
    readTime: "10 min read"
  }
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

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-foreground/80 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-kashmir.jpg')" }}
          />
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Travel Blog & Guides
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Discover inspiring stories, expert tips, and comprehensive guides for your next adventure
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles, destinations, tips..."
                className="pl-12 py-6 bg-background text-foreground"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Blog Posts */}
              <div className="lg:col-span-2">
                {/* Featured Post */}
                {featuredPost && selectedCategory === "All" && !searchQuery && (
                  <Card className="mb-12 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-auto">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                          Featured
                        </Badge>
                      </div>
                      <CardContent className="p-6 flex flex-col justify-center">
                        <Badge className="w-fit mb-3" variant="secondary">
                          {featuredPost.category}
                        </Badge>
                        <h2 className="text-2xl font-bold mb-3 line-clamp-2">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(featuredPost.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readTime}
                          </span>
                        </div>
                        <Button className="w-fit">
                          Read Article <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                )}

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <Badge className="mb-3" variant="secondary">
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <Button variant="ghost" className="p-0 h-auto font-semibold group/btn">
                          Read More 
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      No articles found matching your criteria. Try adjusting your filters.
                    </p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
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
                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Mail className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold">Newsletter</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Get the latest travel tips and destination guides delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        className="bg-background"
                      />
                      <Button className="w-full">Subscribe</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Categories Widget */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.filter(cat => cat !== "All").map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className="flex items-center justify-between w-full px-4 py-2 rounded-lg hover:bg-accent transition-colors text-left"
                        >
                          <span className="font-medium">{category}</span>
                          <Badge variant="secondary">
                            {blogPosts.filter(post => post.category === category).length}
                          </Badge>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
    </div>
  );
};

export default Blog;

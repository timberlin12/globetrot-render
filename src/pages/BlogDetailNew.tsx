import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { 
  Calendar, Clock, ArrowLeft, ArrowRight, User, Share2, 
  Facebook, Twitter, Linkedin, BookOpen, Tag, ChevronRight,
  Heart, MessageCircle, Bookmark, Eye, Copy, Check
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
    views: "12.5K",
    content: `
      <p class="bdnew-lead">Traveling to India is an incredible adventure, but packing for such a diverse country can be challenging. From the snowy peaks of the Himalayas to the tropical beaches of Goa, India's climate varies dramatically. Here's your comprehensive guide to packing smart.</p>
      
      <h2 id="layer-clothing">1. Layer Your Clothing</h2>
      <p>India's temperatures can swing dramatically between day and night, especially in northern regions. Pack lightweight layers that you can add or remove as needed. A light jacket or cardigan is essential even during summer for air-conditioned spaces and cool evenings.</p>
      
      <h2 id="breathable-fabrics">2. Choose Breathable Fabrics</h2>
      <p>Cotton and linen are your best friends in India's humid climate. These natural fabrics allow your skin to breathe and dry quickly after washing. Avoid synthetic materials that trap heat and moisture.</p>
      
      <h2 id="modest-clothing">3. Modest Clothing is Key</h2>
      <p>When visiting temples, religious sites, or rural areas, modest clothing is respectful and often required. Pack loose-fitting pants, long skirts, and tops that cover your shoulders. A lightweight scarf is versatile – use it as a cover-up, sun protection, or to filter dust.</p>
      
      <h2 id="walking-shoes">4. Comfortable Walking Shoes</h2>
      <p>You'll be doing a lot of walking on various terrains. Pack comfortable, broken-in walking shoes that you can slip on and off easily for temple visits. Sandals with good arch support are great for casual days.</p>
      
      <h2 id="day-bag">5. Pack a Day Bag</h2>
      <p>A small backpack or crossbody bag is essential for daily excursions. Choose one with secure closures and keep it in front of you in crowded areas.</p>
      
      <h2 id="toiletries">6. Essential Toiletries</h2>
      <p>While most toiletries are available in Indian cities, pack your preferred brands of sunscreen (SPF 50+), insect repellent with DEET, hand sanitizer, and any prescription medications with copies of prescriptions.</p>
      
      <h2 id="electronics">7. Electronics and Adapters</h2>
      <p>India uses Type C and Type D plugs (230V). Bring a universal adapter and a portable charger for your devices. Consider a waterproof phone case for monsoon season or water activities.</p>
      
      <h2 id="pro-tips">Pro Tips</h2>
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
    views: "10.2K",
    content: `<p class="bdnew-lead">India is one of the most budget-friendly destinations in the world. With careful planning, you can experience the country's rich culture, stunning landscapes, and delicious cuisine for under ₹1000 per day.</p><h2>Accommodation: ₹200-400/night</h2><p>Hostels and guesthouses offer clean, safe accommodation at incredible prices.</p>`,
    tags: ["budget travel", "backpacking", "travel tips"]
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
    views: "9.8K",
    content: `<p class="bdnew-lead">India welcomes millions of solo female travelers every year. This guide covers everything you need to know to travel safely and confidently.</p>`,
    tags: ["solo travel", "women travel", "safety tips"]
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
    views: "15.3K",
    content: `<p class="bdnew-lead">Kashmir, often called "Paradise on Earth," is India's crown jewel. This comprehensive guide covers everything you need for an unforgettable Kashmir experience.</p>`,
    tags: ["kashmir", "srinagar", "gulmarg", "destination guide"]
  },
  {
    id: 5,
    title: "Kerala Backwaters: A Complete Guide",
    excerpt: "Navigate the serene backwaters with our comprehensive guide to houseboats and hidden gems.",
    image: "/images/hero-kerala.jpg",
    date: "2024-11-25",
    readTime: "12 min read",
    category: "Destination Guides",
    author: "Maya Nair",
    authorImage: "/images/hero-kerala.jpg",
    views: "8.5K",
    content: `<p class="bdnew-lead">Kerala's backwaters are a network of interconnected canals, rivers, lakes stretching over 900 kilometers.</p>`,
    tags: ["kerala", "backwaters", "houseboat"]
  }
];

const tableOfContents = [
  { id: "layer-clothing", title: "1. Layer Your Clothing" },
  { id: "breathable-fabrics", title: "2. Choose Breathable Fabrics" },
  { id: "modest-clothing", title: "3. Modest Clothing is Key" },
  { id: "walking-shoes", title: "4. Comfortable Walking Shoes" },
  { id: "day-bag", title: "5. Pack a Day Bag" },
  { id: "toiletries", title: "6. Essential Toiletries" },
  { id: "electronics", title: "7. Electronics and Adapters" },
  { id: "pro-tips", title: "Pro Tips" }
];

const BlogDetailNew = () => {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const articleId = parseInt(id || "1");
  const article = allArticles.find(a => a.id === articleId) || allArticles[0];
  
  const currentIndex = allArticles.findIndex(a => a.id === articleId);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;
  
  const relatedArticles = allArticles
    .filter(a => a.id !== articleId && a.category === article.category)
    .slice(0, 3);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} | TravelWorld Blog</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />

      {/* Hero Section - Improved */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full pb-12 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              
              <Badge className="mb-4 bg-primary/90 text-primary-foreground border-0 px-4 py-1.5">
                {article.category}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <img 
                    src={article.authorImage} 
                    alt={article.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <p className="text-white font-medium">{article.author}</p>
                    <p className="text-white/60 text-sm">Travel Writer</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    {article.views} views
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              {/* Floating Share Bar */}
              <div className="flex items-center justify-between p-4 bg-card rounded-xl border border-border mb-8 sticky top-20 z-20 backdrop-blur-sm bg-card/95">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                    <Heart className="w-4 h-4" />
                    <span className="hidden sm:inline">Like</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">Comment</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                    <Bookmark className="w-4 h-4" />
                    <span className="hidden sm:inline">Save</span>
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground hidden sm:inline">Share:</span>
                  <Button variant="outline" size="icon" className="w-8 h-8 rounded-full">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="w-8 h-8 rounded-full">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="w-8 h-8 rounded-full">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="w-8 h-8 rounded-full" onClick={copyLink}>
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="bdnew-prose"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-border">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag className="w-5 h-5 text-muted-foreground" />
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="capitalize px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Card */}
              <Card className="mt-10 overflow-hidden border-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <img 
                      src={article.authorImage} 
                      alt={article.author}
                      className="w-20 h-20 rounded-2xl object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Written by</p>
                      <h3 className="text-xl font-bold mb-2">{article.author}</h3>
                      <p className="text-muted-foreground mb-4">
                        Passionate travel writer and photographer with 10+ years of experience exploring India's hidden gems. Sharing authentic travel experiences with fellow adventurers.
                      </p>
                      <Button variant="outline" size="sm">View All Articles</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="grid md:grid-cols-2 gap-4 mt-10">
                {prevArticle && (
                  <Link to={`/blog/${prevArticle.id}`} className="group">
                    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30">
                      <CardContent className="p-5 flex items-center gap-4">
                        <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground mb-1">Previous Article</p>
                          <p className="font-medium line-clamp-2 group-hover:text-primary transition-colors">{prevArticle.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )}
                {nextArticle && (
                  <Link to={`/blog/${nextArticle.id}`} className="group md:ml-auto">
                    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30">
                      <CardContent className="p-5 flex items-center gap-4 text-right">
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-muted-foreground mb-1">Next Article</p>
                          <p className="font-medium line-clamp-2 group-hover:text-primary transition-colors">{nextArticle.title}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Table of Contents */}
              <Card className="sticky top-24">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Table of Contents</h3>
                  </div>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 border-l-2 border-transparent hover:border-primary pl-3"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardContent className="p-5">
                  <h3 className="font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((related) => (
                      <Link 
                        key={related.id} 
                        to={`/blog/${related.id}`}
                        className="group flex gap-3"
                      >
                        <img 
                          src={related.image} 
                          alt={related.title}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                            {related.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{related.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground overflow-hidden">
                <CardContent className="p-5">
                  <h3 className="font-semibold mb-2">Get Travel Tips</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Subscribe for exclusive guides delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                    <Button className="w-full bg-white text-primary hover:bg-white/90">
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .bdnew-prose {
          font-size: 1.125rem;
          line-height: 1.8;
          color: hsl(var(--foreground));
        }
        .bdnew-prose .bdnew-lead {
          font-size: 1.25rem;
          color: hsl(var(--muted-foreground));
          line-height: 1.7;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid hsl(var(--border));
        }
        .bdnew-prose h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
          scroll-margin-top: 100px;
        }
        .bdnew-prose h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .bdnew-prose p {
          margin-bottom: 1.25rem;
          color: hsl(var(--muted-foreground));
        }
        .bdnew-prose ul, .bdnew-prose ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          color: hsl(var(--muted-foreground));
        }
        .bdnew-prose li {
          margin-bottom: 0.5rem;
          padding-left: 0.5rem;
        }
        .bdnew-prose strong {
          color: hsl(var(--foreground));
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default BlogDetailNew;

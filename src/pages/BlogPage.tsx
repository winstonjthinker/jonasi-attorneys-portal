// Blog page
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import { MainLayout } from '@/components/layout';
import { SectionWrapper, SectionHeader, ImagePlaceholder } from '@/components/common';
import { NewsletterSection } from '@/components/sections';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BlogPost } from '@/types';

// Placeholder blog posts data (will be fetched from API)
const placeholderPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'understanding-mining-law-zimbabwe',
    title: 'Understanding Mining Law in Zimbabwe: A Comprehensive Guide',
    excerpt: 'An in-depth look at the legal framework governing mining operations in Zimbabwe, including licensing requirements and compliance obligations.',
    content: '',
    image: '/media/blog/mining-law-guide.jpg',
    author: {
      id: 1,
      slug: 'tawanda-jonasi',
      name: 'Tawanda Porteous Jonasi',
      title: 'Managing Partner',
      role: 'Managing Partner',
      email: 'counseljoe@jonasiattorneys.co.zw',
      image: '/media/team/tawanda-jonasi.jpg',
      bio: '',
      areasOfPractice: [],
    },
    category: { id: 1, slug: 'mining-law', name: 'Mining Law', postCount: 5 },
    tags: ['Mining', 'Legal Framework', 'Compliance'],
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    readTime: 8,
    featured: true,
  },
  {
    id: 2,
    slug: 'corporate-governance-best-practices',
    title: 'Corporate Governance Best Practices for Zimbabwean Companies',
    excerpt: 'Key principles and practical recommendations for establishing effective corporate governance frameworks in your organization.',
    content: '',
    image: '/media/blog/corporate-governance.jpg',
    author: {
      id: 2,
      slug: 'plaxcedes-marimo',
      name: 'Plaxcedes Chiedza Marimo',
      title: 'Senior Associate',
      role: 'Senior Associate',
      email: 'pmarimo@jonasiattorneys.co.zw',
      image: '/media/team/plaxcedes-marimo.jpg',
      bio: '',
      areasOfPractice: [],
    },
    category: { id: 2, slug: 'corporate-law', name: 'Corporate Law', postCount: 8 },
    tags: ['Corporate Governance', 'Compliance', 'Business'],
    publishedAt: '2024-01-10',
    updatedAt: '2024-01-10',
    readTime: 6,
    featured: true,
  },
  {
    id: 3,
    slug: 'property-transactions-guide',
    title: 'Navigating Property Transactions in Zimbabwe',
    excerpt: 'Essential legal considerations when buying, selling, or transferring property in Zimbabwe, including due diligence and registration.',
    content: '',
    image: '/media/blog/property-transactions.jpg',
    author: {
      id: 1,
      slug: 'tawanda-jonasi',
      name: 'Tawanda Porteous Jonasi',
      title: 'Managing Partner',
      role: 'Managing Partner',
      email: 'counseljoe@jonasiattorneys.co.zw',
      image: '/media/team/tawanda-jonasi.jpg',
      bio: '',
      areasOfPractice: [],
    },
    category: { id: 3, slug: 'conveyancing', name: 'Conveyancing', postCount: 4 },
    tags: ['Property', 'Conveyancing', 'Real Estate'],
    publishedAt: '2024-01-05',
    updatedAt: '2024-01-05',
    readTime: 7,
    featured: false,
  },
  {
    id: 4,
    slug: 'intellectual-property-protection',
    title: 'Protecting Your Intellectual Property in Zimbabwe',
    excerpt: 'Learn how to safeguard your trademarks, patents, and copyrights under Zimbabwean law and international treaties.',
    content: '',
    image: '/media/blog/intellectual-property.jpg',
    author: {
      id: 2,
      slug: 'plaxcedes-marimo',
      name: 'Plaxcedes Chiedza Marimo',
      title: 'Senior Associate',
      role: 'Senior Associate',
      email: 'pmarimo@jonasiattorneys.co.zw',
      image: '/media/team/plaxcedes-marimo.jpg',
      bio: '',
      areasOfPractice: [],
    },
    category: { id: 4, slug: 'intellectual-property', name: 'Intellectual Property', postCount: 3 },
    tags: ['IP', 'Trademarks', 'Patents'],
    publishedAt: '2024-01-01',
    updatedAt: '2024-01-01',
    readTime: 5,
    featured: false,
  },
];

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(placeholderPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Map(posts.map((post) => [post.category.slug, post.category])).values()
  );

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category.slug === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <MainLayout>
      {/* Page Header */}
      <section className="relative py-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Blog & Insights
            </span>
            <h1 className="heading-display text-primary-foreground mb-4">
              Legal Insights & News
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Stay informed with the latest legal news, insights, and updates from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <SectionWrapper className="!py-8 border-b border-border">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? 'gold' : 'subtle'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category.slug}
                variant={selectedCategory === category.slug ? 'gold' : 'subtle'}
                size="sm"
                onClick={() => setSelectedCategory(category.slug)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <SectionWrapper>
          <SectionHeader
            subtitle="Featured"
            title="Latest Insights"
            align="left"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-sm shadow-subtle hover:shadow-strong transition-all overflow-hidden"
              >
                <div className="relative overflow-hidden h-56">
                  <ImagePlaceholder
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-sm text-xs font-medium">
                      {post.category.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min read
                    </span>
                  </div>
                  <h3 className="heading-card mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <ImagePlaceholder
                      src={post.author.image}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full"
                      showPath={false}
                    />
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* All Posts */}
      <SectionWrapper background="muted">
        <SectionHeader
          subtitle="All Articles"
          title="Browse Our Articles"
          align="left"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-card rounded-sm shadow-subtle hover:shadow-strong transition-all overflow-hidden"
            >
              <div className="relative overflow-hidden h-48">
                <ImagePlaceholder
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-accent text-xs font-medium uppercase tracking-wider">
                  {post.category.name}
                </span>
                <h3 className="heading-card text-lg mt-2 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
          </div>
        )}
      </SectionWrapper>

      <NewsletterSection />
    </MainLayout>
  );
};

export default BlogPage;

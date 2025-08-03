import { motion } from 'framer-motion';
import HeroSwiper from '@/components/HeroSwiper';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaUser, FaCalendarAlt, FaClock } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Business Education in Digital Age',
      excerpt: 'Exploring how technology is transforming business education and preparing students for the digital economy...',
      author: 'Dr. Rajesh Kumar',
      date: '2025-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Career Opportunities in Computer Applications',
      excerpt: 'A comprehensive guide to various career paths available for BCA graduates in the current market...',
      author: 'Prof. Priya Sharma',
      date: '2025-01-12',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Developing Leadership Skills in College',
      excerpt: 'How students can develop essential leadership qualities during their academic journey...',
      author: 'Dr. Anil Verma',
      date: '2025-01-10',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Industry Partnerships and Student Benefits',
      excerpt: 'Understanding how our industry collaborations create opportunities for students...',
      author: 'Prof. Meera Singh',
      date: '2025-01-08',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSwiper />
      
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Blog & Articles
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Insights, tips, and knowledge sharing from our faculty and industry experts on education, career development, and industry trends.
            </p>
          </motion.div>

          {/* Featured Post */}
          {blogPosts[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <Card className="overflow-hidden border-0 shadow-strong bg-card">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{blogPosts[0].title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{blogPosts[0].excerpt}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-2">
                        <FaUser />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt />
                        <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaClock />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>
                    
                    <Button className="bg-primary hover:bg-primary-light rounded-full font-semibold w-fit">
                      Read Full Article
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Other Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover-lift border-0 shadow-soft bg-card h-full">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <FaUser />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaClock />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <Button variant="outline" size="sm" className="rounded-full">
                        Read More
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

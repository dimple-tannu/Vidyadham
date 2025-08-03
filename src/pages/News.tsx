import { motion } from 'framer-motion';
import HeroSwiper from '@/components/HeroSwiper';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaCalendarAlt, FaBell, FaNewspaper } from 'react-icons/fa';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Admission 2025 Applications Now Open',
      date: '2025-01-15',
      category: 'Admission',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
      excerpt: 'Applications for academic year 2025-26 are now open for BCA and BBA programs...',
      important: true
    },
    {
      id: 2,
      title: 'Industry Expert Session on Digital Marketing',
      date: '2025-01-10',
      category: 'Event',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      excerpt: 'Join us for an exclusive session with industry experts on modern digital marketing strategies...'
    },
    {
      id: 3,
      title: 'Student Achievement in State-Level Competition',
      date: '2025-01-08',
      category: 'Achievement',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
      excerpt: 'Our BCA students secured top positions in the state-level programming competition...'
    },
    {
      id: 4,
      title: 'New Computer Lab Inauguration',
      date: '2025-01-05',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      excerpt: 'State-of-the-art computer laboratory with latest technology was inaugurated...'
    }
  ];

  const notices = [
    {
      title: 'Fee Payment Deadline Extended',
      date: '2025-01-20',
      type: 'Important'
    },
    {
      title: 'Library Timing Changes',
      date: '2025-01-18',
      type: 'General'
    },
    {
      title: 'Mid-term Exam Schedule',
      date: '2025-01-16',
      type: 'Academic'
    },
    {
      title: 'Sports Meet Registration',
      date: '2025-01-14',
      type: 'Event'
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
              News & Notice
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest news, announcements, and important notices from Arcade Business College.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* News Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <FaNewspaper className="text-2xl text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Latest News</h2>
              </div>
              
              <div className="space-y-8">
                {news.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className={`overflow-hidden hover-lift border-0 shadow-soft ${
                      item.important ? 'ring-2 ring-secondary/50' : ''
                    }`}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                          {item.important && (
                            <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                              Important
                            </div>
                          )}
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                              {item.category}
                            </span>
                            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                              <FaCalendarAlt />
                              <span>{new Date(item.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{item.excerpt}</p>
                          <Button variant="outline" size="sm" className="rounded-full">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Notices Sidebar */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <FaBell className="text-2xl text-secondary" />
                <h2 className="text-3xl font-bold text-foreground">Notices</h2>
              </div>
              
              <div className="space-y-4">
                {notices.map((notice, index) => (
                  <motion.div
                    key={notice.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-4 hover-lift border-0 shadow-soft bg-card">
                      <div className="flex items-start justify-between space-x-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{notice.title}</h3>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <FaCalendarAlt />
                            <span>{new Date(notice.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          notice.type === 'Important' 
                            ? 'bg-destructive/10 text-destructive'
                            : notice.type === 'Academic'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {notice.type}
                        </span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center pt-4"
                >
                  <Button variant="outline" className="w-full rounded-full">
                    View All Notices
                  </Button>
                </motion.div>
              </div>

              {/* Quick Links */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-foreground mb-6">Quick Links</h3>
                <div className="space-y-3">
                  {[
                    'Academic Calendar',
                    'Exam Schedule',
                    'Fee Structure',
                    'Admission Guidelines',
                    'Contact Information'
                  ].map((link, index) => (
                    <motion.a
                      key={link}
                      href="#"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="block p-3 bg-muted/50 rounded-lg text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {link}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
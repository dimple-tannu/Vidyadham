import { motion } from 'framer-motion';
import HeroSwiper from '@/components/HeroSwiper';
import { Card } from '@/components/ui/card';
import { FaLaptop, FaBook, FaFlask, FaWifi } from 'react-icons/fa';

const Facilities = () => {
  const facilities = [
    { icon: FaLaptop, title: 'Computer Labs', description: 'State-of-the-art computer laboratories with latest software and hardware', image: '/facility2.png' },
    { icon: FaBook, title: 'Library', description: 'Extensive collection of books, journals, and digital resources', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop' },
    { icon: FaFlask, title: 'Research Center', description: 'Dedicated spaces for research and innovation projects', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop' },
    { icon: FaWifi, title: 'Smart Classrooms', description: 'Technology-enabled classrooms with high-speed internet', image: '/facility1.png' }
  ];

  return (
    <div className="min-h-screen">
      <HeroSwiper />
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">Campus Facilities</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">Modern infrastructure and world-class facilities to support your academic journey.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div key={facility.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card className="overflow-hidden hover-lift border-0 shadow-soft bg-card">
                  <img src={facility.image} alt={facility.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <facility.icon className="text-2xl text-primary" />
                      <h3 className="text-xl font-bold text-foreground">{facility.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{facility.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
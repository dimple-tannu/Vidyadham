import { motion } from 'framer-motion';
import HeroSwiper from '@/components/HeroSwiper';
import { Card } from '@/components/ui/card';
import { FaUsers, FaBook, FaTrophy, FaHeart } from 'react-icons/fa';

const StudentZone = () => {
  const services = [
    { icon: FaUsers, title: 'Student Portal', description: 'Access academic records, assignments, and announcements' },
    { icon: FaBook, title: 'Digital Library', description: 'Online resources, e-books, and research materials' },
    { icon: FaTrophy, title: 'Achievements', description: 'Student accomplishments and recognition programs' },
    { icon: FaHeart, title: 'Counseling Services', description: 'Academic and personal guidance support' }
  ];

  return (
    <div className="min-h-screen">
      <HeroSwiper />
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">Student Zone</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">Dedicated resources and services for our students' academic and personal development.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card className="p-6 text-center hover-lift border-0 shadow-soft bg-card h-full">
                  <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="text-2xl text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentZone;
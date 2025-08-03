import { motion } from 'framer-motion';
import HeroSwiper from '@/components/HeroSwiper';
import { Card } from '@/components/ui/card';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Events = () => {
  const events = [
    {
      title: 'Annual Tech Fest 2025',
      date: '2025-03-15',
      time: '10:00 AM',
      location: 'Main Auditorium',
      description: 'Annual technology festival with coding competitions, workshops, and industry talks.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
    },
    {
      title: 'Industry Expert Session',
      date: '2025-02-20',
      time: '2:00 PM',
      location: 'Conference Hall',
      description: 'Interactive session with leading industry professionals on current market trends.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop'
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
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">Events & Seminars</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">Discover upcoming events, workshops, and seminars at Arcade Business College.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div key={event.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card className="overflow-hidden hover-lift border-0 shadow-soft bg-card">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2"><FaCalendarAlt /><span>{new Date(event.date).toLocaleDateString()}</span></div>
                      <div className="flex items-center space-x-2"><FaClock /><span>{event.time}</span></div>
                      <div className="flex items-center space-x-2"><FaMapMarkerAlt /><span>{event.location}</span></div>
                    </div>
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

export default Events;
import { motion } from 'framer-motion';
import HeroSwiper from '@/components/HeroSwiper';
import { Card } from '@/components/ui/card';
import { FaPhone, FaShieldAlt, FaUsers, FaHeart } from 'react-icons/fa';

const WomenHelpline = () => {
  return (
    <div className="min-h-screen">
      <HeroSwiper />
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">Women Helpline</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">Dedicated support and assistance for women students ensuring a safe and secure campus environment.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="p-6 text-center hover-lift border-0 shadow-soft bg-card">
                <div className="w-16 h-16 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPhone className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Emergency Helpline</h3>
                <p className="text-2xl font-bold text-destructive mb-2">+91 98765 WOMEN</p>
                <p className="text-muted-foreground">24/7 Emergency Support</p>
              </Card>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="p-6 text-center hover-lift border-0 shadow-soft bg-card">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Safety Measures</h3>
                <p className="text-muted-foreground">CCTV monitoring, security personnel, and safe transportation services</p>
              </Card>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Card className="p-6 text-center hover-lift border-0 shadow-soft bg-card">
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Counseling Support</h3>
                <p className="text-muted-foreground">Professional counseling and mental health support services</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenHelpline;
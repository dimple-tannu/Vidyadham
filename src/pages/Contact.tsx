import { motion } from 'framer-motion';
import HeroSwiper from '@/components/HeroSwiper';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
      color: 'primary'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@arcadebusinesscollege.edu', 'admissions@arcadebusinesscollege.edu'],
      color: 'secondary'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: ['123 Education Street', 'Business District, Academic City', 'State 12345, India'],
      color: 'accent'
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
      color: 'primary'
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
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Get in touch with us for admissions, academic inquiries, or any other information about Arcade Business College.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 shadow-soft border-0 bg-card">
                <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input 
                        type="text" 
                        placeholder="Enter your first name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input 
                        type="text" 
                        placeholder="Enter your last name"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email" 
                      placeholder="Enter your email address"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Enter subject"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Enter your message"
                      rows={5}
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary-light rounded-full font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
              
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover-lift border-0 shadow-soft bg-card">
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                          info.color === 'primary' ? 'primary-gradient' :
                          info.color === 'secondary' ? 'secondary-gradient' : 'accent-gradient'
                        }`}>
                          <info.icon className="text-xl text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-muted-foreground text-sm mb-1">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

            

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: FaFacebook, color: '#1877F2' },
                    { icon: FaTwitter, color: '#1DA1F2' },
                    { icon: FaLinkedin, color: '#0A66C2' },
                    { icon: FaInstagram, color: '#E4405F' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="w-12 h-12 rounded-full bg-muted hover:bg-primary flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      style={{ '--hover-bg': social.color } as any}
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Find Us Here</h2>
            <div className="bg-muted/50 h-96 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <FaMapMarkerAlt className="text-4xl text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map will be displayed here</p>
                <p className="text-sm text-muted-foreground mt-2">
                  123 Education Street, Business District, Academic City
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
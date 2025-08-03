import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaDownload, FaBell, FaClipboardList } from 'react-icons/fa';

const AdmissionSection = () => {
  const floatingButtons = [
    {
      icon: FaClipboardList,
      label: 'Placement Bulletin',
      color: 'primary',
      position: 'left'
    },
    {
      icon: FaDownload,
      label: 'College Bulletin',
      color: 'secondary',
      position: 'center'
    },
    {
      icon: FaBell,
      label: 'Notice',
      color: 'accent',
      position: 'right'
    }
  ];

  return (
    <section className="relative">
      {/* Full-width Student Group Image */}
      <div className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/admission.png')"
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-academic-navy/90 via-primary/80 to-secondary/70" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                Admission 2025
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Join our community of ambitious students and shape your future with us
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12 py-4 text-xl font-bold rounded-full shadow-glow hover:scale-105 transition-all duration-300"
              >
                Apply Now
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            {floatingButtons.map((button, index) => (
              <motion.div
                key={button.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div
                  className={`
                    ${button.color === 'primary' ? 'bg-primary hover:bg-primary-light' : ''}
                    ${button.color === 'secondary' ? 'bg-secondary hover:bg-secondary/90' : ''}
                    ${button.color === 'accent' ? 'bg-accent hover:bg-accent-light' : ''}
                    text-white px-6 py-3 rounded-full shadow-glow hover:scale-110 transition-all duration-300 
                    flex items-center space-x-3 font-semibold min-w-[180px]
                  `}
                >
                  <button.icon className="text-lg" />
                  <span>{button.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="bg-background py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl shadow-soft border border-border text-center hover-lift"
            >
              <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <FaClipboardList className="text-2xl text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Application Process</h3>
              <p className="text-muted-foreground mb-6">
                Simple and streamlined application process with online submission and quick processing.
              </p>
              <Button variant="outline" className="rounded-full">
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-soft border border-border text-center hover-lift"
            >
              <div className="w-16 h-16 secondary-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <FaDownload className="text-2xl text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Download Brochure</h3>
              <p className="text-muted-foreground mb-6">
                Get detailed information about our courses, fees, facilities, and admission requirements.
              </p>
              <Button variant="outline" className="rounded-full">
                Download PDF
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card p-8 rounded-2xl shadow-soft border border-border text-center hover-lift"
            >
              <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <FaBell className="text-2xl text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Important Dates</h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with application deadlines, entrance exam dates, and admission notifications.
              </p>
              <Button variant="outline" className="rounded-full">
                View Calendar
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
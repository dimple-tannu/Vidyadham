import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Academic Programs', path: '/academic' },
    { name: 'Admissions', path: '/academic' },
    { name: 'News & Events', path: '/news' },
    { name: 'Student Zone', path: '/student-zone' },
    { name: 'Contact', path: '/contact' },
  ];

  const academicLinks = [
    { name: 'BCA Program', path: '/academic' },
    { name: 'BBA Program', path: '/academic' },
    { name: 'SPMU Documentation', path: '/spmu-docs' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Events & Seminars', path: '/events' },
    { name: 'Blog', path: '/blog' },
  ];

  const supportLinks = [
    { name: 'Women Helpline', path: '/women-helpline' },
    { name: 'Student Support', path: '/student-zone' },
    { name: 'Career Guidance', path: '/contact' },
    { name: 'Technical Support', path: '/contact' },
  ];

  return (
    <>
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-light text-primary-foreground p-3 rounded-full shadow-glow transition-all duration-300 hover:scale-110"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowUp size={20} />
      </motion.button>

      <footer className="bg-academic-navy text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* College Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 secondary-gradient rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-2xl">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Vidyadham Educational Trust</h3>
                  <p className="text-sm text-gray-300">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering students with quality business education, modern facilities, 
                and comprehensive placement assistance for a successful career in the corporate world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  <FaInstagram size={20} />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Academic Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-secondary">Academic</h4>
              <ul className="space-y-2">
                {academicLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-secondary">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    123 Education Street, Business District,<br />
                    Academic City, State 12345
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-secondary flex-shrink-0" />
                  <p className="text-gray-300">+91 98765 43210</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-secondary flex-shrink-0" />
                  <p className="text-gray-300">info@.edu</p>
                </div>
              </div>
              
             
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-600 pt-8 text-center"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300">
                © 2025 Vidhyadham Educational Trust. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Admission Policy
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
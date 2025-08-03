import { motion } from 'framer-motion';
import { FaUsers, FaBook, FaTrophy, FaGlobe } from 'react-icons/fa';

const AboutSection = () => {
  const stats = [
    { icon: FaUsers, number: '1000+', label: 'Students' },
    { icon: FaBook, number: '50+', label: 'Courses' },
    { icon: FaTrophy, number: '95%', label: 'Placement Rate' },
    { icon: FaGlobe, number: '100+', label: 'Industry Partners' }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            About Vidhyadham Educational Trust
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Established with a vision to provide world-class business education, Vidhyadham Educational Trust 
              has been at the forefront of academic excellence for over a decade. We are committed to nurturing 
              future business leaders and technology professionals who will shape tomorrow's world.
            </p>
            <p>
              Our state-of-the-art campus, experienced faculty, and industry-aligned curriculum ensure that 
              our students receive comprehensive education that goes beyond textbooks. We believe in practical 
              learning, innovation, and preparing our students for real-world challenges.
            </p>
            <p>
              With strong industry partnerships, modern infrastructure, and a focus on holistic development, 
             Vidhyadham Educational Trust stands as a beacon of quality education in the region.
            </p>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full primary-gradient mb-4 group-hover:shadow-glow transition-all duration-300">
                <stat.icon className="text-2xl text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20"
        >
          <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide exceptional business and technology education that empowers students 
              with knowledge, skills, and values necessary to excel in their chosen careers 
              and contribute meaningfully to society.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be recognized as a premier institution for business and technology education, 
              known for academic excellence, innovation, and producing graduates who are 
              industry-ready and globally competitive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
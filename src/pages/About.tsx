import { motion } from 'framer-motion';
import HeroSwiper from '@/components/HeroSwiper';
import { FaHistory, FaEye, FaBullseye, FaUsers, FaAward } from 'react-icons/fa';

const About = () => {
  const milestones = [
    { year: '2010', event: 'College Establishment', description: 'Founded with a vision to provide quality education' },
    { year: '2015', event: 'SPMU Affiliation', description: 'Affiliated with Sant Pustak Marg University' },
    { year: '2018', event: 'Campus Expansion', description: 'Modern infrastructure and facilities added' },
    { year: '2020', event: '1000+ Graduates', description: 'Celebrated our 1000th successful graduate' },
    { year: '2023', event: 'Industry Recognition', description: 'Awarded Best Business College in the region' },
  ];

  const leadership = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Principal',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      experience: '20+ years in education'
    },
    {
      name: 'Prof. Priya Sharma',
      position: 'Vice Principal',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9a0a41e?w=300&h=300&fit=crop&crop=face',
      experience: '15+ years in management'
    },
    {
      name: 'Dr. Anil Verma',
      position: 'Academic Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      experience: '18+ years in academia'
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSwiper />
      
      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              About Vidyadham Educational Trust
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Established with a commitment to excellence, Arcade Business College has been shaping 
              future business leaders and technology professionals for over a decade.
            </p>
          </motion.div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-soft border border-border text-center"
            >
              <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <FaBullseye className="text-2xl text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional education that empowers students with knowledge, skills, 
                and values necessary to excel in their careers and contribute to society.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card p-8 rounded-2xl shadow-soft border border-border text-center"
            >
              <div className="w-16 h-16 secondary-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEye className="text-2xl text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as a premier institution for business and technology education, 
                known for academic excellence and producing industry-ready graduates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card p-8 rounded-2xl shadow-soft border border-border text-center"
            >
              <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-2xl text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-accent mb-4">Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Excellence, integrity, innovation, and social responsibility guide everything we do 
                as we prepare students for successful careers.
              </p>
            </motion.div>
          </div>

          {/* History Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary"></div>
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-card p-6 rounded-xl shadow-soft border border-border">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div key={leader.name} className="text-center group hover-lift">
                  <div className="relative mb-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-48 h-48 rounded-full mx-auto object-cover shadow-soft group-hover:shadow-glow transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{leader.name}</h3>
                  <p className="text-primary font-semibold mb-2">{leader.position}</p>
                  <p className="text-muted-foreground">{leader.experience}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
import { motion } from 'framer-motion';
import HeroSwiper from '@/components/HeroSwiper';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FaCode, FaBriefcase, FaCalendarAlt, FaFileAlt, FaGraduationCap, FaUsers } from 'react-icons/fa';

const Academic = () => {
  const programs = [
    {
      title: 'BCA',
      fullName: 'Bachelor of Computer Applications',
      duration: '3 Years (6 Semesters)',
      icon: FaCode,
      description: 'Comprehensive program focusing on computer science fundamentals, programming languages, and software development.',
      curriculum: [
        'Programming Fundamentals (C, C++, Java)',
        'Web Development (HTML, CSS, JavaScript, PHP)',
        'Database Management Systems',
        'Software Engineering',
        'Computer Networks',
        'Mobile Application Development'
      ],
      eligibility: '12th Pass with Mathematics',
      seats: '60',
      fee: '₹45,000 per year'
    },
    {
      title: 'BBA',
      fullName: 'Bachelor of Business Administration',
      duration: '3 Years (6 Semesters)',
      icon: FaBriefcase,
      description: 'Comprehensive business management program covering all aspects of modern business practices and leadership.',
      curriculum: [
        'Principles of Management',
        'Business Communication',
        'Marketing Management',
        'Financial Management',
        'Human Resource Management',
        'Entrepreneurship Development'
      ],
      eligibility: '12th Pass from any stream',
      seats: '120',
      fee: '₹40,000 per year'
    }
  ];

  const admissionProcess = [
    { step: 1, title: 'Application Submission', description: 'Fill and submit the online application form' },
    { step: 2, title: 'Document Verification', description: 'Submit required documents for verification' },
    { step: 3, title: 'Entrance Test', description: 'Appear for the college entrance examination' },
    { step: 4, title: 'Interview', description: 'Personal interview with the admission committee' },
    { step: 5, title: 'Fee Payment', description: 'Pay admission fee to confirm your seat' },
  ];

  return (
    <div className="min-h-screen">
      <HeroSwiper />
      
      {/* Academic Programs */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Academic Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Choose from our carefully designed undergraduate programs that prepare you for successful careers in technology and business management.
            </p>
          </motion.div>

          <div className="space-y-20">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="p-8 shadow-soft border-0 bg-card">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        program.title === 'BCA' ? 'primary-gradient' : 'secondary-gradient'
                      }`}>
                        <program.icon className="text-2xl text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">{program.title}</h2>
                        <p className="text-lg text-muted-foreground">{program.fullName}</p>
                        <p className="text-sm text-muted-foreground">{program.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <FaUsers className="text-2xl text-primary mx-auto mb-2" />
                        <div className="font-semibold text-foreground">{program.seats}</div>
                        <div className="text-sm text-muted-foreground">Seats</div>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <FaGraduationCap className="text-2xl text-primary mx-auto mb-2" />
                        <div className="font-semibold text-foreground">{program.eligibility}</div>
                        <div className="text-sm text-muted-foreground">Eligibility</div>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <FaFileAlt className="text-2xl text-primary mx-auto mb-2" />
                        <div className="font-semibold text-foreground">{program.fee}</div>
                        <div className="text-sm text-muted-foreground">Annual Fee</div>
                      </div>
                    </div>

                    <Button 
                      size="lg" 
                      className={`w-full ${
                        program.title === 'BCA' 
                          ? 'bg-primary hover:bg-primary-light' 
                          : 'bg-secondary hover:bg-secondary/90'
                      } rounded-full font-semibold`}
                    >
                      Apply for {program.title}
                    </Button>
                  </Card>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Curriculum Highlights</h3>
                  <div className="space-y-3">
                    {program.curriculum.map((subject, subIndex) => (
                      <div key={subIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          program.title === 'BCA' ? 'bg-primary' : 'bg-secondary'
                        }`} />
                        <span className="text-muted-foreground">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Admission Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Follow these simple steps to secure your admission at Arcade Business College
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {admissionProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-glow">
                  {step.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                
                {index < admissionProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 px-12 py-4 text-lg font-semibold rounded-full">
              Start Application
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-8">Important Dates</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { date: 'March 1, 2025', event: 'Application Opens' },
              { date: 'May 31, 2025', event: 'Application Closes' },
              { date: 'June 15, 2025', event: 'Entrance Test' },
              { date: 'July 1, 2025', event: 'Classes Begin' },
            ].map((item, index) => (
              <motion.div
                key={item.event}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-soft border border-border text-center"
              >
                <FaCalendarAlt className="text-3xl text-primary mx-auto mb-4" />
                <div className="text-lg font-bold text-foreground mb-2">{item.date}</div>
                <div className="text-muted-foreground">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academic;
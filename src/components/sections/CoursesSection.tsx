import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FaCode, FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'BCA',
      fullName: 'Bachelor of Computer Applications',
      duration: '3 Years',
      icon: FaCode,
      description: 'Comprehensive computer science program focusing on programming, software development, and modern technologies.',
      highlights: ['Programming Languages', 'Web Development', 'Database Management', 'Software Engineering'],
      color: 'primary'
    },
    {
      id: 2,
      title: 'BBA',
      fullName: 'Bachelor of Business Administration',
      duration: '3 Years',
      icon: FaBriefcase,
      description: 'Business management program covering all aspects of modern business practices and entrepreneurship.',
      highlights: ['Business Strategy', 'Marketing', 'Finance', 'Human Resources'],
      color: 'secondary'
    }
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Courses We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully designed programs that prepare you for successful careers 
            in technology and business management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Card className="p-8 h-full hover-lift border-0 shadow-soft bg-card">
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                    course.color === 'primary' ? 'primary-gradient' : 'secondary-gradient'
                  }`}>
                    <course.icon className="text-3xl text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {course.title}
                  </h3>
                  <p className="text-lg font-semibold text-muted-foreground mb-1">
                    {course.fullName}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <FaGraduationCap />
                    <span>{course.duration}</span>
                    <FaCertificate />
                    <span>UGC Approved</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-3 text-center">
                    Key Areas of Study
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {course.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center space-x-2 text-sm text-muted-foreground"
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          course.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                        }`} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    size="lg"
                    className={`${
                      course.color === 'primary'
                        ? 'bg-primary hover:bg-primary-light'
                        : 'bg-secondary hover:bg-secondary/90'
                    } px-8 rounded-full font-semibold group-hover:scale-105 transition-transform`}
                  >
                    Know More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
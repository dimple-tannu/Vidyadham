import { motion } from 'framer-motion';
import HeroSwiper from '@/components/HeroSwiper';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaDownload, FaFileAlt, FaUniversity, FaCalendarAlt } from 'react-icons/fa';

const SpmuDocs = () => {
  const documents = [
    {
      title: 'SPMU Syllabus 2024-25',
      description: 'Complete syllabus for all programs affiliated with Sant Pustak Marg University',
      type: 'PDF',
      size: '2.5 MB',
      date: '2024-08-15'
    },
    {
      title: 'Academic Calendar',
      description: 'Important dates, examination schedule, and academic activities',
      type: 'PDF',
      size: '1.2 MB',
      date: '2024-07-20'
    },
    {
      title: 'Examination Guidelines',
      description: 'Rules and regulations for university examinations',
      type: 'PDF',
      size: '800 KB',
      date: '2024-06-10'
    },
    {
      title: 'Affiliation Certificate',
      description: 'Official affiliation document from SPMU',
      type: 'PDF',
      size: '500 KB',
      date: '2023-05-15'
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
            <div className="flex items-center justify-center space-x-3 mb-6">
              <FaUniversity className="text-4xl text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              SPMU Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Access official documents, syllabi, and guidelines from Sant Pustak Marg University for our affiliated programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover-lift border-0 shadow-soft bg-card h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FaFileAlt className="text-xl text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{doc.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{doc.description}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <span className="bg-muted px-2 py-1 rounded">{doc.type}</span>
                        <span>{doc.size}</span>
                        <div className="flex items-center space-x-1">
                          <FaCalendarAlt />
                          <span>{new Date(doc.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-primary hover:bg-primary-light rounded-full font-semibold"
                        size="sm"
                      >
                        <FaDownload className="mr-2" />
                        Download
                      </Button>
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

export default SpmuDocs;
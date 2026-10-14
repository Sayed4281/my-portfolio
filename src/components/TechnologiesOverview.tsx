'use client';

import { motion } from 'framer-motion';
import { 
  FolderKanban, 
  Code2, 
  Database, 
  ShieldCheck, 
  CheckCircle, 
  Smartphone,
  Cpu
} from 'lucide-react';

const TechnologiesOverview = () => {
  const domains = [
    {
      title: 'Enterprise ERP & Governance',
      icon: ShieldCheck,
      desc: 'Architecting scalable business workflows, access security, and multi-tenant systems.',
      skills: ['HRMS Modules', 'Automated Payroll', 'CRM Pipelines', 'RBAC Security', 'JWT Auth', 'Attendance Geo-fencing', 'Multi-tenant Schemas']
    },
    {
      title: 'Frontend Web Engineering',
      icon: Code2,
      desc: 'Building responsive, type-safe, and search-optimized user interfaces.',
      skills: ['Next.js 15', 'React.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion', 'HTML5 & Semantic SEO', 'State Management']
    },
    {
      title: 'Backend & Database Systems',
      icon: Database,
      desc: 'Designing performant REST APIs and relational database architectures.',
      skills: ['Node.js', 'PostgreSQL', 'Prisma ORM', 'MySQL', 'RESTful APIs', 'Supabase', 'Firebase', 'Data Modeling']
    },
    {
      title: 'Project Management & Quality Assurance',
      icon: FolderKanban,
      desc: 'Coordinating delivery cycles, requirements engineering, and validation testing.',
      skills: ['Jira', 'Trello', 'Agile / Scrum', 'Business Process Analysis', 'BRD/SRS Documentation', 'UAT Testing', 'Postman API Testing']
    },
    {
      title: 'Mobile & IoT Applications',
      icon: Smartphone,
      desc: 'Cross-platform mobile applications and hardware sensor integrations.',
      skills: ['Flutter', 'Dart', 'Progressive Web Apps (PWA)', 'IoT Sensor Telemetry', 'Firebase Cloud Messaging', 'BLE Integration']
    }
  ];

  return (
    <section id="technologies" className="py-16 sm:py-20 relative bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Cpu size={13} className="text-blue-600" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-display text-slate-900 tracking-tight mb-3">
            Technologies & Frameworks Grouped by Service
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            A comprehensive, verified overview of the programming languages, database architectures, and delivery tools I leverage daily.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;

            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all shadow-2xs hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-blue-600 shadow-2xs">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-display">
                      {domain.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    {domain.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {domain.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-medium shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechnologiesOverview;

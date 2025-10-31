import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "RedhibbertGroup LLC",
    role: "Trainee Intern – Vibe Coder & SFMC Developer",
    location: "Hyderabad, India",
    period: "Apr 2025 - Present",
    highlights: [
      "Assisting in the development and deployment of marketing automation workflows using Salesforce Marketing Cloud (SFMC) tools like Email Studio, Journey Builder, and Automation Studio.",
      "Supporting the configuration and optimization of data extensions, ETL processes, and subscriber segmentation to enhance campaign performance and accuracy.",
      "Collaborating with cross-functional teams to ensure clean and validated data for personalized communications.",
      "Developing reusable components, testing data-driven logic, and documenting workflows to maintain high-quality standards.",
    ],
  },
  {
    company: "Brain Wave Matrix Solutions",
    role: "Data Analyst Intern",
    location: "Hyderabad, India",
    period: "Nov 2024 - Feb 2025",
    highlights: [
      "Conducted social media sentiment analysis using NLP Techniques on Twitter data to extract public opinions on specific topics and products.",
      "Developed an Interactive Superstore Sales Dashboard leveraging time series analysis to identify sales trends and generate actionable business reports.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Professional <span className="hero-gradient-text">Experience</span>
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.company}
                className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full animate-glow" />

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-accent" />
                        <span>{exp.role}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground flex gap-3">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

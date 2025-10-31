const skillCategories = [
  {
    title: "Core Competencies",
    skills: [
      "Data Management",
      "Research & Validation",
      "Data Cleaning",
      "Data Quality Assurance",
      "Reporting & Documentation",
      "Data Visualization",
      "ETL Concepts",
      "MS Office Suite",
    ],
  },
  {
    title: "Technical Tools",
    skills: [
      "Salesforce Marketing Cloud",
      "SQL",
      "Python",
      "Excel",
      "Power BI",
      "Tableau",
      "DBMS",
      "AI Tools",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Team Collaboration",
      "Communication",
      "Attention to Detail",
      "Problem Solving",
      "Process Improvement",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Technical <span className="hero-gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={category.title}
                className="card-3d bg-card border border-border rounded-lg p-6 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-500"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-accent">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:bg-accent/20 hover:text-accent transition-colors cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

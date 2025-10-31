import { ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Loan Eligibility Prediction",
    category: "Machine Learning",
    description:
      "Built and deployed a predictive model with 92% accuracy to classify loan applicants. Automated eligibility assessment, reducing review turnaround time by 67% and enhancing overall process efficiency.",
    impact: "67% faster processing",
    tech: ["Python", "Machine Learning", "Scikit-learn"],
  },
  {
    title: "Diwali Sales Analysis",
    category: "Data Analysis",
    description:
      "Conducted comprehensive data analysis of sales records using Python, Pandas, and Matplotlib to identify key purchasing trends and customer demographics. Provided actionable insights that increased sales revenue by 10%.",
    impact: "10% revenue increase",
    tech: ["Python", "Pandas", "Matplotlib"],
  },
  {
    title: "Pizza Sales Dashboard",
    category: "Business Intelligence",
    description:
      "Extracted and cleaned transaction-level data from SQL databases and built dynamic dashboards in Power BI. Enabled actionable business insights and operational improvements through real-time monitoring.",
    impact: "Real-time insights",
    tech: ["Power BI", "SQL", "Data Visualization"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Featured <span className="hero-gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="card-3d group bg-card border border-border rounded-lg overflow-hidden hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="h-2 bg-gradient-to-r from-accent to-red-400" />
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full">
                      {project.category}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">{project.description}</p>

                  <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                    <TrendingUp className="h-4 w-4" />
                    {project.impact}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { Download } from "lucide-react";
import { Button } from "./ui/button";

export const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="hero-gradient-text">Me</span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Data Management and Research Analyst Trainee specializing in Salesforce Marketing
              Cloud and Data Science. Experienced in managing, validating, and analyzing datasets
              to support marketing automation and business intelligence.
            </p>

            <p className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Skilled in Python, SQL, Excel, and Power BI with hands-on exposure to data
              integration, research, and ETL workflows. Detail-oriented, process-driven, and
              eager to contribute to innovative data management and research initiatives.
            </p>

            <div className="pt-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 group"
                onClick={() => window.open("/Eshwar_Vemula_Resume.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

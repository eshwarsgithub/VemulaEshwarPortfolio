import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "eshwarvemula009@gmail.com",
    href: "mailto:eshwarvemula009@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7671996478",
    href: "tel:+917671996478",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "vemula-eshwar",
    href: "https://linkedin.com/in/vemula-eshwar",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "eshwarsgithub",
    href: "https://github.com/eshwarsgithub",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Get In <span className="hero-gradient-text">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              const content = (
                <div
                  className={`card-3d flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-500 animate-slide-up ${
                    info.href ? "cursor-pointer" : ""
                  }`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              );

              return info.href ? (
                <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities, interesting projects, or potential
              collaborations.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90"
              onClick={() => window.location.href = "mailto:eshwarvemula009@gmail.com"}
            >
              Send Me an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Eshwar Vemula. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/vemula-eshwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/eshwarsgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:eshwarvemula009@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

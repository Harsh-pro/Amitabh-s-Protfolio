import { MapPin, Mail, Linkedin, Briefcase, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - About Text */}
          <div>
            <span className="text-primary font-mono text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="heading-lg mb-6">
              Engineering Excellence in 
              <span className="text-gradient"> Renewable Energy</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a results-driven Design Engineer with over 3 years of experience 
                specializing in mechanical design and new product development within 
                the wind energy sector. My expertise lies in creating complex sheet metal 
                components and large mechanical assemblies that prioritize manufacturability, 
                cost-effectiveness, and safety compliance.
              </p>
              <p>
                Working with industry leaders like Adani, Suzlon, and INOX, I've delivered 
                optimized design solutions ranging from service lifts to safety-critical 
                components. My approach combines technical precision with cross-functional 
                collaboration, ensuring every solution meets both engineering excellence 
                and client expectations.
              </p>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                Pune, India
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Briefcase size={16} className="text-primary" />
                3+ Years Experience
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap size={16} className="text-primary" />
                B.E. Mechanical
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card-base card-hover col-span-2 sm:col-span-1">
              <div className="text-4xl font-bold text-gradient mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="card-base card-hover col-span-2 sm:col-span-1">
              <div className="text-4xl font-bold text-gradient mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="card-base card-hover col-span-2 sm:col-span-1">
              <div className="text-4xl font-bold text-gradient mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Major Clients</div>
            </div>
            <div className="card-base card-hover col-span-2 sm:col-span-1">
              <div className="text-4xl font-bold text-gradient mb-2">ISO</div>
              <div className="text-sm text-muted-foreground">Standards Compliant</div>
            </div>

            {/* Contact Quick Links */}
            <div className="col-span-2 card-base flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Let's Connect</div>
                <div className="font-medium">amitabhsingh0012@gmail.com</div>
              </div>
              <div className="flex gap-2">
                <a 
                  href="mailto:amitabhsingh0012@gmail.com" 
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Send email"
                >
                  <Mail size={18} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    company: "Hailo Wind Systems India Pvt. Ltd",
    role: "Design Engineer",
    location: "Pune, Maharashtra",
    period: "Jan 2023 - Present",
    current: true,
    achievements: [
      "Designed complex sheet metal components and large mechanical assemblies for wind turbine systems using Creo Parametric and NX, ensuring manufacturability and cost-effectiveness",
      "Created detailed 2D technical drawings with GDT, BOMs, and engineering documentation compliant with ISO standards",
      "Led new product development for ladder systems, rest pedals, and anchorage points for top clients including Adani, Suzlon, and INOX",
      "Collaborated across electrical and quality teams to integrate multi-disciplinary inputs into cohesive design solutions",
      "Delivered optimized solutions for service lifts, deflector wheels, and enclosures, driving project success across multiple OEMs",
    ],
  },
];

const education = {
  degree: "Bachelor of Engineering in Mechanical",
  institution: "Abdul Kalam Technical University, Lucknow",
  location: "Lucknow, UP",
  period: "August 2018 – May 2022",
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm font-medium tracking-wider uppercase mb-4 block">
            Career Journey
          </span>
          <h2 className="heading-lg">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-border" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20 pb-12">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                
                {/* Content Card */}
                <div className="card-base card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="heading-md">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-primary font-medium">
                        {exp.company}
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="relative pl-8 md:pl-20">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-2 border-primary" />
              
              <div className="card-base">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">
                      Education
                    </span>
                    <h3 className="heading-md mb-1">{education.degree}</h3>
                    <div className="text-muted-foreground">{education.institution}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {education.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {education.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

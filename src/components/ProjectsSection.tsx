import { ArrowUpRight, Wind, Cog, Shield } from "lucide-react";

const projects = [
  {
    client: "Adani Green Energy Limited",
    period: "Oct 2023 - Present",
    icon: Wind,
    description: "End-to-end design engineering for 3.3MW wind turbine tower components, focusing on safety-critical systems and performance optimization.",
    highlights: [
      "3D modeling of steel ladders and service lift modifications",
      "New product development and defect analysis for safety components",
      "Custom deflector wheels for TopLift with enhanced durability",
      "Cross-functional coordination for design validation",
    ],
    technologies: ["Creo Parametric", "NX", "SAP", "Windchill"],
  },
  {
    client: "Suzlon Green Energy Ltd.",
    period: "Sep 2022 - Present",
    icon: Cog,
    description: "Innovation-focused product development for lattice tower systems, delivering safety-compliant solutions meeting international standards.",
    highlights: [
      "Rest pedal development for lattice tower installations",
      "Anchorage point design per ISO 14122-2 and 131-2 standards",
      "Client communication and engineering documentation",
    ],
    technologies: ["SolidWorks", "AutoCAD", "GDT", "ISO Standards"],
  },
  {
    client: "INOX Wind Energy Ltd.",
    period: "Apr 2023 - May 2023",
    icon: Shield,
    description: "Rapid-turnaround engineering solutions for wind turbine tower installations, resolving complex mounting challenges.",
    highlights: [
      "Fish plate with brackets for 122.5HH tower installation",
      "Counter box enclosure for 92HH turbine, resolving mounting issues",
    ],
    technologies: ["Creo Parametric", "Sheet Metal Design", "BOM"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm font-medium tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="heading-lg">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Delivering innovative engineering solutions for leading renewable energy companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group card-base card-hover flex flex-col h-full"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <IconComponent size={24} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    {project.period}
                  </span>
                </div>

                {/* Client Name */}
                <h3 className="heading-md mb-2 flex items-center gap-1 group-hover:text-primary transition-colors">
                  {project.client}
                  <ArrowUpRight 
                    size={18} 
                    className="opacity-0 group-hover:opacity-100 transition-opacity" 
                  />
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

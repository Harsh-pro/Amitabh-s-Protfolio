import { Wrench, Database, FileText, Layers, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Design Tools",
    icon: Wrench,
    description: "Primary CAD and modeling software",
    skills: ["Creo Parametric", "SolidWorks", "AutoCAD", "NX"],
  },
  {
    title: "Data Management",
    icon: Database,
    description: "PLM and enterprise systems",
    skills: ["SAP", "Windchill", "SCAN Tools"],
  },
  {
    title: "Drafting & Standards",
    icon: FileText,
    description: "Technical documentation expertise",
    skills: ["2D Drawing", "GDT", "ISO Standards", "BOM Preparation"],
  },
  {
    title: "CAD Expertise",
    icon: Layers,
    description: "Specialized design capabilities",
    skills: ["Sheet Metal Design", "3D Modeling", "Assembly Design", "Large Assemblies"],
  },
  {
    title: "Professional Skills",
    icon: Users,
    description: "Cross-functional capabilities",
    skills: ["Project Coordination", "Client Communication", "Cross-functional Collaboration", "Microsoft Office"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm font-medium tracking-wider uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="heading-lg">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="card-base card-hover group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="badge-skill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 card-base text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
          <div className="relative z-10">
            <h3 className="heading-md mb-4">
              Specialized in <span className="text-gradient">Wind Energy</span> Design
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With hands-on experience designing components for leading wind energy OEMs, 
              I bring deep domain knowledge in renewable energy infrastructure, safety compliance, 
              and large-scale mechanical systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

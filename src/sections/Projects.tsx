import { SectionWrapper } from '../components/SectionWrapper';
import { ProjectCard } from '../components/ProjectCard';
import { FadeIn } from '../components/FadeIn';

export function Projects() {
  const projects = [
    {
      title: "Coca-Cola 10/10 Campaign",
      description: "A comprehensive digital marketing strategy for the Coca-Cola 10/10 event, leveraging data insights to optimize user engagement and maximize conversion rates across social channels.",
      tags: ["Strategy", "Data Analysis", "Campaign"],
      link: "#"
    },
    {
      title: "Ivy Moda Rebranding",
      description: "Contributed to the digital rebranding strategy for Ivy Moda, focusing on modern consumer behavior and creating a cohesive visual and narrative identity for the younger demographic.",
      tags: ["Branding", "Consumer Insights", "Content"],
      link: "#"
    },
    {
      title: "Market Research Analysis",
      description: "Deep-dive statistical analysis using SPSS to uncover behavioral patterns in Gen Z purchasing habits, resulting in a 15% increase in targeted campaign ROI for local clients.",
      tags: ["SPSS", "Research", "Gen Z"],
      link: "#"
    },
    {
      title: "Odoo ERP Implementation",
      description: "Assisted in mapping business processes to Odoo ERP modules for a mid-sized retail business, streamlining their inventory and sales data pipelines.",
      tags: ["Odoo", "Systems", "Operations"],
      link: "#"
    }
  ];

  return (
    <SectionWrapper id="projects">
      <div className="mb-16 md:mb-20">
        <FadeIn direction="up">
          <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-4">Selected Work</h2>
          <h3 className="text-4xl md:text-5xl font-semibold text-zinc-900 mb-6">
            Projects that drive impact.
          </h3>
          <p className="text-xl text-zinc-500 max-w-2xl">
            A curated selection of campaigns and strategies where data meets creative execution.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.title}
            index={index}
            {...project}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

import { SectionWrapper } from '../components/SectionWrapper';
import { ProjectCard } from '../components/ProjectCard';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export function Projects() {
  const { t } = useLanguage();
  const projects = t('projects.items') || [];

  return (
    <SectionWrapper id="projects">
      <div className="mb-16 md:mb-20">
        <FadeIn durationMs={800}>
          <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-4">{t('projects.tag')}</h2>
          <h3 className="text-4xl md:text-5xl font-semibold text-zinc-900 mb-6">
            {t('projects.heading')}
          </h3>
          <p className="text-xl text-zinc-500 max-w-2xl">
            {t('projects.subheading')}
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {Array.isArray(projects) && projects.map((project: any, index: number) => (
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

import { SectionWrapper } from '../components/SectionWrapper';
import { FadeIn } from '../components/FadeIn';

export function About() {
  const skills = [
    "Marketing Strategy",
    "Digital Campaigns",
    "Data Analysis",
    "Content Creation",
    "SPSS",
    "Odoo",
    "Consumer Insights",
    "SEO & SEM"
  ];

  return (
    <SectionWrapper id="about" className="bg-white rounded-3xl md:rounded-[3rem] my-10 py-24 md:py-32 shadow-sm border border-zinc-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        <div className="lg:col-span-5">
          <FadeIn direction="up">
            <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-4">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-zinc-900 leading-tight mb-6">
              Practical solutions through data and creativity.
            </h3>
          </FadeIn>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <FadeIn delay={0.1} direction="up">
            <div className="prose prose-zinc prose-lg text-zinc-600 mb-12">
              <p className="mb-6">
                I am a Marketing student at Văn Lang University (K29), positioning myself as a practical, data-informed, and digital-first Marketer. My core focus is solving business problems through deep consumer insights and modern AI-driven digital systems.
              </p>
              <p>
                Whether it's interpreting complex datasets or crafting compelling narratives, I believe in strategies that look beautiful but, more importantly, perform well in the real world.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <h4 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-6">Core Competencies</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div 
                  key={skill}
                  className="px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-full text-sm font-medium text-zinc-700"
                >
                  {skill}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>
    </SectionWrapper>
  );
}

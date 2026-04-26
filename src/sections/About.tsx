import { SectionWrapper } from '../components/SectionWrapper';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export function About() {
  const { t } = useLanguage();
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
    <SectionWrapper
      id="about"
      className="bg-white rounded-3xl md:rounded-[3rem] my-10 pt-16 pb-24 md:pt-20 md:pb-32 shadow-sm border border-zinc-100"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 flex flex-col items-start max-w-[420px]">
          <FadeIn durationMs={800}>
            <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-4">
              {t('about.tag')}
            </h2>

            <h3 className="text-3xl md:text-4xl font-semibold text-zinc-900 leading-tight mb-2">
              {t('about.heading')}
            </h3>

            <img
              src="/avatar.jpg"
              alt="Nguyen Duc Thinh"
              className="w-full max-w-[320px] aspect-square rounded-full object-cover border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </FadeIn>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-7 lg:col-start-6">
          <FadeIn delayMs={100} durationMs={800}>
            <div className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
              <p className="mb-6">{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
          </FadeIn>

          <FadeIn delayMs={200} durationMs={800}>
            <h4 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-6">
              {t('about.coreCompetencies')}
            </h4>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 hover:bg-zinc-100 transition"
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

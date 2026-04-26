import { FadeIn } from '../components/FadeIn';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
      />

      <div className="lg:grid lg:grid-cols-2 lg:items-end w-full mx-auto z-10 relative">
        {/* Left Column */}
        <div className="mb-8 lg:mb-0">
          <AnimatedHeading
            text={t('hero.heading')}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 break-keep whitespace-nowrap"
          />

          <FadeIn delayMs={800} durationMs={1000}>
            <p className="text-base md:text-lg text-gray-300 mb-5 max-w-2xl">
              {t('hero.subheading')}
            </p>
          </FadeIn>

          <FadeIn delayMs={1200} durationMs={1000}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                {t('hero.viewProjects')}
              </a>
              <a
                href="/cv.pdf"
                className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
              >
                {t('hero.downloadCV')}
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right Column */}
        <div className="flex items-end justify-start lg:justify-end">
          <FadeIn delayMs={1400} durationMs={1000}>
            <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
              <span className="text-lg md:text-xl lg:text-2xl font-light">
                {t('hero.tag')}
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

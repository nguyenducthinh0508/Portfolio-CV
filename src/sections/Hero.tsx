import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { FadeIn } from '../components/FadeIn';

export function Hero() {
  return (
    <SectionWrapper className="min-h-[90vh] flex flex-col justify-center relative pt-32 md:pt-40">
      <div className="max-w-4xl">
        <FadeIn delay={0.2} direction="up" duration={0.8}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-sm font-medium text-zinc-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for new opportunities
          </div>
        </FadeIn>

        <FadeIn delay={0.3} direction="up" duration={0.8}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.05]">
            Nguyễn Đức Thịnh
          </h1>
        </FadeIn>

        <FadeIn delay={0.4} direction="up" duration={0.8}>
          <p className="text-xl md:text-2xl text-zinc-500 font-light mb-10 max-w-2xl leading-relaxed">
            A digital-first Marketer and Creative Strategist crafting practical, data-informed systems for the next generation of growth.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} direction="up" duration={0.8}>
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              className="bg-zinc-900 text-zinc-50 px-8 py-3.5 rounded-full font-medium hover:bg-zinc-800 transition-colors shadow-sm"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="bg-white text-zinc-900 border border-zinc-200 px-8 py-3.5 rounded-full font-medium hover:bg-zinc-50 transition-colors shadow-sm"
            >
              Contact Me
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Decorative subtle element */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-100 rounded-full blur-[100px] -z-10 pointer-events-none hidden lg:block"
      />
    </SectionWrapper>
  );
}

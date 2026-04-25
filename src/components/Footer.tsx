import { FadeIn } from './FadeIn';
import { Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zinc-900 text-zinc-50 py-20 mt-20 rounded-t-3xl md:rounded-t-[3rem]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-20">
          <div>
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Let's build<br />something great.
              </h2>
              <p className="text-zinc-400 max-w-sm">
                I'm currently available for freelance work and open to new opportunities.
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col justify-end">
            <FadeIn delay={0.2} direction="up" className="space-y-6">
              <a 
                href="mailto:nguyenducthinh.05.08.05@gmail.com" 
                className="inline-flex items-center gap-3 text-xl font-medium text-zinc-300 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                  <Mail size={20} />
                </div>
                nguyenducthinh.05.08.05@gmail.com
              </a>
              
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
                  aria-label="LinkedIn"
                >
                  <ExternalLink size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
                  aria-label="GitHub or Behance"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.3} direction="up">
          <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <p>© {currentYear} Nguyễn Đức Thịnh. All rights reserved.</p>
            <p>Designed with simplicity in mind.</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}

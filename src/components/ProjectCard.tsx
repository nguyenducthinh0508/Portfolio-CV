import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  index: number;
}

export function ProjectCard({ title, description, tags, link, index }: ProjectCardProps) {
  return (
    <FadeIn delayMs={100 * index} durationMs={800} className="h-full">
      <a 
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 hover:border-zinc-300 hover:shadow-sm hover:-translate-y-1 transition-all duration-300"
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
          <span className="p-2 bg-zinc-50 rounded-full text-zinc-400 group-hover:text-zinc-900 group-hover:bg-zinc-100 transition-colors">
            <ArrowUpRight size={18} />
          </span>
        </div>
        
        <p className="text-zinc-600 mb-8 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-zinc-50 border border-zinc-100 rounded-full text-xs font-medium text-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </FadeIn>
  );
}

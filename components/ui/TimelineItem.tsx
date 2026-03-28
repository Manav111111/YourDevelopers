import { JourneyItem } from "@/lib/data";
import { Briefcase, Trophy, GraduationCap } from "lucide-react";

interface TimelineItemProps {
  item: JourneyItem;
}

export function TimelineItem({ item }: TimelineItemProps) {
  const isEdu = item.type === "education";
  const isAchiev = item.type === "achievement";

  return (
    <div className="relative pl-12 md:pl-0 w-full md:w-1/2 md:even:ml-auto md:even:pl-16 md:odd:pr-16 mb-16 last:mb-0 group timeline-item">
      {/* Node Bullet */}
      <div className="absolute left-0 md:left-auto md:right-[-6px] md:group-even:left-[-6px] md:group-even:right-auto top-6 w-3 h-3 rounded-full bg-dark border-2 border-accent z-10 group-hover:bg-accent transition-colors duration-300 md:hidden block" />
      
      <div className="bg-[#1f1f1d] border border-white/5 rounded-2xl p-6 md:p-8 hover-target group-hover:border-accent/30 transition-colors duration-500">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <span className="p-3 rounded-xl bg-white/5 text-accent self-start sm:self-auto">
            {isEdu ? <GraduationCap size={24} /> : isAchiev ? <Trophy size={24} /> : <Briefcase size={24} />}
          </span>
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-accent uppercase block mb-1">
              {item.date}
            </span>
            <h4 className="text-lg font-body font-medium text-white/80">{item.org}</h4>
          </div>
        </div>
        
        <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">{item.role}</h3>
        
        <p className="text-muted leading-relaxed mb-6">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1.5 rounded bg-white/5 text-[11px] font-mono tracking-widest uppercase text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

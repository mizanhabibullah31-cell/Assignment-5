import type { Technology } from "../type";

export interface ExtendedTechnology extends Omit<Technology, "rating"> {
  badge?: string;
  badgeColor?: string; 
  rating?: number; 
}

interface TechCardProps {
  tech: ExtendedTechnology;
  isSelected: boolean;
  onAdd: (tech: ExtendedTechnology) => void;
}

export default function TechCard({ tech, isSelected, onAdd }: TechCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative">
      
      <div>
        <div className="flex items-center justify-between min-h-8 mb-4">
          <div className="w-8 h-8 flex items-center justify-center">
            {typeof tech.icon === "string" && tech.icon.startsWith("http") ? (
              <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
            ) : (
              <span className="text-2xl">{tech.icon}</span>
            )}
          </div>

          {tech.badge && (
            <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-cyan-50 text-cyan-600 border border-cyan-100/50">
              {tech.badge}
            </span>
          )}
        </div>

       
        <h3 className="text-lg font-bold text-slate-900">{tech.name}</h3>
        <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-3 min-h-12">
          {tech.description}
        </p>
      </div>

      
      <div className="mt-6">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded-md bg-gray-100/80 text-slate-600 text-[11px] font-medium">
              {tech.category}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-gray-100/80 text-slate-600 text-[11px] font-medium">
              {tech.difficulty}
            </span>
          </div>

          {tech.rating !== undefined && (
            <div className="flex items-center space-x-1 font-semibold text-slate-800 text-[12px]">
              <span className="text-amber-400 text-xs">★</span>
              <span>{tech.rating.toFixed(1)}</span>
            </div>
          )}
        </div>

    
        <button
          onClick={() => onAdd(tech)}
          disabled={isSelected}
          className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold transition-all ${
            isSelected
              ? "bg-slate-200 text-slate-500 cursor-not-allowed"
              : "bg-[#0b0f19] hover:bg-slate-800 text-white shadow-sm"
          }`}
        >
          {isSelected ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>

    </div>
  );
}
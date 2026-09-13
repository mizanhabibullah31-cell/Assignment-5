import type { Technology } from "../type";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm sticky top-6 w-full max-w-xs">
      
      <div className="mb-5">
        <h3 className="font-bold text-xl text-slate-900 tracking-tight">
          Your Stack
        </h3>
        <p className="text-xs font-medium text-slate-400 mt-1">
          {stack.length} {stack.length === 1 ? "Technology" : "Technology"}{" "}
          Selected
        </p>
      </div>

      
      {stack.length === 0 ? (
        <div className="text-center py-8 px-2 border-2 border-dashed border-slate-100 rounded-2xl mb-5">
          <p className="text-xs text-slate-400 font-medium">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="space-y-3 mb-6 max-h-[60vh] overflow-y-auto pr-0.5">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-slate-200 transition-all"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-7 h-7 shrink-0 flex items-center justify-center">
                  {typeof item.icon === "string" &&
                  item.icon.startsWith("http") ? (
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-xl">{item.icon}</span>
                  )}
                </div>
                <div className="truncate">
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {item.name}
                  </h4>
                  <span className="text-[10px] font-medium text-slate-400 block -mt-0.5">
                    {item.category}
                  </span>
                </div>
              </div>

              
              <button
                onClick={() => onRemove(item.id)}
                className="text-slate-300 hover:text-slate-500 transition-colors p-1 shrink-0 ml-2"
                aria-label={`Remove ${item.name}`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      
      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full py-2.5 rounded-xl border border-red-200 text-red-500 hover:bg-red-50/50 hover:border-red-300 text-xs font-semibold transition-all"
        >
          Remove All
        </button>
      )}
    </div>
  );
}
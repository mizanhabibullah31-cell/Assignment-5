import React from 'react';

const TechCard = ({ tech, isSelected, onAdd }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
      <div>
        {/* Top Header: Icon & Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 p-2 border border-gray-100">
            <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
          </div>
          {tech.badge && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-600">
              {tech.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>

        {/* Description */}
        <p className="text-xs text-gray-500 mb-6 line-clamp-3 leading-relaxed">
          {tech.description}
        </p>
      </div>

      <div>
        {/* Metadata Row */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-2 border-t border-gray-50">
          <span className="bg-gray-100 px-2.5 py-1 rounded-md text-gray-700 font-medium">
            {tech.category}
          </span>
          <span className="text-gray-400 font-normal">{tech.difficulty}</span>
          <div className="flex items-center text-amber-500 font-bold">
            ★ <span className="ml-1 text-gray-700">{tech.rating}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onAdd(tech)}
          disabled={isSelected}
          className={`w-full py-2.5 rounded-xl font-medium text-sm transition-all ${
            isSelected
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
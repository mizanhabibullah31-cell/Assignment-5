import React from 'react';
import { HiX } from 'react-icons/hi';

const StackSidebar = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">
      {/* Sidebar Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
        <p className="text-xs text-gray-400 font-medium mt-1">
          {stack.length > 0
            ? `${stack.length} ${stack.length === 1 ? 'Technology' : 'Technologies'} Selected`
            : 'No technologies selected yet.'}
        </p>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-2xl py-12 px-4 text-center">
          <p className="text-sm font-medium text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        /* Selected Items List */
        <div className="space-y-3 mb-6">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-white shadow-xs"
            >
              <div className="flex items-center space-x-3">
                <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                aria-label="Remove item"
              >
                <HiX size={18} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All Button */}
      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full py-2.5 border border-red-200 text-red-500 hover:bg-red-50 font-medium text-sm rounded-xl transition-colors"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default StackSidebar;
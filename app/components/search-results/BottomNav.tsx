'use client';

import { Home, Search, FileText, Settings, MoreHorizontal } from 'lucide-react';

export default function BottomNav() {
  const navItems = [
    { icon: Home, label: 'Home', active: false },
    { icon: Search, label: 'Search', active: true },
    { icon: FileText, label: 'My Loads', active: false },
    { icon: Settings, label: 'Manage', active: false },
    { icon: MoreHorizontal, label: 'More', active: false },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => {}}
              className="flex flex-col items-center justify-center flex-1 py-1 cursor-pointer hover:bg-gray-50 rounded transition-colors"
            >
              <Icon 
                className={`w-6 h-6 mb-1 ${
                  item.active ? 'text-orange-600' : 'text-gray-600'
                }`}
              />
              <span 
                className={`text-xs ${
                  item.active ? 'text-orange-600 font-medium' : 'text-gray-600'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

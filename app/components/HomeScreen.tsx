"use client"
import { useState } from 'react';
import { Bell, Search } from 'lucide-react';
import BottomNav from './search-results/BottomNav';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('News');
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#ff6b35] px-4 py-4 flex items-center justify-between">
        <div className="w-8" /> {/* Spacer for centering */}
        <h1 className="text-xl font-semibold text-white">Home</h1>
        <button
          type="button"
          className="p-1 rounded-full hover:bg-orange-600 transition-colors cursor-pointer"
        >
          <Bell className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 pt-4 pb-3 bg-white">
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 border border-gray-200">
          <Search className="w-5 h-5 text-[#ff6b35] mr-3" />
          <input
            type="text"
            placeholder="Search by Load #"
            className="flex-1 bg-transparent text-base outline-none text-gray-700 placeholder-gray-400"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b flex">
        {['News', 'NAT / NAL', 'Watched'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-center font-medium transition-colors ${
              activeTab === tab
                ? 'text-black border-b-2 border-[#ff6b35]'
                : 'text-gray-500'
            }`}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area - Empty for now */}
      <div className="flex-1 bg-white pb-20">
        {/* Empty content area - ready for dynamic news */}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}


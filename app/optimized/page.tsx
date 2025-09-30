"use client"
import { Search } from 'lucide-react';
import OptimizedLoadCard from '../components/OptimizedLoadCard';
import BottomNav from '../components/search-results/BottomNav';
import { mockLoads } from '../data/mockLoads';

export default function Optimized() {
  // Split loads into different sections
  const loadsNearYou = mockLoads.slice(2, 6); // Oakland, SF, Modesto, Fresno
  const californiaToTexas = mockLoads.filter(load => 
    load.pickup.state === 'CA' && load.delivery.state === 'TX'
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Search Bar - Fixed at top */}
      <div className="sticky top-0 z-20 bg-white px-4 pt-4 mb-2 border-b border-gray-100">
        <div className="flex items-center bg-gray-200 rounded-lg px-4 py-3">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search for loads or lanes"
            className="flex-1 bg-transparent text-base outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Main Content - with bottom padding for nav */}
      <div className="">
        {/* Loads for you Banner */}
        <div className="mb-4">
        <div className="relative overflow-hidden w-full bg-orange-300/90 px-4 py-2">
          <div className="relative z-10">
            <h2 className="text-2xl text-white font-bold mb-0">Loads for you</h2>
            <p className="text-base text-white ">Based on your recent activities</p>
          </div>
        </div>
      </div>

      {/* Loads near you Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h3 className="text-xl font-bold text-black">Loads near you</h3>
          <button className="text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            See all
          </button>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 px-4 pb-2">
            {loadsNearYou.map((load) => (
              <OptimizedLoadCard key={load.id} load={load} />
            ))}
          </div>
        </div>
      </div>

        {/* California to Texas Route Section */}
        {californiaToTexas.length > 0 && (
            <div className="mb-6">
            <div className="flex items-center justify-between px-4 mb-3">
                <h3
                  className="text-xl font-bold text-black truncate"
                  style={{ maxWidth: '220px', minWidth: '180px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  title={`${californiaToTexas[0].pickup.city}, ${californiaToTexas[0].pickup.state} to ${californiaToTexas[0].delivery.city}, ${californiaToTexas[0].delivery.state}`}
                >
                  {californiaToTexas[0].pickup.city}, {californiaToTexas[0].pickup.state} to{' '}
                  {californiaToTexas[0].delivery.city}, {californiaToTexas[0].delivery.state}
                </h3>
                <button className="text-base font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                  See all
                </button>
            </div>
            
            {/* Horizontal Scroll Container */}
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-3 px-4 pb-2">
                {californiaToTexas.map((load) => (
                    <OptimizedLoadCard key={load.id} load={load} />
                ))}
                </div>
            </div>
            </div>
        )}
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

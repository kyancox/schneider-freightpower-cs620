"use client"
import Header from './components/search-results/Header';
import FilterBar from './components/search-results/FilterBar';
import LoadCard from './components/search-results/LoadCard';
import BottomNav from './components/search-results/BottomNav';
import { mockLoads } from './data/mockLoads';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#eae6e3] pb-20">
      <Header />
      <FilterBar />
      
      <div className="divide-y divide-gray-200">
        {mockLoads.map((load) => (
          <LoadCard key={load.id} load={load} />
        ))}
      </div>
      
      <BottomNav />
    </div>
  );
}
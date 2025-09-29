'use client';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { mockLoads } from '../../data/mockLoads';

export default function BookLoad() {
  const params = useParams();
  const router = useRouter();
  const loadId = params.id as string;
  
  const load = mockLoads.find((l) => l.id === loadId);

  if (!load) {
    return (
      <div className="min-h-screen bg-[#eae6e3] p-4">
        <div className="text-center mt-8">Load not found</div>
      </div>
    );
  }

  const handleBookNow = () => {
    // Placeholder for actual booking logic
    alert('Load booked successfully!');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-[#eae6e3] p-6">
      {/* Back Arrow */}
      <button onClick={handleBack} className="mb-4">
        <ArrowLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Book Header */}
      <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">Confirm Booking</h1>

      {/* Load Details Card */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto mb-8">

        {/* Price */}
        <div className="text-4xl font-bold text-gray-900 mb-4">
          ${load.price}
        </div>

        {/* Route */}
        <div className="mb-6">
          <div className="text-xl font-bold text-gray-900">
            {load.pickup.city}, {load.pickup.state} → {load.delivery.city}, {load.delivery.state}
          </div>
        </div>

        {/* Pickup Details */}
        <div className="mb-4">
          <div className="text-sm font-semibold text-gray-700 mb-1">Pickup:</div>
          <div className="text-base text-gray-900">
            {load.pickup.date} {load.pickup.time}
          </div>
          <div className="text-base text-gray-900">
            {load.pickup.date.split(',')[1]} {load.pickup.time.split(' ')[1]} {load.pickup.time.split(' ')[2]}
          </div>
          {load.pickup.address && (
            <div className="text-sm text-gray-600 mt-1">{load.pickup.address}</div>
          )}
        </div>

        {/* Delivery Details */}
        <div className="mb-6">
          <div className="text-sm font-semibold text-gray-700 mb-1">Delivery:</div>
          <div className="text-base text-gray-900">
            {load.delivery.date} {load.delivery.time}
          </div>
          <div className="text-base text-gray-900">
            {load.delivery.date.split(',')[1]} {load.delivery.time.split(' ')[1]} {load.delivery.time.split(' ')[2]}
          </div>
          {load.delivery.address && (
            <div className="text-sm text-gray-600 mt-1">{load.delivery.address}</div>
          )}
        </div>

        {/* RPM, Distance, Weight */}
        <div className="border-t border-gray-200 pt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-semibold text-gray-700">Est Total RPM:</span>
            <span className="text-base font-bold text-orange-600">${load.estTotalRPM.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">{load.distance} miles</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">{load.weight.toLocaleString()} lb</span>
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <div className="max-w-2xl mx-auto">
        <button
          onClick={handleBookNow}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 text-xl rounded-lg border-4 border-orange-700 transition-colors"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

'use client';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, MapPin, Calendar, Clock, AlertCircle, RefreshCw, TrendingUp } from 'lucide-react';
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
    router.push('/optimized/home')
  };

  const handleBack = () => {
    router.back();
  };

  // Calculate price per mile
  const pricePerMile = load.distance > 0 ? (load.price / load.distance).toFixed(3) : '0.000';

  return (
    <div className="min-h-screen bg-[#eae6e3] p-6">
      {/* Back Arrow */}
      <button onClick={handleBack} className="mb-4">
        <ArrowLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Book Header */}
      <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">Confirm Booking</h1>

      {/* Price Card - Inspired by mock */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg max-w-2xl mx-auto mb-6 relative">
        {load.badge && (
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {load.badge}
          </div>
        )}
        <div className="text-sm font-medium mb-1 opacity-90">Total Price</div>
        <div className="flex items-end justify-between">
          <div className="text-5xl font-bold">${load.price}</div>
          <div className="text-right text-sm pb-2">
            <div className="font-semibold">${pricePerMile}/mi</div>
            <div className="opacity-90">{load.distance.toFixed(2)} Miles</div>
          </div>
        </div>
        {load.isReload && (
          <div className="mt-3 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            <RefreshCw className="w-4 h-4" />
            <span>Reload Available</span>
          </div>
        )}
      </div>

      {/* Load Details Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto mb-8">

        {/* Route */}
        <div className="mb-6">
          <div className="text-xl font-bold text-gray-900">
            Route Information
          </div>
        </div>

        {/* Pickup and Delivery in Grid - Inspired by mock */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Pickup Details */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-1 text-orange-600 mb-2">
              <MapPin className="w-4 h-4" />
              <span className="font-semibold text-base">Pickup</span>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-1.5 text-gray-700">
                <Calendar className="w-3.5 h-3.5" />
                <span>{load.pickup.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-700">
                <Clock className="w-3.5 h-3.5" />
                <span>{load.pickup.time}</span>
              </div>
              {load.pickup.address && (
                <div className="font-semibold text-gray-900 mt-2">{load.pickup.address}</div>
              )}
              <div className="font-semibold text-gray-900 mt-1">{load.pickup.city}, {load.pickup.state}</div>
              {load.pickup.liveLoad && (
                <div className="mt-2 inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                  Live Load
                </div>
              )}
              {load.pickup.emptyMiles > 0 && (
                <div className="text-xs text-gray-600 mt-1">
                  Empty miles: {load.pickup.emptyMiles} mi
                </div>
              )}
            </div>
          </div>

          {/* Delivery Details */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-1 text-orange-600 mb-2">
              <MapPin className="w-4 h-4" />
              <span className="font-semibold text-base">Delivery</span>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-1.5 text-gray-700">
                <Calendar className="w-3.5 h-3.5" />
                <span>{load.delivery.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-700">
                <Clock className="w-3.5 h-3.5" />
                <span>{load.delivery.time}</span>
              </div>
              {load.delivery.address && (
                <div className="font-semibold text-gray-900 mt-2">{load.delivery.address}</div>
              )}
              <div className="font-semibold text-gray-900 mt-1">{load.delivery.city}, {load.delivery.state}</div>
              {load.delivery.emptyMiles > 0 && (
                <div className="text-xs text-gray-600 mt-1">
                  Empty miles: {load.delivery.emptyMiles} mi
                </div>
              )}
              {load.delivery.instructions.length > 0 && (
                <div className="mt-3 pt-2 border-t border-gray-300">
                  <div className="text-xs font-semibold text-gray-700 mb-1">Instructions:</div>
                  <ul className="text-xs text-gray-600 space-y-0.5">
                    {load.delivery.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-1.5">•</span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RPM Info - Inspired by mock */}
        <div className="bg-orange-50 rounded-xl p-4 border border-orange-200 mb-4">
          <div className="text-center">
            <div className="text-sm font-medium text-gray-600 mb-1">EST Total RPM</div>
            <div className="text-2xl font-bold text-gray-900">{load.weight.toLocaleString()} lbs</div>
            <div className="text-lg font-semibold text-orange-600">${load.estTotalRPM.toFixed(2)}</div>
          </div>
        </div>

        {/* Load Details */}
        <div className="border-t border-gray-200 pt-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Distance:</span>
            <span className="text-sm font-semibold text-gray-900">{load.distance.toFixed(2)} miles</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Weight:</span>
            <span className="text-sm font-semibold text-gray-900">{load.weight.toLocaleString()} lbs</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-gray-200">
            <div className="flex items-center gap-1.5 text-sm text-gray-600">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Loaded RPM:</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">${load.loadedRPM.toFixed(2)}/mi</span>
          </div>
        </div>
      </div>

      {/* Book Now Button - Enhanced styling */}
      <div className="max-w-2xl mx-auto">
        <button
          onClick={handleBookNow}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          BOOK NOW
        </button>
        <p className="text-xs text-gray-600 text-center mt-3">
          By pressing confirm, you agree to the terms and conditions.
        </p>
      </div>
    </div>
  );
}

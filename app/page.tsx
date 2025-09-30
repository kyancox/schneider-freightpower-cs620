"use client"
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ff6b35] to-[#ff8c61] flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">FreightPower</h1>
          <p className="text-white/90 text-lg">Choose your experience</p>
        </div>

        <div className="space-y-4">
          {/* FreightPower Demo Entry Point */}
          <button
            onClick={() => router.push('/demo')}
            className="w-full bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer text-left group"
            type="button"
          >
            <h2 className="text-2xl font-bold text-[#ff6b35] mb-2 group-hover:text-[#ff8c61] transition-colors">
              FreightPower Demo
            </h2>
            <p className="text-gray-600">
              Experience the current FreightPower load search interface with all features
            </p>
          </button>

          {/* Optimized UI Entry Point */}
          <button
            onClick={() => router.push('/optimized')}
            className="w-full bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer text-left group"
            type="button"
          >
            <h2 className="text-2xl font-bold text-[#ff6b35] mb-2 group-hover:text-[#ff8c61] transition-colors">
              Optimized UI
            </h2>
            <p className="text-gray-600">
              Try our streamlined and optimized user experience
            </p>
          </button>
        </div>

        <div className="text-center pt-4">
          <p className="text-white/75 text-sm">
            Select an option to get started
          </p>
        </div>
      </div>
    </div>
  );
}
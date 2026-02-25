'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import BottomNav from '@/app/components/BottomNav';

export default function DashboardPage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    months: 8,
    days: 0,
    hours: 0,
    minutes: 0
  });

  // Countdown timer for 8-month harvest cycle
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 8);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ months, days, hours, minutes });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-stone-50 pb-20">
        {/* Header */}
        <header className="bg-gradient-to-br from-[#0047AB] to-[#1a1a1a] text-white px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => router.back()} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center active:scale-95 transition-transform">
              <i className="ph ph-arrow-left text-xl"></i>
            </button>
            <h1 className="text-2xl font-bold tracking-tight">Progress Dashboard</h1>
            <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center active:scale-95 transition-transform">
              <i className="ph ph-download-simple text-xl"></i>
            </button>
          </div>
          
          {/* Harvest Countdown Hero */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <i className="ph-fill ph-timer text-[#FFD700] text-2xl"></i>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#FFD700]">Harvest Countdown</span>
            </div>
            <p className="text-white/80 text-sm mb-6">Target: 30-40 tons/hectare</p>
            
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center border border-white/10">
                <div className="text-3xl font-bold text-white mb-1">{timeLeft.months}</div>
                <div className="text-[10px] uppercase text-white/60 tracking-wide">Months</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center border border-white/10">
                <div className="text-3xl font-bold text-white mb-1">{timeLeft.days}</div>
                <div className="text-[10px] uppercase text-white/60 tracking-wide">Days</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center border border-white/10">
                <div className="text-3xl font-bold text-white mb-1">{timeLeft.hours}</div>
                <div className="text-[10px] uppercase text-white/60 tracking-wide">Hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center border border-white/10">
                <div className="text-3xl font-bold text-white mb-1">{timeLeft.minutes}</div>
                <div className="text-[10px] uppercase text-white/60 tracking-wide">Mins</div>
              </div>
            </div>
          </div>
        </header>

        <main className="px-6 py-6 space-y-6">
          {/* Overall Progress */}
          <section className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[#1a1a1a]">Overall Progress</h2>
              <span className="text-2xl font-bold text-[#0047AB]">42%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative w-full h-3 bg-stone-200 rounded-full overflow-hidden mb-6">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0047AB] to-[#00BFFF] rounded-full transition-all duration-1000" style={{ width: '42%' }}></div>
            </div>

            {/* Milestone Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <i className="ph-fill ph-check text-green-600 text-xl"></i>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1a1a1a]">Land Prep</div>
                  <div className="text-xs text-stone-500">Completed</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <i className="ph-fill ph-check text-green-600 text-xl"></i>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1a1a1a]">Planting</div>
                  <div className="text-xs text-stone-500">Completed</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0047AB] flex items-center justify-center animate-pulse">
                  <i className="ph-fill ph-spinner text-white text-xl"></i>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1a1a1a]">Growth</div>
                  <div className="text-xs text-stone-500">In Progress</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center">
                  <i className="ph ph-clock text-stone-400 text-xl"></i>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1a1a1a]">Harvest</div>
                  <div className="text-xs text-stone-500">Pending</div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Metrics */}
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-4">Key Metrics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#0047AB] to-[#0066CC] rounded-3xl p-5 text-white shadow-lg">
                <i className="ph-fill ph-users text-3xl mb-3 opacity-80"></i>
                <div className="text-3xl font-bold mb-1">24</div>
                <div className="text-xs opacity-80">Active Farmers</div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-5 text-white shadow-lg">
                <i className="ph-fill ph-plant text-3xl mb-3 opacity-80"></i>
                <div className="text-3xl font-bold mb-1">12.5</div>
                <div className="text-xs opacity-80">Hectares Planted</div>
              </div>

              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-3xl p-5 text-white shadow-lg">
                <i className="ph-fill ph-currency-circle-dollar text-3xl mb-3 opacity-80"></i>
                <div className="text-3xl font-bold mb-1">8</div>
                <div className="text-xs opacity-80">Active Investors</div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-5 text-white shadow-lg">
                <i className="ph-fill ph-chart-line-up text-3xl mb-3 opacity-80"></i>
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-xs opacity-80">ISO Compliance</div>
              </div>
            </div>
          </section>

          {/* Soil Health Status */}
          <section className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[#1a1a1a]">Soil Health Status</h2>
              <button onClick={() => router.push('/soil-management')} className="text-sm font-semibold text-[#0047AB]">
                View Details →
              </button>
            </div>

            <div className="space-y-4">
              {/* pH Level */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-stone-600">pH Level</span>
                  <span className="text-sm font-bold text-green-600">6.5 (Optimal)</span>
                </div>
                <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              {/* Organic Matter */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-stone-600">Organic Matter</span>
                  <span className="text-sm font-bold text-green-600">High</span>
                </div>
                <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              {/* Nitrogen */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-stone-600">Nitrogen (N)</span>
                  <span className="text-sm font-bold text-yellow-600">Moderate</span>
                </div>
                <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>

              {/* Phosphorus */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-stone-600">Phosphorus (P)</span>
                  <span className="text-sm font-bold text-green-600">Good</span>
                </div>
                <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </section>

          {/* CCP (Critical Control Points) Monitoring - ISO 22000 */}
          <section className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
            <div className="flex items-center gap-2 mb-4">
              <i className="ph-fill ph-shield-check text-[#0047AB] text-2xl"></i>
              <h2 className="text-lg font-bold text-[#1a1a1a]">CCP Monitoring</h2>
              <span className="ml-auto text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">ISO 22000</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-green-50 border border-green-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                    <i className="ph-fill ph-check text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Water Quality</div>
                    <div className="text-xs text-stone-500">Last checked: 2h ago</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-green-600">PASS</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-green-50 border border-green-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                    <i className="ph-fill ph-check text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Pesticide Control</div>
                    <div className="text-xs text-stone-500">Last checked: 5h ago</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-green-600">PASS</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-green-50 border border-green-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                    <i className="ph-fill ph-check text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Temperature Control</div>
                    <div className="text-xs text-stone-500">Last checked: 1h ago</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-green-600">PASS</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-yellow-50 border border-yellow-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center">
                    <i className="ph-fill ph-warning text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Storage Hygiene</div>
                    <div className="text-xs text-stone-500">Last checked: 12h ago</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-yellow-600">REVIEW</span>
              </div>
            </div>
          </section>

          {/* Recent Activity Timeline */}
          <section className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-6">Recent Activity</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#0047AB] flex items-center justify-center">
                    <i className="ph-fill ph-drop text-white"></i>
                  </div>
                  <div className="w-[2px] h-12 bg-stone-200"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="text-sm font-semibold text-[#1a1a1a] mb-1">Irrigation System Updated</div>
                  <div className="text-xs text-stone-500 mb-2">Field B3 - Water flow optimized</div>
                  <div className="text-xs text-stone-400">2 hours ago</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                    <i className="ph-fill ph-plant text-white"></i>
                  </div>
                  <div className="w-[2px] h-12 bg-stone-200"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="text-sm font-semibold text-[#1a1a1a] mb-1">Organic Fertilizer Applied</div>
                  <div className="text-xs text-stone-500 mb-2">Section A - 500kg compost</div>
                  <div className="text-xs text-stone-400">5 hours ago</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <i className="ph-fill ph-users text-white"></i>
                  </div>
                  <div className="w-[2px] h-12 bg-stone-200"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="text-sm font-semibold text-[#1a1a1a] mb-1">Farmer Training Completed</div>
                  <div className="text-xs text-stone-500 mb-2">24 farmers - GAP certification</div>
                  <div className="text-xs text-stone-400">1 day ago</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center">
                    <i className="ph-fill ph-chart-line-up text-white"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#1a1a1a] mb-1">New Investment Received</div>
                  <div className="text-xs text-stone-500 mb-2">€50,000 - Expansion project</div>
                  <div className="text-xs text-stone-400">2 days ago</div>
                </div>
              </div>
            </div>
          </section>

          {/* Farmer Performance Leaderboard */}
          <section className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[#1a1a1a]">Top Performers</h2>
              <button onClick={() => router.push('/farmers')} className="text-sm font-semibold text-[#0047AB]">
                View All →
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#FFD700]/20 to-transparent border border-[#FFD700]/30">
                <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center text-white font-bold text-lg">1</div>
                <div className="flex-1">
                  <div className="font-semibold text-[#1a1a1a]">Ahmad Saputra</div>
                  <div className="text-xs text-stone-500">SOP Score: 98% • 2.5 ha</div>
                </div>
                <div className="text-2xl">🏆</div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50">
                <div className="w-12 h-12 rounded-full bg-stone-300 flex items-center justify-center text-white font-bold text-lg">2</div>
                <div className="flex-1">
                  <div className="font-semibold text-[#1a1a1a]">Budi Santoso</div>
                  <div className="text-xs text-stone-500">SOP Score: 95% • 3.0 ha</div>
                </div>
                <div className="text-2xl">🥈</div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50">
                <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-lg">3</div>
                <div className="flex-1">
                  <div className="font-semibold text-[#1a1a1a]">Siti Nurhaliza</div>
                  <div className="text-xs text-stone-500">SOP Score: 92% • 1.8 ha</div>
                </div>
                <div className="text-2xl">🥉</div>
              </div>
            </div>
          </section>

          {/* Weather & Location Info */}
          <section className="bg-gradient-to-br from-[#0047AB] to-[#1a1a1a] rounded-3xl p-6 shadow-lg text-white">
            <div className="flex items-center gap-2 mb-4">
              <i className="ph-fill ph-map-pin text-[#FFD700] text-xl"></i>
              <h2 className="text-lg font-bold">Location: Hatusua, SBB</h2>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-4xl font-bold mb-1">28°C</div>
                <div className="text-sm opacity-80">Partly Cloudy</div>
              </div>
              <div className="text-6xl">⛅</div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
              <div className="text-center">
                <i className="ph-fill ph-drop text-2xl text-[#00BFFF] mb-1"></i>
                <div className="text-xs opacity-80">Humidity</div>
                <div className="text-sm font-semibold">72%</div>
              </div>
              <div className="text-center">
                <i className="ph-fill ph-wind text-2xl text-[#00BFFF] mb-1"></i>
                <div className="text-xs opacity-80">Wind</div>
                <div className="text-sm font-semibold">12 km/h</div>
              </div>
              <div className="text-center">
                <i className="ph-fill ph-waves text-2xl text-[#00BFFF] mb-1"></i>
                <div className="text-xs opacity-80">Maritime</div>
                <div className="text-sm font-semibold">Calm</div>
              </div>
            </div>
          </section>

        </main>
      </div>
      <BottomNav />
    </>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import BottomNav from '@/app/components/BottomNav';

export default function HomePage() {
  const router = useRouter();

    return (
      <>
        <div className="pt-[55px] antialiased selection:bg-lime selection:text-forest pb-20">
          {/* 
      AESTHETIC DNA:
      Trend Core: Agri-Tech Modernism
      Spice: Acid Lime Accents
      Palette: Stone / Deep Forest / Lime
      Type: Plus Jakarta Sans (Geometric & Clean)
    */}

    {/* Header */}
    <header className="w-full px-6 flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-forest rounded-lg flex items-center justify-center text-lime">
                <i className="ph-fill ph-plant text-xl"></i>
            </div>
            <span className="text-xl font-bold tracking-tight text-forest">YAREHNASA</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-[#0047AB] flex items-center justify-center text-white shadow-sm active:scale-95 transition-transform" onClick={() => router.push('/dashboard')}>
              <i className="ph-fill ph-chart-bar text-xl"></i>
          </button>
          <button className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 shadow-sm active:scale-95 transition-transform" onClick={() => router.push('/notifications')}>
              <i className="ph ph-bell text-xl"></i>
          </button>
        </div>
    </header>

    {/* Main Content */}
    <main className="w-full">
        
        {/* Hero: Harvest Countdown */}
        <section className="px-4 mb-8 animate-enter" style={{ animationDelay: '0.1s' }}>
            <div className="w-full h-[420px] rounded-[32px] overflow-hidden relative shadow-soft group">
                {/* Background Image */}
                <img src="https://images.unsplash.com/photo-1625246333195-58f214f77812?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                     alt="Wheat Field" 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/90 backdrop-blur-sm mb-4">
                        <span className="w-2 h-2 rounded-full bg-forest animate-pulse"></span>
                        <span className="text-xs font-bold text-forest uppercase tracking-wider">Live Cycle</span>
                    </div>

                    <h1 className="text-white text-3xl font-medium leading-tight mb-2">Golden Wheat<br />Harvest</h1>
                    
                    <p className="text-stone-200 text-sm mb-6 opacity-90">Expected yield +12% vs last season</p>

                    {/* Countdown */}
                    <div className="flex gap-3 mb-6">
                        <div className="count-card flex-1 rounded-2xl p-3 text-center border border-white/10">
                            <span className="block text-2xl font-bold text-lime">14</span>
                            <span className="text-[10px] uppercase text-stone-300 tracking-wide">Days</span>
                        </div>
                        <div className="count-card flex-1 rounded-2xl p-3 text-center border border-white/10">
                            <span className="block text-2xl font-bold text-lime">08</span>
                            <span className="text-[10px] uppercase text-stone-300 tracking-wide">Hours</span>
                        </div>
                        <div className="count-card flex-1 rounded-2xl p-3 text-center border border-white/10">
                            <span className="block text-2xl font-bold text-lime">45</span>
                            <span className="text-[10px] uppercase text-stone-300 tracking-wide">Mins</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Quick Access Grid (Navigation Buttons) */}
        <section className="px-6 mb-10 animate-enter" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-forest">Explore Ecosystem</h2>
                <i className="ph ph-arrow-right text-stone-400"></i>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
                {/* Farmers */}
                <button onClick={() => router.push('/farmers')} className="bg-white p-4 rounded-3xl border border-stone-100 shadow-sm flex flex-col items-start gap-3 active:scale-[0.98] transition-all hover:border-lime/50 group">
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-forest group-hover:bg-lime group-hover:text-forest transition-colors">
                        <i className="ph-fill ph-users text-xl"></i>
                    </div>
                    <div className="text-left">
                        <span className="block font-semibold text-forest">Farmers</span>
                        <span className="text-xs text-stone-500">Meet the hands</span>
                    </div>
                </button>

                {/* Soil Management */}
                <button onClick={() => router.push('/soil-management')} className="bg-white p-4 rounded-3xl border border-stone-100 shadow-sm flex flex-col items-start gap-3 active:scale-[0.98] transition-all hover:border-lime/50 group">
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-forest group-hover:bg-lime group-hover:text-forest transition-colors">
                        <i className="ph-fill ph-globe-hemisphere-west text-xl"></i>
                    </div>
                    <div className="text-left">
                        <span className="block font-semibold text-forest">Soil Mgmt</span>
                        <span className="text-xs text-stone-500">Data & Analysis</span>
                    </div>
                </button>

                {/* Impact */}
                <button onClick={() => router.push('/impact')} className="bg-white p-4 rounded-3xl border border-stone-100 shadow-sm flex flex-col items-start gap-3 active:scale-[0.98] transition-all hover:border-lime/50 group">
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-forest group-hover:bg-lime group-hover:text-forest transition-colors">
                        <i className="ph-fill ph-leaf text-xl"></i>
                    </div>
                    <div className="text-left">
                        <span className="block font-semibold text-forest">Impact</span>
                        <span className="text-xs text-stone-500">Carbon offset</span>
                    </div>
                </button>

                {/* Investors */}
                <button onClick={() => router.push('/investors')} className="bg-white p-4 rounded-3xl border border-stone-100 shadow-sm flex flex-col items-start gap-3 active:scale-[0.98] transition-all hover:border-lime/50 group">
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-forest group-hover:bg-lime group-hover:text-forest transition-colors">
                        <i className="ph-fill ph-chart-line-up text-xl"></i>
                    </div>
                    <div className="text-left">
                        <span className="block font-semibold text-forest">Investors</span>
                        <span className="text-xs text-stone-500">Growth ROI</span>
                    </div>
                </button>
            </div>
        </section>

        {/* Breaking News: Horizontal Scroll */}
        <section className="mb-10 animate-enter" style={{ animationDelay: '0.3s' }}>
            <div className="px-6 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <h2 className="text-lg font-bold text-forest">Eco-Update</h2>
            </div>

            <div className="flex overflow-x-auto hide-scrollbar px-6 gap-4 pb-4 snap-x">
                {/* News Card 1 */}
                <div className="min-w-[280px] snap-center bg-white rounded-3xl p-3 border border-stone-100 shadow-sm" onClick={() => router.push('/news-detail')}>
                    <div className="h-32 rounded-2xl overflow-hidden mb-3 relative">
                        <img alt="" src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" />
                        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-forest">BREAKING</div>
                    </div>
                    <h3 className="font-bold text-forest leading-snug mb-1">New vertical farming tech reduces water usage by 40%</h3>
                    <p className="text-xs text-stone-500">2 hours ago • Technology</p>
                </div>

                {/* News Card 2 */}
                <div className="min-w-[280px] snap-center bg-white rounded-3xl p-3 border border-stone-100 shadow-sm" onClick={() => router.push('/news-detail')}>
                    <div className="h-32 rounded-2xl overflow-hidden mb-3 relative">
                        <img alt="" src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" />
                        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-forest">POLICY</div>
                    </div>
                    <h3 className="font-bold text-forest leading-snug mb-1">Global accord signed for sustainable grain export</h3>
                    <p className="text-xs text-stone-500">5 hours ago • World</p>
                </div>
            </div>
        </section>

        {/* Philosophy Slide */}
        <section className="px-6 mb-6 animate-enter" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full rounded-[32px] overflow-hidden bg-forest text-white p-8 text-center" onClick={() => router.push('/philosophy')}>
                {/* Abstract Grain/Noise Overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/stardust.png\')' }}></div>
                
                <i className="ph-fill ph-quotes text-4xl text-lime mb-4 opacity-50 mx-auto"></i>
                <h3 className="text-xl font-medium leading-relaxed mb-4 italic">"We don't inherit the earth from our ancestors, we borrow it from our children."</h3>
                <div className="flex items-center justify-center gap-3">
                    <div className="h-[1px] w-8 bg-lime/50"></div>
                    <span className="text-xs font-bold tracking-widest uppercase text-lime">The Farmer's Way</span>
                    <div className="h-[1px] w-8 bg-lime/50"></div>
                </div>
            </div>
        </section>

    </main>

    {/* Bottom Navigation */}
    {/* Style: Minimal Attached - Clean, utilitarian but premium */}
    

    {/* Background Decorative Blobs */}
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[30%] bg-lime/10 blur-[80px] rounded-full mix-blend-multiply"></div>
        <div className="absolute top-[20%] -left-[10%] w-[60%] h-[40%] bg-forest/5 blur-[100px] rounded-full mix-blend-multiply"></div>
    </div>
        </div>
      <BottomNav />
      </>
    );
}

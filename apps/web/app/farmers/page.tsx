'use client';

import { useRouter } from 'next/navigation';
import BottomNav from '@/app/components/BottomNav';
import Header from '@/app/components/Header';

export default function FarmersPage() {
  const router = useRouter();

    return (
      <>
        <Header />
        <div className="pt-[55px] antialiased selection:bg-lime selection:text-forest pb-20">
          {/* 
      AESTHETIC DNA:
      Trend Core: Agri-Tech Modernism
      Spice: Acid Lime Accents
      Palette: Stone / Deep Forest / Lime
      Type: Plus Jakarta Sans
    */}

    {/* Page Header */}
    <header className="w-full px-6 flex justify-between items-center mb-6 pt-4">
        <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight text-forest">Farmers</h1>
            <span className="text-xs text-stone-500 font-medium">Network Overview</span>
        </div>
        <div className="flex gap-3">
             <button className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 shadow-sm active:scale-95 transition-transform" onClick={() => router.push('/search')}>
                <i className="ph ph-magnifying-glass text-xl"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-forest text-lime border border-forest flex items-center justify-center shadow-sm active:scale-95 transition-transform" onClick={() => router.push('/add-farmer')}>
                <i className="ph ph-plus text-xl font-bold"></i>
            </button>
        </div>
    </header>

    {/* Main Content */}
    <main className="w-full">
        
        {/* Admin Monitor Dashboard */}
        <section className="px-4 mb-8 animate-enter" style={{ animationDelay: '0.1s' }}>
            <div className="stats-card w-full rounded-[32px] p-6 text-white relative overflow-hidden shadow-soft">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/cubes.png\')' }}></div>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-lime/20 rounded-full blur-2xl"></div>

                <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 bg-lime rounded-full animate-pulse shadow-glow"></span>
                            <span className="text-xs font-bold text-lime uppercase tracking-wider">Live System</span>
                        </div>
                        <h2 className="text-2xl font-medium">Monitoring</h2>
                    </div>
                    <button className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-medium hover:bg-white/20 transition-colors">
                        View Map
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
                        <span className="block text-2xl font-bold text-white mb-1">142</span>
                        <div className="flex items-center gap-1 text-stone-300">
                            <i className="ph-fill ph-users text-lime text-xs"></i>
                            <span className="text-[10px] uppercase tracking-wide">Active</span>
                        </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
                        <span className="block text-2xl font-bold text-white mb-1">98%</span>
                        <div className="flex items-center gap-1 text-stone-300">
                            <i className="ph-fill ph-plant text-lime text-xs"></i>
                            <span className="text-[10px] uppercase tracking-wide">Yield Rate</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Filters */}
        <section className="mb-6 animate-enter" style={{ animationDelay: '0.2s' }}>
            <div className="flex overflow-x-auto hide-scrollbar px-6 gap-3 snap-x">
                <button className="snap-start px-5 py-2 rounded-full bg-forest text-white text-sm font-medium shadow-md whitespace-nowrap">
                    All Farmers
                </button>
                <button className="snap-start px-5 py-2 rounded-full bg-white text-stone-600 border border-stone-200 text-sm font-medium whitespace-nowrap active:bg-stone-50">
                    Harvest Ready
                </button>
                <button className="snap-start px-5 py-2 rounded-full bg-white text-stone-600 border border-stone-200 text-sm font-medium whitespace-nowrap active:bg-stone-50">
                    Sowing Phase
                </button>
                <button className="snap-start px-5 py-2 rounded-full bg-white text-stone-600 border border-stone-200 text-sm font-medium whitespace-nowrap active:bg-stone-50">
                    Needs Review
                </button>
            </div>
        </section>

        {/* Farmer List */}
        <section className="px-6 flex flex-col gap-4 pb-6 animate-enter" style={{ animationDelay: '0.3s' }}>
            
            {/* Card 1 */}
            <div onClick={() => router.push('/farmers/1')} className="bg-white rounded-3xl p-4 border border-stone-100 shadow-sm active:scale-[0.98] transition-all group hover:border-lime/50 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1595435934249-fd96316cd29a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                         alt="Farmer" className="w-14 h-14 rounded-2xl object-cover border border-stone-100" />
                    <div className="flex-1">
                        <h3 className="font-bold text-forest text-lg">Elias Yari</h3>
                        <p className="text-xs text-stone-500 flex items-center gap-1">
                            <i className="ph-fill ph-map-pin"></i> North Valley, Sector 4
                        </p>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="px-2 py-1 bg-lime/20 text-forest text-[10px] font-bold uppercase rounded-lg mb-1">Harvesting</span>
                        <span className="text-xs font-semibold text-forest">92% Eff.</span>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                    <div className="flex gap-4">
                        <div className="text-center">
                            <span className="block text-[10px] text-stone-400 uppercase">Crop</span>
                            <span className="font-semibold text-sm text-forest">Wheat</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-[10px] text-stone-400 uppercase">Area</span>
                            <span className="font-semibold text-sm text-forest">4.2 Ha</span>
                        </div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-forest group-hover:bg-lime group-hover:text-forest transition-colors">
                        <i className="ph-bold ph-caret-right"></i>
                    </button>
                </div>
            </div>

            {/* Card 2 */}
            <div onClick={() => router.push('/farmers/2')} className="bg-white rounded-3xl p-4 border border-stone-100 shadow-sm active:scale-[0.98] transition-all group hover:border-lime/50 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1627522502844-4861217e47f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                         alt="Farmer" className="w-14 h-14 rounded-2xl object-cover border border-stone-100" />
                    <div className="flex-1">
                        <h3 className="font-bold text-forest text-lg">Sarah Chen</h3>
                        <p className="text-xs text-stone-500 flex items-center gap-1">
                            <i className="ph-fill ph-map-pin"></i> East Hills, Plot 9
                        </p>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="px-2 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase rounded-lg mb-1">Sowing</span>
                        <span className="text-xs font-semibold text-forest">88% Eff.</span>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                    <div className="flex gap-4">
                        <div className="text-center">
                            <span className="block text-[10px] text-stone-400 uppercase">Crop</span>
                            <span className="font-semibold text-sm text-forest">Corn</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-[10px] text-stone-400 uppercase">Area</span>
                            <span className="font-semibold text-sm text-forest">2.8 Ha</span>
                        </div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-forest group-hover:bg-lime group-hover:text-forest transition-colors">
                        <i className="ph-bold ph-caret-right"></i>
                    </button>
                </div>
            </div>

            {/* Card 3 */}
            <div onClick={() => router.push('/farmers/3')} className="bg-white rounded-3xl p-4 border border-stone-100 shadow-sm active:scale-[0.98] transition-all group hover:border-lime/50 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1534009772322-c430e691238f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                         alt="Farmer" className="w-14 h-14 rounded-2xl object-cover border border-stone-100" />
                    <div className="flex-1">
                        <h3 className="font-bold text-forest text-lg">Marcus Okafor</h3>
                        <p className="text-xs text-stone-500 flex items-center gap-1">
                            <i className="ph-fill ph-map-pin"></i> River Bank, Zone 2
                        </p>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-[10px] font-bold uppercase rounded-lg mb-1">Review</span>
                        <span className="text-xs font-semibold text-forest">--</span>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                    <div className="flex gap-4">
                        <div className="text-center">
                            <span className="block text-[10px] text-stone-400 uppercase">Crop</span>
                            <span className="font-semibold text-sm text-forest">Soy</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-[10px] text-stone-400 uppercase">Input</span>
                            <span className="font-semibold text-red-500 text-xs">Pending</span>
                        </div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-forest group-hover:bg-lime group-hover:text-forest transition-colors">
                        <i className="ph-bold ph-caret-right"></i>
                    </button>
                </div>
            </div>

        </section>

    </main>

    {/* Bottom Navigation */}
    {/* Style: Minimal Attached - Identical to Home but with Farmer Active */}
    

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

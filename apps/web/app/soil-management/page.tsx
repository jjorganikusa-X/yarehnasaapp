'use client';

import { useRouter } from 'next/navigation';
import BottomNav from '@/app/components/BottomNav';

export default function SoilManagementPage() {
  const router = useRouter();

    return (
      <>
        <div className="pt-[55px] antialiased selection:bg-lime selection:text-forest pb-20">
          {/* 
      AESTHETIC DNA:
      Trend Core: Agri-Tech Modernism
      Spice: Acid Lime Accents
      Palette: Stone / Deep Forest / Lime
      Type: Plus Jakarta Sans
    */}

    {/* Header */}
    <header className="w-full px-6 flex justify-between items-center mb-6">
        <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight text-forest">Soil Mgmt</h1>
            <span className="text-xs text-stone-500 font-medium">Field Analysis & Input</span>
        </div>
        <div className="flex gap-3">
             <button className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 shadow-sm active:scale-95 transition-transform" onClick={() => router.push('/scan-soil')}>
                <i className="ph ph-scan text-xl"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-forest text-lime border border-forest flex items-center justify-center shadow-sm active:scale-95 transition-transform" onClick={() => router.push('/reports')}>
                <i className="ph ph-chart-pie-slice text-xl font-bold"></i>
            </button>
        </div>
    </header>

    {/* Main Content */}
    <main className="w-full">
        
        {/* Hero: Real-time Soil Stats */}
        <section className="px-4 mb-6 animate-enter" style={{ animationDelay: '0.1s' }}>
            <div className="soil-card w-full rounded-[32px] p-6 text-white relative overflow-hidden shadow-soft">
                {/* Decorative Elements */}
                <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-lime/10 rounded-full blur-2xl"></div>
                <div className="absolute left-10 top-10 w-20 h-20 bg-lime/5 rounded-full blur-xl"></div>

                <div className="flex justify-between items-center mb-8 relative z-10">
                    <div>
                        <span className="text-xs font-medium text-stone-400 uppercase tracking-wide block mb-1">Average pH Level</span>
                        <div className="flex items-baseline gap-2">
                            <h2 className="text-4xl font-bold text-white">6.8</h2>
                            <span className="text-lime font-bold text-sm bg-lime/20 px-2 py-0.5 rounded-lg">Optimal</span>
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-lime/30 flex items-center justify-center relative">
                        <i className="ph-fill ph-drop text-xl text-lime"></i>
                        <svg className="absolute top-0 left-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="46" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-lime" strokeDasharray="289" strokeDashoffset="60" strokeLinecap="round"></circle>
                        </svg>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 relative z-10">
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-3 text-center border border-white/5">
                        <span className="block text-xs text-stone-300 mb-1">Moisture</span>
                        <span className="block text-lg font-bold text-white">42%</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-3 text-center border border-white/5">
                        <span className="block text-xs text-stone-300 mb-1">Nitrogen</span>
                        <span className="block text-lg font-bold text-white">High</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-3 text-center border border-white/5">
                        <span className="block text-xs text-stone-300 mb-1">Temp</span>
                        <span className="block text-lg font-bold text-white">24°C</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Compliance & Certification */}
        <section className="px-6 mb-8 animate-enter" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-3xl p-5 border border-stone-100 shadow-sm flex items-center justify-between" onClick={() => router.push('/compliance-details')}>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                        <i className="ph-fill ph-certificate text-2xl"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-forest text-sm">ISO 22000 Certified</h3>
                        <p className="text-xs text-stone-500 mt-0.5">Safety Compliance: <span className="text-green-600 font-semibold">Passed</span></p>
                    </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-400">
                    <i className="ph-bold ph-caret-right"></i>
                </div>
            </div>
        </section>

        {/* Organic Inputs / Fertilizer */}
        <section className="mb-8 animate-enter" style={{ animationDelay: '0.3s' }}>
            <div className="px-6 mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-forest">Organic Inputs</h2>
                <button className="text-xs font-semibold text-lime px-3 py-1 bg-forest rounded-full" onClick={() => router.push('/inventory')}>Stock: OK</button>
            </div>

            <div className="flex overflow-x-auto hide-scrollbar px-6 gap-4 pb-2 snap-x">
                {/* Card 1: Compost */}
                <div className="min-w-[160px] snap-start bg-white rounded-3xl p-4 border border-stone-100 shadow-sm flex flex-col items-center text-center gap-3 active:scale-[0.98] transition-transform">
                    <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-forest mb-1">
                        <i className="ph-fill ph-recycle text-2xl"></i>
                    </div>
                    <div>
                        <span className="block font-bold text-forest text-sm">Bio-Compost</span>
                        <span className="text-xs text-stone-500">Local production</span>
                    </div>
                    <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-lime h-full w-[70%]"></div>
                    </div>
                </div>

                {/* Card 2: Fertilizer */}
                <div className="min-w-[160px] snap-start bg-white rounded-3xl p-4 border border-stone-100 shadow-sm flex flex-col items-center text-center gap-3 active:scale-[0.98] transition-transform">
                    <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-forest mb-1">
                        <i className="ph-fill ph-leaf text-2xl"></i>
                    </div>
                    <div>
                        <span className="block font-bold text-forest text-sm">Liquid NPK</span>
                        <span className="text-xs text-stone-500">Organic blend</span>
                    </div>
                    <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-forest h-full w-[45%]"></div>
                    </div>
                </div>

                {/* Card 3: Add New */}
                <div className="min-w-[100px] snap-start bg-stone-50 rounded-3xl border-2 border-dashed border-stone-200 flex flex-col items-center justify-center text-stone-400 gap-2" onClick={() => router.push('/order-supplies')}>
                    <i className="ph ph-plus text-2xl"></i>
                    <span className="text-[10px] font-bold uppercase">Order</span>
                </div>
            </div>
        </section>

        {/* Soil & Research News */}
        <section className="px-6 pb-6 animate-enter" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-lg font-bold text-forest mb-4">Research & Methods</h2>
            
            <div className="space-y-4">
                {/* News Item 1 */}
                <div onClick={() => router.push('/news-article')} className="flex gap-4 items-center bg-white p-3 rounded-2xl border border-stone-100 shadow-sm">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-stone-200">
                        <img src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Soil" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-forest text-sm leading-snug mb-1">Advanced mulching techniques for heat retention</h4>
                        <span className="text-[10px] font-medium text-stone-500 uppercase">Methodology • 2d ago</span>
                    </div>
                </div>

                {/* News Item 2 */}
                <div onClick={() => router.push('/news-article')} className="flex gap-4 items-center bg-white p-3 rounded-2xl border border-stone-100 shadow-sm">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-stone-200">
                        <img src="https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Worm" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-forest text-sm leading-snug mb-1">Vermiculture yields up by 15% this quarter</h4>
                        <span className="text-[10px] font-medium text-stone-500 uppercase">Data • 5h ago</span>
                    </div>
                </div>
            </div>
        </section>

    </main>

    {/* Bottom Navigation */}
    {/* Style: Minimal Attached - Consistent with previous screens */}
    

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

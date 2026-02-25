'use client';

import { useRouter } from 'next/navigation';
import BottomNav from '@/app/components/BottomNav';

export default function InvestorsPage() {
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
            <h1 className="text-2xl font-bold tracking-tight text-forest">Investors</h1>
            <span className="text-xs text-stone-500 font-medium">Growth & Partnership</span>
        </div>
        <div className="flex gap-3">
             <button className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 shadow-sm active:scale-95 transition-transform" onClick={() => router.push('/notifications')}>
                <i className="ph ph-bell text-xl"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-forest text-lime border border-forest flex items-center justify-center shadow-sm active:scale-95 transition-transform" onClick={() => router.push('/profile')}>
                <i className="ph ph-user text-xl font-bold"></i>
            </button>
        </div>
    </header>

    {/* Main Content */}
    <main className="w-full">
        
        {/* Hero: Performance Summary */}
        <section className="px-4 mb-8 animate-enter" style={{ animationDelay: '0.1s' }}>
            <div className="invest-card w-full rounded-[32px] p-6 text-white relative overflow-hidden shadow-soft">
                {/* Decorative Graph Line */}
                <svg className="absolute bottom-0 left-0 w-full h-32 text-lime opacity-20" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M0 40 L0 30 C 20 25, 40 35, 60 10 C 80 -10, 100 20, 100 20 L 100 40 Z" fill="currentColor"></path>
                </svg>

                <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                        <span className="text-xs font-medium text-stone-400 uppercase tracking-wide block mb-1">Annual Yield Growth</span>
                        <div className="flex items-baseline gap-2">
                            <h2 className="text-4xl font-bold text-white">+42%</h2>
                            <i className="ph-bold ph-trend-up text-lime text-xl"></i>
                        </div>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors" onClick={() => router.push('/analytics')}>
                        <i className="ph-bold ph-chart-line-up"></i>
                    </button>
                </div>

                {/* Financial Stats */}
                <div className="grid grid-cols-2 gap-3 relative z-10">
                    <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
                        <span className="block text-lg font-bold text-lime">$12.5M</span>
                        <span className="text-[10px] text-stone-300 uppercase tracking-wide">Assets Managed</span>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
                        <span className="block text-lg font-bold text-white">1,240</span>
                        <span className="text-[10px] text-stone-300 uppercase tracking-wide">Farmer Partners</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Resources / Pitch Deck */}
        <section className="px-6 mb-8 animate-enter" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-forest">Documents</h2>
            </div>
            
            <div className="space-y-3">
                <button onClick={() => router.push('/download-pitch')} className="w-full bg-white p-4 rounded-3xl border border-stone-100 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-transform group">
                    <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-lime group-hover:text-forest transition-colors">
                        <i className="ph-fill ph-presentation-chart text-2xl"></i>
                    </div>
                    <div className="flex-1 text-left">
                        <span className="block font-bold text-forest text-sm">Series B Pitch Deck</span>
                        <span className="text-xs text-stone-500">Updated Oct 2023 • PDF</span>
                    </div>
                    <i className="ph-bold ph-download-simple text-stone-400"></i>
                </button>

                <button onClick={() => router.push('/download-report')} className="w-full bg-white p-4 rounded-3xl border border-stone-100 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-transform group">
                    <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-lime group-hover:text-forest transition-colors">
                        <i className="ph-fill ph-file-text text-2xl"></i>
                    </div>
                    <div className="flex-1 text-left">
                        <span className="block font-bold text-forest text-sm">Q3 Financial Report</span>
                        <span className="text-xs text-stone-500">Public Ledger • PDF</span>
                    </div>
                    <i className="ph-bold ph-download-simple text-stone-400"></i>
                </button>
            </div>
        </section>

        {/* Quick Contact / Inquiry Form */}
        <section className="px-6 pb-8 animate-enter" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center text-forest">
                        <i className="ph-bold ph-handshake text-xl"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-forest">Become a Partner</h3>
                        <p className="text-xs text-stone-500">Send a direct inquiry to our board.</p>
                    </div>
                </div>

                <form onSubmit="event.preventDefault(); navigateTo('submit_inquiry');" className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <label className="block text-xs font-bold text-stone-500 uppercase mb-1.5 ml-1">Full Name</label>
                        <input type="text" placeholder="e.g. Sarah Investor" className="custom-input w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-sm text-forest placeholder-stone-400" />
                    </div>

                    {/* Org Input */}
                    <div>
                        <label className="block text-xs font-bold text-stone-500 uppercase mb-1.5 ml-1">Organization</label>
                        <input type="text" placeholder="e.g. Green Ventures Capital" className="custom-input w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-sm text-forest placeholder-stone-400" />
                    </div>
                    
                    {/* Email Input */}
                    <div>
                        <label className="block text-xs font-bold text-stone-500 uppercase mb-1.5 ml-1">Work Email</label>
                        <input type="email" placeholder="name@company.com" className="custom-input w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-sm text-forest placeholder-stone-400" />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-forest text-white font-bold py-4 rounded-2xl mt-2 active:scale-[0.98] transition-all hover:bg-forest/90 flex items-center justify-center gap-2 group">
                        <span>Send Inquiry</span>
                        <i className="ph-bold ph-paper-plane-right group-hover:translate-x-1 transition-transform"></i>
                    </button>
                </form>
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

'use client';

import { useRouter } from 'next/navigation';
import BottomNav from '@/app/components/BottomNav';

export default function ImpactPage() {
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
            <h1 className="text-2xl font-bold tracking-tight text-forest">Impact</h1>
            <span className="text-xs text-stone-500 font-medium">Social Value & Community</span>
        </div>
        <div className="flex gap-3">
             <button className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 shadow-sm active:scale-95 transition-transform" onClick={() => router.push('/donate')}>
                <i className="ph ph-heart text-xl text-red-500"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-forest text-lime border border-forest flex items-center justify-center shadow-sm active:scale-95 transition-transform" onClick={() => router.push('/share-impact')}>
                <i className="ph ph-share-network text-xl font-bold"></i>
            </button>
        </div>
    </header>

    {/* Main Content */}
    <main className="w-full">
        
        {/* Hero: Impact Overview */}
        <section className="px-4 mb-8 animate-enter" style={{ animationDelay: '0.1s' }}>
            <div className="impact-card w-full h-[360px] rounded-[32px] overflow-hidden relative shadow-soft group">
                {/* Background Image */}
                <img src="https://images.unsplash.com/photo-1595276361812-70678d91c12b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Community" 
                     className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                        <i className="ph-fill ph-users-three text-lime"></i>
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Community First</span>
                    </div>

                    <h2 className="text-white text-3xl font-medium leading-tight mb-2">Empowering<br />Rural Lives</h2>
                    <p className="text-stone-300 text-sm mb-6 max-w-[80%]">Building schools, providing clean water, and ensuring fair trade for every grain harvested.</p>

                    {/* Primary Action */}
                    <button className="w-full py-4 bg-lime text-forest font-bold rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform" onClick={() => router.push('/campaign-details')}>
                        <span>View Annual Report</span>
                        <i className="ph-bold ph-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>

        {/* Key Metrics Grid */}
        <section className="px-6 mb-8 animate-enter" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-3">
                {/* Metric 1 */}
                <div className="bg-white p-4 rounded-3xl border border-stone-100 shadow-sm flex flex-col gap-1">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
                        <i className="ph-fill ph-drop text-lg"></i>
                    </div>
                    <span className="text-2xl font-bold text-forest">2.5M</span>
                    <span className="text-xs text-stone-500 font-medium">Liters Water Saved</span>
                </div>

                {/* Metric 2 */}
                <div className="bg-white p-4 rounded-3xl border border-stone-100 shadow-sm flex flex-col gap-1">
                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-2">
                        <i className="ph-fill ph-student text-lg"></i>
                    </div>
                    <span className="text-2xl font-bold text-forest">142</span>
                    <span className="text-xs text-stone-500 font-medium">Farmers Trained</span>
                </div>
            </div>
        </section>

        {/* Initiatives List */}
        <section className="px-6 pb-6 flex flex-col gap-4 animate-enter" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-bold text-forest">Active Initiatives</h3>
                <button className="text-xs font-semibold text-lime px-3 py-1 bg-forest rounded-full" onClick={() => router.push('/all-initiatives')}>See All</button>
            </div>

            {/* Initiative Card 1 */}
            <div onClick={() => router.push('/initiative-detail')} className="bg-white rounded-3xl p-4 border border-stone-100 shadow-sm active:scale-[0.98] transition-all group hover:border-lime/50 cursor-pointer">
                <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-stone-200">
                        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5763?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Women" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h4 className="font-bold text-forest text-base mb-1">Women in Ag</h4>
                            <span className="text-[10px] font-bold text-lime bg-forest px-2 py-0.5 rounded-md">Ongoing</span>
                        </div>
                        <p className="text-xs text-stone-500 line-clamp-2 mb-2">Providing leadership training and financial independence tools for female farmers.</p>
                        
                        {/* Progress Bar */}
                        <div className="flex items-center gap-2">
                            <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                                <div className="h-full bg-lime w-[65%] rounded-full"></div>
                            </div>
                            <span className="text-[10px] font-bold text-forest">65%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Initiative Card 2 */}
            <div onClick={() => router.push('/initiative-detail')} className="bg-white rounded-3xl p-4 border border-stone-100 shadow-sm active:scale-[0.98] transition-all group hover:border-lime/50 cursor-pointer">
                <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-stone-200">
                        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Building" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h4 className="font-bold text-forest text-base mb-1">Village Schools</h4>
                            <span className="text-[10px] font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">Phase 2</span>
                        </div>
                        <p className="text-xs text-stone-500 line-clamp-2 mb-2">Constructing eco-friendly classrooms for the children of our partner farmers.</p>
                        
                        {/* Progress Bar */}
                        <div className="flex items-center gap-2">
                            <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                                <div className="h-full bg-forest w-[30%] rounded-full"></div>
                            </div>
                            <span className="text-[10px] font-bold text-forest">30%</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        {/* Quote / Testimonial */}
        <section className="px-6 pb-8 animate-enter" style={{ animationDelay: '0.4s' }}>
            <div className="bg-stone-50 rounded-3xl p-6 border border-stone-100 relative">
                <i className="ph-fill ph-quotes text-4xl text-stone-200 absolute top-4 right-4"></i>
                <div className="flex items-center gap-3 mb-3">
                    <img alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full object-cover grayscale opacity-80" />
                    <div>
                        <span className="block text-sm font-bold text-forest">Joseph M.</span>
                        <span className="text-[10px] text-stone-500 uppercase">Head of Operations</span>
                    </div>
                </div>
                <p className="text-sm text-stone-600 italic leading-relaxed">"The growth of our soil is meaningless without the growth of our people. Every seed sown is a promise kept to the community."</p>
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

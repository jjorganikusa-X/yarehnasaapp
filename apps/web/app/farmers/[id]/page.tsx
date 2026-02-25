'use client';

import { useRouter, useParams } from 'next/navigation';
import { useState } from 'react';
import BottomNav from '@/app/components/BottomNav';
import Header from '@/app/components/Header';

// Mock farmer data - in production, fetch from API
const farmersData: any = {
  '1': {
    id: 1,
    name: 'Elias Yari',
    photo: 'https://images.unsplash.com/photo-1595435934249-fd96316cd29a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    phone: '+62 812-3456-7890',
    email: 'elias.yari@farm.id',
    location: 'North Valley, Sector 4',
    coordinates: { lat: -1.4534, lng: 120.9876 },
    status: 'Harvesting',
    efficiency: 92,
    crop: 'Wheat',
    area: 4.2,
    joinDate: '2022-03-15',
    certifications: ['ISO 22000', 'Organic Farming', 'GAP Certified'],
    soilHealth: {
      ph: 6.8,
      nitrogen: 'High',
      phosphorus: 'Medium',
      potassium: 'High',
      organicMatter: '3.2%',
      lastTested: '2024-01-15'
    },
    performance: {
      totalHarvests: 12,
      avgYield: '4.8 tons/ha',
      qualityScore: 94,
      complianceRate: 98
    },
    activities: [
      { date: '2024-01-20', type: 'Soil Test', status: 'Completed', details: 'pH levels optimal' },
      { date: '2024-01-18', type: 'Fertilization', status: 'Completed', details: 'NPK 15-15-15 applied' },
      { date: '2024-01-10', type: 'Training', status: 'Completed', details: 'ISO 22000 CCP Workshop' },
      { date: '2024-01-05', type: 'Quality Check', status: 'Passed', details: 'Grade A certification' }
    ],
    equipment: ['Tractor', 'Irrigation System', 'Soil Tester', 'Harvester'],
    financials: {
      totalInvestment: '$12,400',
      expectedRevenue: '$28,600',
      roi: '130%'
    }
  },
  '2': {
    id: 2,
    name: 'Sarah Chen',
    photo: 'https://images.unsplash.com/photo-1627522502844-4861217e47f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    phone: '+62 813-7654-3210',
    email: 'sarah.chen@farm.id',
    location: 'East Hills, Plot 9',
    coordinates: { lat: -1.4678, lng: 120.9543 },
    status: 'Sowing',
    efficiency: 88,
    crop: 'Corn',
    area: 2.8,
    joinDate: '2023-01-10',
    certifications: ['GAP Certified', 'Organic Farming'],
    soilHealth: {
      ph: 6.5,
      nitrogen: 'Medium',
      phosphorus: 'High',
      potassium: 'Medium',
      organicMatter: '2.8%',
      lastTested: '2024-01-12'
    },
    performance: {
      totalHarvests: 6,
      avgYield: '5.2 tons/ha',
      qualityScore: 89,
      complianceRate: 95
    },
    activities: [
      { date: '2024-01-19', type: 'Sowing', status: 'In Progress', details: 'Hybrid seeds planted' },
      { date: '2024-01-14', type: 'Land Prep', status: 'Completed', details: 'Tilling and leveling' },
      { date: '2024-01-08', type: 'Training', status: 'Completed', details: 'Modern planting techniques' }
    ],
    equipment: ['Irrigation System', 'Soil Tester', 'Seeder'],
    financials: {
      totalInvestment: '$8,200',
      expectedRevenue: '$18,400',
      roi: '124%'
    }
  },
  '3': {
    id: 3,
    name: 'Marcus Okafor',
    photo: 'https://images.unsplash.com/photo-1534009772322-c430e691238f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    phone: '+62 814-9876-5432',
    email: 'marcus.okafor@farm.id',
    location: 'River Bank, Zone 2',
    coordinates: { lat: -1.4321, lng: 120.9234 },
    status: 'Review',
    efficiency: null,
    crop: 'Soy',
    area: 3.5,
    joinDate: '2023-11-20',
    certifications: ['GAP Certified'],
    soilHealth: {
      ph: 7.1,
      nitrogen: 'Low',
      phosphorus: 'Medium',
      potassium: 'Low',
      organicMatter: '2.1%',
      lastTested: '2024-01-05'
    },
    performance: {
      totalHarvests: 1,
      avgYield: '3.8 tons/ha',
      qualityScore: 82,
      complianceRate: 87
    },
    activities: [
      { date: '2024-01-17', type: 'Review', status: 'Pending', details: 'Soil inputs required' },
      { date: '2024-01-05', type: 'Soil Test', status: 'Action Needed', details: 'Low NPK levels' },
      { date: '2023-12-15', type: 'Training', status: 'Completed', details: 'Basic farming practices' }
    ],
    equipment: ['Basic Tools', 'Manual Sprayer'],
    financials: {
      totalInvestment: '$5,600',
      expectedRevenue: '$11,200',
      roi: '100%'
    }
  }
};

export default function FarmerProfilePage() {
  const router = useRouter();
  const params = useParams();
  const farmerId = params?.id as string;
  const [activeTab, setActiveTab] = useState('overview');

  const farmer = farmersData[farmerId] || farmersData['1'];

  return (
    <>
      <Header />
      <div className="pt-[55px] antialiased selection:bg-lime selection:text-forest pb-20 bg-stone-50">
        
        {/* Header with Back Button */}
        <div className="sticky top-[55px] z-20 bg-white border-b border-stone-200 px-6 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.back()} 
              className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-forest active:scale-95 transition-transform"
            >
              <i className="ph-bold ph-caret-left text-xl"></i>
            </button>
            <div>
              <h1 className="text-xl font-bold text-forest">Farmer Profile</h1>
              <p className="text-xs text-stone-500">Complete information</p>
            </div>
          </div>
        </div>

        {/* Profile Header Card */}
        <section className="px-6 py-6">
          <div className="bg-gradient-to-br from-forest to-forest/90 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-lime/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-5 -bottom-5 w-32 h-32 bg-lime/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <img 
                  src={farmer.photo} 
                  alt={farmer.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-lime/50"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-1">{farmer.name}</h2>
                  <p className="text-sm text-lime/90 flex items-center gap-1 mb-2">
                    <i className="ph-fill ph-map-pin"></i>
                    {farmer.location}
                  </p>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      farmer.status === 'Harvesting' ? 'bg-lime/20 text-lime' :
                      farmer.status === 'Sowing' ? 'bg-amber-500/20 text-amber-200' :
                      'bg-red-500/20 text-red-200'
                    }`}>
                      {farmer.status}
                    </span>
                    {farmer.efficiency && (
                      <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold">
                        {farmer.efficiency}% Efficiency
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-3 border border-white/20">
                  <div className="text-2xl font-bold mb-1">{farmer.area} Ha</div>
                  <div className="text-xs text-lime/80 uppercase tracking-wide">Farm Area</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-3 border border-white/20">
                  <div className="text-2xl font-bold mb-1">{farmer.crop}</div>
                  <div className="text-xs text-lime/80 uppercase tracking-wide">Main Crop</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-3 border border-white/20">
                  <div className="text-2xl font-bold mb-1">{farmer.performance.totalHarvests}</div>
                  <div className="text-xs text-lime/80 uppercase tracking-wide">Harvests</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="px-6 mb-6">
          <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wide mb-3">Contact</h3>
          <div className="bg-white rounded-2xl border border-stone-200 divide-y divide-stone-100">
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center">
                <i className="ph-fill ph-phone text-forest text-xl"></i>
              </div>
              <div className="flex-1">
                <div className="text-xs text-stone-500">Phone</div>
                <div className="font-semibold text-forest">{farmer.phone}</div>
              </div>
              <a href={`tel:${farmer.phone}`} className="text-lime">
                <i className="ph-bold ph-phone-call text-xl"></i>
              </a>
            </div>
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center">
                <i className="ph-fill ph-envelope text-forest text-xl"></i>
              </div>
              <div className="flex-1">
                <div className="text-xs text-stone-500">Email</div>
                <div className="font-semibold text-forest">{farmer.email}</div>
              </div>
              <a href={`mailto:${farmer.email}`} className="text-lime">
                <i className="ph-bold ph-paper-plane-tilt text-xl"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="px-6 mb-4">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === 'overview' ? 'bg-forest text-white' : 'bg-white text-stone-600 border border-stone-200'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('soil')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === 'soil' ? 'bg-forest text-white' : 'bg-white text-stone-600 border border-stone-200'
              }`}
            >
              Soil Health
            </button>
            <button 
              onClick={() => setActiveTab('performance')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === 'performance' ? 'bg-forest text-white' : 'bg-white text-stone-600 border border-stone-200'
              }`}
            >
              Performance
            </button>
            <button 
              onClick={() => setActiveTab('activity')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === 'activity' ? 'bg-forest text-white' : 'bg-white text-stone-600 border border-stone-200'
              }`}
            >
              Activity
            </button>
          </div>
        </section>

        {/* Tab Content */}
        <section className="px-6 pb-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Certifications */}
              <div>
                <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wide mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {farmer.certifications.map((cert: string, idx: number) => (
                    <div key={idx} className="px-4 py-2 bg-lime/10 border border-lime/30 rounded-full text-sm font-medium text-forest flex items-center gap-2">
                      <i className="ph-fill ph-seal-check text-lime"></i>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment */}
              <div>
                <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wide mb-3">Equipment</h3>
                <div className="grid grid-cols-2 gap-3">
                  {farmer.equipment.map((item: string, idx: number) => (
                    <div key={idx} className="bg-white rounded-2xl p-4 border border-stone-200 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center">
                        <i className="ph-fill ph-gear text-forest"></i>
                      </div>
                      <span className="text-sm font-semibold text-forest">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financials */}
              <div>
                <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wide mb-3">Financial Overview</h3>
                <div className="bg-white rounded-2xl border border-stone-200 divide-y divide-stone-100">
                  <div className="p-4 flex justify-between items-center">
                    <span className="text-stone-600">Total Investment</span>
                    <span className="font-bold text-forest">{farmer.financials.totalInvestment}</span>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <span className="text-stone-600">Expected Revenue</span>
                    <span className="font-bold text-lime-600">{farmer.financials.expectedRevenue}</span>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <span className="text-stone-600">Expected ROI</span>
                    <span className="font-bold text-lime-600">{farmer.financials.roi}</span>
                  </div>
                </div>
              </div>

              {/* Join Date */}
              <div className="bg-stone-100 rounded-2xl p-4 flex items-center gap-3">
                <i className="ph-fill ph-calendar-check text-forest text-2xl"></i>
                <div>
                  <div className="text-xs text-stone-500">Member Since</div>
                  <div className="font-semibold text-forest">{new Date(farmer.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'soil' && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-stone-200 p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-forest">Soil Test Results</h3>
                  <span className="text-xs text-stone-500">Last: {new Date(farmer.soilHealth.lastTested).toLocaleDateString()}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <i className="ph-fill ph-drop text-blue-500"></i>
                      <span className="font-medium">pH Level</span>
                    </div>
                    <span className="font-bold text-forest">{farmer.soilHealth.ph}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <i className="ph-fill ph-leaf text-green-500"></i>
                      <span className="font-medium">Nitrogen (N)</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      farmer.soilHealth.nitrogen === 'High' ? 'bg-green-100 text-green-700' :
                      farmer.soilHealth.nitrogen === 'Medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {farmer.soilHealth.nitrogen}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <i className="ph-fill ph-plant text-purple-500"></i>
                      <span className="font-medium">Phosphorus (P)</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      farmer.soilHealth.phosphorus === 'High' ? 'bg-green-100 text-green-700' :
                      farmer.soilHealth.phosphorus === 'Medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {farmer.soilHealth.phosphorus}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <i className="ph-fill ph-tree text-orange-500"></i>
                      <span className="font-medium">Potassium (K)</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      farmer.soilHealth.potassium === 'High' ? 'bg-green-100 text-green-700' :
                      farmer.soilHealth.potassium === 'Medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {farmer.soilHealth.potassium}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <i className="ph-fill ph-flower text-brown-500"></i>
                      <span className="font-medium">Organic Matter</span>
                    </div>
                    <span className="font-bold text-forest">{farmer.soilHealth.organicMatter}</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-lime text-forest rounded-2xl font-bold active:scale-95 transition-transform">
                Schedule New Test
              </button>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-stone-200 p-4 text-center">
                  <div className="text-3xl font-bold text-forest mb-1">{farmer.performance.totalHarvests}</div>
                  <div className="text-xs text-stone-500 uppercase">Total Harvests</div>
                </div>
                <div className="bg-white rounded-2xl border border-stone-200 p-4 text-center">
                  <div className="text-3xl font-bold text-forest mb-1">{farmer.performance.avgYield}</div>
                  <div className="text-xs text-stone-500 uppercase">Avg Yield</div>
                </div>
                <div className="bg-white rounded-2xl border border-stone-200 p-4 text-center">
                  <div className="text-3xl font-bold text-lime-600 mb-1">{farmer.performance.qualityScore}</div>
                  <div className="text-xs text-stone-500 uppercase">Quality Score</div>
                </div>
                <div className="bg-white rounded-2xl border border-stone-200 p-4 text-center">
                  <div className="text-3xl font-bold text-lime-600 mb-1">{farmer.performance.complianceRate}%</div>
                  <div className="text-xs text-stone-500 uppercase">Compliance</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-lime/20 to-lime/10 rounded-2xl p-6 border border-lime/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-lime flex items-center justify-center">
                    <i className="ph-fill ph-trophy text-forest text-2xl"></i>
                  </div>
                  <div>
                    <div className="font-bold text-forest text-lg">Top Performer</div>
                    <div className="text-sm text-stone-600">Ranked in top 10% this season</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="space-y-3">
              {farmer.activities.map((activity: any, idx: number) => (
                <div key={idx} className="bg-white rounded-2xl border border-stone-200 p-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.status === 'Completed' || activity.status === 'Passed' ? 'bg-green-100' :
                      activity.status === 'In Progress' ? 'bg-amber-100' :
                      'bg-red-100'
                    }`}>
                      <i className={`ph-fill ${
                        activity.type === 'Soil Test' ? 'ph-test-tube' :
                        activity.type === 'Fertilization' ? 'ph-drop' :
                        activity.type === 'Training' ? 'ph-graduation-cap' :
                        activity.type === 'Quality Check' ? 'ph-seal-check' :
                        activity.type === 'Sowing' ? 'ph-plant' :
                        activity.type === 'Land Prep' ? 'ph-tractor' :
                        'ph-calendar'
                      } ${
                        activity.status === 'Completed' || activity.status === 'Passed' ? 'text-green-600' :
                        activity.status === 'In Progress' ? 'text-amber-600' :
                        'text-red-600'
                      }`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <div className="font-bold text-forest">{activity.type}</div>
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                          activity.status === 'Completed' || activity.status === 'Passed' ? 'bg-green-100 text-green-700' :
                          activity.status === 'In Progress' ? 'bg-amber-100 text-amber-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                      <p className="text-sm text-stone-600 mb-2">{activity.details}</p>
                      <div className="text-xs text-stone-400">{new Date(activity.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Action Buttons */}
        <section className="px-6 pb-6 flex gap-3">
          <button className="flex-1 py-4 bg-white border-2 border-forest text-forest rounded-2xl font-bold active:scale-95 transition-transform">
            Schedule Visit
          </button>
          <button className="flex-1 py-4 bg-forest text-white rounded-2xl font-bold active:scale-95 transition-transform">
            Send Message
          </button>
        </section>

      </div>
      <BottomNav />
    </>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CommandCenter() {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  const metrics = [
    {
      icon: 'ph-fill ph-sun',
      label: 'Weather',
      value: '28°C',
      status: 'Optimal',
      color: 'from-orange-500 to-yellow-500',
      trend: '+2°C',
    },
    {
      icon: 'ph-fill ph-leaf',
      label: 'NDVI Index',
      value: '0.78',
      status: 'Excellent',
      color: 'from-green-500 to-emerald-500',
      trend: '+0.05',
    },
    {
      icon: 'ph-fill ph-shield-check',
      label: 'ISO 22000',
      value: '98%',
      status: 'Compliant',
      color: 'from-purple-500 to-violet-500',
      trend: '+2%',
    },
    {
      icon: 'ph-fill ph-users',
      label: 'Farmers',
      value: '24',
      status: 'Active',
      color: 'from-blue-500 to-cyan-500',
      trend: '+3',
    },
    {
      icon: 'ph-fill ph-plant',
      label: 'Harvest',
      value: '8-10',
      status: 'Months',
      color: 'from-green-600 to-lime-500',
      trend: 'On Track',
    },
    {
      icon: 'ph-fill ph-anchor',
      label: 'Vessels',
      value: '3',
      status: 'Ready',
      color: 'from-indigo-500 to-blue-600',
      trend: '1 Incoming',
    },
  ];

  const blocks = [
    { id: 'A1', ndvi: 0.82, status: 'excellent', x: '15%', y: '20%' },
    { id: 'A2', ndvi: 0.75, status: 'good', x: '35%', y: '18%' },
    { id: 'A3', ndvi: 0.79, status: 'excellent', x: '55%', y: '22%' },
    { id: 'B1', ndvi: 0.71, status: 'good', x: '25%', y: '45%' },
    { id: 'B2', ndvi: 0.88, status: 'excellent', x: '45%', y: '48%' },
    { id: 'B3', ndvi: 0.65, status: 'moderate', x: '65%', y: '43%' },
    { id: 'C1', ndvi: 0.76, status: 'good', x: '20%', y: '70%' },
    { id: 'C2', ndvi: 0.83, status: 'excellent', x: '50%', y: '72%' },
    { id: 'C3', ndvi: 0.69, status: 'moderate', x: '75%', y: '68%' },
  ];

  const getBlockColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-500';
      case 'good': return 'bg-yellow-500';
      case 'moderate': return 'bg-orange-500';
      default: return 'bg-red-500';
    }
  };

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6 px-4">
        <h2 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-2">
          <i className="ph-fill ph-broadcast text-[#0047AB]"></i>
          Command Center
        </h2>
        <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
          ALL SYSTEMS OPERATIONAL
        </span>
      </div>

      {/* Real-Time Metrics Grid */}
      <div className="px-4 mb-6 grid grid-cols-2 gap-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-br ${metric.color} rounded-3xl p-5 text-white shadow-lg relative overflow-hidden`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>

            <div className="relative z-10">
              <i className={`${metric.icon} text-3xl mb-3 opacity-90`}></i>
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <div className="text-xs opacity-90 mb-2">{metric.label}</div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm">
                  {metric.status}
                </span>
                <span className="text-[10px] opacity-75">{metric.trend}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Satellite Map with NDVI Overlay */}
      <div className="px-4">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#1a1a1a]">Satellite Map - NDVI Overlay</h3>
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-500">Last update: 2m ago</span>
              <button className="w-8 h-8 rounded-full bg-[#0047AB] flex items-center justify-center active:scale-95 transition-transform">
                <i className="ph ph-arrows-clockwise text-white text-sm"></i>
              </button>
            </div>
          </div>

          {/* Map Container */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-stone-100">
            {/* Satellite Base Layer */}
            <img 
              src="https://images.unsplash.com/photo-1589182373726-e4f658ab50b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Satellite Map"
              className="w-full h-full object-cover opacity-60"
            />

            {/* NDVI Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 via-yellow-500/30 to-red-500/20 mix-blend-multiply"></div>

            {/* Block Markers */}
            {blocks.map((block) => (
              <motion.button
                key={block.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedBlock(selectedBlock === block.id ? null : block.id)}
                className={`absolute w-12 h-12 rounded-full ${getBlockColor(block.status)} border-2 border-white shadow-lg flex items-center justify-center font-bold text-white text-sm transition-all`}
                style={{ 
                  left: block.x, 
                  top: block.y,
                  transform: selectedBlock === block.id ? 'scale(1.3)' : 'scale(1)'
                }}
              >
                {block.id}
              </motion.button>
            ))}

            {/* Selected Block Info */}
            {selectedBlock && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-stone-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] mb-1">Block {selectedBlock}</h4>
                    <p className="text-sm text-stone-600">
                      NDVI: {blocks.find(b => b.id === selectedBlock)?.ndvi} - 
                      <span className="ml-1 capitalize">{blocks.find(b => b.id === selectedBlock)?.status}</span>
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedBlock(null)}
                    className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center"
                  >
                    <i className="ph ph-x text-stone-600"></i>
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* NDVI Legend */}
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-stone-500">NDVI Index</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <span className="text-xs text-stone-600">Low</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                <span className="text-xs text-stone-600">Moderate</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <span className="text-xs text-stone-600">Good</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="text-xs text-stone-600">Excellent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

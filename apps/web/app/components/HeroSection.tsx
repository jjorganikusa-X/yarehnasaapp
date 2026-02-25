'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Activity {
  id: string;
  type: 'sensor' | 'harvest' | 'alert' | 'compliance';
  message: string;
  timestamp: string;
  location: string;
}

export default function HeroSection() {
  const [activities, setActivities] = useState<Activity[]>([
    { id: '1', type: 'sensor', message: 'NDVI reading: 0.78 (Excellent)', timestamp: '2m ago', location: 'Block A3' },
    { id: '2', type: 'harvest', message: 'Harvest scheduled: 8-10 months', timestamp: '5m ago', location: 'Field B2' },
    { id: '3', type: 'compliance', message: 'ISO 22000 audit passed', timestamp: '15m ago', location: 'All Blocks' },
    { id: '4', type: 'alert', message: 'Soil moisture optimal', timestamp: '32m ago', location: 'Block C1' },
  ]);

  const [stats, setStats] = useState({
    farmers: 0,
    hectares: 0,
    vessels: 0,
    compliance: 0,
  });

  // Animate stats on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      farmers: 24,
      hectares: 12.5,
      vessels: 3,
      compliance: 98,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setStats({
        farmers: Math.floor(targets.farmers * progress),
        hectares: parseFloat((targets.hectares * progress).toFixed(1)),
        vessels: Math.floor(targets.vessels * progress),
        compliance: Math.floor(targets.compliance * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Simulate live activity feed
  useEffect(() => {
    const interval = setInterval(() => {
      const newActivities: Activity[] = [
        { id: Date.now().toString(), type: 'sensor', message: `NDVI reading: ${(0.7 + Math.random() * 0.2).toFixed(2)} (${Math.random() > 0.5 ? 'Excellent' : 'Good'})`, timestamp: 'Just now', location: `Block ${['A1', 'A2', 'B1', 'C3'][Math.floor(Math.random() * 4)]}` },
        { id: Date.now().toString(), type: 'alert', message: `Temperature: ${(26 + Math.random() * 4).toFixed(1)}°C`, timestamp: 'Just now', location: `Field ${['A', 'B', 'C'][Math.floor(Math.random() * 3)]}` },
        { id: Date.now().toString(), type: 'compliance', message: 'CCP check completed', timestamp: 'Just now', location: 'Storage Unit 2' },
      ];
      
      setActivities(prev => [newActivities[Math.floor(Math.random() * newActivities.length)], ...prev.slice(0, 3)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'sensor': return 'ph-fill ph-cpu';
      case 'harvest': return 'ph-fill ph-plant';
      case 'alert': return 'ph-fill ph-warning-circle';
      case 'compliance': return 'ph-fill ph-shield-check';
      default: return 'ph-fill ph-bell';
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'sensor': return 'bg-blue-500';
      case 'harvest': return 'bg-green-500';
      case 'alert': return 'bg-yellow-500';
      case 'compliance': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="relative w-full h-[600px] rounded-[32px] overflow-hidden mb-8 shadow-2xl">
      {/* Satellite Imagery Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Satellite Imagery"
          className="w-full h-full object-cover"
        />
        {/* NDVI Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-yellow-500/20 to-red-500/10 mix-blend-overlay"></div>
        {/* Dark Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {/* Top Section: Live Badge + Stats */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/90 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-xs font-bold text-white uppercase tracking-widest">LIVE MONITORING</span>
          </motion.div>

          {/* Animated Statistics Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
            >
              <div className="text-3xl font-bold text-white mb-1">{stats.farmers}</div>
              <div className="text-xs text-white/70 uppercase tracking-wide">Active Farmers</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
            >
              <div className="text-3xl font-bold text-white mb-1">{stats.hectares}</div>
              <div className="text-xs text-white/70 uppercase tracking-wide">Hectares</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
            >
              <div className="text-3xl font-bold text-white mb-1">{stats.vessels}</div>
              <div className="text-xs text-white/70 uppercase tracking-wide">Vessels Ready</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
            >
              <div className="text-3xl font-bold text-white mb-1">{stats.compliance}%</div>
              <div className="text-xs text-white/70 uppercase tracking-wide">ISO Compliant</div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Live Activity Feed */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
            <i className="ph-fill ph-activity text-lime-400"></i>
            Live Activity Feed
          </h2>
          
          <div className="space-y-2">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-white/20 flex items-center gap-3"
              >
                <div className={`w-8 h-8 rounded-full ${getActivityColor(activity.type)} flex items-center justify-center flex-shrink-0`}>
                  <i className={`${getActivityIcon(activity.type)} text-white text-sm`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-medium truncate">{activity.message}</div>
                  <div className="text-white/60 text-xs">{activity.location} • {activity.timestamp}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

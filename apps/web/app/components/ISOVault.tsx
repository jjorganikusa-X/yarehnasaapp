'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface TraceabilityEvent {
  id: string;
  date: string;
  type: 'planting' | 'fertilization' | 'inspection' | 'harvest' | 'storage' | 'shipping';
  description: string;
  location: string;
  operator: string;
  status: 'completed' | 'in-progress' | 'scheduled';
  ccpCompliant: boolean;
}

export default function ISOVault() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  const blockCompliance = [
    { id: 'A1', score: 98, ccpPassed: 12, ccpTotal: 12, lastAudit: '2 days ago' },
    { id: 'A2', score: 95, ccpPassed: 11, ccpTotal: 12, lastAudit: '3 days ago' },
    { id: 'A3', score: 99, ccpPassed: 12, ccpTotal: 12, lastAudit: '1 day ago' },
    { id: 'B1', score: 92, ccpPassed: 11, ccpTotal: 12, lastAudit: '4 days ago' },
    { id: 'B2', score: 100, ccpPassed: 12, ccpTotal: 12, lastAudit: '1 day ago' },
    { id: 'B3', score: 88, ccpPassed: 10, ccpTotal: 12, lastAudit: '5 days ago' },
    { id: 'C1', score: 94, ccpPassed: 11, ccpTotal: 12, lastAudit: '2 days ago' },
    { id: 'C2', score: 97, ccpPassed: 12, ccpTotal: 12, lastAudit: '1 day ago' },
    { id: 'C3', score: 90, ccpPassed: 11, ccpTotal: 12, lastAudit: '3 days ago' },
  ];

  const ccpMonitoring = [
    { name: 'Water Quality Test', status: 'passed', lastCheck: '2h ago', value: 'pH 6.8' },
    { name: 'Pesticide Residue', status: 'passed', lastCheck: '5h ago', value: '< 0.01 ppm' },
    { name: 'Temperature Control', status: 'passed', lastCheck: '1h ago', value: '24-26°C' },
    { name: 'Storage Hygiene', status: 'review', lastCheck: '12h ago', value: 'Score: 85%' },
    { name: 'Traceability Check', status: 'passed', lastCheck: '3h ago', value: '100% Tagged' },
    { name: 'Document Control', status: 'passed', lastCheck: '6h ago', value: 'All Updated' },
  ];

  const traceabilityTimeline: TraceabilityEvent[] = [
    {
      id: '1',
      date: '2024-01-15',
      type: 'planting',
      description: 'Ginger rhizomes planted - Variety: Zingiber officinale',
      location: 'Block A1, Field 3',
      operator: 'Ahmad Saputra',
      status: 'completed',
      ccpCompliant: true,
    },
    {
      id: '2',
      date: '2024-02-10',
      type: 'fertilization',
      description: 'Organic fertilizer applied - 500kg compost per hectare',
      location: 'Block A1, Field 3',
      operator: 'Budi Santoso',
      status: 'completed',
      ccpCompliant: true,
    },
    {
      id: '3',
      date: '2024-03-05',
      type: 'inspection',
      description: 'ISO 22000 compliance inspection - All CCP points verified',
      location: 'All Blocks',
      operator: 'ISO Auditor - PT Sertifikasi',
      status: 'completed',
      ccpCompliant: true,
    },
    {
      id: '4',
      date: '2024-04-12',
      type: 'fertilization',
      description: 'Second fertilization cycle - NPK organic blend',
      location: 'Block A1, Field 3',
      operator: 'Ahmad Saputra',
      status: 'completed',
      ccpCompliant: true,
    },
    {
      id: '5',
      date: '2024-09-20',
      type: 'harvest',
      description: 'Ginger harvest scheduled - Expected yield: 30-40 tons/ha',
      location: 'Block A1, Field 3',
      operator: 'Harvest Team',
      status: 'scheduled',
      ccpCompliant: true,
    },
    {
      id: '6',
      date: '2024-09-25',
      type: 'storage',
      description: 'Post-harvest storage - Climate-controlled facility',
      location: 'Storage Unit 2',
      operator: 'Storage Team',
      status: 'scheduled',
      ccpCompliant: true,
    },
    {
      id: '7',
      date: '2024-10-01',
      type: 'shipping',
      description: 'Export shipment to EU market - ISO certified vessel',
      location: 'Port of Ambon',
      operator: 'Logistics Partner',
      status: 'scheduled',
      ccpCompliant: true,
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-600';
    if (score >= 85) return 'text-yellow-600';
    return 'text-orange-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 95) return 'bg-green-100 border-green-300';
    if (score >= 85) return 'bg-yellow-100 border-yellow-300';
    return 'bg-orange-100 border-orange-300';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'planting': return 'ph-fill ph-plant';
      case 'fertilization': return 'ph-fill ph-drop';
      case 'inspection': return 'ph-fill ph-clipboard-text';
      case 'harvest': return 'ph-fill ph-package';
      case 'storage': return 'ph-fill ph-warehouse';
      case 'shipping': return 'ph-fill ph-truck';
      default: return 'ph-fill ph-circle';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'planting': return 'bg-green-500';
      case 'fertilization': return 'bg-blue-500';
      case 'inspection': return 'bg-purple-500';
      case 'harvest': return 'bg-orange-500';
      case 'storage': return 'bg-indigo-500';
      case 'shipping': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredTimeline = traceabilityTimeline.filter(event =>
    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.operator.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6 px-4">
        <h2 className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-2">
          <i className="ph-fill ph-vault text-purple-600"></i>
          ISO Vault
        </h2>
        <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-semibold">
          ISO 22000 CERTIFIED
        </span>
      </div>

      {/* CCP Monitoring Dashboard */}
      <div className="px-4 mb-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
            <i className="ph-fill ph-shield-check text-purple-600"></i>
            CCP Monitoring Dashboard
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {ccpMonitoring.map((ccp, index) => (
              <motion.div
                key={ccp.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded-2xl border ${
                  ccp.status === 'passed' 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-yellow-50 border-yellow-200'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="text-sm font-semibold text-[#1a1a1a]">{ccp.name}</div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    ccp.status === 'passed' ? 'bg-green-600' : 'bg-yellow-600'
                  }`}>
                    <i className={`ph-fill ${ccp.status === 'passed' ? 'ph-check' : 'ph-warning'} text-white text-xs`}></i>
                  </div>
                </div>
                <div className="text-xs text-stone-600 mb-1">{ccp.value}</div>
                <div className="text-[10px] text-stone-500">{ccp.lastCheck}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Scores per Block */}
      <div className="px-4 mb-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
            <i className="ph-fill ph-chart-bar text-purple-600"></i>
            Compliance Scores per Block
          </h3>

          <div className="grid grid-cols-3 gap-3">
            {blockCompliance.map((block, index) => (
              <motion.button
                key={block.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedBlock(selectedBlock === block.id ? null : block.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedBlock === block.id 
                    ? 'border-purple-500 bg-purple-50 shadow-lg scale-105' 
                    : getScoreBg(block.score)
                }`}
              >
                <div className="text-sm font-bold text-[#1a1a1a] mb-1">Block {block.id}</div>
                <div className={`text-2xl font-bold ${getScoreColor(block.score)} mb-1`}>{block.score}%</div>
                <div className="text-[10px] text-stone-600 mb-1">
                  CCP: {block.ccpPassed}/{block.ccpTotal}
                </div>
                <div className="text-[9px] text-stone-500">{block.lastAudit}</div>
              </motion.button>
            ))}
          </div>

          {selectedBlock && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 p-4 rounded-2xl bg-purple-50 border border-purple-200"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-[#1a1a1a]">Block {selectedBlock} Details</h4>
                <button onClick={() => setSelectedBlock(null)} className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <i className="ph ph-x text-stone-600 text-xs"></i>
                </button>
              </div>
              <div className="text-sm text-stone-600 space-y-2">
                <p>• All Critical Control Points monitored daily</p>
                <p>• Last ISO 22000 audit passed with high scores</p>
                <p>• Full traceability maintained from seed to export</p>
                <p>• Documentation digitally verified and timestamped</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Full Traceability Timeline with Search */}
      <div className="px-4">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#1a1a1a] flex items-center gap-2">
              <i className="ph-fill ph-clock-clockwise text-purple-600"></i>
              Full Traceability Timeline
            </h3>
            <span className="text-xs text-stone-500">Block A1, Field 3</span>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search events, locations, operators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-2xl border border-stone-200 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <i className="ph ph-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"></i>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center"
              >
                <i className="ph ph-x text-stone-600 text-xs"></i>
              </button>
            )}
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            {filteredTimeline.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4"
              >
                {/* Timeline Line */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full ${getTypeColor(event.type)} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <i className={`${getTypeIcon(event.type)} text-white text-xl`}></i>
                  </div>
                  {index < filteredTimeline.length - 1 && (
                    <div className="w-[2px] h-16 bg-stone-200 my-2"></div>
                  )}
                </div>

                {/* Event Content */}
                <div className={`flex-1 p-4 rounded-2xl border ${
                  event.status === 'completed' 
                    ? 'bg-stone-50 border-stone-200' 
                    : event.status === 'in-progress'
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-yellow-50 border-yellow-200'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-bold text-[#1a1a1a] mb-1">{event.description}</div>
                      <div className="text-xs text-stone-600 mb-1">
                        <i className="ph ph-map-pin text-stone-400"></i> {event.location}
                      </div>
                      <div className="text-xs text-stone-600">
                        <i className="ph ph-user text-stone-400"></i> {event.operator}
                      </div>
                    </div>
                    {event.ccpCompliant && (
                      <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                        <i className="ph-fill ph-shield-check text-white text-xs"></i>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-stone-500">{event.date}</span>
                    <span className={`text-[10px] px-2 py-1 rounded-full font-semibold ${
                      event.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : event.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {event.status.toUpperCase().replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTimeline.length === 0 && (
            <div className="text-center py-12">
              <i className="ph ph-magnifying-glass text-4xl text-stone-300 mb-2"></i>
              <p className="text-stone-500">No matching events found</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

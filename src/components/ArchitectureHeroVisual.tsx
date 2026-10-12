'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Database, 
  Server, 
  ShieldCheck, 
  Smartphone, 
  Globe, 
  CheckCircle2, 
  Terminal,
  Activity,
  Cpu,
  ArrowRight
} from 'lucide-react';

interface ArchNode {
  id: string;
  label: string;
  tier: 'client' | 'api' | 'modules' | 'data';
  desc: string;
  tech: string;
  status: 'active' | 'synced' | 'secure';
}

export default function ArchitectureHeroVisual() {
  const [selectedNode, setSelectedNode] = useState<string>('erp-core');

  const nodes: Record<string, ArchNode> = {
    'web-client': {
      id: 'web-client',
      label: 'Next.js 15 Web App',
      tier: 'client',
      desc: 'Responsive web interface for administrative staff, managers, and enterprise operators.',
      tech: 'Next.js 15 App Router · TypeScript · Tailwind CSS',
      status: 'active'
    },
    'pwa-client': {
      id: 'pwa-client',
      label: 'Workforce PWA / Mobile',
      tier: 'client',
      desc: 'Mobile-first client with GPS geofencing and offline storage for field attendance.',
      tech: 'Service Workers · IndexedDB · Geolocation API',
      status: 'active'
    },
    'api-gateway': {
      id: 'api-gateway',
      label: 'API Gateway & Handlers',
      tier: 'api',
      desc: 'Type-safe Server Actions and REST API routes handling requests and validation.',
      tech: 'Node.js · Server Actions · REST Endpoints',
      status: 'active'
    },
    'auth-guard': {
      id: 'auth-guard',
      label: 'RBAC Security Guard',
      tier: 'api',
      desc: 'Role-based access matrix enforcing permissions between Executive, HR, Manager, and Staff.',
      tech: 'JWT Tokens · Session Verification · Route Middleware',
      status: 'secure'
    },
    'erp-core': {
      id: 'erp-core',
      label: 'Hirush ERP Business Engine',
      tier: 'modules',
      desc: 'Core modular workflows coordinating HRMS attendance, CRM pipelines, and operations.',
      tech: 'Modular Domain Architecture · Event Handlers',
      status: 'active'
    },
    'db-postgres': {
      id: 'db-postgres',
      label: 'PostgreSQL Relational DB',
      tier: 'data',
      desc: 'Normalized schema with foreign key constraints, indexes, and audit logs.',
      tech: 'PostgreSQL · Prisma ORM · ACID Transactions',
      status: 'synced'
    }
  };

  const active = nodes[selectedNode] || nodes['erp-core'];

  return (
    <div className="w-full relative rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm overflow-hidden text-left">
      {/* Console Header Bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-1">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          <span className="text-[11px] font-mono font-semibold text-slate-800 flex items-center gap-1.5">
            <Terminal size={12} className="text-blue-600" />
            system_architecture.svg
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-600 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Interactive Preview</span>
        </div>
      </div>

      {/* Architecture Layers Blueprint */}
      <div className="space-y-3 font-mono text-xs">
        
        {/* Tier 1: Client Applications */}
        <div>
          <div className="flex items-center justify-between text-[10px] uppercase font-bold text-slate-600 mb-1.5 tracking-wider">
            <span>Tier 1 · Client Interfaces</span>
            <span className="text-slate-600 font-normal">HTTP / TLS</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[nodes['web-client'], nodes['pwa-client']].map((node) => {
              const isSelected = selectedNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100/80 text-slate-800 border-slate-200/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-[11px] leading-tight truncate">{node.label}</span>
                    <Globe size={11} className={isSelected ? 'text-blue-300' : 'text-slate-600'} />
                  </div>
                  <span className={`text-[10px] block truncate ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                    {node.tech.split('·')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Subtle Flow Indicator */}
        <div className="flex justify-center items-center py-0.5 text-slate-300">
          <div className="w-px h-3 bg-slate-200" />
        </div>

        {/* Tier 2: Routing, Logic & Security Guard */}
        <div>
          <div className="flex items-center justify-between text-[10px] uppercase font-bold text-slate-600 mb-1.5 tracking-wider">
            <span>Tier 2 · Logic &amp; Access Control</span>
            <span className="text-slate-600 font-normal">RBAC Validated</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[nodes['api-gateway'], nodes['auth-guard']].map((node) => {
              const isSelected = selectedNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100/80 text-slate-800 border-slate-200/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-[11px] leading-tight truncate">{node.label}</span>
                    <ShieldCheck size={11} className={isSelected ? 'text-emerald-300' : 'text-slate-600'} />
                  </div>
                  <span className={`text-[10px] block truncate ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                    {node.tech.split('·')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Subtle Flow Indicator */}
        <div className="flex justify-center items-center py-0.5 text-slate-300">
          <div className="w-px h-3 bg-slate-200" />
        </div>

        {/* Tier 3: Core ERP & Database */}
        <div>
          <div className="flex items-center justify-between text-[10px] uppercase font-bold text-slate-600 mb-1.5 tracking-wider">
            <span>Tier 3 · Workflows &amp; Persistence</span>
            <span className="text-slate-600 font-normal">ACID Guaranteed</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[nodes['erp-core'], nodes['db-postgres']].map((node) => {
              const isSelected = selectedNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100/80 text-slate-800 border-slate-200/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-[11px] leading-tight truncate">{node.label}</span>
                    <Database size={11} className={isSelected ? 'text-amber-300' : 'text-slate-600'} />
                  </div>
                  <span className={`text-[10px] block truncate ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                    {node.tech.split('·')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Node Live Readout Inspector */}
      <div className="mt-4 pt-4 border-t border-slate-100 bg-[#FAFAFB] -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 sm:p-5 rounded-b-2xl">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-mono font-bold uppercase text-slate-600 tracking-wider">
            Inspecting Component
          </span>
          <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/50">
            {active.status.toUpperCase()}
          </span>
        </div>
        <h4 className="text-xs sm:text-sm font-bold text-slate-950 mb-1">
          {active.label}
        </h4>
        <p className="text-xs text-slate-600 font-sans leading-relaxed mb-2 font-normal">
          {active.desc}
        </p>
        <div className="text-[11px] font-mono text-slate-700 flex items-center gap-1.5">
          <span className="text-slate-600">Stack:</span>
          <span className="truncate">{active.tech}</span>
        </div>
      </div>
    </div>
  );
}

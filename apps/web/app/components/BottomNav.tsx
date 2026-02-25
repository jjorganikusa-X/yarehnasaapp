'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full bg-white/95 backdrop-blur-xl border-t border-stone-100 z-50">
      <div className="w-full px-2 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3">
        <div className="flex items-center justify-around w-full">
          
          {/* Home */}
          <Link href="/" className="flex flex-col items-center gap-1 w-14 group">
            <div className="relative p-1">
              <i className={`ph-fill ph-house text-2xl transition-all duration-300 ${isActive('/') ? 'text-forest' : 'text-stone-400 group-hover:text-forest'}`}></i>
              {isActive('/') && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-lime rounded-full"></span>
              )}
            </div>
            <span className={`text-[10px] transition-colors ${isActive('/') ? 'font-bold text-forest' : 'font-medium text-stone-400 group-hover:text-forest'}`}>Home</span>
          </Link>

          {/* Farmers */}
          <Link href="/farmers" className="flex flex-col items-center gap-1 w-14 group">
            <div className="relative p-1">
              <i className={`ph${isActive('/farmers') ? '-fill' : ''} ph-users text-2xl transition-colors ${isActive('/farmers') ? 'text-forest' : 'text-stone-400 group-hover:text-forest'}`}></i>
              {isActive('/farmers') && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-lime rounded-full"></span>
              )}
            </div>
            <span className={`text-[10px] transition-colors ${isActive('/farmers') ? 'font-bold text-forest' : 'font-medium text-stone-400 group-hover:text-forest'}`}>Farmers</span>
          </Link>

          {/* Soil */}
          <Link href="/soil-management" className="flex flex-col items-center gap-1 w-14 group">
            <div className="relative p-1">
              <i className={`ph${isActive('/soil-management') ? '-fill' : ''} ph-plant text-2xl transition-colors ${isActive('/soil-management') ? 'text-forest' : 'text-stone-400 group-hover:text-forest'}`}></i>
              {isActive('/soil-management') && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-lime rounded-full"></span>
              )}
            </div>
            <span className={`text-[10px] transition-colors ${isActive('/soil-management') ? 'font-bold text-forest' : 'font-medium text-stone-400 group-hover:text-forest'}`}>Soil</span>
          </Link>

          {/* Impact */}
          <Link href="/impact" className="flex flex-col items-center gap-1 w-14 group">
            <div className="relative p-1">
              <i className={`ph${isActive('/impact') ? '-fill' : ''} ph-lightning text-2xl transition-colors ${isActive('/impact') ? 'text-forest' : 'text-stone-400 group-hover:text-forest'}`}></i>
              {isActive('/impact') && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-lime rounded-full"></span>
              )}
            </div>
            <span className={`text-[10px] transition-colors ${isActive('/impact') ? 'font-bold text-forest' : 'font-medium text-stone-400 group-hover:text-forest'}`}>Impact</span>
          </Link>

          {/* Investors */}
          <Link href="/investors" className="flex flex-col items-center gap-1 w-14 group">
            <div className="relative p-1">
              <i className={`ph${isActive('/investors') ? '-fill' : ''} ph-currency-circle-dollar text-2xl transition-colors ${isActive('/investors') ? 'text-forest' : 'text-stone-400 group-hover:text-forest'}`}></i>
              {isActive('/investors') && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-lime rounded-full"></span>
              )}
            </div>
            <span className={`text-[10px] transition-colors ${isActive('/investors') ? 'font-bold text-forest' : 'font-medium text-stone-400 group-hover:text-forest'}`}>Invest</span>
          </Link>

        </div>
      </div>
    </nav>
  );
}
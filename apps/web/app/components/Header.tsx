'use client';

import { useState } from 'react';
import Image from 'next/image';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export default function Header() {
  const [currentLang, setCurrentLang] = useState('en');
  const [showLangMenu, setShowLangMenu] = useState(false);

  const selectedLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="https://app-cdn.appgen.com/528b36f6-eba4-46be-a17a-5bac641f6213/assets/uploaded_1771996903496_fn4uht.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl">{selectedLanguage.flag}</span>
            <span className="text-sm font-medium text-gray-700">{selectedLanguage.code.toUpperCase()}</span>
            <i className={`ph ph-caret-down text-sm text-gray-500 transition-transform ${showLangMenu ? 'rotate-180' : ''}`}></i>
          </button>

          {/* Language Dropdown */}
          {showLangMenu && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 z-40"
                onClick={() => setShowLangMenu(false)}
              />
              
              {/* Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setShowLangMenu(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                      currentLang === lang.code ? 'bg-blue-50' : ''
                    }`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className={`text-sm font-medium ${
                      currentLang === lang.code ? 'text-blue-600' : 'text-gray-700'
                    }`}>
                      {lang.name}
                    </span>
                    {currentLang === lang.code && (
                      <i className="ph-fill ph-check text-blue-600 ml-auto"></i>
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

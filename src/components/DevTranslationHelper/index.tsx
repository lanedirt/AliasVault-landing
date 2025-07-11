'use client';

import { useState } from 'react';

interface DevTranslationHelperProps {
  enabled?: boolean;
}

export default function DevTranslationHelper({ enabled = false }: DevTranslationHelperProps) {
  const [isVisible, setIsVisible] = useState(false);

  if (!enabled || process.env.NODE_ENV === 'production') {
    return null;
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
        title="Toggle Translation Helper"
      >
        🌐
      </button>

      {/* Translation Helper Panel */}
      {isVisible && (
        <div className="fixed bottom-16 right-4 w-96 max-h-96 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl overflow-hidden z-50">
          <div className="bg-gray-100 dark:bg-gray-700 p-3 border-b border-gray-300 dark:border-gray-600">
            <h3 className="font-semibold text-gray-800 dark:text-white">Translation Helper</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Development mode only</p>
          </div>
          
          <div className="p-4 max-h-80 overflow-y-auto">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Quick Actions</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => console.log('Translation keys available - check network tab for message loading')}
                    className="w-full text-left px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                  >
                    📝 Log all translation keys
                  </button>
                  <button
                    onClick={() => {
                      const missingKeys: string[] = [];
                      // This would be implemented to check for missing translations
                      console.log('Missing translations:', missingKeys);
                    }}
                    className="w-full text-left px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                  >
                    ⚠️ Check missing translations
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Export for Crowdin</h4>
                <button
                  onClick={() => {
                    // This would export current keys for Crowdin
                    console.log('Exporting keys for Crowdin...');
                  }}
                  className="w-full text-left px-3 py-2 bg-blue-100 dark:bg-blue-900 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-sm"
                >
                  📤 Export translation keys
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
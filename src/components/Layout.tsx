import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Brain as Train, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'jp', label: '日本語', flag: '🇯🇵' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/statistics', label: t('nav.statistics') },
    { path: '/charts', label: t('nav.charts') },
    { path: '/vision', label: t('nav.vision') },
    { path: '/conclusion', label: t('nav.conclusion') },
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <div className="min-h-screen bg-surface-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-surface-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 no-underline">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <Train size={24} />
              </div>
              <div className="hidden sm:block">
                <div className="text-primary-800 font-bold text-sm leading-tight">STATISTIK</div>
                <div className="text-surface-500 text-xs leading-tight">TRANSPORTASI 2031</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
                    location.pathname === item.path
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-surface-600 hover:bg-surface-100 transition-colors border border-surface-200"
                >
                  <Globe size={16} />
                  <span className="hidden sm:inline">{currentLang.flag} {currentLang.label}</span>
                  <span className="sm:hidden">{currentLang.flag}</span>
                  <ChevronDown size={14} />
                </button>
                {langOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-surface-200 py-1 z-50">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => changeLang(lang.code)}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-surface-50 transition-colors flex items-center gap-2 ${
                          i18n.language === lang.code ? 'text-primary-700 font-semibold bg-primary-50' : 'text-surface-700'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-surface-600 hover:bg-surface-100"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileOpen && (
            <nav className="md:hidden pb-4 border-t border-surface-200 pt-2">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium no-underline ${
                    location.pathname === item.path
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-surface-600 hover:bg-surface-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-600 p-2 rounded-lg">
                  <Train size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm">STATISTIK</div>
                  <div className="text-surface-400 text-xs">TRANSPORTASI 2031</div>
                </div>
              </div>
              <p className="text-surface-400 text-sm">{t('footer.ministry')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-3 text-surface-300 uppercase tracking-wider">Address</h3>
              <p className="text-surface-400 text-sm">{t('footer.address')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-3 text-surface-300 uppercase tracking-wider">Disclaimer</h3>
              <p className="text-surface-400 text-sm">{t('footer.disclaimer')}</p>
            </div>
          </div>
          <div className="border-t border-surface-700 mt-8 pt-6 text-center text-surface-500 text-sm">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  );
}

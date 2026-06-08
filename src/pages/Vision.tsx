import { useTranslation } from 'react-i18next';
import { Shield, Leaf, Lightbulb, Users, Target, Eye } from 'lucide-react';

export default function Vision() {
  const { t } = useTranslation();

  const valueIcons = [Shield, Leaf, Lightbulb, Users];
  const valueColors = ['bg-primary-50 text-primary-600', 'bg-accent-50 text-accent-600', 'bg-amber-50 text-amber-600', 'bg-rose-50 text-rose-600'];

  const missions = [1, 2, 3, 4, 5] as const;
  const strategic = [1, 2, 3, 4, 5] as const;
  const values = [1, 2, 3, 4] as const;

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1280&h=400&dpr=2"
            alt="City"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('vision.title')}</h1>
            <p className="text-primary-200 text-lg">{t('vision.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-10">
            <Eye size={120} />
          </div>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('vision.vision_title')}</h2>
            <p className="text-lg md:text-xl leading-relaxed text-primary-100 max-w-3xl">
              {t('vision.vision_text')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-surface-900 mb-8">{t('vision.mission_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map(i => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-surface-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-lg">
                  {i}
                </div>
                <Target size={20} className="text-primary-600" />
              </div>
              <p className="text-surface-700 leading-relaxed">{t(`vision.mission${i}`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-surface-900 mb-8">{t('vision.values_title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(i => {
              const Icon = valueIcons[i - 1];
              return (
                <div key={i} className="bg-white rounded-2xl p-6 border border-surface-200 hover:shadow-lg transition-shadow text-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${valueColors[i - 1]}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-surface-900 mb-2">{t(`vision.value${i}_title`)}</h3>
                  <p className="text-surface-600 text-sm leading-relaxed">{t(`vision.value${i}_desc`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Targets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-surface-900 mb-8">{t('vision.strategic_title')}</h2>
        <div className="space-y-4">
          {strategic.map(i => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-surface-200 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center font-bold text-lg">
                {i}
              </div>
              <p className="text-surface-700 leading-relaxed pt-2">{t(`vision.strategic${i}`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transportation Images */}
      <section className="bg-surface-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.pexels.com/photos/2749248/pexels-photo-2749248.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2" alt="Modern Transport" className="rounded-2xl w-full h-48 object-cover" />
            <img src="https://images.pexels.com/photos/2226308/pexels-photo-2226308.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2" alt="Railway" className="rounded-2xl w-full h-48 object-cover" />
            <img src="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2" alt="Port" className="rounded-2xl w-full h-48 object-cover" />
            <img src="https://images.pexels.com/photos/37925/pexels-photo-37925.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2" alt="Airport" className="rounded-2xl w-full h-48 object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

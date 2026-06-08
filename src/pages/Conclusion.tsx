import { useTranslation } from 'react-i18next';
import { TrendingUp, Cpu, Building2, Zap, FileDown, CircleCheck as CheckCircle2 } from 'lucide-react';

export default function Conclusion() {
  const { t } = useTranslation();

  const findings = [
    { key: 'finding1', icon: TrendingUp, color: 'bg-primary-50 text-primary-600' },
    { key: 'finding2', icon: Cpu, color: 'bg-accent-50 text-accent-600' },
    { key: 'finding3', icon: Building2, color: 'bg-amber-50 text-amber-600' },
    { key: 'finding4', icon: Zap, color: 'bg-rose-50 text-rose-600' },
  ] as const;

  const recommendations = [1, 2, 3, 4, 5] as const;

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-primary-800 via-primary-700 to-accent-700 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1280&h=300&dpr=2"
            alt="Conclusion"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('conclusion.title')}</h1>
          <p className="text-primary-200 text-lg">{t('conclusion.subtitle')}</p>
        </div>
      </section>

      {/* Key Findings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-surface-900 mb-8">{t('conclusion.findings_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {findings.map(f => {
            const Icon = f.icon;
            return (
              <div key={f.key} className="bg-white rounded-2xl p-6 border border-surface-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${f.color}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-surface-900 mb-2">{t(`conclusion.${f.key}_title`)}</h3>
                    <p className="text-surface-600 leading-relaxed text-sm">{t(`conclusion.${f.key}_text`)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Recommendations */}
      <section className="bg-surface-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-surface-900 mb-8">{t('conclusion.recommendations_title')}</h2>
          <div className="space-y-4">
            {recommendations.map(i => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-surface-200 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="shrink-0">
                  <CheckCircle2 size={22} className="text-accent-500" />
                </div>
                <p className="text-surface-700 leading-relaxed pt-0.5">{t(`conclusion.rec${i}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conclusion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('conclusion.conclusion_title')}</h2>
            <p className="text-lg leading-relaxed text-primary-100 max-w-4xl">
              {t('conclusion.conclusion_text')}
            </p>
          </div>
        </div>
      </section>

      {/* Download Report */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-surface-300 text-center hover:border-primary-400 transition-colors">
          <FileDown size={40} className="text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-surface-900 mb-2">{t('conclusion.download_report')}</h3>
          <p className="text-surface-500 mb-6">{t('conclusion.report_format')}</p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2">
            <FileDown size={18} />
            {t('conclusion.download_report')}
          </button>
        </div>
      </section>

      {/* Transportation Images */}
      <section className="bg-surface-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2"
              alt="Future Transport"
              className="rounded-2xl w-full h-64 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2"
              alt="Modern Infrastructure"
              className="rounded-2xl w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

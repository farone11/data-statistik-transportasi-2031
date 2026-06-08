import { useTranslation } from 'react-i18next';
import { Users, Package, Car, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area,
} from 'recharts';
import { yearlyData, categoryLabels } from '../data/statistics';
import StatCard from '../components/StatCard';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as keyof typeof categoryLabels.road;
  const latest = yearlyData[yearlyData.length - 1];
  const prev = yearlyData[yearlyData.length - 2];
  const totalGrowth = ((latest.total - prev.total) / prev.total * 100).toFixed(1);
  const cargoGrowth = 7.0;
  const vehicleGrowth = 4.6;
  const infraGrowth = 85;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-400 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              Kementerian Perhubungan RI — 2031
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {t('home.hero_title')}
            </h1>
            <p className="text-xl md:text-2xl font-light text-primary-200 mb-6">
              {t('home.hero_subtitle')}
            </p>
            <p className="text-primary-300 text-lg mb-8 max-w-2xl leading-relaxed">
              {t('home.hero_desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/statistics"
                className="inline-flex items-center gap-2 bg-white text-primary-800 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-colors no-underline"
              >
                {t('nav.statistics')} <ArrowRight size={18} />
              </Link>
              <Link
                to="/charts"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20 no-underline"
              >
                {t('nav.charts')} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        {/* Transportation image banner */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4679/clouds-fly-air-airline.jpg?auto=compress&cs=tinysrgb&w=1280&h=400&dpr=2"
            alt="Transportation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent" />
        </div>
      </section>

      {/* Stats Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <h2 className="text-2xl font-bold text-surface-900 mb-6">{t('home.overview')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title={t('home.total_passengers')}
            value="29,595"
            unit={t('home.million_persons')}
            change={parseFloat(totalGrowth)}
            icon={<Users size={20} className="text-primary-600" />}
            color="bg-primary-50"
          />
          <StatCard
            title={t('home.total_cargo')}
            value="9,173"
            unit={t('home.million_tons')}
            change={cargoGrowth}
            icon={<Package size={20} className="text-accent-600" />}
            color="bg-accent-50"
          />
          <StatCard
            title={t('home.vehicle_reg')}
            value="104,568"
            unit={t('home.thousand_units')}
            change={vehicleGrowth}
            icon={<Car size={20} className="text-amber-600" />}
            color="bg-amber-50"
          />
          <StatCard
            title={t('home.infra_growth')}
            value="85%"
            unit={t('home.percent_growth')}
            change={infraGrowth}
            icon={<Building2 size={20} className="text-rose-600" />}
            color="bg-rose-50"
          />
        </div>
      </section>

      {/* Key Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-surface-900 mb-8">{t('home.key_highlights')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(['highlight1', 'highlight2', 'highlight3', 'highlight4'] as const).map((key, i) => (
            <div key={key} className="bg-white rounded-2xl p-6 border border-surface-200 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg ${
                ['bg-primary-600', 'bg-accent-600', 'bg-amber-500', 'bg-rose-500'][i]
              }`}>
                {i + 1}
              </div>
              <p className="text-surface-700 font-medium">{t(`home.${key}`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Charts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Passenger Trend */}
          <div className="bg-white rounded-2xl p-6 border border-surface-200">
            <h3 className="font-semibold text-surface-800 mb-6">{t('charts.passenger_trend')}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip formatter={(v) => Number(v).toLocaleString()} />
                <Legend />
                <Area type="monotone" dataKey="road" name={categoryLabels.road[lang]} stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.15} />
                <Area type="monotone" dataKey="rail" name={categoryLabels.rail[lang]} stroke="#10b981" fill="#10b981" fillOpacity={0.15} />
                <Area type="monotone" dataKey="sea" name={categoryLabels.sea[lang]} stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.15} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Total Passengers Bar */}
          <div className="bg-white rounded-2xl p-6 border border-surface-200">
            <h3 className="font-semibold text-surface-800 mb-6">{t('home.total_passengers')} (2021-2031)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip formatter={(v) => Number(v).toLocaleString()} />
                <Bar dataKey="total" name={t('stats.total')} fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Transportation Images */}
      <section className="bg-surface-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2" alt="Train" className="w-full h-56 object-cover" />
              <div className="bg-white p-4">
                <h4 className="font-semibold text-surface-800">{categoryLabels.rail[lang]}</h4>
                <p className="text-sm text-surface-500">1,880 {t('home.million_persons')}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.pexels.com/photos/1104713/pexels-photo-1104713.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2" alt="Sea Port" className="w-full h-56 object-cover" />
              <div className="bg-white p-4">
                <h4 className="font-semibold text-surface-800">{categoryLabels.sea[lang]}</h4>
                <p className="text-sm text-surface-500">670 {t('home.million_persons')}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2" alt="Highway" className="w-full h-56 object-cover" />
              <div className="bg-white p-4">
                <h4 className="font-semibold text-surface-800">{categoryLabels.road[lang]}</h4>
                <p className="text-sm text-surface-500">25,400 {t('home.million_persons')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

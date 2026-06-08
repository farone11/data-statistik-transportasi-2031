import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, ListFilter as Filter } from 'lucide-react';
import DataTable from '../components/DataTable';
import {
  yearlyData, cargoYearlyData, vehicleData,
  quarterlyData2031, semesterData2031, categoryLabels,
} from '../data/statistics';

type ViewMode = 'yearly' | 'quarterly' | 'semester';
type DataCategory = 'passenger' | 'cargo' | 'vehicle';

export default function Statistics() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as keyof typeof categoryLabels.road;
  const [viewMode, setViewMode] = useState<ViewMode>('yearly');
  const [dataCat, setDataCat] = useState<DataCategory>('passenger');

  const modeKeys = ['road', 'rail', 'sea', 'air', 'river'] as const;

  const getYearlyHeaders = () => {
    const base = [t('stats.year')];
    modeKeys.forEach(k => base.push(categoryLabels[k][lang]));
    base.push(t('stats.total'));
    return base;
  };

  const getYearlyRows = () => {
    if (dataCat === 'passenger') {
      return yearlyData.map(d => [d.year, ...modeKeys.map(k => d[k]), d.total]);
    }
    if (dataCat === 'cargo') {
      return cargoYearlyData.map(d => [d.year, ...modeKeys.map(k => d[k]), d.total]);
    }
    return vehicleData.map(d => [d.year, d.cars, d.motorcycles, d.buses, d.trucks, '—', d.total]);
  };

  const getQuarterlyHeaders = () => {
    return [t('stats.quarter'), ...modeKeys.map(k => categoryLabels[k][lang])];
  };

  const getQuarterlyRows = () => {
    return quarterlyData2031.map(d => [`${t('stats.q' + d.quarter as keyof typeof t)}`, ...modeKeys.map(k => d[k])]);
  };

  const getSemesterHeaders = () => {
    return [t('stats.semester_label'), ...modeKeys.map(k => categoryLabels[k][lang])];
  };

  const getSemesterRows = () => {
    return semesterData2031.map(d => [`${t('stats.s' + d.semester as keyof typeof t)}`, ...modeKeys.map(k => d[k])]);
  };

  const getHeaders = () => {
    if (viewMode === 'quarterly') return getQuarterlyHeaders();
    if (viewMode === 'semester') return getSemesterHeaders();
    return getYearlyHeaders();
  };

  const getRows = () => {
    if (viewMode === 'quarterly') return getQuarterlyRows();
    if (viewMode === 'semester') return getSemesterRows();
    return getYearlyRows();
  };

  const getUnit = () => {
    if (dataCat === 'passenger') return t('stats.unit_millions');
    if (dataCat === 'cargo') return t('stats.unit_tons');
    return t('stats.unit_thousands');
  };

  const viewModes: { key: ViewMode; label: string }[] = [
    { key: 'yearly', label: t('stats.yearly') },
    { key: 'quarterly', label: t('stats.quarterly') },
    { key: 'semester', label: t('stats.semester') },
  ];

  const dataCats: { key: DataCategory; label: string }[] = [
    { key: 'passenger', label: t('stats.passenger_data') },
    { key: 'cargo', label: t('stats.cargo_data') },
    { key: 'vehicle', label: t('stats.vehicle_data') },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1280&h=300&dpr=2"
            alt="Transport"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('stats.title')}</h1>
          <p className="text-primary-200 text-lg">{t('stats.subtitle')}</p>
        </div>
      </section>

      {/* Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-surface-600">
            <Filter size={18} />
            <span className="text-sm font-medium">{t('stats.view_mode')}:</span>
          </div>
          <div className="flex bg-surface-100 rounded-xl p-1">
            {viewModes.map(m => (
              <button
                key={m.key}
                onClick={() => setViewMode(m.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === m.key ? 'bg-white text-primary-700 shadow-sm' : 'text-surface-600 hover:text-surface-800'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-surface-600">
            <Calendar size={18} />
            <span className="text-sm font-medium">{t('stats.transport_mode')}:</span>
          </div>
          <div className="flex bg-surface-100 rounded-xl p-1">
            {dataCats.map(c => (
              <button
                key={c.key}
                onClick={() => setDataCat(c.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  dataCat === c.key ? 'bg-white text-primary-700 shadow-sm' : 'text-surface-600 hover:text-surface-800'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <span className="text-sm text-surface-400 ml-auto">({getUnit()})</span>
        </div>

        {/* Data Table */}
        <DataTable
          headers={getHeaders()}
          rows={getRows()}
          title={dataCats.find(c => c.key === dataCat)?.label}
        />

        {/* Quarterly & Semester Note */}
        {viewMode !== 'yearly' && (
          <div className="mt-4 p-4 bg-primary-50 rounded-xl text-sm text-primary-700">
            {viewMode === 'quarterly'
              ? `${t('stats.quarterly')} 2031 — ${t('stats.passenger_data')}`
              : `${t('stats.semester')} 2031 — ${t('stats.passenger_data')}`}
          </div>
        )}
      </section>
    </div>
  );
}

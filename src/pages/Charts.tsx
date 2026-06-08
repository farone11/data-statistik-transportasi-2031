import { useTranslation } from 'react-i18next';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area,
} from 'recharts';
import {
  yearlyData, cargoYearlyData, infrastructureData, vehicleData,
  categoryColors, categoryLabels, transportCategories,
} from '../data/statistics';

const PIE_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function Charts() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as keyof typeof categoryLabels.road;

  // Growth rate calculation
  const growthRateData = yearlyData.slice(1).map((d, i) => ({
    year: d.year,
    road: +((d.road - yearlyData[i].road) / yearlyData[i].road * 100).toFixed(1),
    rail: +((d.rail - yearlyData[i].rail) / yearlyData[i].rail * 100).toFixed(1),
    sea: +((d.sea - yearlyData[i].sea) / yearlyData[i].sea * 100).toFixed(1),
    air: +((d.air - yearlyData[i].air) / yearlyData[i].air * 100).toFixed(1),
    river: +((d.river - yearlyData[i].river) / yearlyData[i].river * 100).toFixed(1),
  }));

  // Pie chart data for 2031
  const pieData = transportCategories.map(cat => ({
    name: categoryLabels[cat][lang],
    value: yearlyData[yearlyData.length - 1][cat],
  }));

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary-800 to-accent-700 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1554676/pexels-photo-1554676.jpeg?auto=compress&cs=tinysrgb&w=1280&h=300&dpr=2"
            alt="Charts"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('charts.title')}</h1>
          <p className="text-primary-200 text-lg">{t('charts.subtitle')}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Passenger Trend */}
          <div className="bg-white rounded-2xl p-6 border border-surface-200">
            <h3 className="font-semibold text-surface-800 mb-4">{t('charts.passenger_trend')}</h3>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip formatter={(v) => `${Number(v).toLocaleString()} ${t('charts.million_persons')}`} />
                <Legend />
                <Line type="monotone" dataKey="road" name={categoryLabels.road[lang]} stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="rail" name={categoryLabels.rail[lang]} stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="sea" name={categoryLabels.sea[lang]} stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="air" name={categoryLabels.air[lang]} stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Cargo Trend */}
          <div className="bg-white rounded-2xl p-6 border border-surface-200">
            <h3 className="font-semibold text-surface-800 mb-4">{t('charts.cargo_trend')}</h3>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={cargoYearlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip formatter={(v) => `${Number(v).toLocaleString()} ${t('charts.million_tons')}`} />
                <Legend />
                <Area type="monotone" dataKey="road" name={categoryLabels.road[lang]} stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
                <Area type="monotone" dataKey="sea" name={categoryLabels.sea[lang]} stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.1} />
                <Area type="monotone" dataKey="rail" name={categoryLabels.rail[lang]} stroke="#10b981" fill="#10b981" fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Infrastructure Index */}
          <div className="bg-white rounded-2xl p-6 border border-surface-200">
            <h3 className="font-semibold text-surface-800 mb-4">{t('charts.infrastructure_index')}</h3>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={infrastructureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip formatter={(v) => `${v} ${t('charts.index_base')}`} />
                <Legend />
                <Bar dataKey="roads" name={categoryLabels.road[lang]} fill="#3b82f6" radius={[2, 2, 0, 0]} />
                <Bar dataKey="railNetwork" name={categoryLabels.rail[lang]} fill="#10b981" radius={[2, 2, 0, 0]} />
                <Bar dataKey="ports" name={categoryLabels.sea[lang]} fill="#f59e0b" radius={[2, 2, 0, 0]} />
                <Bar dataKey="airports" name={categoryLabels.air[lang]} fill="#ef4444" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Vehicle Growth */}
          <div className="bg-white rounded-2xl p-6 border border-surface-200">
            <h3 className="font-semibold text-surface-800 mb-4">{t('charts.vehicle_growth')}</h3>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={vehicleData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip formatter={(v) => `${Number(v).toLocaleString()} ${t('charts.thousand_units')}`} />
                <Legend />
                <Line type="monotone" dataKey="cars" stroke="#3b82f6" strokeWidth={2} name="Cars" />
                <Line type="monotone" dataKey="motorcycles" stroke="#10b981" strokeWidth={2} name="Motorcycles" />
                <Line type="monotone" dataKey="trucks" stroke="#f59e0b" strokeWidth={2} name="Trucks" />
                <Line type="monotone" dataKey="buses" stroke="#ef4444" strokeWidth={2} name="Buses" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Mode Distribution Pie */}
          <div className="bg-white rounded-2xl p-6 border border-surface-200">
            <h3 className="font-semibold text-surface-800 mb-4">{t('charts.mode_distribution')}</h3>
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percent }: any) =>
                    `${name ?? ''} ${((percent ?? 0) * 100).toFixed(1)}%`
                  }
                  outerRadius={120}
                  dataKey="value"
                >
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => `${Number(v).toLocaleString()} ${t('charts.million_persons')}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Annual Growth Rate */}
          <div className="bg-white rounded-2xl p-6 border border-surface-200">
            <h3 className="font-semibold text-surface-800 mb-4">{t('charts.annual_growth_rate')}</h3>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={growthRateData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} unit="%" />
                <Tooltip formatter={(v) => `${v}%`} />
                <Legend />
                <Bar dataKey="road" name={categoryLabels.road[lang]} fill="#3b82f6" radius={[2, 2, 0, 0]} />
                <Bar dataKey="rail" name={categoryLabels.rail[lang]} fill="#10b981" radius={[2, 2, 0, 0]} />
                <Bar dataKey="air" name={categoryLabels.air[lang]} fill="#ef4444" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}

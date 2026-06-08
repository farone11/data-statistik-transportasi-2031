import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  unit: string;
  change?: number;
  icon: React.ReactNode;
  color: string;
}

export default function StatCard({ title, value, unit, change, icon, color }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-surface-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${color}`}>
          {icon}
        </div>
        {change !== undefined && (
          <div className={`flex items-center gap-1 text-sm font-semibold px-2.5 py-1 rounded-full ${
            change >= 0 ? 'text-emerald-700 bg-emerald-50' : 'text-red-700 bg-red-50'
          }`}>
            {change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      <div className="text-3xl font-bold text-surface-900 mb-1">{value}</div>
      <div className="text-sm text-surface-500 mb-1">{title}</div>
      <div className="text-xs text-surface-400">{unit}</div>
    </div>
  );
}

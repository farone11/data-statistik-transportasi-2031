interface DataTableProps {
  headers: string[];
  rows: (string | number)[][];
  title?: string;
}

export default function DataTable({ headers, rows, title }: DataTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-surface-200 overflow-hidden">
      {title && (
        <div className="px-6 py-4 border-b border-surface-200 bg-surface-50">
          <h3 className="font-semibold text-surface-800">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-surface-200">
              {headers.map((h, i) => (
                <th key={i} className={`px-4 py-3 text-sm font-semibold text-surface-600 ${i === 0 ? 'text-left' : 'text-right'}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className={`border-b border-surface-100 last:border-0 ${ri % 2 === 1 ? 'bg-surface-50/50' : ''}`}>
                {row.map((cell, ci) => (
                  <td key={ci} className={`px-4 py-3 text-sm ${ci === 0 ? 'font-medium text-surface-800 text-left' : 'text-surface-600 text-right'}`}>
                    {typeof cell === 'number' ? cell.toLocaleString() : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

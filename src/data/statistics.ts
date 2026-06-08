export interface YearlyData {
  year: number;
  road: number;
  rail: number;
  sea: number;
  air: number;
  river: number;
  total: number;
}

export interface QuarterlyData {
  year: number;
  quarter: number;
  road: number;
  rail: number;
  sea: number;
  air: number;
  river: number;
}

export interface SemesterData {
  year: number;
  semester: number;
  road: number;
  rail: number;
  sea: number;
  air: number;
  river: number;
}

// 10-year historical data (2021-2031) - passenger volume in millions
export const yearlyData: YearlyData[] = [
  { year: 2021, road: 12500, rail: 890, sea: 320, air: 580, river: 150, total: 14440 },
  { year: 2022, road: 13200, rail: 950, sea: 340, air: 620, river: 155, total: 15265 },
  { year: 2023, road: 14100, rail: 1020, sea: 365, air: 680, river: 160, total: 16325 },
  { year: 2024, road: 15300, rail: 1100, sea: 390, air: 740, river: 165, total: 17695 },
  { year: 2025, road: 16500, rail: 1190, sea: 420, air: 810, river: 170, total: 19090 },
  { year: 2026, road: 17800, rail: 1280, sea: 455, air: 890, river: 178, total: 20603 },
  { year: 2027, road: 19100, rail: 1380, sea: 490, air: 980, river: 185, total: 22135 },
  { year: 2028, road: 20500, rail: 1490, sea: 530, air: 1080, river: 190, total: 23790 },
  { year: 2029, road: 22000, rail: 1610, sea: 575, air: 1190, river: 195, total: 25570 },
  { year: 2030, road: 23600, rail: 1740, sea: 620, air: 1310, river: 200, total: 27470 },
  { year: 2031, road: 25400, rail: 1880, sea: 670, air: 1440, river: 205, total: 29595 },
];

// Quarterly breakdown for 2031 (passenger volume in millions)
export const quarterlyData2031: QuarterlyData[] = [
  { year: 2031, quarter: 1, road: 5800, rail: 420, sea: 150, air: 310, river: 48 },
  { year: 2031, quarter: 2, road: 6500, rail: 480, sea: 170, air: 360, river: 52 },
  { year: 2031, quarter: 3, road: 7200, rail: 510, sea: 190, air: 410, river: 55 },
  { year: 2031, quarter: 4, road: 5900, rail: 470, sea: 160, air: 360, river: 50 },
];

// Semester breakdown for 2031
export const semesterData2031: SemesterData[] = [
  { year: 2031, semester: 1, road: 12300, rail: 900, sea: 320, air: 670, river: 100 },
  { year: 2031, semester: 2, road: 13100, rail: 980, sea: 350, air: 770, river: 105 },
];

// Cargo data in million tons
export const cargoYearlyData: YearlyData[] = [
  { year: 2021, road: 3200, rail: 450, sea: 890, air: 12, river: 85, total: 4637 },
  { year: 2022, road: 3400, rail: 480, sea: 940, air: 14, river: 88, total: 4922 },
  { year: 2023, road: 3650, rail: 520, sea: 1010, air: 16, river: 92, total: 5288 },
  { year: 2024, road: 3920, rail: 560, sea: 1080, air: 18, river: 95, total: 5673 },
  { year: 2025, road: 4200, rail: 610, sea: 1160, air: 21, river: 98, total: 6089 },
  { year: 2026, road: 4500, rail: 660, sea: 1240, air: 24, river: 102, total: 6526 },
  { year: 2027, road: 4820, rail: 720, sea: 1330, air: 27, river: 105, total: 7002 },
  { year: 2028, road: 5150, rail: 780, sea: 1420, air: 31, river: 108, total: 7489 },
  { year: 2029, road: 5500, rail: 850, sea: 1520, air: 35, river: 112, total: 8017 },
  { year: 2030, road: 5880, rail: 920, sea: 1620, air: 40, river: 115, total: 8575 },
  { year: 2031, road: 6280, rail: 1000, sea: 1730, air: 45, river: 118, total: 9173 },
];

// Infrastructure growth index (base 2021 = 100)
export const infrastructureData = [
  { year: 2021, roads: 100, bridges: 100, ports: 100, airports: 100, railNetwork: 100 },
  { year: 2022, roads: 104, bridges: 103, ports: 105, airports: 102, railNetwork: 106 },
  { year: 2023, roads: 109, bridges: 107, ports: 111, airports: 105, railNetwork: 113 },
  { year: 2024, roads: 115, bridges: 112, ports: 118, airports: 109, railNetwork: 121 },
  { year: 2025, roads: 122, bridges: 118, ports: 126, airports: 114, railNetwork: 130 },
  { year: 2026, roads: 130, bridges: 125, ports: 135, airports: 120, railNetwork: 140 },
  { year: 2027, roads: 139, bridges: 133, ports: 145, airports: 127, railNetwork: 151 },
  { year: 2028, roads: 149, bridges: 142, ports: 156, airports: 135, railNetwork: 163 },
  { year: 2029, roads: 160, bridges: 152, ports: 168, airports: 144, railNetwork: 176 },
  { year: 2030, roads: 172, bridges: 163, ports: 181, airports: 154, railNetwork: 190 },
  { year: 2031, roads: 185, bridges: 175, ports: 195, airports: 165, railNetwork: 205 },
];

// Vehicle registration data (in thousands)
export const vehicleData = [
  { year: 2021, cars: 8500, motorcycles: 52000, buses: 420, trucks: 1800, total: 62720 },
  { year: 2022, cars: 9200, motorcycles: 55000, buses: 435, trucks: 1950, total: 66585 },
  { year: 2023, cars: 10000, motorcycles: 58000, buses: 450, trucks: 2100, total: 70550 },
  { year: 2024, cars: 10800, motorcycles: 61000, buses: 465, trucks: 2260, total: 74525 },
  { year: 2025, cars: 11700, motorcycles: 64000, buses: 480, trucks: 2430, total: 78610 },
  { year: 2026, cars: 12650, motorcycles: 67000, buses: 498, trucks: 2610, total: 82758 },
  { year: 2027, cars: 13650, motorcycles: 70000, buses: 516, trucks: 2800, total: 86966 },
  { year: 2028, cars: 14700, motorcycles: 73000, buses: 535, trucks: 3000, total: 91235 },
  { year: 2029, cars: 15800, motorcycles: 76000, buses: 555, trucks: 3210, total: 95565 },
  { year: 2030, cars: 17000, motorcycles: 79000, buses: 576, trucks: 3430, total: 100006 },
  { year: 2031, cars: 18300, motorcycles: 82000, buses: 598, trucks: 3670, total: 104568 },
];

export const transportCategories = ['road', 'rail', 'sea', 'air', 'river'] as const;
export type TransportCategory = typeof transportCategories[number];

export const categoryColors: Record<TransportCategory, string> = {
  road: '#3b82f6',
  rail: '#10b981',
  sea: '#f59e0b',
  air: '#ef4444',
  river: '#8b5cf6',
};

export const categoryLabels = {
  road: { id: 'Darat', en: 'Road', jp: '道路', zh: '公路' },
  rail: { id: 'Kereta Api', en: 'Rail', jp: '鉄道', zh: '铁路' },
  sea: { id: 'Laut', en: 'Sea', jp: '海運', zh: '海运' },
  air: { id: 'Udara', en: 'Air', jp: '航空', zh: '航空' },
  river: { id: 'Sungai', en: 'River', jp: '河川', zh: '河运' },
};

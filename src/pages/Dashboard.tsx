import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Volume',
            value: '$12.4M',
            change: '+14.5%',
            icon: Activity,
            trend: 'up',
          },
          {
            title: 'Active Markets',
            value: '24',
            change: '+2',
            icon: DollarSign,
            trend: 'up',
          },
          {
            title: 'Total Orders',
            value: '1,234',
            change: '-5.2%',
            icon: TrendingDown,
            trend: 'down',
          },
          {
            title: 'Trading Volume',
            value: '$2.8M',
            change: '+8.1%',
            icon: TrendingUp,
            trend: 'up',
          },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${
                stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <stat.icon className={`w-6 h-6 ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`} />
              </div>
            </div>
            <div className={`mt-4 text-sm ${
              stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
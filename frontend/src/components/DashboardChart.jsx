import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend);

const DashboardChart = ({ transactions }) => {
  const data = useMemo(() => {
    const income = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const expense = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    return {
      labels: ['Income', 'Expense'],
      datasets: [{ data: [income, expense], backgroundColor: ['#198754', '#dc3545'] }]
    };
  }, [transactions]);

  return (
    <>
    <div className="card p-3">
      <h5>Summary</h5>
      <Doughnut data={data} />
      <div className="mt-3">
        <strong>Net:</strong> ${transactions.reduce((s, t) => s + (t.type === 'income' ? t.amount : -t.amount), 0)}
      </div>
    </div>
    </>
  );
};

export default DashboardChart;

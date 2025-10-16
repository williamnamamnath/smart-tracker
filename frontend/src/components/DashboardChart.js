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
    <div className="card my-4 mx-3 p-3" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px orange" }}>
      <h4 className='text-center mb-4'>Summary</h4>
      <div className="my-2 text-center">
        <strong>Net:</strong> ${transactions.reduce((s, t) => s + (t.type === 'income' ? t.amount : -t.amount), 0)}
      </div>
      <Doughnut data={data} />
    </div>
    </>
  );
};

export default DashboardChart;

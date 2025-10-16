import { useEffect, useState } from 'react';

import TransactionForm from '../../forms/TransactionForm';
import TransactionList from '../../forms/TransactionList';
import DashboardChart from '../../components/DashboardChart';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTx = async () => {
    try {
      const res = await fetch('/transactions');
      setTransactions(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => { fetchTx(); }, []);

  const addTx = tx => setTransactions(prev => [tx, ...prev]);
  const updateTx = updated => setTransactions(prev => prev.map(t => t._id === updated._id ? updated : t));
  const deleteTx = id => setTransactions(prev => prev.filter(t => t._id !== id));

  return (
    <>
      <div className="row my-5">
        <div className="col-md-6">
          <DashboardChart transactions={transactions} />
        </div>
        
        <div className="col-md-6">
          <TransactionForm onAdd={addTx} />
          <TransactionList transactions={transactions} onDelete={deleteTx} onUpdate={updateTx} loading={loading} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

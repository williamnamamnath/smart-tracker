import { useState } from 'react';
import api from '../../api/api';

const TransactionForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    type: 'expense',
    title: '',
    amount: '',
    category: '',
    date: new Date().toISOString().slice(0,10),
    description: ''
  });
  const [error, setError] = useState('');

  const change = e => setForm({...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    try {
      const payload = { ...form, amount: Number(form.amount) };
      const res = await api.post('/transactions', payload);
      onAdd(res.data);
      setForm({ type: 'expense', title: '', amount: '', category: '', date: new Date().toISOString().slice(0,10), description: '' });
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create');
    }
  };

  return (
    <>
    <div className="card mb-3 p-3">
      <h5>Add Transaction</h5>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={submit}>
        <div className="row g-2">
          <div className="col-6">
            <select name="type" className="form-select" value={form.type} onChange={change}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
          <div className="col-6">
            <input name="title" placeholder="Title" className="form-control" value={form.title} onChange={change} required />
          </div>
          <div className="col-4">
            <input name="amount" placeholder="Amount" className="form-control" value={form.amount} onChange={change} type="number" required />
          </div>
          <div className="col-4">
            <input name="category" placeholder="Category" className="form-control" value={form.category} onChange={change} />
          </div>
          <div className="col-4">
            <input name="date" type="date" className="form-control" value={form.date} onChange={change} />
          </div>
          <div className="col-12">
            <textarea name="description" placeholder="Description" className="form-control" value={form.description} onChange={change} />
          </div>
        </div>
        <button className="btn btn-primary mt-2">Add</button>
      </form>
    </div>
    </>
  );
};

export default TransactionForm;

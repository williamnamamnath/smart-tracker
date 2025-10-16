import { useState } from 'react';

const TransactionForm = () => {

  const [form, setForm] = useState({
    type: 'expense',
    title: '',
    amount: '',
    category: '',
    date: new Date().toISOString().slice(0,10),
    description: ''
  });

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value });

  return (
    <>
    <div className="card my-4 mx-3 p-3" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightblue" }}>
      <h4 className='text-center mb-4'>Add Transaction</h4>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={submit}>
        <div className="row g-2">
          <div className="col-6">
            <input name="title" placeholder="Title" className="form-control" value={form.title} onChange={handleChange} required />
          </div>

          <div className="col-6">
            <select name="type" className="form-select" value={form.type} onChange={handleChange}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
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

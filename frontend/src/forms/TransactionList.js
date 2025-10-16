const TransactionList = ({ transactions, onDelete, onUpdate, loading }) => {

  if (loading) return <div>Loading...</div>;
  if (transactions.length === 0) return <div className="card p-3">No transactions yet.</div>;

  return (
    <>
    <div className="card my-4 mx-3 p-3" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightgreen" }}>
      <h4 className='text-center mb-4'>Transactions</h4>
      <ul className="list-group">
        {transactions.map(tx => (
          <li className="list-group-item d-flex justify-content-between align-items-start" key={tx._id}>
            <div>
              <strong>{tx.title}</strong> <small className="text-muted">({tx.category})</small>
              <div className="small">{new Date(tx.date).toLocaleDateString()}</div>
            </div>
            <div className="text-end">
              <div className={tx.type === 'income' ? 'text-success' : 'text-danger'}>
                {tx.type === 'income' ? '+' : '-'}${Math.abs(tx.amount)}
              </div>
              <div className="btn-group mt-1">
                <button className="btn btn-sm btn-outline-secondary" onClick={() => navigator.clipboard?.writeText(JSON.stringify(tx))}>Copy</button>
                <button className="btn btn-sm btn-outline-danger" onClick={() => remove(tx._id)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default TransactionList;

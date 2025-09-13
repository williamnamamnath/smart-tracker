import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../authentication/globalContext";

import { FaPlus } from "react-icons/fa";

const Expenses = () => {

    useEffect(() => {
      document.title = 'My Expenses';
      getExpenses();
    }, []);

    const { expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext();
    const navigate = useNavigate();

  const handleAddExpense = () => {
    navigate('/new/expenses');
  };

  return (
    <>
      <div className="d-flex" style={{ minHeight: '100vh' }}>
        <div>
        </div>
        <div className="flex-fill">
          <h1 className='fw-bold fs-1 m-5 p-3'>My Expenses</h1>

          <div className="d-flex justify-content-start m-5 p-3">
            <button type="button" className="btn btn-primary" onClick={handleAddExpense}>
              <FaPlus className="me-2" />
              Add New Expense
            </button>
          </div>

          <div className="d-flex gap-4 m-5 p-3">
            <div className="card flex-fill text-center">
              <div className="card-body">
                <h5 className="card-title">Summary</h5>
                <p className="card-text fs-3 text-danger">${totalExpenses()}</p>
                <small className="text-muted">Total Expenses</small>
              </div>
            </div>
          </div>


          <div className="m-5 p-3">
            <h2 className="">List of Transactions</h2>
            <div className="card-body">
                {expenses.map((expense) => {
              const { _id, title, amount, category, description, date } = expense;
                return (
                <div key={_id} className="card mb-3">
                  <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">${amount} - {category}</h6>
                  <p className="card-text">{description}</p>
                  <p className="card-text"><small className="text-muted">{new Date(date).toLocaleDateString()}</small></p>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                    deleteExpense(_id);
                    window.alert(`"${title}" has been deleted successfully.`);
                    }}
                  >
                    Delete
                  </button>
                  </div>
                </div>
                );
            })}
              </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Expenses;
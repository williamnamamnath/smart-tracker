import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../authentication/globalContext";

import { FaPlus } from "react-icons/fa";

const Income = () => {

  useEffect(() => {
    document.title = 'My Income';
    getIncomes();
  }, []);

  const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();
  const navigate = useNavigate();

  const handleAddIncome = () => {
    navigate('/new/income');
  };


  return (
    <>
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <div>
      </div>
      <div className="flex-fill">
        <h1 className='fw-bold fs-1 m-5 p-3'>My Revenue</h1>

        <div className="d-flex justify-content-start m-5 p-3">
            <button type="button" className="btn btn-primary" onClick={handleAddIncome}>
              <FaPlus className="me-2" />
              Add New Income
            </button>
          </div>

        <div className="d-flex gap-4 m-5 p-3">
          <div className="card flex-fill text-center">
            <div className="card-body">
              <h5 className="card-title">Summary</h5>
              <p className="card-text fs-3 text-success">${totalIncome()}</p>
              <small className="text-muted">Total Income</small>
            </div>
          </div>
        </div>

        <div className="m-5 p-3">
          <h2 className="">List of Transactions</h2>
          <div className="card-body">
            {incomes.map((income) => {
              const { _id, title, amount, category, description, date } = income;
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
                    deleteIncome(_id);
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

export default Income;
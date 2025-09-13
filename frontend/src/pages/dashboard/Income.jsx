import { FaPlus } from "react-icons/fa";
import { useGlobalContext } from "../authentication/globalContext";

const Income = () => {

  const { addIncome } = useGlobalContext();

  return (
    <>
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <div>
      </div>
      <div className="flex-fill">
        <h1 className='fw-bold fs-1 m-5 p-3'>My Revenue</h1>

        <div className="d-flex justify-content-start m-5 p-3">
            <button type="button" className="btn btn-primary" href="/new/income">
              <FaPlus className="me-2" />
              Add New Income
            </button>
          </div>

        <div className="d-flex gap-4 m-5 p-3">
          <div className="card flex-fill text-center">
            <div className="card-body">
              <h5 className="card-title">Summary</h5>
              <p className="card-text fs-3 text-success">$0.00</p>
              <small className="text-muted">Total Income</small>
            </div>
          </div>
        </div>

        <div className="m-5 p-3">
          <h2 className="">List of Transactions</h2>
          <div className="card-body">
              <h5 className="card-title">Income</h5>
              <p className="card-text fs-3 text-success">$0.00</p>
            </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Income;
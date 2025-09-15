import Chart from "../../components/Chart";
import { useGlobalContext } from "../authentication/globalContext";

const Dashboard = () => {

  const { totalBalance, totalIncome, totalExpenses, incomes, expenses, deleteIncome, deleteExpense } = useGlobalContext();

  const recentIncomes = [...incomes]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const recentExpenses = [...expenses]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <>
      <div className="d-flex" style={{ minHeight: '100vh' }}>
        <div className="flex-fill">
          <h1 className='fw-bold fs-1 m-5 p-3'>My Tracker</h1>

          <div className="d-flex flex-wrap gap-4 m-5 p-3">
            <div className="card flex-fill text-center">
              <div className="card-body">
                <h4 className="card-title">Summary</h4>
                <p className="card-text fs-3">${totalBalance()}</p>
                <small className="text-muted">Total Balance</small>
              </div>
            </div>

            <div className="card flex-fill text-center">
              <div className="card-body">
                <h5 className="card-title">Income</h5>
                <p className="card-text fs-3 text-success">${totalIncome()}</p>
                <small className="text-muted">Total Income</small>
              </div>
            </div>

            <div className="card flex-fill text-center">
              <div className="card-body">
                <h5 className="card-title">Expenses</h5>
                <p className="card-text fs-3 text-danger">${totalExpenses()}</p>
                <small className="text-muted">Total Expenses</small>
              </div>
            </div>
          </div>

          <div className="m-5 p-3">
            <h2 className="">All Transactions</h2>
            <div className="card-body">
              <Chart />
            </div>
          </div>

            <div className="m-5 p-3">
            <h2 className="">Recent Transactions</h2>
          </div>

          <div className="m-5 p-3">
            <div className="d-flex flex-column flex-md-row gap-4">
              
              <div className="card flex-fill">
                <div className="card-body">
                  <h5 className="card-title text-center mt-2">Recent Income</h5>
                  <p className="card-text fs-3 text-success text-center mb-4">${totalIncome()}</p>
                  {recentIncomes.map((income) => {
                    const { _id, title, amount, category, description, date } = income;
                    return (
                      <div key={_id} className="card mb-5">
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">${amount} - {category}</h6>
                          <p className="card-text">{description}</p>
                          <p className="card-text mb-5"><small className="text-muted">{new Date(date).toLocaleDateString()}</small></p>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              deleteIncome(_id);
                              window.alert(`"${title}" has been deleted successfully.`);
                            }}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-outline-secondary mx-3">
                            Edit
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="card flex-fill">
                <div className="card-body">
                  <h5 className="card-title text-center mt-2">Recent Expenses</h5>
                  <p className="card-text fs-3 text-danger text-center mb-4">${totalExpenses()}</p>
                  {recentExpenses.map((expense) => {
                    const { _id, title, amount, category, description, date } = expense;
                    return (
                      <div key={_id} className="card mb-5">
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">${amount} - {category}</h6>
                          <p className="card-text">{description}</p>
                          <p className="card-text mb-5"><small className="text-muted">{new Date(date).toLocaleDateString()}</small></p>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              deleteExpense(_id);
                              window.alert(`"${title}" has been deleted successfully.`);
                            }}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-outline-secondary mx-3">
                            Edit
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;

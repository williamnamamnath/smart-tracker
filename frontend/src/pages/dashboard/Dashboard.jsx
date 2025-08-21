
const Dashboard = () => {
  return (
    <>
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <div className="flex-fill">
        <h1 className='fw-bold fs-1 m-5 p-3'>My Tracker</h1>

        <div className="d-flex gap-4 m-5 p-3">
          <div className="card flex-fill text-center">
            <div className="card-body">
              <h5 className="card-title">Summary</h5>
              <p className="card-text fs-3">$0.00</p>
              <small className="text-muted">Total Income - Total Expenses</small>
            </div>
          </div>

          <div className="card flex-fill text-center">
            <div className="card-body">
              <h5 className="card-title">Income</h5>
              <p className="card-text fs-3 text-success">$0.00</p>
              <small className="text-muted">Total Income</small>
            </div>
          </div>

          <div className="card flex-fill text-center">
            <div className="card-body">
              <h5 className="card-title">Expenses</h5>
              <p className="card-text fs-3 text-danger">$0.00</p>
              <small className="text-muted">Total Expenses</small>
            </div>
          </div>
        </div>
        
        <div className="m-5 p-3">
          <h2 className="">My Revenue</h2>
          <div className="card-body">
              <h5 className="card-title">Income</h5>
              <p className="card-text fs-3 text-success">$0.00</p>
              <small className="text-muted">Total Income</small>
            </div>
        </div>

        <div className="m-5 p-3">
          <h2 className="">My Expenses</h2>
          <div className="card-body">
              <h5 className="card-title">Expenses</h5>
              <p className="card-text fs-3 text-danger">$0.00</p>
              <small className="text-muted">Total Expenses</small>
            </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Dashboard;
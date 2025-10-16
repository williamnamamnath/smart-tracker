//REMINDER: Add screenshots for each benefit when finalizing the project (in a carousel format?)

const LandingPage = () => {
  return (
    <>
    <h1 className='mt-5 fw-bold fs-1 text-center'>Welcome To SmartTracker</h1>
    <div className="mt-5 py-3 container text-center">

    <div className="d-grid gap-2 d-md-block">
  <button className="btn btn-success m-3 p-5 fs-4" type="button" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightgray" }}>
        <a href="/authenticate" className='text-decoration-none text-reset fs-5'>Click here to login or create an account</a>
  </button>
</div>
</div>

<br/>

<div className="mt-5 py-3 container">
    <h2 className='m-4'>Why Use SmartTracker?</h2>
    <div className="row text-center py-4">
        <div className="col">
        Track your income and expenses, all in one location.
        </div>
        <div className="col">
        Enter your finances effortlessly and personalize them by classifying them into categories.
        </div>
        <div className="col">
        Budget and plan efficiently with the help of visual aids. 
        </div>
    </div>
</div>

<div className="my-5 py-3 container">
    <div className="row text-center">
        <div className="col">
        Obtain summaries of revenue(s) and expenditure(s) over a specific time period.
        </div>
        <div className="col">
        Manipulate data by exporting in a PDF or Excel file. 
        </div>
        <div className="col">
        All data and information is stored securely with the help of a verified database and a robust authentication system.
        </div>
    </div>
</div>
    </>
  );
};

export default LandingPage;
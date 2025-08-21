import React from 'react';

//REMINDER: Add screenshots for each benefit when finalizing the project

const LandingPage = () => {
  return (
    <>
    <h1 className='mt-5 fw-bold fs-1 text-center'>Welcome To SmartTracker</h1>
    <div className="mt-5 py-3 container text-center">

    <div className="d-grid gap-2 d-md-block">
  <button className="btn btn-success me-5 p-5 fs-4" type="button">
        Already have an account? 
        <br/>
        <a href="/login" className='text-decoration-none text-reset fs-5'>Click here to login</a>
  </button>

  <button className="btn btn-warning me-5 p-5 fs-4" type="button">
        Don't have an account yet?
        <br/>
        <a href="/signup" className='text-decoration-none text-reset fs-5'>Click here to get started</a>
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
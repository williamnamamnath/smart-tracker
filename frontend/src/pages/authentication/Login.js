const Login = ({
  loginInfo,
  handleChange,
  blankInputLI,
  handleLogin,
  errorMessage,
  buttonText,
}) => {
    
  return (
    <>
      <div className="container mt-5 py-5 text-center">
        <h2 className="fst-italic fw-bold text-decoration-underline mb-5 px-3">
          Take care of your finances more efficiently.
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow border-dark" style={{backgroundColor: '#e5e1d6', borderRadius: '10px'}}>
              <div className="card-body p-4">

                <form className="form" onSubmit={handleLogin}>
                  <h1 className="display-6 text-decoration-underline fw-bold mb-3">Login</h1>
                  <h3 className="h5 mb-4">Log back in and continue exploring!</h3>
                  
                  <div className="mb-3">
                    <label className="form-label fw-bold fs-5">Email Address:</label>
                    <input
                      className="form-control"
                      type="text"
                      value={loginInfo.email}
                      name="email"
                      onChange={handleChange}
                      placeholder="E.g. Your email address"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label fw-bold fs-5">Password:</label>
                    <input
                      className="form-control"
                      type="password"
                      value={loginInfo.password}
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  
                  <button className="btn btn-primary btn-lg w-100" disabled={blankInputLI}>
                    {buttonText}
                  </button>
                </form>
                {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-75 mx-auto" />
    </>
  );
};

export default Login;
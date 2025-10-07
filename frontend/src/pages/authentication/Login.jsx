const Login = ({ 
  loginInfo,
  handleChange,
  blankInputLI,
  handleLogin,
  errorMessage,
  buttonText
 }) => {

  return (
    <>
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h3 className='mb-5 text-center text-decoration-underline'>Login</h3>
        <form onSubmit={handleLogin}>

          <div className="mb-4">
            <label className='fw-bold'>Email</label>
            <input name="email" value={loginInfo.email} onChange={handleChange} className="form-control" />
          </div>

          <div className="mb-4">
            <label className='fw-bold'>Password</label>
            <input type="password" name="password" value={loginInfo.password} onChange={handleChange} className="form-control" />
          </div>

          <button type='submit' className="btn btn-primary" disabled={blankInputLI}>{buttonText}</button>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        </form>
      </div>
    </div>
    </>
  );
};

export default Login;

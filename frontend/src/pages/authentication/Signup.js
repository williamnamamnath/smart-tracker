const Signup = ({
  formData,
  handleChangeForm,
  blankInputSU,
  handleSignUp,
  signUpMessage,
  btnTextSignup,
}) => {

  return (
    <>
    <div className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow border-dark" style={{backgroundColor: '#e5e1d6', borderRadius: '10px'}}>
            <div className="card-body p-4">

              <form className="form" onSubmit={handleSignUp}>
                <h2 className="text-decoration-underline mb-3">Sign Up</h2>
                <p className="mb-4">
                  Create an account to start saving smarter.
                </p>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold fs-5">First Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="fname"
                      value={formData.fname}
                      onChange={handleChangeForm}
                      placeholder="E.g. John"
                      required
                      />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold fs-5">Last Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="lname"
                      value={formData.lname}
                      onChange={handleChangeForm}
                      placeholder="E.g. Doe"
                      required
                      />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold fs-5">Email Address:</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChangeForm}
                    placeholder="E.g. john.doe@email.com"
                    required
                    />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold fs-5">Phone Number (Optional):</label>
                  <input
                    className="form-control"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChangeForm}
                    placeholder="E.g. (123) 456-789"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold fs-5">Address:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChangeForm}
                    placeholder="E.g. 123 Main St"
                    />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold fs-5">City:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChangeForm}
                      placeholder="E.g. New York"
                      />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold fs-5">Postcode:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChangeForm}
                      placeholder="E.g. 10001"
                      />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold fs-5">Country:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChangeForm}
                      placeholder="E.g. USA"
                      />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold fs-5">Password:</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChangeForm}
                      required
                      />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold fs-5">Confirm Password:</label>
                    <input
                      className="form-control"
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChangeForm}
                      required
                      />
                  </div>
                </div>

                <button className="btn btn-primary btn-lg w-100 mt-3" type="submit" disabled={blankInputSU}>
                  {btnTextSignup}
                </button>
                
                {signUpMessage && <p className="text-danger mt-3">{signUpMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;
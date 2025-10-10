const Signup = ({ 
  formData,
  handleChangeForm,
  blankInputSU,
  handleSignUp,
  signUpMessage,
  btnTextSignup 
}) => {

  return (
    <>
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h3 className='mb-5 text-center text-decoration-underline'>Signup</h3>
        <form onSubmit={handleSignUp}>

          <div className="mb-4">
            <label className='fw-bold'>First Name</label>
            <input name="firstName" placeholder="E.g. John" value={formData.firstName} onChange={handleChangeForm} className="form-control" />
          </div>

          <div className="mb-4">
            <label className='fw-bold'>Last Name</label>
            <input name="lastName" placeholder="E.g. Smith" value={formData.lastName} onChange={handleChangeForm} className="form-control" />
          </div>

          <div className="mb-4">
            <label className='fw-bold'>Email</label>
            <input name="email" placeholder="E.g. john.smith@example.com" value={formData.email} onChange={handleChangeForm} className="form-control" />
          </div>

          <div className="mb-4">
            <label className='fw-bold'>Phone Number</label>
            <input name="phone" type='tel' placeholder="E.g. 123-456-789" value={formData.phone} onChange={handleChangeForm} className="form-control" />
          </div>

          <div className="mb-4">
            <label className='fw-bold'>Address</label>
            <input name="address" placeholder="E.g. 123 Main Street" value={formData.address} onChange={handleChangeForm} className="form-control" />
          </div>

          <div className="mb-4">
            <label className='fw-bold'>City</label>
            <input name="city" placeholder="E.g. Montreal" value={formData.city} onChange={handleChangeForm} className="form-control" />
          </div>

          <div className="mb-4">
            <label className='fw-bold'>Postal Code/Zip Code</label>
            <input name="postcode" placeholder="E.g. H1A 1A1" value={formData.postcode} onChange={handleChangeForm} className="form-control" />
          </div>

          <div className="mb-4">
            <label className='fw-bold'>Country</label>
            <input name="country" placeholder="E.g. Canada" value={formData.country} onChange={handleChangeForm} className="form-control" />
          </div>

          <div className="mb-4">
            <label className='fw-bold'>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChangeForm} className="form-control" />
          </div>

          <button type='submit' className="btn btn-primary mb-3" disabled={blankInputSU}>{btnTextSignup}</button>
          {signUpMessage && <div className="mt-3 alert alert-info">{signUpMessage}</div>}
        </form>
      </div>
    </div>
    </>
  );
};

export default Signup;

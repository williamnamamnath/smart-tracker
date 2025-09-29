import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api, { setAuthToken } from '../../api/api';

const Login = ({ setUser }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', form);
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      setAuthToken(token);
      setUser(user);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h3>Login</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={submit}>
          <div className="mb-3">
            <label>Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="form-control" />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
          <Link className="btn btn-link" to="/signup">Signup</Link>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;

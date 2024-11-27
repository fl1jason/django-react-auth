import { useState } from 'react';
import axios from 'axios';

function App() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [response, setResponse] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/account/login', loginData);
      setResponse(res.data);
    } catch (error) {
      setResponse(error.response?.data || { error: 'An error occurred' });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/account/signup', signupData);
      setResponse(res.data);
    } catch (error) {
      setResponse(error.response?.data || { error: 'An error occurred' });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Django API Test</h1>

      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={loginData.username}
            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>

      <div>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={signupData.username}
            onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={signupData.email}
            onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={signupData.password}
            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={signupData.password2}
            onChange={(e) => setSignupData({ ...signupData, password2: e.target.value })}
            required
          />
          <button type="submit">Signup</button>
        </form>
      </div>

      <div>
        <h2>Response</h2>
        <pre>{response ? JSON.stringify(response, null, 2) : 'No response yet'}</pre>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";




const Login = () => {
    //state
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const dispatch = useDispatch()
    const navigate = useNavigate()


const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post('http://localhost:3000/user/login', {
      email,
      password
    });

    // axios automatically parses JSON
    if (res.data.data?.access?.token) {
      dispatch(
        loginSuccess({
          token: res.data.data.access.token,
          user: {
            id: res.data.data.id,
            name: res.data.data.name,
            email: res.data.data.email,
            role: res.data.data.role,
          },
        })
      );
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  } catch (error) {
    console.log(error);
    alert('Login failed. Try again.');
  }
};



  return(
    <div className="max-w-md mx-auto mt-10">
    <h2 className="text-2xl font-semibold mb-4">Login</h2>
    <form onSubmit={handleLogin} className="space-y-3">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
    <p className="mt-3">
      Don't have an account?{' '}
      <Link to="/register" className="text-blue-500 underline">
        Create one
      </Link>
    </p>
  </div>

  )  

}


export default Login;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react"; // Import Eye icons

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // New state for visibility
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const storedData = localStorage.getItem('bump2baby_user');
    
    if (!storedData) {
      setError("No account found. Please sign up first!");
      return;
    }

    const storedUser = JSON.parse(storedData);

    if (storedUser.username?.toLowerCase() === username.toLowerCase()) {
      localStorage.setItem('bump2baby_onboarded', 'true');
      navigate('/app');
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center py-12 px-4">
      {/* Brand Logo */}
      <div className="flex items-center gap-2 mb-12 self-start ml-4 md:ml-20 cursor-pointer" onClick={() => navigate('/')}>
        <div className="bg-[#D83D6C] p-1.5 rounded-lg">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
           </svg>
        </div>
        <span className="text-xl font-bold text-[#D83D6C]">Bump2baby</span>
      </div>

      {/* Login Card */}
      <div className="bg-white rounded-[40px] shadow-sm border border-slate-50 p-8 md:p-12 w-full max-w-lg relative">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-10 left-10 text-slate-400 hover:text-slate-600"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-slate-800 mb-1">Login</h1>
          <p className="text-slate-400 text-sm">Hey, Welcome Back!!</p>
        </div>

        {error && (
          <p className="text-red-500 text-xs text-center mb-4 bg-red-50 py-2 rounded-lg">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-slate-500 text-xs font-medium mb-2 ml-1">Username</label>
            <input 
              type="text" 
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-[#D83D6C] transition-all placeholder:text-slate-300"
              required
            />
          </div>

          <div>
            <label className="block text-slate-500 text-xs font-medium mb-2 ml-1">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-[#D83D6C] transition-all placeholder:text-slate-300 pr-12"
                required
              />
              {/* Toggle Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            <div className="text-right mt-2">
              <button type="button" className="text-[10px] font-semibold text-slate-400 hover:text-[#D83D6C]">Forgot Password</button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-bold shadow-lg shadow-pink-100 hover:bg-[#c1325d] transition-all transform active:scale-[0.98]"
          >
            Log In
          </button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-4 text-slate-400 font-medium">or</span>
          </div>
        </div>

        <div className="space-y-3">
          <button type="button" className="w-full flex items-center justify-center gap-3 py-3.5 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
            <FcGoogle className="text-xl" />
            <span className="text-sm font-semibold text-slate-600">Continue with Google</span>
          </button>
          <button type="button" className="w-full flex items-center justify-center gap-3 py-3.5 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
            <FaFacebook className="text-xl text-[#1877F2]" />
            <span className="text-sm font-semibold text-slate-600">Continue with Facebook</span>
          </button>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Don't have an account?{' '}
            <Link to="/home" className="text-[#D83D6C] font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
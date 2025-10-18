import useGlobalStore from '@/store/global/globalStore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { Card, CardBody } from '@heroui/card';

export const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleAuth = useGlobalStore(e => e.handleAuth);
  const token = useGlobalStore(e => e.token);
  const role = useGlobalStore(e => e.role);
  
  React.useEffect(() => {
    if (token) {
      navigate(`/${role}`);
    }
    else {
      navigate("/login");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await handleAuth(email, password);
    setLoading(false);
    if (response?.role) {
      navigate(`/${response?.role}`);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to access your wiki dashboard</p>
        </div>

        {/* Login Card */}
        <Card>
          <CardBody className="p-8 pt-4">
            <div className="py-4 text-3xl font-semibold text-center text-gray-800 dark:text-white">
              Login
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <Input
                type="email"
                label="Email Address"
                placeholder="your.email@example.com"
                value={email}
                onValueChange={setEmail}
                variant="bordered"
                isRequired
                classNames={{
                  label: "text-gray-700 font-medium",
                  input: "text-gray-900",
                  inputWrapper: "border-gray-300 hover:border-blue-500 focus-within:!border-blue-500"
                }}
              />

              {/* Password Input */}
              <Input
                label="Password"
                placeholder="••••••••"
                value={password}
                onValueChange={setPassword}
                variant="bordered"
                isRequired
                type={showPassword ? "text" : "password"}
                classNames={{
                  label: "text-gray-700 font-medium",
                  input: "text-gray-900",
                  inputWrapper: "border-gray-300 hover:border-blue-500 focus-within:!border-blue-500"
                }}
                endContent={
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="text-gray-500 hover:text-gray-700 transition focus:outline-none"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                }
              />

              {/* Forgot Password */}
              <div className="flex items-center justify-end">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium transition">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 font-medium"
                isLoading={loading}
              >
                Sign In
              </Button>
            </form>

            <div className='font-medium text-sm text-center mt-6'>
              Don't have an account? <span className='text-blue-600'>Contact your Administrator</span>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
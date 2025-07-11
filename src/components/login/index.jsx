import { useNavigate } from "react-router-dom";
import { InputField } from "../input";
import { ButtonComponent } from "../button";
import useGlobalStore from "@/store/global/globalStore";
import React from "react";
import { addToast } from "@heroui/toast";

  
export const Login = () => {

  // states
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading,setLoading] = React.useState(false);

  // store
  const token = useGlobalStore(state => state.token);
  const handleLogin = useGlobalStore(state => state.handleLogin);
  const role = useGlobalStore(state => state.role);

  // hooks
  const navigate = useNavigate();

  const handleToast = (title, variant) => { 
    addToast({
      title,
      color:variant
      })
  };

  React.useEffect(() => {
    if (token) {
      navigate(`/${role}`);
    }
   }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      setLoading(true);
      const response = await handleLogin({ email, password });
      setLoading(false);
      if (response?.status) {
        handleToast("Login Successful", "success");
        navigate(`/${response?.role}`);
      }
      else {
        if (!response.message) {
          handleToast("Some error occured", "danger");
        }
        else {
          handleToast(response.message, "danger");
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Login to WikiBit</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col gap-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <InputField
              id="email"
              type="email"
              required
              variant={"bordered"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <InputField
              id="password"
              type="password"
              required
              variant={"bordered"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="password"
            />
          </div>

          <ButtonComponent
            type="submit"
            className="w-full bg-blue-600 mt-2 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            isLoading={loading}
          >
            Login
          </ButtonComponent>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
           {new Date().getFullYear()} WikiBit — Lecture materials for smart learners
        </p>
      </div>
    </div>
  );
};

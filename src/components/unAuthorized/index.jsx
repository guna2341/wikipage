import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../button";

export const Unauthorized = () => {
    const navigate = useNavigate();
    function handleBack() {
        navigate(-1);
    }
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <h1 className="text-5xl font-bold text-red-600 mb-4">403</h1>
            <h2 className="text-2xl font-semibold mb-2">Access Denied</h2>
            <p className="text-gray-600 mb-6">
                You do not have permission to access this page.
            </p>
            <button onClick={handleBack}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Go Back
            </button>
        </div>
    );
};


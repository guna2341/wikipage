import useGlobalStore from '@/store/global/globalStore';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonComponent } from '../button';
import { Image } from '@heroui/image';
import { logo } from '@/assets';
import secureLocalStorage from 'react-secure-storage';

export const DemoLogin = () => {
  const navigate = useNavigate();
  const role = useGlobalStore(e => e.role);
  const changeGlobalStore = useGlobalStore(e => e.changeGlobalStore);
  const [input, setInput] = React.useState("");
  const [err, setErr] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const token = useGlobalStore(e => e.token);

  React.useEffect(() => {
    if (token) {
      navigate(`/${role}`);
    }
  }, []);

  const roleOptions = [
    {
      value: "student",
      label: "Student",
      icon: "🎓",
      description: "Access course materials and assignments"
    },
    {
      value: "faculty",
      label: "Faculty",
      icon: "👨‍🏫",
      description: "Manage courses and student progress"
    },
    {
      value: "admin",
      label: "Administrator",
      icon: "🛡️",
      description: "Full system access and management"
    }
  ];

  function handleRoleSelect(selectedRole) {
    setInput(selectedRole);
    setErr("");
  }

  async function handleLogin() {
    if (!input) {
      setErr("Please select a role");
      return;
    }

    setIsLoading(true);
    setErr("");

    setTimeout(() => {
      const roles = ["admin", "student", "faculty"];
      if (!roles.includes(input)) {
        setErr("Invalid Role");
        setIsLoading(false);
      } else {
        secureLocalStorage.setItem("role", input);
        changeGlobalStore("role", input);
        secureLocalStorage.setItem("token", true);
        changeGlobalStore("token", true);
        navigate(`/${input}`);
      }
    }, 800);
  }

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center gap-4 mb-4'>
            <Image
              src={logo}
              alt="WikiBit Logo"
              className='w-12 h-12'
            />
            <h1 className='text-3xl font-bold text-gray-800'>WikiBit</h1>
          </div>
          <p className='text-gray-600'>Your Gateway to Knowledge</p>
        </div>

        {/* Login Form */}
        <div className='bg-white rounded-lg shadow-lg border border-gray-100 p-6'>
          <div className='mb-6'>
            <h2 className='text-lg font-semibold text-gray-800 mb-4'>
              Choose Your Role
            </h2>

            <div className='space-y-3'>
              {roleOptions.map((roleOption) => (
                <div
                  key={roleOption.value}
                  onClick={() => handleRoleSelect(roleOption.value)}
                  className={`
                    p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                    ${input === roleOption.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                    }
                  `}
                >
                  <div className='flex items-center gap-3'>
                    <span className='text-2xl'>{roleOption.icon}</span>
                    <div className='flex-1'>
                      <h3 className={`font-medium ${input === roleOption.value ? 'text-blue-700' : 'text-gray-800'
                        }`}>
                        {roleOption.label}
                      </h3>
                      <p className={`text-sm ${input === roleOption.value ? 'text-blue-600' : 'text-gray-600'
                        }`}>
                        {roleOption.description}
                      </p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 ${input === roleOption.value
                        ? 'bg-blue-500 border-blue-500'
                        : 'border-gray-300'
                      }`}>
                      {input === roleOption.value && (
                        <div className='w-full h-full bg-white rounded-full scale-50'></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Error Message */}
          {err && (
            <div className='bg-red-50 border border-red-200 rounded-lg p-3 mb-4'>
              <p className='text-red-700 text-sm'>{err}</p>
            </div>
          )}

          {/* Login Button */}
          <ButtonComponent
            onClick={handleLogin}
            disabled={isLoading}
            className={`
              w-full py-3 px-4 rounded-lg font-medium transition-all duration-200
              ${isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
              }
              text-white
            `}
          >
            {isLoading ? (
              <div className='flex items-center justify-center gap-2'>
                <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                <span>Logging in...</span>
              </div>
            ) : (
              'Continue to WikiBit'
            )}
          </ButtonComponent>
        </div>

        {/* Footer */}
        <div className='text-center mt-6'>
          <p className='text-sm text-gray-500'>
            Need help? Contact your system administrator
          </p>
        </div>
      </div>
    </div>
  );
}
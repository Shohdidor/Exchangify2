import React from 'react';
import ButTon from '../../components/button'; 

// MUI Icons 
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

// IMG
import Logo from "/src/image/image.png"; 

function Login() {
  return (
    <div className="min-h-screen mt-[-170px] bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex justify-center items-center">
      <div className="bg-white text-center p-8 rounded-lg shadow-lg w-[400px]">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img
            src={Logo}
            alt="Logo"
            className="w-[120px] h-[120px] rounded-full shadow-md"
          />
        </div>

        {/* Username Input */}
        <div className="flex items-center bg-[#0A1128] text-white rounded-md mb-4 p-2">
          <PersonIcon className="text-white mr-3" fontSize="large" />
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-transparent outline-none border-none text-white placeholder:text-[#ffffff84] py-2 px-3 text-lg"
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center bg-[#0A1128] text-white rounded-md mb-6 p-2">
          <LockIcon className="text-white mr-3" fontSize="large" />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent outline-none border-none text-white placeholder:text-[#ffffff84] py-2 px-3 text-lg"
          />
        </div>

        {/* Submit Button */}
        <ButTon /> {/* Your custom button component */}

        {/* Or add a direct button here */}
        {/* <button className="w-full bg-[#F39C12] text-white py-2 rounded-md mt-4 hover:bg-[#d48806]">Login</button> */}
      </div>
    </div>
  );
}

export default Login;

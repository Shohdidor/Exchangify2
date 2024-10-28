import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../Layout/LayoutAnimation.css'; 

// Footer 
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';


// MUI ICONS
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';

const Layout = () => {
  const [hidDiv, setHidDiv] = useState(true);
  const [showDot, setShowDot] = useState(false); // Dot AnimationFunc

  const toggleDiv = () => {
    setHidDiv(!hidDiv);
    setShowDot(true); // Show dot when the div is revealed
    setTimeout(() => {
      setShowDot(false); // Hide dot after 1 second
    }, 1000);
  };

  return (
    <>
      <div
        className='bg-[#0A1128] inline-block p-[10px] sticky top-0'
      >
        <h1
          onClick={toggleDiv}
          className='text-[#F39C12] cursor-pointer hover:text-white text-[25px] font-bold mb-[5px] text-center'
        >
          E
          {showDot && <span className='notification-dot'></span>}
        </h1>
        <Link to='profile'>
          <PersonIcon fontSize='large' className='mb-[5px] text-[#F39C12] cursor-pointer hover:text-white' />
        </Link>
        <br />
        
        <Link to='/'>
          <HomeIcon className='text-[#F39C12] mb-[5px] cursor-pointer hover:text-white' fontSize='large' />
        </Link>
        <br />
        <Link to='login'>
          <LoginIcon className='text-[#F39C12] cursor-pointer hover:text-white' fontSize='large' />
        </Link>
      </div>


      <Outlet />


      {/* Footer Library MBD React UI Kit  */}



      <MDBFooter className='text-center text-white' style={{ backgroundColor: '#F39C12' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <p className='poppins'> 
        © 2020 Exchangify
        </p>
        <h1 className='poppins'>
          P.Parker
        </h1>
      </div>
    </MDBFooter>
    
    </>
  );
};

export default Layout;

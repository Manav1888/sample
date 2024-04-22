import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineMenu } from 'react-icons/ai';

// Assuming you have a logo.png in your assets folder
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Handle click outside of menu to close it
  const handleClickOutside = (event) => {
    if (isMenuVisible && !event.target.closest('.menu-container')) {
      setIsMenuVisible(false);
    }
  };

  // Add event listener for clicks outside of the menu
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuVisible]);

  return (
    <header className='flex flex-col sm:flex-row sm:justify-evenly pt-5 pb-4'>
      <div className='flex justify-between items-center w-full sm:w-auto'>
        <Link to='/sample' className='flex items-center'>
          <img src={logo} alt='Logo' className='mr-2' style={{ width: '50px', height: '50px' }} />
          <div className='font-bold tracking-wider text-xl'>GA4 Auditor</div>
        </Link>

        <button onClick={toggleMenu} className='sm:hidden p-3'>

          <AiOutlineMenu size={24} />
        </button> 
      </div>

      <nav className={`menu-container flex flex-col mt-3 sm:flex-row sm:items-center ${isMenuVisible ? 'block' : 'hidden sm:block'}`}>
        <a href="/#pricing" className='p-2 sm:ml-0' onClick={() => setIsMenuVisible(false)}>Pricing</a>
        <a href="/#features" className='p-2' onClick={() => setIsMenuVisible(false)}>Features</a>
        <Link to="/blog" className='p-2' onClick={() => setIsMenuVisible(false)}>Blog</Link>
        {isMenuVisible && (
          <div className='flex flex-col sm:flex-row sm:items-center'>
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faLock}  className='px-1'/>
              <span>Login</span>
            </div>
            <button className="bg-black text-sm text-white rounded-lg p-2 ml-2">
              Get started
            </button>
          </div>
        )}
      </nav>

      <div className='hidden sm:flex'>
        <div className='flex items-center p-2'>
          <FontAwesomeIcon icon={faLock} className='px-1'/>
          <span>Login</span>
        </div>
        <button className="bg-black text-sm text-white rounded-lg p-2 ml-2">
          Get started
        </button>
      </div>
    </header>
  );
};

export default Header;

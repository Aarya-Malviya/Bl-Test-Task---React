import React, { useState } from 'react'
import './Style.css';
import './Responsive.css';
import SideBar from '../conponent/SideBar';

function Home() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  console.log('text');
  return (
    <>
      <>
      
        <div className="main-container">
          <div className={`navcontainer ${isNavOpen ? 'navclose' : ''}`} >
            <nav className="nav">
              <div className="nav-upper-options">
                  
              </div>
            </nav>
          </div>
        </div>
      </>
    </>
  )
}

export default Home
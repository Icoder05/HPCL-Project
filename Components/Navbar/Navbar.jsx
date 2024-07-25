import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/hplogo.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

const [ sticky, setSticky]=useState(false);
const navigate = useNavigate();
const handleDropdownClick = (path) => {
  navigate(path);
};


useEffect(()=>{
    window.addEventListener('scroll',()=>{
        window.scrollY > 100 ? setSticky(true) : setSticky(false); 
    })
},[]);

return (
    <nav className={`container ${sticky? 'dark_nav':''}`}>
        <img src={logo} className='logo'/>
        
        <ul className='navbar-nav'>
        <li className="nav-item"><a href="/home">HOME</a></li>
        <li className="nav-item dropdown">
          <button className="dropdown-toggle">
            PUBLICATIONS
          </button>
          <ul className="dropdown-menu">
            <li onClick={() => handleDropdownClick('/pub/pub1')}>Loss Control Reaction</li>
            <li onClick={() => handleDropdownClick('/pub/pub2')}>Bulletin</li>
            <li onClick={() => handleDropdownClick('/pub/pub3')}>Books</li>
            <li onClick={() => handleDropdownClick('/pub/pub4')}>News</li>

          </ul>
        </li>
        <li className="nav-item dropdown">
          <button className="dropdown-toggle">
            MANUALS
          </button>
          <ul className="dropdown-menu">
            <li onClick={() => handleDropdownClick('/manual/manual1')}>Fire Protection Manual</li>
            <li onClick={() => handleDropdownClick('/manual/manual2')}>Safety Manual</li>
            <li onClick={() => handleDropdownClick('/manual/manual3')}>SWP Manual</li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <button className="dropdown-toggle">
            STANDARDS
          </button>
          <ul className="dropdown-menu">
            <li onClick={() => handleDropdownClick('/standard/standard1')}>OISD</li>
            <li onClick={() => handleDropdownClick('/standard/standard2')}>
            <li className='nav-item-1 dropdown-1'>
            <button className="dropdown-toggle-1">
            Factory Act
            </button>
            <ul className="dropdown-menu-1">
            <li className='dropdown-ref' ><a href="/text/text1">Freshers Training</a></li>
            <li className='dropdown-ref'><a href='/text/text3'>
            <li className='nav-item-2 dropdown-2'>
            <button className="dropdown-toggle-2">
            Contractor Training
            </button>
            <ul className="dropdown-menu-2">
            <li><a href='/train/train1'>Workers</a></li>
            <li><a href='/train/train2'>Supervisor</a></li>
            <li><a href='/train/train3'>Refinary Clearing</a></li>
            <li><a href='/train/train4'>Treand</a></li>

            </ul></li></a></li>
          
            <li className='dropdown-ref'><a href='/text/text2'>Work Permit</a></li>
            </ul>
            </li></li>
            <li onClick={() => handleDropdownClick('/standard/standard3')}>Petroleum Act</li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <button className="dropdown-toggle">
            FUNCTIONS
          </button>
          <ul className="dropdown-menu">
            <li onClick={() => handleDropdownClick('/fun/fun1')}>Equipments</li>
            <li onClick={() => handleDropdownClick('/fun/fun2')}>Chemical Used</li>
            <li onClick={() => handleDropdownClick('/fun/fun3')}>Fire Tenders</li>
          </ul>
        </li>
        
           <li className="nav-item dropdown">
          <button className="dropdown-toggle">
            ABOUT
          </button>
          <ul className="dropdown-menu">
            <li onClick={() => handleDropdownClick('/about/about1')}>Who Are We?</li>
            <li onClick={() => handleDropdownClick('/about/about2')}>Our commitees</li>
            <li onClick={() => handleDropdownClick('/about/about3')}>Career In F&S</li>
            <li onClick={() => handleDropdownClick('/about/about4')}>Job In F&S</li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <button className="dropdown-toggle">
          SERVICES
          </button>
          <ul className="dropdown-menu">
            <li onClick={() => handleDropdownClick('/dept/dept1')}>HSE </li>
            <li onClick={() => handleDropdownClick('/dept/dept2')}>Safety Code</li>
            <li onClick={() => handleDropdownClick('/dept/dept3')}>Training</li>
          </ul>
        </li>
        
        
        <li className="nav-item"><a href="/contact" onClick={(e) => {e.preventDefault(); handleDropdownClick('/contact');}}>CONTACT</a></li>

        </ul>

      
    
       
    </nav>
 
  )
}

export default Navbar
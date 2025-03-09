import React from 'react'
import {BrowserRouter,Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <h2 className='logo'>Product List & Management
            </h2>
            <ul className='nav-link'>
              <BrowserRouter>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Product Form'>Product Form</Link></li>
                <li><Link to='/Product List'>Product List</Link></li>
                <li><Link to='/Product Detail Page'>Product Detail Page</Link></li>
                </BrowserRouter>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-cls'>
      <div >
        Swiggy Rollin
      </div>
      <div>
        <ul className='nav-items'>
            <Link to='/'><li>Home</li></Link>
           <Link to='/about'><li>About</li></Link> 
        </ul>
      </div>
    </div>
  )
}

export default Header

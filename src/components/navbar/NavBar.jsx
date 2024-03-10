import './navbar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navContainer'>
        <span className='log'>Booking</span>
          <div className='navItems'>
            <button className='navButton'>Resgister</button>
            <button className='navButton'>Login</button>
          </div>
      </div>
    </nav>
  )
}

export default NavBar
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <span className='logo'>Superbooking</span>
                <div className='navItems'>
                    <button className='navButton'>Sign up</button>
                    <button className='navButton'>Log in</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
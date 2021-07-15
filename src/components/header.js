import {Link} from 'react-router-dom'
import { ShoppingCart, User } from 'react-feather'


const Header = ()=>{
    return (
        <header className="text-gray-500 bg-gray-900 body-font ">
            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
            <Link to='/' className="flex items-center mb-4 -ml-5 font-medium text-white title-font md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" 
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    className="w-10 h-10 p-2 text-white bg-orange-500 rounded-full" 
                    viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl uppercase">Shop</span>
            </Link>
            <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                <Link to='/cart' className="inline-block w-full mr-5 hover:text-white">
                    <ShoppingCart className='inline-block feather-icon'/> Cart
                </Link>
            </nav>
            <Link to='/login' className="inline-block hover:text-white" >
                <button className="btn">
                    <User className='feather-icon inline-block'/> Sign In
                </button>
            </Link>
            </div>
        </header>
    );
}



export default Header
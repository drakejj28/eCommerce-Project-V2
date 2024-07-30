// import React from 'react';
// import { Link } from 'react-router-dom';
// import './header.css';

// function Header() {
//     return (
//         <header>
//             <nav className="navbar">
//                 <Link to="/">
//                     <img src="/images/Artisanlogo.png" alt="Logo" className="navbar-logo"/>
//                 </Link>
//                 <ul className="navbar-list">
//                     <li><Link to="/games">Games</Link></li>
//                     <li><Link to="/join">Join Our Community</Link></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header({ cartCount }) {
    return (
        <header>
            <nav className="navbar">
                <Link to="/">
                    <img src="/images/Artisanlogo.png" alt="Logo" className="navbar-logo"/>
                </Link>
                <ul className="navbar-list">
                    <li><Link to="/games">Games</Link></li>
                    <li><Link to="/join">Join Our Community</Link></li>
                    <li>
                        <Link to="/cart">
                            <img src="/images/grocery-cart-icon-9.png" alt="Cart" className="cart-icon"/>
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;







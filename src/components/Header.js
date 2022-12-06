import { Link } from 'react-router-dom';
import NAVIGATIONPATH from '../common/routepaths';

const Header = () => (
     <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between p-2'>
        <h1 className='navbar-brand'>Magic Calculator</h1>
        <ul className='navbar-nav'>
            <li className='nav-item'><Link className='nav-link' to={NAVIGATIONPATH.HOME}>Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to={NAVIGATIONPATH.CALCULATOR}>Calculator</Link></li>
            <li className='nav-item'><Link className='nav-link' to={NAVIGATIONPATH.QUOTES}>Quote</Link></li>
        </ul>
    </nav>
);

export default Header;
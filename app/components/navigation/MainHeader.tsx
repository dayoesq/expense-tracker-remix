import { Link, NavLink } from '@remix-run/react';
import type { FC } from 'react';
import Logo from '../util/Logo';

const MainHeader: FC = () => {
    return (
        <header id='main-header'>
            <Logo />
            <nav id='main-nav'>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/pricing'>Pricing</NavLink>
                    </li>
                </ul>
            </nav>
            <nav id='cta-nav'>
                <ul>
                    <li>
                        <Link to='/auth' className='cta'>
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;

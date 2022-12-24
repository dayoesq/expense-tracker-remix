import { NavLink } from '@remix-run/react';
import type { FC } from 'react';

import Logo from '../util/Logo';

const ExpensesHeader: FC = () => {
    return (
        <header id='main-header'>
            <Logo />
            <nav id='main-nav'>
                <ul>
                    <li>
                        <NavLink to='/expenses' end>
                            Manage Expenses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/expenses/analysis'>
                            Analyze Expenses
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav id='cta-nav'>
                <button className='cta'>Logout</button>
            </nav>
        </header>
    );
};

export default ExpensesHeader;

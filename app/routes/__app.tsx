import type { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import type { FC } from 'react';
import ExpensesHeader from '~/components/navigation/ExpensesHeader';
import expensesStyles from '~/styles/expenses.css';

const ExpensesLayout: FC = () => {
    return (
        <>
            <ExpensesHeader />
            <Outlet />;
        </>
    );
};

export default ExpensesLayout;

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: expensesStyles }];
};

// layout route!
import type { LoaderFunction } from '@remix-run/node';
import { Link, Outlet, useLoaderData } from '@remix-run/react';
import type { FC } from 'react';
import { FaDownload, FaPlus } from 'react-icons/fa';
import ExpensesList from '~/components/expenses/ExpensesList';
import { getExpenses } from '~/data/expenses.server';

const ExpensesLayout: FC = () => {
    const expenses = useLoaderData();

    return (
        <>
            <Outlet />
            <section id='expenses-actions'>
                <Link to='add'>
                    <FaPlus />
                    <span>Add Expense</span>
                </Link>
                <a href='/expenses/raw'>
                    <FaDownload />
                    <span>Load Raw Data</span>
                </a>
            </section>
            <main>
                <ExpensesList expenses={expenses} />
            </main>
        </>
    );
};

export default ExpensesLayout;

export const loader: LoaderFunction = async () => {
    return await getExpenses();
};

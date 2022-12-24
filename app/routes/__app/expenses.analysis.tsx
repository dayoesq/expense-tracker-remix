import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
import Chart from '~/components/expenses/Chart';
import type { FC } from 'react';
import type { LoaderFunction } from '@remix-run/node';
import { getExpenses } from '~/data/expenses.server';
import { useLoaderData } from '@remix-run/react';

const ExpensesAnalysis: FC = () => {
    const expenses = useLoaderData();
    return (
        <main>
            <ExpenseStatistics expenses={expenses} />
            <Chart expenses={expenses} />
        </main>
    );
};

export default ExpensesAnalysis;

export const loader: LoaderFunction = async () => {
    return await getExpenses();
};

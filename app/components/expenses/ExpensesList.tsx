import type { FC } from 'react';
import ExpenseListItem from './ExpenseListItem';

const ExpensesList: FC<IExpenses> = ({ expenses }) => {
    return (
        <ol id='expenses-list'>
            {expenses?.length &&
                expenses.map(expense => (
                    <li key={expense.id}>
                        <ExpenseListItem
                            id={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                        />
                    </li>
                ))}
        </ol>
    );
};

export default ExpensesList;

import { Form, Link } from '@remix-run/react';
import PropTypes from 'prop-types';
import type { FC } from 'react';

type ExpenseListItemProps = {
    id?: string;
    title?: string;
    amount?: number;
};

const ExpenseListItem: FC<ExpenseListItemProps> = ({ id, title, amount }) => {
    return (
        <article className='expense-item'>
            <div>
                <h2 className='expense-title'>{title}</h2>
                <p className='expense-amount'>${amount && amount.toFixed(2)}</p>
            </div>
            <menu className='expense-actions'>
                <Form method='delete' action={`/expenses/${id}`}>
                    <button type='submit'>Delete</button>
                </Form>
                <Link to={`${id}`}>Edit</Link>
            </menu>
        </article>
    );
};

ExpenseListItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.number
};

export default ExpenseListItem;

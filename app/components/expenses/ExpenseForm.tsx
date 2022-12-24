import {
    Form,
    Link,
    useMatches,
    useParams,
    useTransition
} from '@remix-run/react';
import type { FC } from 'react';

const ExpenseForm: FC = () => {
    const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

    // const validationErrors = useActionData();
    // const loaderData = useLoaderData();
    const matches = useMatches();
    const params = useParams();
    const expenses = matches.find(
        match => match.id === 'routes/__app/expenses'
    )?.data;
    const expenseData = expenses?.find(
        (expense: { id: string | undefined }) => expense.id === params.id
    );
    const navigation = useTransition();
    const isSubmitting = navigation.state !== 'idle';

    // Here is a typical example of using useLoaderData...
    // ...it could be used practically anywhere the data is needed
    const defaultVal = expenseData
        ? {
              title: expenseData.title,
              amount: expenseData.amount,
              date: expenseData.date
          }
        : {
              title: '',
              amount: '',
              date: ''
          };

    return (
        <Form
            method={expenseData ? 'patch' : 'post'}
            className='form'
            id='expense-form'
        >
            <p>
                <label htmlFor='title'>Expense Title</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    required
                    maxLength={30}
                    defaultValue={defaultVal.title}
                />
            </p>

            <div className='form-row'>
                <p>
                    <label htmlFor='amount'>Amount</label>
                    <input
                        type='number'
                        id='amount'
                        name='amount'
                        min='0'
                        step='0.01'
                        required
                        defaultValue={defaultVal.amount}
                    />
                </p>
                <p>
                    <label htmlFor='date'>Date</label>
                    <input
                        type='date'
                        id='date'
                        name='date'
                        max={today}
                        required
                        defaultValue={
                            defaultVal.date ? defaultVal.date.slice(0, 10) : ''
                        }
                    />
                </p>
            </div>
            {/* {validationErrors && (
                <ul>
                    {Object.values(validationErrors).map(el => (
                        <li key={el}>{el}</li>
                    ))}
                </ul>
            )} */}
            <div className='form-actions'>
                <button disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Save Expense'}
                </button>
                <Link to='..'>Cancel</Link>
            </div>
        </Form>
    );
};

export default ExpenseForm;

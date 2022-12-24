import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import type { FC } from 'react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { addExpense } from '~/data/expenses.server';
import validateExpenseInput from '~/data/validation.server';

const AddExpensePage: FC = () => {
    const navigate = useNavigate();

    const closeHandler = () => {
        navigate('..');
    };

    return (
        <Modal onClose={closeHandler}>
            <ExpenseForm />
        </Modal>
    );
};

export default AddExpensePage;

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);
    try {
        validateExpenseInput(expenseData);
    } catch (error: unknown) {
        return error;
    }
    await addExpense(expenseData);
    return redirect('/expenses');
};

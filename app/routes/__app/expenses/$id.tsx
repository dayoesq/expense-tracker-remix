import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import type { FC } from 'react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { deleteExpense, updateExpense } from '~/data/expenses.server';
import validateExpenseInput from '~/data/validation.server';
// import { getExpense } from '~/data/expenses.server';

const UpdateExpensePage: FC = () => {
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

export default UpdateExpensePage;

// export const loader: LoaderFunction = async ({ params }) => {
//     const id = params.id;
//     return await getExpense(id!);
// };

export const action: ActionFunction = async ({ params, request }) => {
    if (request.method === 'PATCH') {
        const formData = await request.formData();
        const expenseId = params.id;
        const expenseData = Object.fromEntries(formData);
        try {
            validateExpenseInput(expenseData);
        } catch (error: unknown) {
            return error;
        }
        await updateExpense(expenseId!, expenseData);
        return redirect('/expenses');
    } else if (request.method === 'DELETE') {
        try {
            await deleteExpense(params.id!);
            return redirect('/expenses');
        } catch (error: unknown) {
            return error;
        }
    }
};

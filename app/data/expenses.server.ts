import { prisma } from './database.server';

export const addExpense = async (expenseData: { [k: string]: any }) => {
    try {
        return await prisma.expense.create({
            data: {
                title: expenseData.title,
                amount: +expenseData.amount,
                date: new Date(expenseData.date)
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getExpenses = async () => {
    try {
        return await prisma.expense.findMany({ orderBy: { date: 'desc' } });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getExpense = async (id: string) => {
    try {
        return await prisma.expense.findFirstOrThrow({ where: { id } });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateExpense = async (id: string, data: { [k: string]: any }) => {
    try {
        await prisma.expense.update({
            where: { id },
            data: {
                title: data.title,
                amount: +data.amount,
                date: new Date(data.date)
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteExpense = async (id: string) => {
    try {
        await prisma.expense.delete({
            where: { id }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

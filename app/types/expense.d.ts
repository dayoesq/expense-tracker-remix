interface IExpense {
    id?: string;
    title: string;
    amount: number;
    date: Date;
}

interface IExpenses {
    expenses?: IExpense[];
}

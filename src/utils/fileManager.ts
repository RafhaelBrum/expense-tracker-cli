import fs from 'fs';
import { Expense } from "../types/expense";

function ensureExpensesFileExists(): void {
    if (fs.existsSync('expenses.json')) return;
    else fs.writeFileSync('expenses.json', '[]');
}


function readExpenses(): Expense[] {
    ensureExpensesFileExists();
    const data = fs.readFileSync('expenses.json', 'utf-8');
    const expenses = JSON.parse(data);
    return expenses;
}

function writeExpenses(expenses: Expense[]): void {
    ensureExpensesFileExists();
    let newExpense = JSON.stringify(expenses, null, 2);
    fs.writeFileSync('expenses.json', newExpense);
}
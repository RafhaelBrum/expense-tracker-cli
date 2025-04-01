import fs from 'fs';
import { Expense } from "../types/expense";

export function ensureExpensesFileExists(): void {
    if (fs.existsSync('expenses.json')) return;
    else fs.writeFileSync('expenses.json', '[]');
}

export function readExpenses(): Expense[] {
    ensureExpensesFileExists();
    const data = fs.readFileSync('expenses.json', 'utf-8');
    const expenses = JSON.parse(data);
    return expenses;
}

export function writeExpenses(expenses: Expense[]): void {
    ensureExpensesFileExists();
    let newExpense = JSON.stringify(expenses, null, 2);
    fs.writeFileSync('expenses.json', newExpense);
}

export function newId(fileData: Expense[]): number {
    let maxId = 0;
    if (fileData.length !== 0) {
        const ids = fileData.map(({ id }) => id);
        maxId = Math.max(...ids);
    }
    let lastId = maxId + 1;
    return lastId;
}
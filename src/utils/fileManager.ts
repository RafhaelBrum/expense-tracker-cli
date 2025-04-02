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

export function returnMonthExpense(month: string) {
    const expenses = readExpenses();

    function printMonth(month: string, monthName: string) {
        let total = 0;
        for (let i = 0; i < expenses.length; i++) {
            if (expenses[i].date.slice(5, 7) === month) total += expenses[i].amount;
        }
        if (total !== 0) console.log(`Total expenses for ${ monthName }: $${ total }`);
        else console.log(`No expenses for ${ monthName }.`);
    }

    switch (month) {
        case "1":
            printMonth("01", "january");
            break;

        case "2":
            printMonth("02", "february");
            break;

        case "3":
            printMonth("03", "march");
            break;

        case "4":
            printMonth("04", "april");
            break;

        case "5":
            printMonth("05", "may");
            break;

        case "6":
            printMonth("06", "june");
            break;

        case "7":
            printMonth("07", "july");
            break;


        case "8":
            printMonth("08", "august");
            break;

        case "9":
            printMonth("09", "september");
            break;

        case "10":
            printMonth("10", "october");
            break;

        case "11":
            printMonth("11", "november");
            break;

        case "12":
            printMonth("12", "december");
            break;
    }
}
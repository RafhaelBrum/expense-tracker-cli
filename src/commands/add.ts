import { Expense } from "../types/expense";
import { writeExpenses, readExpenses } from "../utils/fileManager"


export default function add(description: string, amount: number) {
    const fileData = readExpenses();
    const dateNow = new Date();
    let maxId = 0;
    if (fileData.length !== 0) {
        const ids = fileData.map(({ id }) => id);
        maxId = Math.max(...ids);
    }

    let newExpense: Expense = {
        id: maxId + 1,
        description: description,
        amount: amount,
        date: dateNow.toISOString(),
    }
    fileData.push(newExpense);

    writeExpenses(fileData);
}
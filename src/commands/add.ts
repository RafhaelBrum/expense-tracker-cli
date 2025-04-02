import { Expense } from "../types/expense";
import { writeExpenses, readExpenses, newId } from "../utils/fileManager"

export default function add(description: string, amount: number) {
    if (isNaN(amount) || amount <= 0) {
        console.log("Invalid amount. Use only positive numbers.");
        return;
    }

    const fileData = readExpenses();
    const id = newId(fileData);

    let newExpense: Expense = {
        id: id,
        description: description,
        amount: amount,
        date: new Date().toISOString(),
    }
    fileData.push(newExpense);

    writeExpenses(fileData);
    console.log(`Expense added succefully (ID: ${ id })`)
}
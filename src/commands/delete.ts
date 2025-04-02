import { writeExpenses, readExpenses } from "../utils/fileManager";

export default function deleteExpense(id: number): void {
    const expenses = readExpenses();

    try {
        const element = expenses.find((expenses) => expenses.id === id);
        if (element) {
            const updatedExpenses = expenses.filter(expenses => expenses.id !== id);
            console.log(`Expense deleted succefully - ID ${ id }`);
            writeExpenses(updatedExpenses);
        } else if (!element) {
            console.log(`Expense not found.`);
        }
    } catch (e) {
        console.log("Invalid ID");
    }

};
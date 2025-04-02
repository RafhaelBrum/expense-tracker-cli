import { readExpenses } from "../utils/fileManager"

export default function list(): void {
    const formattedList = readExpenses().map(exp => ({
        id: exp.id,
        date: exp.date.substring(0, 10),
        description: exp.description,
        amount: `$${ exp.amount.toFixed(2) }`
    }));

    console.table(formattedList);
}
import { readExpenses, returnMonthExpense } from "../utils/fileManager";

export default function summary(month?: string): void {
    if (typeof month !== "undefined") returnMonthExpense(month)

    else {
        const list = readExpenses();
        var total = 0;
        list.forEach(element => {
            total += element.amount;
        });
        console.log(`Total expenses: $${ total }`);
    }
}
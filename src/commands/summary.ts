import { readExpenses, returnMonthExpense } from "../utils/fileManager";

export default function summary(month?: string): void {
    const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    if (typeof month !== "undefined") {
        if (months.includes(month)) {
            returnMonthExpense(month)
            return
        }

    }
    const list = readExpenses();
    var total = 0;
    list.forEach(element => {
        total += element.amount;
    });
    console.log(`Total expenses: $${ total }`);
}
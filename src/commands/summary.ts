import { readExpenses } from "../utils/fileManager";

export default function summary(): void {
    const list = readExpenses();
    var total = 0;
    list.forEach(element => {
        total += element.amount;
    });
    console.log(`Total expenses: $${ total }`);
}
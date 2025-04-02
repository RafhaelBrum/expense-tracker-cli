import add from "./commands/add";
import list from "./commands/list";
import summary from "./commands/summary";
import deleteExpense from "./commands/delete";

const descIndex = process.argv.indexOf("--description");
const amountIndex = process.argv.indexOf("--amount");
const idIndex = process.argv.indexOf("--id");
const monthIndex = process.argv.indexOf("--month");

const desc = process.argv[descIndex + 1];
const amount = Number(process.argv[amountIndex + 1]);
const id = Number(process.argv[idIndex + 1]);
const month = process.argv[monthIndex + 1];



const command = process.argv[2];

switch (command) {
    case "add":
        add(desc, amount);
        break;
    case "list":
        list();
        break;
    case "summary":
        summary(month);
        break;
    case "delete":
        deleteExpense(id);
        break;

}

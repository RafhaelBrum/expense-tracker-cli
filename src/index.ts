import add from "./commands/add";
import list from "./commands/list";

const descIndex = process.argv.indexOf("--description");
const amountIndex = process.argv.indexOf("--amount");
const desc = process.argv[descIndex + 1];
const amount = Number(process.argv[amountIndex + 1]);
const command = process.argv[2];

switch (command) {
    case "add":
        add(desc, amount);
        break;
    case "list":
        list();
        break;

}

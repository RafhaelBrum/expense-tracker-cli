# Expense Tracker CLI

roadmap.sh backend project - https://roadmap.sh/projects/expense-tracker

A simple command-line interface (CLI) application to manage your daily expenses. Add, list, update, delete, and summarize your expenses — all from the terminal.

---

## ✅ Features

- Add new expenses with description and amount
- Update expense description and/or amount
- Delete expenses by ID
- List all expenses in table format
- View total expenses (summary)
- View total expenses for a specific month
- All data is stored in a local JSON file (`expenses.json`)

---

## 📦 Tech Stack

- Node.js
- TypeScript
- Native fs module (no external libraries)

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/RafhaelBrum/expense-tracker-cli.git
cd expense-tracker-cli
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the project

```bash
npx tsc
```

### 4. Run commands using npx

```bash
npx expense-tracker <command> [options]
```

---

## 📘 Usage

### Add an expense

```bash
npx expense-tracker add --description "Lunch" --amount 20
```

### List all expenses

```bash
npx expense-tracker list
```

### Update an expense

```bash
npx expense-tracker update --id 1 --description "Dinner" --amount 25
```

### Delete an expense

```bash
npx expense-tracker delete --id 1
```

### Show summary

```bash
npx expense-tracker summary
```

### Show monthly summary

```bash
npx expense-tracker summary --month 8
```

---

## ⚠️ Notes

- The `expenses.json` file is created automatically in the project root.
- Month summaries accept numeric format (e.g., `--month 8` for August).
- Make sure to recompile (`npx tsc`) after changes to `.ts` files before running commands.

---

## 📄 License

This project is for educational purposes only. Free to use and modify.

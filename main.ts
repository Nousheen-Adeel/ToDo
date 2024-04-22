#! /usr/bin/env node

// installing inquirer
import inquirer from "inquirer";
import chalk from "chalk";

//making Array//

let todoList : string[]= ["Nousheen", "Fatima","Adeel"];

//using function//

async function createTodos(todoList: string[]) {
    do{
  let answer = await inquirer.prompt({
    type: "list",
    message: "Select an operation",
    name: "Select",
    choices: ["Add", "Update", "Veiw", "Remove", "Exit" ],
    })

if (answer.Select == "Add"){
    let addTodo = await inquirer.prompt({
        type: "input",
        message: "Add items in the list",
        name: "todo",
    });
    todoList.push(addTodo.todo);
    todoList.forEach(todo=> console.log(todo));
}

if (answer.Select == "Update"){
    let updateTodo = await inquirer.prompt({
        type: "list",
        message: "Update items in the list",
        name: "todo",
        choices: todoList.map(item => item)
    });
   let addTodo = await inquirer.prompt({
        type: "input",
        message: "Add items in the list",
        name: "todo",
});

let newTodo = todoList.filter (val => val !== updateTodo.todo);
todoList= [...newTodo,addTodo.todo]
todoList.forEach(todo=> console.log(todo));
}

if (answer.Select == "Veiw"){
    console.log(chalk.bgGreenBright("***To Do List***"));
            todoList.forEach(todo => console.log(chalk.magentaBright(todo)));
            console.log(chalk.bgGreenBright("******************"));
}

if (answer.Select == "Remove"){
    let removeTodo = await inquirer.prompt({
        type: "list",
        message: "Remove items in the list",
        name: "todo",
        choices: todoList.map(item => item)
    });
    let newTodo = todoList.filter (val => val !== removeTodo.todo);
todoList = [...newTodo]
todoList.forEach(todo=> console.log(todo));
}
if (answer.Select == "Exit") {
    console.log(chalk.bgBlueBright("Thank you for using this application"));
    console.log(chalk.redBright("Exiting...."));
    break;

}
} while (true);
}
//calling function//
createTodos(todoList);

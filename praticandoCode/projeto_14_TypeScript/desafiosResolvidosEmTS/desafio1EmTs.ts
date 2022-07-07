/*
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";

*/

//Solução:
// 1
const employee = {
    code: 1,
    name: 'Matheus'
};

// 2
const employee2: {code: number, name: string} = {
    code: 1,
    name: 'Matheus'
}

//3
interface Employee {
    code: number,
    name: string
};
//3.1
const employeeObj = {} as Employee;
employeeObj.code = 1;
employeeObj.name = 'Matheus';
//ou 3.2
const employeeObj2: Employee = {
    code: 1,
    name: 'Matheus'
}

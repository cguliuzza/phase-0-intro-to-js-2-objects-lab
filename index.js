// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "123 Street"
};

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    return { ...employee, [name]: streetAddress }
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = streetAddress;
    return employee;
};

function deleteFromEmployeeByKey(employee, name) {
    const newObj = Object.assign({}, employee);
    delete newObj[name];
    return newObj;
};

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name];
    return employee;
};
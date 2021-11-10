// Write your solution in this file!
const employee = {
    name: "Jogn",
    streetAddress: "123 Dirt Road"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const employeeClone = {...employee}
    employeeClone.streetAddress = "11 Broadway"
    return employeeClone

}
function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
    return employee
 
}
function deleteFromEmployeeByKey(employee, key){
    const employeeClone = {...employee}
    delete employeeClone.name
    return employeeClone
}
function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name
    return employee
}
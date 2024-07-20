export interface User {
    selected: boolean;
    id:string;
    email:string;
    name:string;
    address:string;
    phone:string;
}

export interface employeeModel {
    list:User[],
    errorMessage:string;
}
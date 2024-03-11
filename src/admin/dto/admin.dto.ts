enum roles{
    sec = "Secretaria",
    emp = "Empleado"
}
export class CreateSecretary{
    rol: roles.sec
    nombreSecretaria: string
    userSecretaria: string
    contraseñaSecretaria: string
    identificacionSecretaria: string
}
export class CreateEmployee{
    rol: roles.emp
    nombreEmpleado: string
    userEmpleado: string
    contraseñaEmpleado: string
    identificacionEmpleado: string
}
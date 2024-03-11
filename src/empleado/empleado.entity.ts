import { OneToMany } from "typeorm";
import { Admin } from "src/admin/admin.entity";

export class Empleado{
    @OneToMany(()=> Admin, admin => admin.nombreEmpleado)
    nombre: Admin
    @OneToMany(()=> Admin, admin => admin.userEmpleado)
    userEmpleado: Admin
    @OneToMany(()=> Admin, admin => admin.contrasenaEmpleado)
    contrasenaEmpleado: Admin
    @OneToMany(()=> Admin, admin => admin.identificacionEmpleado)
    identificacion: Admin
}
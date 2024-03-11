import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin, roles } from './admin.entity';
import { Repository } from 'typeorm';
import { CreateEmployee, CreateSecretary } from './dto/admin.dto';
import {  updateEmployeeDto, updateSecretaryDto } from './dto/admin.update';
@Injectable()
export class AdminService {
    constructor(@InjectRepository(Admin) private adminRepo: Repository<Admin>) { }
    //  POST METHODS
    // this service create one secretary
    async createSecretary(sec: CreateSecretary) {
        const userFound = await this.adminRepo.findOne({
            where:{nombreSecretaria:  sec.userSecretaria,
            contrasenaSecretaria: sec.contraseñaSecretaria}
        })
        if(userFound){
            return new HttpException('this user already exists or your password is not aviable', HttpStatus.CONFLICT)
        }
        const newSec = this.adminRepo.create(sec)
        return this.adminRepo.save(newSec)
    }
    
    // this service create one employee
    async createEmployee(emp: CreateEmployee) {
        const userFound = await this.adminRepo.findOne({
            where:{userEmpleado:  emp.userEmpleado,
            contrasenaEmpleado: emp.contraseñaEmpleado}
        })
        if(userFound){
            return new HttpException('this user already exists or your password is not aviable', HttpStatus.CONFLICT)
        }
        const newEmp = this.adminRepo.create(emp)
        return this.adminRepo.save(newEmp)
    }
    // GET METHODS
    // this service get all the users
    getAllUsers(){
        return this.adminRepo.find()
    }
    // this service get all users by rol
    getUsers(rol: roles.sec){
        return this.adminRepo.find({
            where:{rol: rol}
        })
    }
    
    // this service get one user by id
    getEmployee(user: string){
        return this.adminRepo.findOne({
            where:{ userEmpleado: user}
        })
    }
    getSecretary(user: string){
        return this.adminRepo.findOne({
            where:{ userSecretaria: user}
        })
    }
    // DELETE METHODS
    deleteUser(id:number){
        return this.adminRepo.delete({id})
    }
    // UPDATE METHODS
    // this service update one secretary by id
    updateSecretary(id: number, updateSecretary: updateSecretaryDto ){
        return this.adminRepo.update({id}, updateSecretary)
    }
    // this service update one employee by id
    updateEmployee(id: number, updateEmployee: updateEmployeeDto){
        return this.adminRepo.update({id: id}, updateEmployee)
    }
}
    

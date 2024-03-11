import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateEmployee, CreateSecretary } from './dto/admin.dto';
import { AdminService } from './admin.service';
import { Admin, roles } from './admin.entity';
import { updateEmployeeDto, updateSecretaryDto } from './dto/admin.update';
@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) { }
    // POST METHODS
    // post one secretary in /admin/secretaria
    @Post('secretaria')
    createSecretaria(@Body() newSec: CreateSecretary) {
        return this.adminService.createSecretary(newSec)
    }
    //  post one employee in /admin/empleado
    @Post('empleado')
    createEmpleado(@Body() newEmp: CreateEmployee){
        return this.adminService.createEmployee(newEmp);
    }
    // GET METHODS
    @Get()
    async getAllUsers(): Promise<Admin[]>{
        return await this.adminService.getAllUsers()
    }
    // get all the secretaries br rol 
    @Get(':rol')
    getUsersByRol(@Param('rol') rol: roles.sec): Promise<Admin[]>{
        return this.adminService.getUsers(rol)
    }
    // get all the employees by rol
    
    // get one employee and  secretaries by id
    @Get(':rol/:user')
    getEmployee(@Param('user') user: string): Promise<Admin>{
        return this.adminService.getEmployee(user)
    }
    @Get(':rol/:user')
    getSecretary(@Param('user') user: string): Promise<Admin>{
        return this.adminService.getSecretary(user)
    }

    // DELETE METHODS
    @Delete(':rol/:id')
    deleteUser(@Param( 'id', ParseIntPipe ) id: number){
        return this.adminService.deleteUser(id)
    }
    //  UPDATE MEHODS
    @Patch(':rol/:userSecretaria')
    updateSecretary(@Param('userSecretaria') userSecretaria: string, @Body() sec: updateSecretaryDto){
        this.adminService.updateSecretary(userSecretaria, sec)
    }  
    @Patch(':rol/:user')
    updateEmployee(@Param('user') user: string, @Body() emp: updateEmployeeDto){
        this.adminService.updateEmployee(user, emp)
    }    
}

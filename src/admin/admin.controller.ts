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
    @Get(':rol/:username')
    getEmployee(@Param('user') user: string): Promise<Admin>{
        return this.adminService.getEmployee(user)
    }
    @Get(':rol/:username')
    getSecretary(@Param('user') user: string): Promise<Admin>{
        return this.adminService.getSecretary(user)
    }

    // DELETE METHODS
    @Delete(':rol/:id')
    deleteUser(@Param( 'id', ParseIntPipe ) id: number){
        return this.adminService.deleteUser(id)
    }
    //  UPDATE MEHODS
    @Patch(':rol/:id')
    updateSecretary(@Param('id', ParseIntPipe) id: number, @Body() sec: updateSecretaryDto){
        this.adminService.updateSecretary(id, sec)
    }  
    @Patch(':rol/:id')
    updateEmployee(@Param('id', ParseIntPipe) id: number, @Body() emp: updateEmployeeDto){
        this.adminService.updateEmployee(id, emp)
    }    
}

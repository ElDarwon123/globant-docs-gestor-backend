import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Secretaria } from './secretaria.entity';
import { Repository } from 'typeorm';
import { createManual } from './dto/secretaria.create.dto';
import { AdminService } from 'src/admin/admin.service';
import { Admin } from 'src/admin/admin.entity';

@Injectable()
export class SecretariaService {
    constructor(@InjectRepository(Secretaria) private secRepo: Repository<Secretaria>,
    ) { }

    /*async createManual(man: createManual, file: Express.Multer.File): Promise<Secretaria> {
        // Guardar el archivo en la base de datos
        const newSecretaria = this.secRepo.create(man, file);
    
        return this.secRepo.save(newSecretaria);
        }
     */
    async createManual(admin: Admin, data: { nombreManual: string, descripcionManual: string, fileManual: string }): Promise<Secretaria> {
        const newSecretaria = new Secretaria()
        newSecretaria.user = admin.userSecretaria
        newSecretaria.contrasena = admin.contrasenaSecretaria
        newSecretaria.nombre = admin.nombreSecretaria
        newSecretaria.numId = admin.identificacionSecretaria
        newSecretaria.admin = admin
        newSecretaria.nombreManual = data.nombreManual;
        newSecretaria.descripcionManual = data.descripcionManual;
        newSecretaria.fileManual = data.fileManual;


        return this.secRepo.save(newSecretaria)
    }
    getManuals() {
        return this.secRepo.find({
            relations: ['admin']
        })
    }

}

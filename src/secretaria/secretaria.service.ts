import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Secretaria } from './secretaria.entity';
import { Repository } from 'typeorm';
import { createManual } from './dto/secretaria.create.dto';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class SecretariaService {
    constructor(@InjectRepository(Secretaria) private secRepo: Repository<Secretaria>,
    private adminsService: AdminService){}

    /*async createManual(man: createManual, file: Express.Multer.File): Promise<Secretaria> {
        // Guardar el archivo en la base de datos
        const newSecretaria = this.secRepo.create(man, file);
    
        return this.secRepo.save(newSecretaria);
      }
     */ 
    getManuals(){
        return this.secRepo.find({
            relations:['admin']
        })
    }

}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminService } from 'src/admin/admin.service';
import { Reporte } from './reporte.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/report.create.dto';

@Injectable()
export class ReporteService {
    constructor(@InjectRepository(Reporte) private repRepo: Repository<Reporte>, 
    private adminsService: AdminService){}
    
    async createReport(rep: CreateReportDto){
        const newRep = this.repRepo.create(rep)
        return this.repRepo.save(newRep)
    }
    getAllReport(){
        return this.repRepo.find()
    }
}

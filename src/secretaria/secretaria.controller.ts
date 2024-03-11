import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { createManual } from './dto/secretaria.create.dto';
import { SecretariaService } from './secretaria.service';
import { AdminService } from '../admin/admin.service';

@Controller('secretaria')
export class SecretariaController {

    constructor(private secService: SecretariaService, private adminService: AdminService) { }
    /*
        @Post()
        @UseInterceptors(FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
                },
            }),
        }))*/
    /*async createManual(@UploadedFile() file: Express.Multer.File, @Body() man:createManual) {
        return this.secService.createManual(man) ;
    }*/
    @Post()
    async createManual(@Body() body: createManual): Promise<any> {
        const { adminId, nombreManual, descripcionManual, fileManual } = body;
        const admi = await this.adminService.getSecretary(adminId)
        const newSec = this.secService.createManual(admi, body)
        return newSec
    }

    @Get()
    async getManuals() {
        return this.secService.getManuals()
    }
}

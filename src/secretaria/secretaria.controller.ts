import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { createManual } from './dto/secretaria.create.dto';
import { SecretariaService } from './secretaria.service';

@Controller('secretaria')
export class SecretariaController {

    constructor(private secService: SecretariaService){}

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
            },
        }),
    }))
    /*async createManual(@UploadedFile() file: Express.Multer.File, @Body() man:createManual) {
        return this.secService.createManual(man) ;
    }*/
    @Get()
    async getManuals(){
        return this.secService.getManuals()
    }
}

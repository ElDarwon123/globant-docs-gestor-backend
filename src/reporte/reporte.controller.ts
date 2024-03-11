import { Controller, Body, Post, Get } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { CreateReportDto } from './dto/report.create.dto';

@Controller('reporte')
export class ReporteController {
    constructor(private reportService: ReporteService){}
    @Post()
    createReport(@Body() newRep: CreateReportDto){
         return  this.reportService.createReport(newRep)
    }
    @Get()
    getAllReports(){
        return this.reportService.getAllReport()
    }
}

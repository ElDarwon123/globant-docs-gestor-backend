import { Module } from '@nestjs/common';
import { ReporteController } from './reporte.controller';
import { ReporteService } from './reporte.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reporte } from './reporte.entity';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Reporte]),AdminModule
  ],
  controllers: [ReporteController],
  providers: [ReporteService]
})
export class ReporteModule {}

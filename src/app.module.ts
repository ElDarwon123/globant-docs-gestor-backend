import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin/admin.entity';
import { EmpleadoModule } from './empleado/empleado.module';
import { Empleado } from './empleado/empleado.entity';
import { FormatoModule } from './formato/formato.module';
import { Reporte } from './reporte/reporte.entity';
import { ReporteController } from './reporte/reporte.controller';
import { ReporteModule } from './reporte/reporte.module';
import { SecretariaModule } from './secretaria/secretaria.module';
import { Secretaria } from './secretaria/secretaria.entity';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'DarwinGomez7u7',
      database: 'globant',
      entities: [Admin, Empleado, Reporte, Secretaria],
      synchronize: true
    }),
    MulterModule.register({dest: './uploads'}),
    ReporteModule,
    AdminModule,
    SecretariaModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}

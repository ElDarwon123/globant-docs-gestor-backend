import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { Admin } from './admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminService } from './admin.service';
import { Secretaria } from 'src/secretaria/secretaria.entity';
import { SecretariaController } from 'src/secretaria/secretaria.controller';
import { SecretariaService } from 'src/secretaria/secretaria.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin, Secretaria])
  ],
  controllers: [AdminController, SecretariaController],
  providers: [AdminService, SecretariaService],
  exports: [AdminService]
})
export class AdminModule { }

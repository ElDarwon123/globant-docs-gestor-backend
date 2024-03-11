import { Module } from '@nestjs/common';
import { SecretariaController } from './secretaria.controller';
import { SecretariaService } from './secretaria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Secretaria } from './secretaria.entity';
import { AdminModule } from 'src/admin/admin.module';
import { Admin } from '../admin/admin.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Secretaria]), AdminModule
  ],
  controllers: [SecretariaController],
  providers: [SecretariaService]
})
export class SecretariaModule {}

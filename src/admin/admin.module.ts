import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { Admin } from './admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminService } from './admin.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Admin])
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService]
})
export class AdminModule {}

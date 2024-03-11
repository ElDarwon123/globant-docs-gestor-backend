import { Module } from '@nestjs/common';
import { FormatoController } from './formato.controller';
import { FormatoService } from './formato.service';

@Module({
  controllers: [FormatoController],
  providers: [FormatoService]
})
export class FormatoModule {}

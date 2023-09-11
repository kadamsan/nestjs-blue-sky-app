import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { States } from './entities/states.entity';
import { BlueSkyController } from './bluesky.controller';
import { BlueSkyService } from './bluesky.service';

@Module({
  imports: [TypeOrmModule.forFeature([States])],
  controllers: [BlueSkyController],
  providers: [BlueSkyService],
  exports: [BlueSkyService],
})
export class BlueSKyModule {}

import {
  Controller,
  Get,
  Logger,
  Inject,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { BlueSkyService } from './bluesky.service';
import { ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

@ApiTags('bluesky')
@Controller('bluesky')
@UseInterceptors(ClassSerializerInterceptor)
export class BlueSkyController {
  private readonly logger = new Logger(BlueSkyController.name);

  constructor(
    private readonly blueSkyService: BlueSkyService,
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {}

  @Get('states')
  listStates(): Promise<string[]> {
    return this.blueSkyService.listStates();
  }
}

import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { States } from './entities/states.entity';

@Injectable()
export class BlueSkyService {
  private readonly logger = new Logger(BlueSkyService.name);

  constructor(
    @InjectRepository(States)
    private readonly statesRepository: Repository<States>,
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {}

  async listStates() {
    const states: States[] = await this.statesRepository.find({
      select: {
        name: true,
      },
      where: {
        type: 'State',
      },
    });

    const statesList: string[] = states.map(function (state) {
      return state['name'];
    });

    return statesList;
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { BlueSkyController } from './bluesky.controller';
import { BlueSkyService } from './bluesky.service';

describe('BlueSkyController', () => {
  let controller: BlueSkyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlueSkyController],
      providers: [BlueSkyService],
    }).compile();

    controller = module.get<BlueSkyController>(BlueSkyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

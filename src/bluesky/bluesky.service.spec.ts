import { Test, TestingModule } from '@nestjs/testing';
import { BlueSkyService } from './bluesky.service';

describe('BlueSkyService', () => {
  let service: BlueSkyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlueSkyService],
    }).compile();

    service = module.get<BlueSkyService>(BlueSkyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

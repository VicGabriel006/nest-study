import { Test, TestingModule } from '@nestjs/testing';
import { MyController } from './my-controller.controller';
import { MyService } from '../my-service/my-service.service';

describe('MyController', () => {
  let controller: MyController;
  
  const mockMyService = {
    getHello: jest.fn().mockReturnValue('MOCKED HELLO!'),
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyController],
      providers: [
        {
          provide: MyService,
          useValue: mockMyService,
        },
      ],
    }).compile();

    controller = module.get<MyController>(MyController);
  });

  it('should return "MOCKED HELLO!"', () => {
    expect(controller.getHello()).toBe('MOCKED HELLO!');
  });
});

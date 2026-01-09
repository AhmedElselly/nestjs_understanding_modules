import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  getPower(a: number, b: number) {
    console.log('power inside cpu: ', 10);
    this.powerService.supplyPower(10);
    return a + b;
  }
}

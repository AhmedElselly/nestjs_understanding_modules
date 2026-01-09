import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  getPower() {
    console.log('power inside cpu: ', this.powerService.supplyPower(22));
  }
}

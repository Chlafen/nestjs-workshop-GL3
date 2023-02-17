import { Global, Module } from '@nestjs/common';
import { ITs } from '../constants';
import { v4 as uuidv4 } from 'uuid';

@Global()
@Module({
  providers: [
    { provide: ITs.uuid, useValue: uuidv4 }
  ],
  exports: [ITs.uuid]
})

export class CommonModule {}

import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('premier')
export class PremierController {

  @Get()
  getPremier(): string {
    console.log('getPremier');
    
    return 'getPremier';
  }

  @Post()
  postPremier(): string {
    console.log('postPremier');
    
    return 'postPremier';
  }

  @Delete()
  patchPremier(): string {
    console.log('patchPremier');
    
    return 'patchPremier';
  }
}

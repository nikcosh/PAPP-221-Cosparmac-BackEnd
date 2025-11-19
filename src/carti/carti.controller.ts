import { Controller, Get, Post, Param, Body, Query, ParseIntPipe } from '@nestjs/common';
import { CartiService } from './carti.service';
import { CreateCarteDto } from './dto/create-carte.dto';
import { UpdateCarteDto } from './dto/update-carte.dto';
import { SearchCarteDto } from './dto/search-carte.dto';

@Controller('carti')
export class CartiController {
  constructor(private readonly service: CartiService) {}

  @Get('list')
  getAll() {
    return this.service.findAll();
  }

  @Get('details/:id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateCarteDto) {
    return this.service.create(dto);
  }

  @Post('update/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCarteDto) {
    return this.service.update(id, dto);
  }

  @Get('search')
  search(@Query() query: SearchCarteDto) {
    return this.service.findAll().filter(c => {
      if (query.nume && !c.titlu.toLowerCase().includes(query.nume.toLowerCase())) return false;
      if (query.minId && c.id < query.minId) return false;
      if (query.maxId && c.id > query.maxId) return false;
      return true;
    });
  }
}

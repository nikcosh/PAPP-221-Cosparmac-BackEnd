import { Injectable } from '@nestjs/common';
import { CreateCarteDto } from './dto/create-carte.dto';
import { UpdateCarteDto } from './dto/update-carte.dto';

@Injectable()
export class CartiService {
  private carti = [
    { id: 1, titlu: 'Carte 1', autor: 'Autor 1', an: 2001, gen: 'Fictiune', pret: 100 },
    { id: 2, titlu: 'Carte 2', autor: 'Autor 2', an: 2002, gen: 'Drama', pret: 120 }
  ];

  findAll() { return this.carti; }

  findOne(id: number) { return this.carti.find(c => c.id === id); }

  create(dto: CreateCarteDto) {
    const id = this.carti.length + 1;
    const carte = { id, ...dto };
    this.carti.push(carte);
    return carte;
  }

  update(id: number, dto: UpdateCarteDto) {
    const index = this.carti.findIndex(c => c.id === id);
    if (index === -1) return null;
    this.carti[index] = { ...this.carti[index], ...dto };
    return this.carti[index];
  }
}

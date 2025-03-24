import { injectable } from '@nestjs/common';
import { Cat } from '../interface/cat.interface';

@injectable()
export class CatsService {
    private readonly Cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }
}
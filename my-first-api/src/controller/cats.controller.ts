import { Controller, Get } from "@nestjs/common";

type catsObj = {
    cat: string;
    year: number;
}

const cats: catsObj[] = [{cat: 'Sock', year: 3}, {cat: 'Paula', year: 2}] 

@Controller('cats')
export class CatsController {
    @Get()
    findAll() {
        return cats;
    }
}

import { Controller, Get, Post, Body } from "@nestjs/common";
import { CreateCatDto } from '../dto/create-cat.dto';
import { CatsService } from "../services/cats.service";
import { Cat } from '../interface/cat.interface';

const cats: Cat = [{name: 'Sock', age: 3, breed: "miawou"}, {name: 'Paula', age: 7, breed: "miaaaaaw"}] 

@Controller('cats')
export class CatsController {
    
}

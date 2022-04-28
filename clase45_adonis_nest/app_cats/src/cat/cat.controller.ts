import { Body, Controller, Get, Post } from '@nestjs/common';

import { CatService  } from './cat.service';
import { CreateCatDTO } from 'src/dto/create-cat.dto';
import { Cat } from '../interfaces/cat.interface'

@Controller('cats')
export class CatController {

    constructor(private readonly catsService: CatService) {}

    @Post()
    async create(@Body() createCatDTO: CreateCatDTO) {
        this.catsService.create(createCatDTO)
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }


}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly repo: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<CreateTodoDto> {
    console.log(createTodoDto);

    return this.repo
      .save(createTodoDto.toEntity())
      .then((e) => CreateTodoDto.fromEntity(e));
  }

  async findAll() {
    return await this.repo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    return this.repo
      .save(createTodoDto.toEntity())
      .then((e) => CreateTodoDto.fromEntity(e));
  }

  async findAll(): Promise<CreateTodoDto[]> {
    return await this.repo
      .find()
      .then((items) => items.map((e) => CreateTodoDto.fromEntity(e)));
  }

  async findOne(id: number): Promise<CreateTodoDto> {
    const todo = await this.repo.findOne(id);
    if (todo) return CreateTodoDto.fromEntity(todo);
    else throw new HttpException(`Id ${id} Not Found`, HttpStatus.NOT_FOUND);
  }

  async update(
    id: number,
    updateTodoDto: UpdateTodoDto,
  ): Promise<CreateTodoDto> {
    const toUpdate = await this.repo.findOne(id);
    const updated = Object.assign(toUpdate, updateTodoDto);
    const todo = await this.repo.save(updated);
    return CreateTodoDto.fromEntity(todo);
  }

  async remove(id: number) {
    return await this.repo.delete(id);
  }
}

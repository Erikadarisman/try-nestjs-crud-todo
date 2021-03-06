import { Todo } from '../entities/todo.entity';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTodoDto implements Readonly<CreateTodoDto> {
  id: BigInt;

  @ApiPropertyOptional()
  title: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional()
  isDone: boolean;

  public static from(dto: Partial<CreateTodoDto>) {
    const it = new CreateTodoDto();
    it.id = dto.id;
    it.title = dto.title;
    it.description = dto.description;
    it.isDone = dto.isDone;
    return it;
  }

  public static fromEntity(entity: Todo) {
    return this.from({
      id: entity.id,
      title: entity.title,
      description: entity.description,
      isDone: entity.isDone,
    });
  }

  public toEntity() {
    const it = new Todo();
    it.title = this.title;
    it.description = this.description;
    it.isDone = this.isDone;
    return it;
  }
}

import { Todo } from '../entities/todo.entity';

export class CreateTodoDto {
  title: string;
  description: string;
  isDone: boolean;

  public static from(dto: Partial<CreateTodoDto>) {
    const it = new CreateTodoDto();
    it.title = dto.title;
    it.description = dto.description;
    it.isDone = dto.isDone;
    return it;
  }

  public static fromEntity(entity: Todo) {
    return this.from({
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

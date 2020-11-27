// item.entity.ts
import { BaseEntity } from '../../common/base.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'todo' })
export class Todo extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  title: string;

  @Column({ type: 'boolean', default: true })
  isDone: boolean;

  @Column({ type: 'text' })
  description: string;
}

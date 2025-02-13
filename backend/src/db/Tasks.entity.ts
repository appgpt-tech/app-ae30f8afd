//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Tasks')
export class TasksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  TaskID: number;

  @Column('text', { nullable: true })
  Title: string;

  @Column('text', { nullable: true })
  Description: string;

  @Column('date', { nullable: true })
  StartDate: Date;

  @Column('date', { nullable: true })
  DueDate: Date;

  @Column('text', { nullable: true })
  Priority: string;

  @Column('text', { nullable: true })
  Status: string;

  @Column('text', { nullable: true })
  Assignee: string;

  @Column('text', { nullable: true })
  Category: string;

  @Column('text', { nullable: true })
  Tags: string;

  @Column('real', { nullable: true })
  Progress: number;

  @Column('text', { nullable: true })
  Dependencies: string;

  @Column('text', { nullable: true })
  Attachments: string;

  @Column('text', { nullable: true })
  Comments: string;

  @Column('text', { nullable: true })
  ChangeHistory: string;
}

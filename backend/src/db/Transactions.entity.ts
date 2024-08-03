//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Transactions')
export class TransactionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  TransactionID: number;

  @Column('date', { nullable: true })
  DateAndTime: Date;

  @Column('real', { nullable: true })
  Amount: number;

  @Column('text', { nullable: true })
  TransactionType: string;

  @Column('text', { nullable: true })
  TransactionStatus: string;

  @Column('text', { nullable: true })
  SenderAccount: string;

  @Column('text', { nullable: true })
  RecipientAccount: string;

  @Column('text', { nullable: true })
  Comment: string;

  @Column('text', { nullable: true })
  Category: string;

  @Column('text', { nullable: true })
  PaymentMethod: string;
}

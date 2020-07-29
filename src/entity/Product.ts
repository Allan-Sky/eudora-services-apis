import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Type from './Type'
import { type } from 'os'

@Entity('products')
export default class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @ManyToOne(type => Type, type => type.name)
    type: Type

    @Column()
    price: number

    @Column()
    amount: number

    @Column('float')
    profit: number

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('products')
export default class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    type: string

    @Column()
    price: number

    @Column()
    amount: number

    @Column()
    profit: number

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

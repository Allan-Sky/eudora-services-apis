import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import Product from './Product'

@Entity('types')
class Type {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @OneToMany(type => Product, type => type.name)
    products: Product[]

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export default Type

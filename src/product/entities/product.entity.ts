// src/product/product.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Manufacturer } from '../manufacturer/manufacturer.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToOne(() => Manufacturer, manufacturer => manufacturer.products)
  manufacturer: Manufacturer;
}

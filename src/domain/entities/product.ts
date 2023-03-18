import { Entity } from '@/@seedwork';

export type ProductProperties = {
    name: string;
}

export class Product extends Entity<ProductProperties> { }

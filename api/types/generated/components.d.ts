import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderProducts extends Schema.Component {
  collectionName: 'components_order_products';
  info: {
    displayName: 'products';
    description: '';
  };
  attributes: {
    productId: Attribute.Relation<
      'order.products',
      'oneToMany',
      'api::product.product'
    >;
    quantity: Attribute.Integer;
    price: Attribute.Decimal;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'order.products': OrderProducts;
    }
  }
}

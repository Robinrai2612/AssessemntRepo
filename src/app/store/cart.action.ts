import { createAction, props } from '@ngrx/store';
import { cartstore } from '../cart';
import { Product } from '../product';
export const addProducts = createAction(
  'Add Products',
  props<{ product: Product }>()
);
export const removeProducts = createAction(
  'Remove Products',
  props<{ product: cartstore }>()
);

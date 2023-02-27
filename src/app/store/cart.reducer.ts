import { createReducer, on } from '@ngrx/store';
import { addProducts } from './cart.action';
import { cartState } from './cart.state';
import { removeProducts } from './cart.action';
export const initialState: cartState = {
  product: [],
  count: 0,
};
export const cartReducer = createReducer(
  initialState,
  on(addProducts, (state, { product }) => {
    const cartstore = [...state.product];
    const tempCart = cartstore.filter(
      (p: { id: number }) => p.id !== product.id
    );
    const index = cartstore.findIndex(
      (p: { id: number }) => p.id === product.id
    );
    if (index === -1) {
      cartstore.push({
        id: product.id,
        quantity: 1,
        price: product.price,
        title: product.title,
     //   image: product.image,
      //  total: product.price * product.quantity,
        //
      });
    } /* else {
      return {
        ...state, 
        products: [
          ...tempCart,
          {
            id: product.id,
            title: product.title,
            price: product.price,
           quantity: cartstore[index].quantity + 1,
          },
        ],
      };
    }*/
    return { ...state, products: cartstore, count: state.count + 1 };
  })
); /*
  const removeProducts = (state: { products: any[]; count: number; }, action: { product: { id: any; }; }) => {
  const productId = action.product.id;
  const updatedProducts = state.products.filter((product) => product.id !== productId);
  const updatedCount = state.count - 1;

  return {
    ...state,
    products: updatedProducts,
    count: updatedCount,
  };
}*/

/*


  return {
    ...state,
    products: updatedProducts,
    count: updatedCount,
  };
});
*/

/*



  on(removeProducts, (state, { product }) => {
    console.log('product' + JSON.stringify(product));
    const cart = [...state.product];
    console.log('cart' + JSON.stringify(cart));
    const tempCart = cart.filter((p) => p.id === product.id);
    console.log('tempcart' + JSON.stringify(tempCart));
    const index = cart.findIndex((p) => p.id === product.id);

    if (index === -1) {
      return { ...state, products: cart, count: state.count - 1 };

    } else {
      return { ...state, products: tempCart, count: state.count - 1 };
    }
  })
);*/

/*

on(removeProducts, (state, { product }) =>{
  const cart = [...state.product];
});

*/


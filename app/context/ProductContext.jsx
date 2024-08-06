// src/app/context/ProductContext.js
'use client';

import { createContext, useReducer, useContext } from 'react';
import { createClient } from '@/app/lib/supabase/client';
import { getProducts } from '@/app/services/products';

const ProductContext = createContext();

const initialState = {
  products: [],
  loading: true,
  edit: false,
  productForm: {
    name: '',
    format: '',
    category: '',
    subcategory: '',
    price: '',
    brand: '',
    newflag: '',
    favorite: '',
    selected: '',
    region: [],
    file: null,
    file_name: '',
  },
  productSelected: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_EDIT':
      return { ...state, edit: action.payload };
    case 'SET_PRODUCT_FORM':
      return { ...state, productForm: action.payload };
    case 'SET_PRODUCT_SELECTED':
      return { ...state, productSelected: action.payload };
    case 'RESET_FORM':
      return {
        ...state,
        productForm: {
          name: '',
          format: '',
          category: '',
          subcategory: '',
          price: '',
          brand: '',
          newflag: '',
          favorite: '',
          selected: '',
          region: [],
          file: null,
          file_name: '',
        },
      };
    default:
      return state;
  }
};

export function ProductProvider({ children }) {
  const supabase = createClient();
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    const products = await getProducts(supabase);
    dispatch({ type: 'SET_PRODUCTS', payload: products });
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}

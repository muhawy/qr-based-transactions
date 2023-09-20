"use client";
import React, { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export function useProductsContext() {
  return useContext(ProductsContext);
}

export function ProductsProvider({ children }) {
  const [productsState, setProductsState] = useState(null);

  const contextValue = {
    productsState,
    setProductsState,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

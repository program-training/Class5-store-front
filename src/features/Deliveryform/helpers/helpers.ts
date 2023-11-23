import ProductInterface from "../../products/interfaces/ProductInterface";

export type productToCheck = {
  requiredQuantity: number;
  productId: string;
};
export type checkedProducts = {
  requiredQuantity: number;
  productId: string;
  quantity: number;
};

export const checkProducts = (
  products: ProductInterface[],
  productsToCheck: productToCheck[]
): checkedProducts[] => {
  const checkedProducts = products
    .filter((product) => {
      const p = productsToCheck.find((p) => p.productId === product.id);
      return p !== undefined;
    })
    .map((product) => {
      const p = productsToCheck.find((p) => p.productId === product.id);
      return {
        productId: product.id,
        requiredQuantity: p ? p.requiredQuantity : 0,
        quantity: product.quantity,
      };
    });
  return checkedProducts;
};

export const getProductInStockAndNotInStock = (
  products: ProductInterface[],
  productsToCheck: productToCheck[]
) => {
  const checkedProducts = checkProducts(products, productsToCheck);
  const inStock: string[] = [];
  checkedProducts.forEach((item) => {
    if (item.quantity - item.requiredQuantity >= 0) {
      inStock.push(item.productId);
    }
  });
  const notInStock: string[] = [];
  checkedProducts.forEach((item) => {
    if (item.quantity - item.requiredQuantity <= 0) {
      notInStock.push(item.productId);
    }
  });
  return { inStock, notInStock };
};

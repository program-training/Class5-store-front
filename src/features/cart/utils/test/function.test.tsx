import {
  handelCart,
  handelAddOne,
  handelSubOne,
  removeItemFromCart,
  sumCartItem,
  countAmount,
} from "../functions";

describe("Cart Functions", () => {
  test("handles adding an item to the cart", () => {
    const cart = [{ productId: 1, requiredQuantity: 2 }];
    const newItemId = 2;
    const updatedCart = handelCart(newItemId, cart);
    expect(updatedCart).toEqual([
      { productId: 1, requiredQuantity: 2 },
      { productId: 2, requiredQuantity: 1 },
    ]);
  });

  test("handles adding one to the quantity of an item in the cart", () => {
    const cart = [{ productId: 1, requiredQuantity: 2 }];
    const updatedCart = handelAddOne(1, cart);
    expect(updatedCart).toEqual([{ productId: 1, requiredQuantity: 3 }]);
  });

  test("handles subtracting one from the quantity of an item in the cart", () => {
    const cart = [{ productId: 1, requiredQuantity: 2 }];
    const updatedCart = handelSubOne(1, cart);
    expect(updatedCart).toEqual([{ productId: 1, requiredQuantity: 1 }]);
  });

  test("removes an item from the cart", () => {
    const cart = [
      { productId: 1, requiredQuantity: 2 },
      { productId: 2, requiredQuantity: 1 },
    ];
    const updatedCart = removeItemFromCart(1, cart);
    expect(updatedCart).toEqual([{ productId: 2, requiredQuantity: 1 }]);
  });

  test("sums cart items and fetches product details", async () => {
    const localCart = [
      { productId: 1, requiredQuantity: 2 },
      { productId: 2, requiredQuantity: 1 },
    ];
    const cart = [
      { productId: 1, requiredQuantity: 2 },
      { productId: 2, requiredQuantity: 1 },
    ];
    const result = await sumCartItem(localCart, cart);

    result.sumAndAmount.sum = Math.round(result.sumAndAmount.sum * 100) / 100;

    expect(result).toEqual({
      newLocalCart: [
        { productId: 1, requiredQuantity: 2 },
        { productId: 2, requiredQuantity: 1 },
      ],
      sumAndAmount: {
        sum: 5,
        amount: 3,
      },
    });
  });

  test("counts the total quantity of items in the cart", () => {
    const cart = [
      { productId: 1, requiredQuantity: 2 },
      { productId: 2, requiredQuantity: 1 },
    ];
    const amount = countAmount(cart);
    expect(amount).toBe(3);
  });
});

import axios from "axios";
import { productInCart } from "../../../../order/types/types";
import {
  handelCart,
  handelAddOne,
  handelSubOne,
  removeItemFromCart,
  sumCartItem,
  countAmount,
} from "../functions";

describe("cart", () => {
  test("handelCart should add new item to empty cart", () => {
    const newItemId = 1;
    const cart: productInCart[] = [];
    const result = handelCart(newItemId, cart);

    expect(result).toEqual([
      {
        productId: newItemId,
        requiredQuantity: 1,
      },
    ]);
  });

  test("handelCart should increment quantity if item already exists", () => {
    const newItemId = 1;
    const cart = [
      {
        productId: 1,
        requiredQuantity: 2,
      },
    ];
    const result = handelCart(newItemId, cart);

    expect(result).toEqual([
      {
        productId: 1,
        requiredQuantity: 3,
      },
    ]);
  });

  test("handelAddOne should increment quantity", () => {
    const id = 1;
    const cart = [
      {
        productId: 1,
        requiredQuantity: 2,
      },
    ];
    const result = handelAddOne(id, cart);

    expect(result).toEqual([
      {
        productId: 1,
        requiredQuantity: 3,
      },
    ]);
  });

  test("handelSubOne should decrement quantity", () => {
    const id = 1;
    const cart = [
      {
        productId: 1,
        requiredQuantity: 2,
      },
    ];

    const result = handelSubOne(id, cart);

    expect(result).toEqual([
      {
        productId: 1,
        requiredQuantity: 1,
      },
    ]);
  });

  test("removeItemFromCart should remove item", () => {
    const id = 1;
    const cart = [
      {
        productId: 1,
        requiredQuantity: 2,
      },
    ];

    const result = removeItemFromCart(id, cart);

    expect(result).toEqual([]);
  });

  test("sumCartItem should calculate totals", async () => {
    const cart = [
      {
        productId: 1,
        requiredQuantity: 2,
      },
    ];

    vi.mock("axios");

    vi.mocked(axios.get).mockResolvedValueOnce({
      data: {
        id: 1,
        salePrice: 10,
        discountPercentage: 50,
      },
    });

    const result = await sumCartItem([], cart);

    expect(result).toEqual({
      newLocalCart: [
        {
          product: {
            id: 1,
            salePrice: 10,
            discountPercentage: 50,
          },
          requiredQuantity: 2,
          sum: 10,
        },
      ],
      sumAndAmount: {
        sum: 10,
        amount: 2,
      },
    });
  });

  test("countAmount should sum quantities", () => {
    const cart = [
      {
        productId: 1,
        requiredQuantity: 2,
      },
      {
        productId: 2,
        requiredQuantity: 3,
      },
    ];

    const result = countAmount(cart);

    expect(result).toBe(5);
  });
});

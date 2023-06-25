import { merge } from "../mergeFunction";

describe("merge function", () => {
  it("should merge two sorted arrays", () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [2, 4, 6, 8];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  it("should merge when one array is empty", () => {
    const collection1: number[] = [];
    const collection2 = [2, 4, 6, 8];
    const expected = [2, 4, 6, 8];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  it("should merge when both arrays are empty", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const expected: number[] = [];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });
});

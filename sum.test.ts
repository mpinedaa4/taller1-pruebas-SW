/**
 * Unit tests for sum()
 * Loads the compiled sum.js so window.sum is available (same as in the browser).
 */
declare global {
  interface Window {
    sum: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches sum to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./sum.js");
});

describe("sum", () => {
  it("adds two positive numbers", () => {
    expect(window.sum(2, 3)).toBe(5);
  });

  it("adds negative numbers and positive numbers", () => {
    expect(window.sum(-1, 1)).toBe(0);
  });

  it("adds two negative numbers", () => {
    expect(window.sum(-3, -2)).toBe(-5);
  });

  it("returns 0 when both are 0", () => {
    expect(window.sum(0, 0)).toBe(0);
  });
});

export {};

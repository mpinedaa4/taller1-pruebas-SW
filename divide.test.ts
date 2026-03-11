/**
 * Unit tests for divide()
 * Loads the compiled divide.js so window.divide is available (same as in the browser).
 */
declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches divide to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  it("divides two positive numbers", () => {
    expect(window.divide(6, 3)).toBe(2);
  });

  it("divides negative numbers and positive numbers", () => {
    expect(window.divide(-4, 2)).toBe(-2);
  });

  it("divides two negative numbers", () => {
    expect(window.divide(-8, -4)).toBe(2);
  });

  it("returns an error when denominator is 0", () => {
    expect(window.divide(5, 0)).toThrow('Error: división por cero');
  });
});

export {};

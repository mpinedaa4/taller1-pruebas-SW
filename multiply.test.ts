/**
 * Unit tests for multiply()
 * Loads the compiled multiply.js so window.multiply is available (same as in the browser).
 */
declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches multiply to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  it("multiplies two positive numbers", () => {
    expect(window.multiply(2, 3)).toBe(6);
  });

  it("multiplies negative numbers and positive numbers", () => {
    expect(window.multiply(-1, 5)).toBe(-5);
  });

  it("multiplies two negative numbers", () => {
    expect(window.multiply(-3, -2)).toBe(6);
  });

  it("returns 0 when both are 0", () => {
    expect(window.multiply(0, 0)).toBe(0);
  });
});

export {};

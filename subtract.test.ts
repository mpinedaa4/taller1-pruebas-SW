/**
 * Unit tests for subtract()
 * Loads the compiled subtract.js so window.subtract is available (same as in the browser).
 */
declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches subtract to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./subtract.js");
});

describe("subtract", () => {
  it("subtracts two positive numbers", () => {
    expect(window.subtract(3, 2)).toBe(1);
  });

  it("subtracts negative numbers and positive numbers", () => {
    expect(window.subtract(-1, 1)).toBe(-2);
  });

  it("subtracts two negative numbers", () => {
    expect(window.subtract(-2, -3)).toBe(1);
  });

  it("returns 0 when both are 0", () => {
    expect(window.subtract(0, 0)).toBe(0);
  });
});

export {};

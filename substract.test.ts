/**
 * Unit tests for substract()
 * Loads the compiled substract.js so window.substract is available (same as in the browser).
 */
declare global {
  interface Window {
    substract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches substract to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./substract.js");
});

describe("substract", () => {
  it("substracts two positive numbers", () => {
    expect(window.substract(3, 2)).toBe(1);
  });

  it("substracts negative numbers and positive numbers", () => {
    expect(window.substract(-1, 1)).toBe(-2);
  });

  it("substracts two negative numbers", () => {
    expect(window.substract(-2, -3)).toBe(1);
  });

  it("returns 0 when both are 0", () => {
    expect(window.substract(0, 0)).toBe(0);
  });
});

export {};

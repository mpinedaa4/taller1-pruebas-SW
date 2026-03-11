/**
 * Returns the substraction of two numbers.
 */
function substract(a: number, b: number): number {
  return a - b;
}

// Expose to window so the HTML script can call it
(window as unknown as { substract: typeof substract }).substract = substract;
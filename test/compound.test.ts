import { compound } from "../src/compound";

test("typical", () => {
  expect(compound(1000, 0.05, 5)).toBeCloseTo(1276.2815625, 10);
});

test("edge", () => {
  expect(compound(0, 0.05, 10)).toBeCloseTo(0);
  expect(compound(1000, 0, 10)).toBeCloseTo(1000);
  expect(compound(1000, -0.5, 1)).toBeCloseTo(500);
});

test("invalid", () => {
  expect(() => compound(-1, 0.1, 5)).toThrow();
});
// Patch 2 Commit 1: Adding a comment to compound.test.ts

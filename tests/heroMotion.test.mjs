import test from "node:test";
import assert from "node:assert/strict";
import { computeHeroMotion, computeHeroProgress } from "../src/utils/heroMotion.js";

test("computeHeroProgress is clamped and linear", () => {
  assert.equal(computeHeroProgress(0, 800), 0);
  assert.equal(computeHeroProgress(-360, 800), 0.5);
  assert.equal(computeHeroProgress(-720, 800), 1);
  assert.equal(computeHeroProgress(-2000, 800), 1);
});

test("heading always moves faster than background", () => {
  const pA = 0.2;
  const pB = 0.8;
  const a = computeHeroMotion(pA);
  const b = computeHeroMotion(pB);

  const bgDelta = Math.abs(b.mediaY - a.mediaY);
  const textDelta = Math.abs(b.textY - a.textY);
  assert.ok(textDelta > bgDelta, `expected text(${textDelta}) > bg(${bgDelta})`);
});

test("quote band enters smoothly without threshold jumps", () => {
  const points = [0, 0.25, 0.5, 0.75, 1].map((p) => computeHeroMotion(p));

  for (let i = 1; i < points.length; i += 1) {
    assert.ok(points[i].bandY < points[i - 1].bandY, "bandY should move every step");
    assert.ok(points[i].bandOpacity > points[i - 1].bandOpacity, "bandOpacity should increase every step");
  }
});

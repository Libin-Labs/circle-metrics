import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('computes unit circle', () => {
  const c = api.circleMetrics(1);
  assert.equal(c.diameter, 2);
  assert.equal(c.circumference, 2 * Math.PI);
  assert.equal(c.area, Math.PI);
});
test('computes radius two', () => {
  assert.equal(api.circleMetrics(2).area, 4 * Math.PI);
});
test('returns zeros for zero radius', () => {
  assert.deepEqual(api.circleMetrics(0), { radius: 0, diameter: 0, circumference: 0, area: 0 });
});
test('returns diameter', () => {
  assert.equal(api.circleMetrics(3).diameter, 6);
});
test('uses finite calculation', () => {
  assert.ok(Number.isFinite(api.circleMetrics(10).circumference));
});
test('rejects negative radius', () => {
  assert.throws(() => api.circleMetrics(-1), RangeError);
});

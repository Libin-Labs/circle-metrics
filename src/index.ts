export interface CircleMetrics {
  readonly radius: number;
  readonly diameter: number;
  readonly circumference: number;
  readonly area: number;
}
export function circleMetrics(radius: number): CircleMetrics {
  if (!Number.isFinite(radius)) throw new TypeError('Radius must be finite');
  if (radius < 0) throw new RangeError('Radius cannot be negative');
  return {
    radius,
    diameter: 2 * radius,
    circumference: 2 * Math.PI * radius,
    area: Math.PI * radius * radius,
  };
}

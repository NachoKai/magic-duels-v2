import { type Point } from "./spell-forms";

const NUM_POINTS = 64;
const SQUARE_SIZE = 250;

function distance(p1: Point, p2: Point): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;

  return Math.sqrt(dx * dx + dy * dy);
}

function pathLength(points: Point[]): number {
  let length = 0;

  for (let i = 1; i < points.length; i++) {
    length += distance(points[i - 1], points[i]);
  }

  return length;
}

function resample(points: Point[], n: number): Point[] {
  if (points.length === 0) return [];
  if (points.length === 1) {
    return Array(n).fill(points[0]);
  }

  const I = pathLength(points) / (n - 1);
  let D = 0;
  const newPoints: Point[] = [points[0]];
  const workingPoints = [...points];

  for (let i = 1; i < workingPoints.length; i++) {
    const d = distance(workingPoints[i - 1], workingPoints[i]);
    if (D + d >= I) {
      const qx =
        workingPoints[i - 1].x +
        ((I - D) / d) * (workingPoints[i].x - workingPoints[i - 1].x);
      const qy =
        workingPoints[i - 1].y +
        ((I - D) / d) * (workingPoints[i].y - workingPoints[i - 1].y);
      const newPoint = { x: qx, y: qy };
      newPoints.push(newPoint);
      workingPoints.splice(i, 0, newPoint);
      D = 0;
    } else {
      D += d;
    }
  }

  while (newPoints.length < n) {
    newPoints.push(workingPoints[workingPoints.length - 1]);
  }

  return newPoints.slice(0, n);
}

function rotateToZero(points: Point[]): Point[] {
  const centroid = getCentroid(points);
  const firstPoint = points[0];
  const angle = Math.atan2(
    firstPoint.y - centroid.y,
    firstPoint.x - centroid.x
  );

  return points.map((p) => {
    const dx = p.x - centroid.x;
    const dy = p.y - centroid.y;
    return {
      x: dx * Math.cos(-angle) - dy * Math.sin(-angle) + centroid.x,
      y: dx * Math.sin(-angle) + dy * Math.cos(-angle) + centroid.y,
    };
  });
}

function getCentroid(points: Point[]): Point {
  let sumX = 0;
  let sumY = 0;
  for (const p of points) {
    sumX += p.x;
    sumY += p.y;
  }
  return {
    x: sumX / points.length,
    y: sumY / points.length,
  };
}

function scaleToSquare(points: Point[]): Point[] {
  const minX = Math.min(...points.map((p) => p.x));
  const maxX = Math.max(...points.map((p) => p.x));
  const minY = Math.min(...points.map((p) => p.y));
  const maxY = Math.max(...points.map((p) => p.y));

  const width = maxX - minX;
  const height = maxY - minY;
  const size = Math.max(width, height) || 1;

  return points.map((p) => ({
    x: ((p.x - minX) / size) * SQUARE_SIZE,
    y: ((p.y - minY) / size) * SQUARE_SIZE,
  }));
}

function translateToOrigin(points: Point[]): Point[] {
  const centroid = getCentroid(points);
  return points.map((p) => ({
    x: p.x - centroid.x,
    y: p.y - centroid.y,
  }));
}

function normalize(points: Point[]): Point[] {
  if (points.length < 2) return points;
  let normalized = resample([...points], NUM_POINTS);
  normalized = rotateToZero(normalized);
  normalized = scaleToSquare(normalized);
  normalized = translateToOrigin(normalized);
  return normalized;
}

function distanceAtBestAngle(
  points: Point[],
  template: Point[],
  angleRange: number = 45,
  anglePrecision: number = 2
): number {
  let bestDistance = Infinity;

  for (let angle = -angleRange; angle <= angleRange; angle += anglePrecision) {
    const rotated = rotateBy(points, angle);
    const d = pathDistance(rotated, template);
    if (d < bestDistance) {
      bestDistance = d;
    }
  }

  return bestDistance;
}

function rotateBy(points: Point[], angle: number): Point[] {
  const centroid = getCentroid(points);
  const rad = (angle * Math.PI) / 180;
  return points.map((p) => {
    const dx = p.x - centroid.x;
    const dy = p.y - centroid.y;
    return {
      x: dx * Math.cos(rad) - dy * Math.sin(rad) + centroid.x,
      y: dx * Math.sin(rad) + dy * Math.cos(rad) + centroid.y,
    };
  });
}

function pathDistance(points1: Point[], points2: Point[]): number {
  if (points1.length !== points2.length) return Infinity;

  let sum = 0;
  for (let i = 0; i < points1.length; i++) {
    sum += distance(points1[i], points2[i]);
  }
  return sum / points1.length;
}

export function recognizeGesture(
  drawnPoints: Point[],
  templatePoints: Point[]
): number {
  if (drawnPoints.length < 2 || templatePoints.length < 2) {
    return 0;
  }

  const normalizedDrawn = normalize([...drawnPoints]);
  const normalizedTemplate = normalize([...templatePoints]);
  const dist = distanceAtBestAngle(normalizedDrawn, normalizedTemplate, 45, 2);
  const diagonal = Math.sqrt(2) * SQUARE_SIZE;
  const maxDistance = diagonal * 0.5;
  const similarity = Math.max(0, 1 - (dist / maxDistance) * 1.5);

  return similarity;
}

export function matchesGesture(
  drawnPoints: Point[],
  templatePoints: Point[],
  threshold: number = 0.8
): boolean {
  const similarityNormal = recognizeGesture(drawnPoints, templatePoints);
  const reversedTemplate = [...templatePoints].reverse();
  const similarityReverse = recognizeGesture(drawnPoints, reversedTemplate);

  return Math.max(similarityNormal, similarityReverse) >= threshold;
}

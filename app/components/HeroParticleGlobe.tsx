"use client";

import { useEffect, useRef } from "react";

type GlobePoint = {
  x: number;
  y: number;
  z: number;
  size: number;
  alpha: number;
};

const POINT_COUNT = 420;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

function createGlobePoints(): GlobePoint[] {
  return Array.from({ length: POINT_COUNT }, (_, index) => {
    const offset = index + 0.5;
    const y = 1 - (offset / POINT_COUNT) * 2;
    const ringRadius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = GOLDEN_ANGLE * offset;
    const density = 0.55 + (1 - Math.abs(y)) * 0.45;

    return {
      x: Math.cos(theta) * ringRadius,
      y,
      z: Math.sin(theta) * ringRadius,
      size: 0.7 + density * 1.2,
      alpha: 0.18 + density * 0.48,
    };
  });
}

const globePoints = createGlobePoints();

export default function HeroParticleGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let width = 0;
    let height = 0;
    let frameId = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const nextWidth = Math.max(rect.width, 1);
      const nextHeight = Math.max(rect.height, 1);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = nextWidth;
      height = nextHeight;
      canvas.width = Math.round(nextWidth * dpr);
      canvas.height = Math.round(nextHeight * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    const tiltX = 0.32;
    const cosTilt = Math.cos(tiltX);
    const sinTilt = Math.sin(tiltX);
    let lastTime = 0;
    let rotationY = 0.62;

    const draw = (timestamp: number) => {
      const delta = lastTime === 0 ? 16 : timestamp - lastTime;
      lastTime = timestamp;
      rotationY -= (delta / 1000) * 0.14;

      const centerX = width / 2;
      const centerY = height / 2;
      const globeRadius = Math.min(width, height) * 0.34;
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      context.clearRect(0, 0, width, height);

      const projected = globePoints
        .map((point) => {
          const rotatedX = point.x * cosY + point.z * sinY;
          const rotatedZ = -point.x * sinY + point.z * cosY;

          const tiltedY = point.y * cosTilt - rotatedZ * sinTilt;
          const depthZ = point.y * sinTilt + rotatedZ * cosTilt;
          const depth = (depthZ + 1) / 2;
          const scale = 0.42 + depth * 0.92;

          return {
            x: centerX + rotatedX * globeRadius * scale,
            y: centerY + tiltedY * globeRadius * scale,
            size: point.size * scale,
            alpha: point.alpha * (0.1 + depth * 0.9),
            depth,
          };
        })
        .sort((a, b) => a.depth - b.depth);

      for (const dot of projected) {
        if (dot.alpha < 0.045) {
          continue;
        }

        context.beginPath();
        context.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(0, 255, 136, ${dot.alpha.toFixed(3)})`;
        context.fill();
      }

      frameId = window.requestAnimationFrame(draw);
    };

    frameId = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particle-sphere" aria-hidden="true" />;
}

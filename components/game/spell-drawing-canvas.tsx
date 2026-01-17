"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { type Spell } from "@/lib/spells";
import { type Point, getSpellForm } from "@/lib/spell-forms";
import { matchesGesture } from "@/lib/gesture-recognition";
import { X, Clock, CheckCircle2, XCircle, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpellDrawingCanvasProps {
  spell: Spell;
  onSuccess: () => void;
  onFailure: () => void;
  onClose: () => void;
  timeLimit: number; // in seconds
}

export function SpellDrawingCanvas({
  spell,
  onSuccess,
  onFailure,
  onClose,
  timeLimit,
}: SpellDrawingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [points, setPoints] = useState<Point[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [showReference, setShowReference] = useState(true);
  const [result, setResult] = useState<"success" | "failure" | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const handleTimeout = useCallback(() => {
    if (result !== null || isComplete) return;
    setIsComplete(true);
    setResult("failure");
    setTimeout(() => {
      onFailure();
    }, 1500);
  }, [result, isComplete, onFailure]);

  // Timer effect
  useEffect(() => {
    if (isComplete || result !== null) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isComplete, result, handleTimeout]);

  // Get canvas context
  const getContext = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    return canvas.getContext("2d");
  }, []);

  // Draw reference guide
  const drawReference = useCallback(
    (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      if (!showReference) return;

      const template = getSpellForm(spell.id);
      if (template.length === 0) return;

      ctx.save();
      ctx.strokeStyle = "rgba(100, 100, 200, 0.3)";
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();

      const scaleX = canvas.width;
      const scaleY = canvas.height;

      for (let i = 0; i < template.length; i++) {
        const point = template[i];
        const x = point.x * scaleX;
        const y = point.y * scaleY;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
      ctx.restore();
    },
    [spell.id, showReference]
  );

  // Clear canvas
  const clearCanvas = useCallback(() => {
    const ctx = getContext();
    if (!ctx) return;

    const canvas = canvasRef.current!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawReference(ctx, canvas);
  }, [getContext, drawReference]);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = getContext();
    if (!ctx) return;

    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Set drawing styles
    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    drawReference(ctx, canvas);
  }, [getContext, drawReference, showReference]);

  // Redraw reference when visibility changes
  useEffect(() => {
    const ctx = getContext();
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;

    clearCanvas();
  }, [showReference, clearCanvas, getContext]);

  // Get point from event
  const getPointFromEvent = useCallback(
    (
      e:
        | React.MouseEvent<HTMLCanvasElement>
        | React.TouchEvent<HTMLCanvasElement>
    ): Point | null => {
      const canvas = canvasRef.current;
      if (!canvas) return null;

      const rect = canvas.getBoundingClientRect();
      let clientX: number;
      let clientY: number;

      if ("touches" in e) {
        if (e.touches.length === 0) return null;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      return {
        x: (clientX - rect.left) / rect.width,
        y: (clientY - rect.top) / rect.height,
      };
    },
    []
  );

  // Draw point
  const drawPoint = useCallback(
    (point: Point, prevPoint?: Point) => {
      const ctx = getContext();
      const canvas = canvasRef.current;
      if (!ctx || !canvas) return;

      const x = point.x * canvas.width;
      const y = point.y * canvas.height;

      if (prevPoint) {
        const prevX = prevPoint.x * canvas.width;
        const prevY = prevPoint.y * canvas.height;

        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(x, y, ctx.lineWidth / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    },
    [getContext]
  );

  // Start drawing
  const handleStart = useCallback(
    (
      e:
        | React.MouseEvent<HTMLCanvasElement>
        | React.TouchEvent<HTMLCanvasElement>
    ) => {
      if (isComplete || result !== null) return;

      e.preventDefault();
      const point = getPointFromEvent(e);
      if (!point) return;

      setIsDrawing(true);
      setPoints([point]);
      drawPoint(point);
    },
    [isComplete, result, getPointFromEvent, drawPoint]
  );

  // Continue drawing
  const handleMove = useCallback(
    (
      e:
        | React.MouseEvent<HTMLCanvasElement>
        | React.TouchEvent<HTMLCanvasElement>
    ) => {
      if (!isDrawing || isComplete || result !== null) return;

      e.preventDefault();
      const point = getPointFromEvent(e);
      if (!point) return;

      const prevPoint = points[points.length - 1];
      setPoints((prev) => [...prev, point]);
      drawPoint(point, prevPoint);
    },
    [isDrawing, isComplete, result, getPointFromEvent, drawPoint, points]
  );

  // Stop drawing and check
  const handleEnd = useCallback(() => {
    if (!isDrawing || isComplete || result !== null) return;

    setIsDrawing(false);

    if (points.length < 3) {
      // Too few points, clear and restart
      setPoints([]);
      clearCanvas();
      return;
    }

    // Check gesture
    const template = getSpellForm(spell.id);
    const isMatch = matchesGesture(points, template, 0.75);

    setIsComplete(true);
    setResult(isMatch ? "success" : "failure");

    // Draw result feedback
    const ctx = getContext();
    const canvas = canvasRef.current;
    if (ctx && canvas) {
      ctx.save();
      ctx.strokeStyle = isMatch ? "#10b981" : "#ef4444";
      ctx.lineWidth = 6;
      ctx.setLineDash([]);

      // Redraw the path with result color
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const x = point.x * canvas.width;
        const y = point.y * canvas.height;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      ctx.restore();
    }

    // Call callback after delay
    setTimeout(() => {
      if (isMatch) {
        onSuccess();
      } else {
        onFailure();
      }
    }, 1500);
  }, [
    isDrawing,
    isComplete,
    result,
    points,
    spell.id,
    getContext,
    clearCanvas,
    onSuccess,
    onFailure,
  ]);

  // Prevent scrolling on touch
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      if (e.target === canvasRef.current) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventScroll, { passive: false });
    return () => {
      document.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-card rounded-xl border border-border p-6 max-w-2xl w-full mx-4 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-foreground">{spell.name}</h2>
            <button
              onClick={() => setShowReference(!showReference)}
              className={cn(
                "p-2 rounded-lg border transition-colors",
                showReference
                  ? "bg-primary/20 border-primary text-primary"
                  : "bg-secondary border-border text-muted-foreground"
              )}
              title={showReference ? "Hide reference" : "Show reference"}
            >
              {showReference ? (
                <Eye className="w-4 h-4" />
              ) : (
                <EyeOff className="w-4 h-4" />
              )}
            </button>
          </div>
          <div className="flex items-center gap-4">
            {/* Timer */}
            <div
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-lg border",
                timeRemaining <= 5
                  ? "bg-destructive/20 border-destructive text-destructive"
                  : "bg-secondary border-border text-foreground"
              )}
            >
              <Clock className="w-4 h-4" />
              <span className="font-mono font-semibold">{timeRemaining}s</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-border bg-secondary hover:bg-secondary/80 transition-colors"
              disabled={isComplete}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Result Feedback */}
        {result && (
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center rounded-xl z-10",
              result === "success"
                ? "bg-green-500/20 border-2 border-green-500"
                : "bg-red-500/20 border-2 border-red-500"
            )}
          >
            <div className="text-center">
              {result === "success" ? (
                <>
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-2 animate-pulse" />
                  <p className="text-2xl font-bold text-green-500">
                    Spell Cast Successfully!
                  </p>
                </>
              ) : (
                <>
                  <XCircle className="w-16 h-16 text-red-500 mx-auto mb-2 animate-pulse" />
                  <p className="text-2xl font-bold text-red-500">
                    Spell Failed!
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    The gesture didn&apos;t match
                  </p>
                </>
              )}
            </div>
          </div>
        )}

        {/* Canvas */}
        <div className="relative border-2 border-border rounded-lg bg-background overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-[400px] touch-none cursor-crosshair"
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
          />
        </div>

        {/* Instructions */}
        <div className="mt-4 text-sm text-muted-foreground text-center">
          {!isComplete ? (
            <p>
              Draw the spell form with your mouse or finger. Match the reference
              guide to cast the spell.
            </p>
          ) : result === "success" ? (
            <p className="text-green-500">Perfect! The spell has been cast.</p>
          ) : (
            <p className="text-red-500">
              The gesture didn&apos;t match. Your turn is lost.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

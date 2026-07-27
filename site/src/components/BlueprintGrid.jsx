import { useEffect, useRef } from "react";

export default function BlueprintGrid() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let w, h, raf, t = 0;
    const MINOR = 24;
    const MAJOR = MINOR * 5;
    const marks = [];

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      marks.length = 0;
      const count = Math.round((w * h) / 60000);
      for (let i = 0; i < count; i++) {
        marks.push({
          x: Math.random() * w,
          y: Math.random() * h,
          type: Math.floor(Math.random() * 3), // 0 crosshair, 1 circle, 2 dim-line
          phase: Math.random() * Math.PI * 2,
          size: 14 + Math.random() * 16
        });
      }
    }
    resize();
    window.addEventListener("resize", resize);

    function drawCrosshair(x, y, s, a) {
      ctx.strokeStyle = `rgba(245,185,66,${a})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x - s, y); ctx.lineTo(x + s, y);
      ctx.moveTo(x, y - s); ctx.lineTo(x, y + s);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, s * 0.35, 0, Math.PI * 2);
      ctx.stroke();
    }

    function drawCircleMark(x, y, s, a) {
      ctx.strokeStyle = `rgba(127,184,245,${a})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x, y, s, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, s * 0.55, 0, Math.PI * 2);
      ctx.stroke();
    }

    function drawDimLine(x, y, s, a) {
      ctx.strokeStyle = `rgba(238,236,228,${a})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x - s, y);
      ctx.lineTo(x + s, y);
      ctx.moveTo(x - s, y - 4); ctx.lineTo(x - s, y + 4);
      ctx.moveTo(x + s, y - 4); ctx.lineTo(x + s, y + 4);
      ctx.stroke();
    }

    function draw() {
      t += 0.012;
      ctx.fillStyle = "#0a0e13";
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(79,143,224,0.06)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= w; x += MINOR) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y <= h; y += MINOR) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      ctx.strokeStyle = "rgba(79,143,224,0.14)";
      for (let x = 0; x <= w; x += MAJOR) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y <= h; y += MAJOR) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      for (const m of marks) {
        const pulse = 0.4 + Math.sin(t + m.phase) * 0.35;
        const a = Math.max(0.08, pulse * 0.5);
        if (m.type === 0) drawCrosshair(m.x, m.y, m.size, a);
        else if (m.type === 1) drawCircleMark(m.x, m.y, m.size, a);
        else drawDimLine(m.x, m.y, m.size, a);
      }

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />;
}
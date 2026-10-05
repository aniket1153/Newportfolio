import { useEffect, useRef } from "react";

function mix(from, to, amount) {
  return from + (to - from) * amount;
}

function accentAt(progress) {
  const cyan = [34, 211, 238];
  const blue = [59, 130, 246];
  const violet = [168, 85, 247];
  const [from, to, amount] =
    progress < 0.5
      ? [cyan, blue, progress / 0.5]
      : [blue, violet, (progress - 0.5) / 0.5];

  return from.map((channel, index) => Math.round(mix(channel, to[index], amount)));
}

function TechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    const pointer = { x: -9999, y: -9999, active: false };
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motion = { scroll: 0, reduce: motionQuery.matches };
    let width = 0;
    let height = 0;
    let nodes = [];
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(100, Math.max(36, (width * height) / 18000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.2 + 0.7,
      }));
    };

    const onPointer = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const onLeave = () => {
      pointer.active = false;
    };

    const onScroll = () => {
      motion.scroll = window.scrollY || 0;
    };

    const onMotionChange = (event) => {
      motion.reduce = event.matches;
    };

    const draw = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - height, 1);
      const progress = Math.min(Math.max(motion.scroll / maxScroll, 0), 1);
      const [red, green, blue] = accentAt(progress);
      const time = motion.reduce ? 0 : performance.now() * 0.001;
      const rgb = `${red},${green},${blue}`;

      ctx.fillStyle = "#05070c";
      ctx.fillRect(0, 0, width, height);

      const gap = 68;
      const shiftX = motion.reduce ? 0 : (motion.scroll * 0.14) % gap;
      const shiftY = motion.reduce ? 0 : (motion.scroll * 0.28) % gap;

      ctx.beginPath();
      ctx.strokeStyle = `rgba(${rgb},0.085)`;
      ctx.lineWidth = 1;
      for (let x = -gap; x <= width + gap; x += gap) {
        ctx.moveTo(x - shiftX, 0);
        ctx.lineTo(x - shiftX, height);
      }
      for (let y = -gap; y <= height + gap; y += gap) {
        ctx.moveTo(0, y - shiftY);
        ctx.lineTo(width, y - shiftY);
      }
      ctx.stroke();

      ctx.fillStyle = `rgba(${rgb},0.55)`;
      for (let x = -gap; x <= width + gap; x += gap) {
        for (let y = -gap; y <= height + gap; y += gap) {
          const px = x - shiftX;
          const py = y - shiftY;
          const wave = motion.reduce
            ? 0.45
            : 0.28 + (Math.sin(time * 1.4 + px * 0.012 + progress * 8) + 1) * 0.28;
          ctx.globalAlpha = wave;
          ctx.fillRect(px - 1.1, py - 1.1, 2.2, 2.2);
        }
      }
      ctx.globalAlpha = 1;

      if (pointer.active) {
        const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 260);
        glow.addColorStop(0, `rgba(${rgb},0.2)`);
        glow.addColorStop(0.4, `rgba(${rgb},0.07)`);
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(pointer.x - 260, pointer.y - 260, 520, 520);

        const cellX = Math.round((pointer.x + shiftX) / gap) * gap - shiftX;
        const cellY = Math.round((pointer.y + shiftY) / gap) * gap - shiftY;
        ctx.strokeStyle = `rgba(${rgb},0.45)`;
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.moveTo(cellX - gap, cellY);
        ctx.lineTo(cellX + gap, cellY);
        ctx.moveTo(cellX, cellY - gap);
        ctx.lineTo(cellX, cellY + gap);
        ctx.stroke();
      }

      const reach = 168;
      for (const node of nodes) {
        if (!motion.reduce) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        if (!pointer.active) continue;

        const dx = node.x - pointer.x;
        const dy = node.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist > reach || dist === 0) continue;

        const force = ((reach - dist) / reach) * 0.9;
        node.x += (dx / dist) * force;
        node.y += (dy / dist) * force;

        ctx.strokeStyle = `rgba(${rgb},${0.62 * (1 - dist / reach)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(pointer.x, pointer.y);
        ctx.stroke();
      }

      const linkDistance = 128;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (Math.abs(dx) > linkDistance || Math.abs(dy) > linkDistance) continue;
          const dist = Math.hypot(dx, dy);
          if (dist >= linkDistance) continue;

          ctx.strokeStyle = `rgba(${rgb},${0.18 * (1 - dist / linkDistance)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = `rgba(${rgb},0.9)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!motion.reduce) {
        const scanY = ((time * 46 + motion.scroll * 0.2) % (height + 140)) - 70;
        const scan = ctx.createLinearGradient(0, scanY - 36, 0, scanY + 36);
        scan.addColorStop(0, "rgba(0,0,0,0)");
        scan.addColorStop(0.5, `rgba(${rgb},0.075)`);
        scan.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = scan;
        ctx.fillRect(0, scanY - 36, width, 72);
      }

      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.35,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.72
      );
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.38)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      frame = requestAnimationFrame(draw);
    };

    resize();
    onScroll();
    frame = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full"
      style={{ zIndex: 0 }}
    />
  );
}

export default TechBackground;

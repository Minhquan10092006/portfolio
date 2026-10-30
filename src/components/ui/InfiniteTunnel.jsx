import { useEffect, useMemo, useRef } from 'react';
import './InfiniteTunnel.css';

const DEPTH = 3400;
const NEAR = 420;
const HALF_W = 640;
const HALF_H = 380;

const RINGS = 7;
const PER_RING = 8;

const IMAGES = ['/quiz-platform.jpg', '/socket-project.jpg', '/quiz-platform.jpg', '/socket-project.jpg', '/avatar.jpg'];
const LABELS = ['AWS', 'AI', 'SEC', 'TCP', 'TLS', 'DNS', 'IAM', 'CLOUD', '0101', 'VPN', 'UDP'];
const TONES = ['teal', 'blue', 'violet', 'pink'];

function mulberry32(seed) {
  let a = seed;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildTiles() {
  const random = mulberry32(20261031);

  return Array.from({ length: RINGS * PER_RING }, (_, i) => {
    const ring = Math.floor(i / PER_RING);
    const slot = i % PER_RING;
    const angle = (slot / PER_RING) * Math.PI * 2 + (random() - 0.5) * 0.44;
    const spread = 0.84 + random() * 0.28;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    let x = cos * HALF_W * spread;
    let y = sin * HALF_H * spread;

    if (Math.abs(x) < HALF_W * 0.34 && Math.abs(y) < HALF_H * 0.42) {
      const push = 1.45 + random() * 0.25;
      x *= push;
      y *= push;
    }

    return {
      id: i,
      x,
      y,
      ry: -cos * 12 + (random() - 0.5) * 16,
      rx: sin * 8 + (random() - 0.5) * 14,
      w: 138 + random() * 44,
      h: 90 + random() * 20,
      phase: (ring + 0.15 + random() * 0.7) / RINGS,
      opacity: 0.5 + random() * 0.28,
      kind: slot % 4 === 0 ? 'image' : 'label',
      tone: TONES[(ring + (random() < 0.25 ? 1 : 0)) % TONES.length],
      label: LABELS[Math.floor(random() * LABELS.length)],
      src: IMAGES[Math.floor(random() * IMAGES.length)],
      focus: `${Math.round(35 + random() * 30)}% ${Math.round(35 + random() * 30)}%`,
    };
  });
}

const TILES = buildTiles();
const RING_COUNT = 6;
const RING_PHASES = Array.from({ length: RING_COUNT }, (_, i) => (i + 0.5) / RING_COUNT);

export default function InfiniteTunnel({ boosted = false }) {
  const worldRef = useRef(null);
  const tileRefs = useRef([]);
  const ringRefs = useRef([]);
  const boostRef = useRef(boosted);

  const tiles = useMemo(() => TILES, []);

  useEffect(() => {
    boostRef.current = boosted;
  }, [boosted]);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame;
    let last = performance.now();
    let progress = reduced ? 0.15 : 0;
    let speed = reduced ? 0 : 1;

    const tick = (now) => {
      const dt = Math.min(64, now - last);
      last = now;

      const target = boostRef.current ? 2.6 : 1;
      speed += (target - speed) * 0.045;
      if (!reduced) progress = (progress + (dt / 1000) * 0.042 * speed) % 1;

      tileRefs.current.forEach((el, i) => {
        if (!el) return;
        const tile = tiles[i];
        const t = (progress + tile.phase) % 1;
        const z = -DEPTH + t * (DEPTH + NEAR);
        el.style.transform = `translate3d(0, 0, ${z.toFixed(2)}px)`;
        const fadeIn = t < 0.3 ? t / 0.3 : 1;
        const fadeOut = t > 0.68 ? Math.max(0, (1 - t) / 0.32) : 1;
        el.style.opacity = (tile.opacity * fadeIn * fadeOut).toFixed(3);
      });

      ringRefs.current.forEach((el, i) => {
        if (!el) return;
        const t = (progress + RING_PHASES[i]) % 1;
        const z = -DEPTH + t * (DEPTH + NEAR);
        el.style.transform = `translate3d(0, 0, ${z.toFixed(2)}px)`;
        const fadeIn = t < 0.08 ? t / 0.08 : 1;
        const fadeOut = t > 0.84 ? Math.max(0, (1 - t) / 0.16) : 1;
        el.style.opacity = (0.42 * fadeIn * fadeOut).toFixed(3);
      });

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [tiles]);

  useEffect(() => {
    const el = worldRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (event) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * -6;
      targetY = (event.clientY / window.innerHeight - 0.5) * 4;
    };

    const loop = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      el.style.transform = `rotateX(${currentY.toFixed(2)}deg) rotateY(${currentX.toFixed(2)}deg)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onMove);
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="tunnel" aria-hidden="true">
      <div className="tunnel__camera">
        <div className="tunnel__world" ref={worldRef}>
          <div className="tunnel__portal" />

          {tiles.map((tile, i) => (
            <div
              key={tile.id}
              className="tunnel__tile"
              ref={(el) => { tileRefs.current[i] = el; }}
            >
              <div
                className={`tunnel__panel tunnel__panel--${tile.kind} tone-${tile.tone}`}
                style={{
                  width: tile.w,
                  height: tile.h,
                  left: -tile.w / 2,
                  top: -tile.h / 2,
                  transform: `translate3d(${tile.x}px, ${tile.y}px, 0) rotateY(${tile.ry}deg) rotateX(${tile.rx}deg)`,
                }}
              >
                {tile.kind === 'image' ? (
                  <img src={tile.src} alt="" loading="lazy" draggable="false" style={{ objectPosition: tile.focus }} />
                ) : (
                  <span className="tunnel__label">{tile.label}</span>
                )}
              </div>
            </div>
          ))}

          {RING_PHASES.map((_, i) => (
            <div
              key={`ring-${i}`}
              className="tunnel__ring"
              ref={(el) => { ringRefs.current[i] = el; }}
            >
              <div
                className="tunnel__ring-shape"
                style={{
                  width: HALF_W * 2,
                  height: HALF_H * 2,
                  left: -HALF_W,
                  top: -HALF_H,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

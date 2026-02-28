export function clamp01(value) {
  if (!Number.isFinite(value)) return 0;
  if (value <= 0) return 0;
  if (value >= 1) return 1;
  return value;
}

export function computeHeroProgress(rectTop, rectHeight) {
  const travel = Math.max(rectHeight * 0.9, 1);
  const passed = Math.min(Math.max(-rectTop, 0), travel);
  return clamp01(passed / travel);
}

export function computeHeroMotion(progressInput) {
  const progress = clamp01(progressInput);

  // Linear layers: heading always moves slightly faster than background.
  const mediaY = progress * 32;
  const textY = -20 - progress * 82;
  const textOpacity = 1 - progress * 0.72;
  const bandY = 64 - progress * 64;
  const bandOpacity = 0.22 + progress * 0.58;

  return {
    progress,
    mediaY,
    textY,
    textOpacity,
    bandY,
    bandOpacity,
  };
}

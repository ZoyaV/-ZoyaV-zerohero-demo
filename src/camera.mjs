// Craftax direction: 1 left, 2 right, 3 up, 4 down; world +z is down.
export function shoulderPose(x, z, heading) {
  const dx = Math.sin(heading), dz = Math.cos(heading);
  return {eye: [x - dx * 4.5, 2.7, z - dz * 4.5],
    target: [x + dx * 1.2, 1.1, z + dz * 1.2]};
}

// Position the HTML bubble above a projected head, clear of the operator reply.
export function speechPosition(head, viewport, bubble, obstacle) {
  const clamp = (value, low, high) => Math.max(low, Math.min(value, high));
  const topInset = viewport.topInset ?? 72;
  const leftLimit = Math.max(16, viewport.width - bubble.width - 16);
  const topLimit = Math.max(topInset, viewport.height - bubble.height - 116);
  let left = clamp(head.x - bubble.width / 2, 16, leftLimit);
  let top = clamp(head.y - bubble.height - 26, topInset, topLimit);
  if (obstacle && left + bubble.width + 16 > obstacle.left &&
      left < obstacle.right + 16 && top < obstacle.bottom + 16 &&
      top + bubble.height + 16 > obstacle.top) {
    if (obstacle.left - bubble.width - 16 >= 16) {
      left = Math.min(left, obstacle.left - bubble.width - 16);
    } else {
      top = clamp(obstacle.bottom + 16, topInset, topLimit);
    }
  }
  return {left, top, tail: clamp(head.x - left, 24, bubble.width - 24)};
}

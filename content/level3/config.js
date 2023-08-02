export const level3Config = {
  gravity: 1400,
  playerSpeed: 400,
  playerStartPosX: 1500,
  playerStartPosY: 100,
  birdRanges: [200, 100, 250, 300, 100, 150],
  birdType: 2,
  birdPositions: [
    () => vec2(2200, 200),
    () => vec2(1900, 300),
    () => vec2(3000, 100),
    () => vec2(4000, 100),
    () => vec2(5000, 400),
    () => vec2(6000, 200),
  ],
}

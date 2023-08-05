export const level3Config = {
  gravity: 1400,
  playerSpeed: 400,
  jumpForce: 650,
  playerStartPosX: 1500,
  playerStartPosY: 100,
  birdRanges: [200, 100, 250, 300, 100, 150, 400, 300],
  birdType: 1,
  birdPositions: [
    () => vec2(2200, 200),
    () => vec2(1900, 300),
    () => vec2(3000, 100),
    () => vec2(4000, 100),
    () => vec2(5000, 400),
    () => vec2(6000, 200),
    () => vec2(8000, 500),
    () => vec2(8500, 200),
  ],
}

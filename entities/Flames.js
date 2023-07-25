export class Flames {
  constructor(positions, amplitudes, type) {
    this.amplitudes = amplitudes
    this.flames = []
    for (const position of positions) {
      this.flames.push(
        add([
          sprite(`flame-${type}`, { anim: "burn" }),
          area({ shape: new Rect(vec2(0), 12, 12) }),
          anchor("center"),
          pos(position),
          scale(4),
          rotate(),
          state("launch", ["launch", "rotate", "fall"]),
          "flames",
        ])
      )
    }
  }

  setMovementPattern() {
    for (const [index, flame] of this.flames.entries()) {
      flame.onStateEnter("launch", async () => {
        await tween(
          flame.pos.y,
          flame.pos.y - this.amplitudes[index],
          2,
          (posY) => (flame.pos.y = posY),
          easings.linear
        )
        flame.enterState("rotate", "fall")
      })

      flame.onStateEnter("rotate", (nextState) => {
        flame.rotateBy(180)
        flame.enterState(nextState)
      })

      flame.onStateEnter("fall", async () => {
        await tween(
          flame.pos.y,
          flame.pos.y + this.amplitudes[index],
          2,
          (posY) => (flame.pos.y = posY),
          easings.linear
        )
        flame.enterState("rotate", "launch")
      })
    }
  }
}

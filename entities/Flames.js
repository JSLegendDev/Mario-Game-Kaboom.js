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
          offscreen(),
          "flames",
        ])
      )
    }
  }

  setMovementPattern() {
    for (const [index, flame] of this.flames.entries()) {
      const launch = flame.onStateEnter("launch", async () => {
        if (!flame.isOffScreen()) play("fireball")
        await tween(
          flame.pos.y,
          flame.pos.y - this.amplitudes[index],
          2,
          (posY) => (flame.pos.y = posY),
          easings.linear
        )
        flame.enterState("rotate", "fall")
      })

      const rotate = flame.onStateEnter("rotate", (nextState) => {
        flame.rotateBy(180)
        flame.enterState(nextState)
      })

      const fall = flame.onStateEnter("fall", async () => {
        await tween(
          flame.pos.y,
          flame.pos.y + this.amplitudes[index],
          2,
          (posY) => (flame.pos.y = posY),
          easings.linear
        )
        flame.enterState("rotate", "launch")
      })

      onSceneLeave(() => {
        launch.cancel()
        rotate.cancel()
        fall.cancel()
      })
    }
  }
}

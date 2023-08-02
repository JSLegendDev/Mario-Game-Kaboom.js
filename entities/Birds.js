export class Birds {
  constructor(positions, ranges, type) {
    this.ranges = ranges
    this.birds = []
    for (const position of positions) {
      this.birds.push(
        add([
          sprite(`bird-${type}`, { anim: "fly" }),
          area({ shape: new Rect(vec2(0), 12, 12) }),
          anchor("center"),
          pos(position),
          scale(4),
          rotate(),
          state("fly-left", ["fly-left", "fly-right", "homing-attack"]),
          "birds",
        ])
      )
    }
  }

  setMovementPattern() {
    for (const [index, bird] of this.birds.entries()) {
      bird.onStateEnter("fly-left", async () => {
        bird.flipX = false
        await tween(
          bird.pos.x,
          bird.pos.x - this.ranges[index],
          2,
          (posX) => (bird.pos.x = posX),
          easings.linear
        )

        if (Math.random() > 0.5) {
          bird.enterState("homing-attack")
          return
        }

        bird.enterState("fly-right")
      })
      bird.onStateEnter("fly-right", async () => {
        bird.flipX = true
        await tween(
          bird.pos.x,
          bird.pos.x + this.ranges[index],
          2,
          (posX) => (bird.pos.x = posX),
          easings.linear
        )
        bird.enterState("fly-left")
      })

      bird.onStateEnter("homing-attack", async () => {
        debug.log("entered homing-attack state")
        const previousPos = bird.pos

        await tween(
          bird.pos,
          vec2(
            bird.pos.x + this.ranges[index],
            bird.pos.y + this.ranges[index]
          ),
          1,
          (pos) => (bird.pos = pos),
          easings.linear
        )
        await tween(
          bird.pos,
          previousPos,
          1,
          (pos) => (bird.pos = pos),
          easings.linear
        )
      })
    }
  }
}

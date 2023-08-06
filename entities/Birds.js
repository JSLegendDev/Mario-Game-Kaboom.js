export class Birds {
  constructor(positions, ranges, type) {
    this.ranges = ranges
    this.birds = []
    for (const position of positions) {
      this.birds.push(
        add([
          sprite(`bird-${type}`, { anim: "fly" }),
          area({ shape: new Rect(vec2(0), 10, 10) }),
          anchor("center"),
          pos(position),
          scale(4),
          rotate(),
          state("fly-left", [
            "fly-left",
            "fly-right",
            "dive-attack-left",
            "dive-attack-right",
          ]),
          offscreen(),
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
          0.5,
          (posX) => (bird.pos.x = posX),
          easings.linear
        )

        bird.enterState("dive-attack-left")
      })
      bird.onStateEnter("fly-right", async () => {
        bird.flipX = true
        await tween(
          bird.pos.x,
          bird.pos.x + this.ranges[index],
          0.5,
          (posX) => (bird.pos.x = posX),
          easings.linear
        )

        bird.enterState("dive-attack-right")
      })

      bird.onStateEnter("dive-attack-left", async () => {
        await tween(
          bird.pos,
          vec2(
            bird.pos.x - this.ranges[index],
            bird.pos.y + this.ranges[index]
          ),
          0.5,
          (pos) => (bird.pos = pos),
          easings.easeInSine
        )
        await tween(
          bird.pos,
          vec2(
            bird.pos.x - this.ranges[index],
            bird.pos.y - this.ranges[index]
          ),
          0.5,
          (pos) => (bird.pos = pos),
          easings.easeInSine
        )

        bird.enterState("fly-right")
      })

      bird.onStateEnter("dive-attack-right", async () => {
        await tween(
          bird.pos,
          vec2(
            bird.pos.x + this.ranges[index],
            bird.pos.y + this.ranges[index]
          ),
          0.5,
          (pos) => (bird.pos = pos),
          easings.linear
        )
        await tween(
          bird.pos,
          vec2(
            bird.pos.x + this.ranges[index],
            bird.pos.y - this.ranges[index]
          ),
          0.5,
          (pos) => (bird.pos = pos),
          easings.linear
        )

        bird.enterState("fly-left")
      })
    }
  }
}

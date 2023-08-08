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

  async fly(bird, moveBy, duration) {
    await tween(
      bird.pos.x,
      bird.pos.x + moveBy,
      duration,
      (posX) => (bird.pos.x = posX),
      easings.linear
    )
  }

  async dive(bird, target, duration) {
    await tween(
      bird.pos,
      target,
      duration,
      (pos) => (bird.pos = pos),
      easings.easeInSine
    )
  }

  setMovementPattern() {
    for (const [index, bird] of this.birds.entries()) {
      const flyLeft = bird.onStateEnter("fly-left", async () => {
        bird.flipX = false
        await this.fly(bird, -this.ranges[index], 0.5)
        bird.enterState("dive-attack-left")
      })
      const flyRight = bird.onStateEnter("fly-right", async () => {
        bird.flipX = true
        await this.fly(bird, this.ranges[index], 0.5)
        bird.enterState("dive-attack-right")
      })

      const diveAttackLeft = bird.onStateEnter("dive-attack-left", async () => {
        if (!bird.isOffScreen()) play("dive", { volume: 0.05 })
        await this.dive(
          bird,
          vec2(
            bird.pos.x - this.ranges[index],
            bird.pos.y + this.ranges[index]
          ),
          0.5
        )
        await this.dive(
          bird,
          vec2(
            bird.pos.x - this.ranges[index],
            bird.pos.y - this.ranges[index]
          ),
          0.5
        )

        bird.enterState("fly-right")
      })

      const diveAttackRight = bird.onStateEnter(
        "dive-attack-right",
        async () => {
          if (!bird.isOffScreen()) play("dive", { volume: 0.05 })
          await this.dive(
            bird,
            vec2(
              bird.pos.x + this.ranges[index],
              bird.pos.y + this.ranges[index]
            ),
            0.5
          )
          await this.dive(
            bird,
            vec2(
              bird.pos.x + this.ranges[index],
              bird.pos.y - this.ranges[index]
            ),
            0.5
          )

          bird.enterState("fly-left")
        }
      )

      onSceneLeave(() => {
        flyLeft.cancel()
        flyRight.cancel()
        diveAttackLeft.cancel()
        diveAttackRight.cancel()
      })
    }
  }
}

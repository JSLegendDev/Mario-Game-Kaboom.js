export class Spiders {
  rangeX = 0
  rangeY = 800

  constructor(positions, amplitudes, velocities, type) {
    this.amplitudes = amplitudes
    this.velocities = velocities
    this.spiders = []
    for (const position of positions) {
      this.spiders.push(
        add([
          sprite(`spider-${type}`, { anim: "crawl" }),
          pos(position),
          area({
            shape: new Rect(vec2(0, 4.5), 20, 6),
            collisionIgnore: ["spiders"],
          }),
          anchor("center"),
          body(),
          scale(4),
          state("idle", ["idle", "crawl-left", "crawl-right"]),
          "spiders",
        ])
      )
    }
  }

  setMovementPattern() {
    for (const [index, spider] of this.spiders.entries()) {
      spider.onStateEnter("idle", async (previousState) => {
        if (spider.currAnim !== "idle") spider.play("idle")

        await new Promise((resolve) => {
          setTimeout(() => resolve(), 1000)
        })

        if (previousState === "crawl-left") {
          spider.enterState("crawl-right")
          return
        }

        spider.jump()
        spider.enterState("crawl-left")
      })

      spider.onStateEnter("crawl-left", async () => {
        if (spider.currAnim !== "crawl") spider.play("crawl")
        spider.flipX = false

        await tween(
          spider.pos.x,
          spider.pos.x - this.amplitudes[index],
          this.velocities[index],
          (posX) => (spider.pos.x = posX),
          easings.easeOutSine
        )
        spider.enterState("idle", "crawl-left")
      })

      spider.onStateEnter("crawl-right", async () => {
        if (spider.currAnim !== "crawl") spider.play("crawl")
        spider.flipX = true

        await tween(
          spider.pos.x,
          spider.pos.x + this.amplitudes[index],
          this.velocities[index],
          (posX) => (spider.pos.x = posX),
          easings.easeOutSine
        )
        spider.enterState("idle", "crawl-right")
      })
    }
  }

  enablePassthrough() {
    for (const spider of this.spiders) {
      spider.onBeforePhysicsResolve((collision) => {
        if (collision.target.is("passthrough") && spider.isJumping()) {
          collision.preventResolution()
        }
      })
    }
  }
}

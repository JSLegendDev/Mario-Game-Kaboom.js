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
          area({ shape: new Rect(vec2(0), 20, 12), offset: vec2(0, 2) }),
          anchor("center"),
          body(),
          scale(4),
          state("idle", ["idle", "crawl-left", "crawl-right"]),
          "spiders",
        ])
      )
    }
  }

  setMovementPattern(target) {
    for (const [index, spider] of this.spiders.entries()) {
      spider.onStateEnter("idle", () => {
        spider.enterState("crawl-left")
      })

      spider.onStateEnter("crawl-left", async () => {
        spider.flipX = false

        if (Math.sign(target.pos.x - spider.pos.x) === 1) {
          spider.enterState("crawl-right")
          return
        }

        if (
          Math.abs(target.pos.x - spider.pos.x) < this.rangeX &&
          Math.abs(target.pos.y - spider.pos.y) > this.rangeY
        ) {
          await tween(
            spider.pos.x,
            target.pos.x,
            this.velocities[index],
            (posX) => (spider.pos.x = posX),
            easings.easeOutSine
          )

          spider.enterState("crawl-left")
          return
        }

        await tween(
          spider.pos.x,
          spider.pos.x - this.amplitudes[index],
          this.velocities[index],
          (posX) => (spider.pos.x = posX),
          easings.easeOutSine
        )
        spider.enterState("crawl-right")
      })

      spider.onStateEnter("crawl-right", async () => {
        spider.flipX = true

        if (Math.sign(target.pos.x - spider.pos.x) === -1) {
          spider.enterState("crawl-left")
          return
        }

        if (
          Math.abs(target.pos.x - spider.pos.x) < this.rangeX &&
          Math.abs(target.pos.y - spider.pos.y) > this.rangeY
        ) {
          await tween(
            spider.pos.x,
            target.pos.x,
            this.velocities[index],
            (posX) => (spider.pos.x = posX),
            easings.easeOutSine
          )

          spider.enterState("crawl-left")
          return
        }

        await tween(
          spider.pos.x,
          spider.pos.x + this.amplitudes[index],
          this.velocities[index],
          (posX) => (spider.pos.x = posX),
          easings.easeOutSine
        )
        spider.enterState("crawl-left")
      })
    }
  }
}

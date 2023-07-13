export class Spiders {
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

  setMovementPattern() {
    for (const [index, spider] of this.spiders.entries()) {
      spider.onStateEnter("idle", () => {
        spider.enterState("crawl-left")
      })

      spider.onStateEnter("crawl-left", async () => {
        spider.flipX = false
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

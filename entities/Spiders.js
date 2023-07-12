export class Spiders {
  constructor(positions, type) {
    this.spiders = []
    for (const position of positions) {
      this.spiders.push(
        add([
          sprite(`spider-${type}`, { anim: "crawl" }),
          pos(position),
          area({ shape: new Rect(vec2(0), 20, 12), offset: vec2(20, 20) }),
          body(),
          scale(4),
          state("idle", [
            "idle",
            "crawl-left",
            "crawl-right",
            "alerted",
            "following",
          ]),
          "spiders",
        ])
      )
    }
  }

  setMovementPattern() {
    const player = get("player")[0]
    for (const spider of this.spiders) {
      spider.onStateEnter("idle", (previousState) => {
        if (spider.curAnim !== "idle") spider.play("idle")
        if (previousState === "crawl-left") spider.flipX = true
        if (previousState === "crawl-right") spider.flipX = false

        if (player.pos.x - spider.pos.x < 200) spider.enterState("alerted")

        if (previousState === "crawl-left") spider.enterState("crawl-right")
        if (previousState === "crawl-right") spider.enterState("crawl-left")
      })
    }
  }
}

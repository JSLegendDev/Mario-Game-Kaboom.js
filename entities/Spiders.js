export class Spiders {
  constructor(positions, type) {
    this.spiders = []
    for (const position of positions) {
      this.spiders.push(
        add([
          sprite(`spider-${type}`, { anim: "crawl" }),
          pos(position),
          area({ shape: new Rect(vec2(0), 20, 12), offset: vec2(30, 20) }),
          scale(4),
          "spiders",
        ])
      )
    }
  }
}

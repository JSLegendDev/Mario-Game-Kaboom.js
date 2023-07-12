export class Spiders {
  constructor(positions, type) {
    this.spiders = []
    for (const position of positions) {
      this.spiders.push(
        add([
          sprite(`spider-${type}`),
          pos(position),
          area(),
          body(),
          scale(4),
          "spiders",
        ])
      )
    }
  }
}

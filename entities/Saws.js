export class Saws {
  constructor(positions, ranges) {
    this.positions = positions
    this.ranges = ranges
    this.saws = []
    for (const position of this.positions) {
      this.saws.push(
        add([
          sprite("saw"),
          area(),
          anchor("center"),
          pos(position),
          scale(4),
          rotate(),
          state("rotate", ["rotate"]),
        ])
      )
    }
  }

  rotate() {
    for (const saw of this.saws) {
      saw.onStateEnter("rotate", async () => {
        await tween(
          saw.angle,
          360,
          1.5,
          (currAngle) => (saw.angle = currAngle),
          easings.linear
        )
        saw.angle = 0
        saw.enterState("rotate")
      })
    }
  }
}

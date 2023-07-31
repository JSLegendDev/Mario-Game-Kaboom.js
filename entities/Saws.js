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
        ])
      )
    }
  }

  rotate() {
    for (const saw of this.saws) {
      tween(
        saw.angle,
        360,
        2,
        (currAngle) => {
          if (currAngle > 359) {
            console.log(currAngle)
            saw.angle = 0
            return
          }

          saw.angle = currAngle
        },
        easings.linear
      )
    }
  }
}

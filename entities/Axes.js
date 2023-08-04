export class Axes {
  constructor(positions, swingTimes) {
    this.swingTimes = swingTimes
    this.positions = positions
    this.axes = []
    for (const position of positions) {
      this.axes.push(
        add([
          sprite("axe"),
          area({
            shape: new Rect(vec2(0, 40), 30, 10),
            collisionIgnore: ["spiders", "flames"],
          }),
          pos(position),
          scale(4),
          anchor(vec2(0, -0.75)),
          state("swing-left", ["swing-left", "swing-right"]),
          rotate(),
          offscreen(),
          "axes",
        ])
      )
    }
  }

  swing() {
    for (const [index, axe] of this.axes.entries()) {
      axe.onStateEnter("swing-left", async () => {
        if (!axe.isOffScreen()) {
          play("swinging-axe")
        }

        await tween(
          axe.angle,
          90,
          this.swingTimes[index],
          (val) => (axe.angle = val),
          easings.easeInOutSine
        )
        axe.enterState("swing-right")
      })

      axe.onStateEnter("swing-right", async () => {
        if (!axe.isOffScreen()) {
          play("swinging-axe")
        }

        await tween(
          axe.angle,
          -90,
          this.swingTimes[index],
          (val) => (axe.angle = val),
          easings.easeOutSine
        )
        axe.enterState("swing-left")
      })
    }
  }
}

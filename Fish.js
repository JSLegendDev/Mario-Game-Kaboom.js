export class Fish {
  constructor(positions, type) {
    this.fish = []
    for (const position of positions) {
      this.fish.push(
        add([
          sprite(`fish-${type}`, { anim: "swimming" }),
          area({ shape: new Rect(vec2(0), 12, 12) }),
          anchor("center"),
          pos(position),
          scale(4),
          rotate(90),
          state("launch", ["launch", "rotate", "fall"]),
          "fish",
        ])
      )
    }
  }

  setMovementPattern() {
    for (const fish of this.fish) {
      fish.onStateEnter("launch", async () => {
        await tween(
          fish.pos.y,
          fish.pos.y - 300,
          1,
          (posY) => (fish.pos.y = posY),
          easings.linear
        )
        fish.enterState("rotate", "fall")
      })

      fish.onStateEnter("rotate", (nextState) => {
        fish.rotateBy(180)
        fish.enterState(nextState)
      })

      fish.onStateEnter("fall", async () => {
        await tween(
          fish.pos.y,
          fish.pos.y + 300,
          1,
          (posY) => (fish.pos.y = posY),
          easings.linear
        )
        fish.enterState("rotate", "launch")
      })
    }
  }
}

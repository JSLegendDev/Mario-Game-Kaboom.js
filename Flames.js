export class Flames {
  constructor(positions, type) {
    this.flames = [];
    for (const position of positions) {
      this.flames.push(
        add([
          sprite(`flame-${type}`, { anim: "burning" }),
          area({ shape: new Rect(vec2(0), 12, 12) }),
          anchor("center"),
          pos(position),
          scale(4),
          rotate(),
          state("launch", ["launch", "rotate", "fall"]),
          "flames",
        ])
      );
    }
  }

  setMovementPattern() {
    for (const flame of this.flames) {
      flame.onStateEnter("launch", async () => {
        await tween(
          flame.pos.y,
          flame.pos.y - 300,
          1,
          (posY) => (flame.pos.y = posY),
          easings.linear
        );
        flame.enterState("rotate", "fall");
      });

      flame.onStateEnter("rotate", (nextState) => {
        flame.rotateBy(180);
        flame.enterState(nextState);
      });

      flame.onStateEnter("fall", async () => {
        await tween(
          flame.pos.y,
          flame.pos.y + 300,
          1,
          (posY) => (flame.pos.y = posY),
          easings.linear
        );
        flame.enterState("rotate", "launch");
      });
    }
  }
}

import { World } from "./World.js"

export class World2 extends World {
  loadMapAssets() {
    loadSprite("castle-background", "assets/Castle_Background_0.png")
    loadSprite("brick-tileset", "assets/Brick_Tileset.png", {
      sliceX: 3,
      sliceY: 4,
      anims: {
        tl: 0,
        tm: 1,
        tr: 2,
        ml: 3,
        mm: 4,
        mr: 5,
        "ml-2": 6,
        "mm-2": 7,
        "mr-2": 8,
      },
    })
    loadSprite("brick-oneway-tileset", "assets/Brick_Oneway.png", {
      sliceX: 3,
      sliceY: 4,
      anims: {
        tl: 0,
        tm: 1,
        tr: 2,
        ml: 3,
        mm: 4,
        mr: 5,
        "ml-2": 6,
        "mm-2": 7,
        "mr-2": 8,
      },
    })

    loadSprite("lava", "assets/Lava.png", {
      sliceX: 8,
      sliceY: 1,
      anims: {
        wave: {
          from: 0,
          to: 7,
          speed: 16,
          loop: true,
        },
        "wave-reversed": {
          from: 7,
          to: 0,
          speed: 16,
          loop: true,
        },
      },
    })
    loadSprite("flame-1", "assets/Flame_1.png", {
      sliceX: 2,
      sliceY: 1,
      anims: {
        burn: { from: 0, to: 1, loop: true },
      },
    })
    loadSprite("flame-2", "assets/Flame_2.png", {
      sliceX: 2,
      sliceY: 1,
      anims: {
        burn: { from: 0, to: 1, loop: true },
      },
    })
  }
}

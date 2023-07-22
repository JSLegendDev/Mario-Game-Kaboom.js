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
  }
}

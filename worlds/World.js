export class World {
  loadGeneralMapAssets() {
    loadSprite("coin", "assets/Coin.png")
    loadSprite("player", "assets/Player.png", {
      sliceX: 4,
      sliceY: 6,
      anims: {
        idle: {
          from: 0,
          to: 3,
          loop: true,
        },
        run: {
          from: 4,
          to: 7,
          loop: true,
        },
        "jump-up": 8,
        "jump-down": 9,
      },
    })
    loadSprite("bridge", "assets/Bridge.png")
    loadSprite("spider-1", "assets/Spider_1.png", {
      sliceX: 3,
      sliceY: 1,
      anims: {
        crawl: { from: 0, to: 2, loop: true },
        idle: 0,
      },
    })
    loadSprite("spider-2", "assets/Spider_2.png", {
      sliceX: 3,
      sliceY: 1,
      anims: {
        crawl: { from: 0, to: 2, loop: true },
        idle: 0,
      },
    })
  }

  drawWaves(type, anim) {
    let offset = -100
    for (let i = 0; i < 21; i++) {
      add([sprite(type, { anim }), pos(offset, 600), scale(4), fixed()])
      offset += 64
    }
  }

  drawMapLayout(levelLayout, mappings) {
    const layerSettings = {
      tileWidth: 16,
      tileHeight: 12,
      tiles: mappings,
    }

    this.map = []
    for (const layerLayout of levelLayout) {
      this.map.push(addLevel(layerLayout, layerSettings))
    }

    for (const layer of this.map) {
      layer.use(scale(4))
    }
  }

  drawBackground(bgSpriteName) {
    this.background = add([sprite(bgSpriteName), fixed(), scale(4)])
  }
}

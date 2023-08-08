export class Level {
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
    add([sprite(bgSpriteName), fixed(), scale(4)])
  }
}

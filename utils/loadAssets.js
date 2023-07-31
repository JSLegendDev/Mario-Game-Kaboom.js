export function loadAssets() {
  loadFont("Round", "./assets/Round9x13.ttf")
  loadSprite("coin-icon", "./assets/Coins_Ui.png")
  loadSprite("coin", "./assets/Coin.png")
  loadSprite("player", "./assets/Player.png", {
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
  loadSprite("bridge", "./assets/Bridge.png")
  loadSprite("spider-1", "./assets/Spider_1.png", {
    sliceX: 3,
    sliceY: 1,
    anims: {
      crawl: { from: 0, to: 2, loop: true },
      idle: 0,
    },
  })
  loadSprite("spider-2", "./assets/Spider_2.png", {
    sliceX: 3,
    sliceY: 1,
    anims: {
      crawl: { from: 0, to: 2, loop: true },
      idle: 0,
    },
  })
  loadSprite("forest-background", "./assets/Forest_Background_0.png")
  loadSprite("grass-tileset", "./assets/Grass_Tileset.png", {
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
  loadSprite("grass-oneway-tileset", "./assets/Grass_Oneway.png", {
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
  loadSprite("water", "./assets/Water.png", {
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
  loadSprite("fish-1", "./assets/Fish_1.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
      swim: { from: 0, to: 1, loop: true },
    },
  })
  loadSprite("fish-2", "./assets/Fish_2.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
      swim: { from: 0, to: 1, loop: true },
    },
  })
  loadSprite("castle-background", "./assets/Castle_Background_0.png")
  loadSprite("brick-tileset", "./assets/Brick_Tileset.png", {
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
  loadSprite("brick-oneway-tileset", "./assets/Brick_Oneway.png", {
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

  loadSprite("lava", "./assets/Lava.png", {
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
  loadSprite("flame-1", "./assets/Flame_1.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
      burn: { from: 0, to: 1, loop: true },
    },
  })
  loadSprite("flame-2", "./assets/Flame_2.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
      burn: { from: 0, to: 1, loop: true },
    },
  })
  loadSprite("axe", "./assets/Axe_Trap.png")
  loadSprite("saw", "./assets/Circular_Saw.png")
}

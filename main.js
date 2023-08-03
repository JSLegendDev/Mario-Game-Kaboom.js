import kaboom from "./libs/kaboom.mjs"
import { Player } from "./entities/Player.js"
import { Fish } from "./entities/Fish.js"
import { Flames } from "./entities/Flames.js"
import { Spiders } from "./entities/Spiders.js"
import { Camera } from "./utils/Camera.js"
import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js"
import { level1Config } from "./content/level1/config.js"
import { level2Config } from "./content/level2/config.js"
import { UI } from "./utils/UI.js"
import { level2Layout, level2Mappings } from "./content/level2/level2Layout.js"
import { loadAssets } from "./utils/loadAssets.js"
import { Level } from "./entities/Level.js"
import { Axes } from "./entities/Axes.js"
import { Saws } from "./entities/Saws.js"
import { level3Config } from "./content/level3/config.js"
import { level3Layout, level3Mappings } from "./content/level3/level3Layout.js"
import { Birds } from "./entities/Birds.js"

kaboom({
  width: 1280,
  height: 720,
  letterbox: true,
})

const scenes = {
  menu: () => {
    const level = new Level()
    level.drawBackground("forest-background")
    add([
      sprite("logo"),
      fixed(),
      area(),
      anchor("center"),
      pos(center().x, center().y - 200),
      scale(8),
    ])

    const startMsg = add([
      text("Press [ Enter ] to Start Game", { size: 24, font: "Round" }),
      area(),
      anchor("center"),
      pos(center().x, center().y + 100),
      opacity(),
      state("flash-up", ["flash-up", "flash-down"]),
    ])

    startMsg.onStateEnter("flash-up", async () => {
      await tween(
        startMsg.opacity,
        0,
        0.5,
        (opacity) => (startMsg.opacity = opacity),
        easings.linear
      )
      startMsg.enterState("flash-down")
    })

    startMsg.onStateEnter("flash-down", async () => {
      await tween(
        startMsg.opacity,
        1,
        0.5,
        (opacity) => (startMsg.opacity = opacity),
        easings.linear
      )
      startMsg.enterState("flash-up")
    })

    onKeyPress("enter", () => go("controls"))
  },
  controls: () => {
    const level = new Level()
    level.drawBackground("forest-background")

    add([
      text("Controls", { font: "Round", size: 50 }),
      area(),
      anchor("center"),
      pos(center().x, center().y - 200),
    ])

    const controlPrompts = add([pos(center().x + 30, center().y)])
    controlPrompts.add([sprite("up"), pos(0, -80)])
    controlPrompts.add([sprite("down")])
    controlPrompts.add([sprite("left"), pos(-80, 0)])
    controlPrompts.add([sprite("right"), pos(80, 0)])
    controlPrompts.add([sprite("space"), pos(-200, 0)])
    controlPrompts.add([
      text("Jump", { font: "Round", size: 32 }),
      pos(-190, 100),
    ])
    controlPrompts.add([
      text("Move", { font: "Round", size: 32 }),
      pos(10, 100),
    ])

    const startMsg = add([
      text("Press [ Enter ] to Start Game", { size: 24, font: "Round" }),
      area(),
      anchor("center"),
      pos(center().x, center().y + 300),
      opacity(),
      state("flash-up", ["flash-up", "flash-down"]),
    ])

    startMsg.onStateEnter("flash-up", async () => {
      await tween(
        startMsg.opacity,
        0,
        0.5,
        (opacity) => (startMsg.opacity = opacity),
        easings.linear
      )
      startMsg.enterState("flash-down")
    })

    startMsg.onStateEnter("flash-down", async () => {
      await tween(
        startMsg.opacity,
        1,
        0.5,
        (opacity) => (startMsg.opacity = opacity),
        easings.linear
      )
      startMsg.enterState("flash-up")
    })

    onKeyPress("enter", () => go(1))
  },
  1: () => {
    play("water-ambience", { volume: 0.02, loop: true })
    const level1 = new Level()
    setGravity(level1Config.gravity)
    level1.drawBackground("forest-background")
    level1.drawMapLayout(level1Layout, level1Mappings)

    const player = new Player(
      level1Config.playerStartPosX,
      level1Config.playerStartPosY,
      level1Config.playerSpeed,
      1,
      false
    )
    player.enablePassthrough()
    player.enableCoinPickUp()
    player.enableMobVunerability()

    const fish = new Fish(
      level1Config.fishPositions.map((fishPos) => fishPos()),
      level1Config.fishAmplitudes,
      level1Config.fishType
    )
    fish.setMovementPattern()

    const spiders = new Spiders(
      level1Config.spiderPositions.map((spiderPos) => spiderPos()),
      level1Config.spiderAmplitudes,
      level1Config.spiderSpeeds,
      level1Config.spiderType
    )
    spiders.setMovementPattern()
    spiders.enablePassthrough()

    level1.drawWaves("water", "wave")

    const camera = new Camera()
    camera.attach(player.gameObj, 0, -200, null, 200)
    const UIManager = new UI()
    UIManager.addDarkBg()
    UIManager.displayLivesCount(player)
    UIManager.displayCoinCount(player)

    player.updateLives(UIManager.livesCountUI)
    player.updateCoinCount(UIManager.coinCountUI)
  },
  2: () => {
    stop("water-ambience")
    play("lava-ambience")
    setGravity(level2Config.gravity)

    const level2 = new Level()
    level2.drawBackground("castle-background")
    level2.drawMapLayout(level2Layout, level2Mappings)

    const player = new Player(
      level2Config.playerStartPosX,
      level2Config.playerStartPosY,
      level2Config.playerSpeed,
      2,
      false
    )
    player.enablePassthrough()
    player.enableCoinPickUp()
    player.enableMobVunerability()

    const flames = new Flames(
      level2Config.flamePositions.map((flamePos) => flamePos()),
      level2Config.flameAmplitudes,
      level2Config.flameType
    )
    flames.setMovementPattern()

    const spiders = new Spiders(
      level2Config.spiderPositions.map((spiderPos) => spiderPos()),
      level2Config.spiderAmplitudes,
      level2Config.spiderSpeeds,
      level2Config.spiderType
    )
    spiders.setMovementPattern()
    spiders.enablePassthrough()

    const axes = new Axes(
      level2Config.axesPositions.map((axePos) => axePos()),
      level2Config.axesSwingTimes
    )
    axes.swing()

    const saws = new Saws(
      level2Config.sawPositions.map((sawPos) => sawPos()),
      level2Config.sawRanges
    )
    saws.rotate()

    level2.drawWaves("lava", "wave")

    const camera = new Camera()
    camera.attach(player.gameObj, 0, -200, null, 200)

    const UIManager = new UI()
    UIManager.addDarkBg()
    UIManager.displayLivesCount(player)
    UIManager.displayCoinCount(player)

    player.updateLives(UIManager.livesCountUI)
    player.updateCoinCount(UIManager.coinCountUI)
  },
  3: () => {
    setGravity(level3Config.gravity)
    const level3 = new Level()
    level3.drawBackground("sky-background-0")
    level3.drawBackground("sky-background-1")
    level3.drawBackground("sky-background-2")
    level3.drawMapLayout(level3Layout, level3Mappings)

    const player = new Player(
      level3Config.playerStartPosX,
      level3Config.playerStartPosY,
      level3Config.playerSpeed,
      3,
      true
    )
    player.enablePassthrough()
    player.enableCoinPickUp()
    player.enableMobVunerability()

    level3.drawWaves("clouds", "wave")

    const birds = new Birds(
      level3Config.birdPositions.map((birdPos) => birdPos()),
      level3Config.birdRanges,
      level3Config.birdType
    )

    birds.setMovementPattern()

    const camera = new Camera()
    camera.attach(player.gameObj, 0, -200, null, 200)

    const UIManager = new UI()
    UIManager.addDarkBg()
    UIManager.displayLivesCount(player)
    UIManager.displayCoinCount(player)

    player.updateLives(UIManager.livesCountUI)
    player.updateCoinCount(UIManager.coinCountUI)
  },
  gameover: async () => {
    add([rect(1280, 720), color(0, 0, 0)])
    add([
      text("Game Over!", { size: 50, font: "Round" }),
      area(),
      anchor("center"),
      pos(center()),
    ])
    const restartMsg = add([
      text("Press [ Enter ] to Restart", { size: 24, font: "Round" }),
      area(),
      anchor("center"),
      pos(center().x, center().y + 100),
      opacity(),
      state("flash-up", ["flash-up", "flash-down"]),
    ])

    restartMsg.onStateEnter("flash-up", async () => {
      await tween(
        restartMsg.opacity,
        0,
        0.5,
        (opacity) => (restartMsg.opacity = opacity),
        easings.linear
      )
      restartMsg.enterState("flash-down")
    })

    restartMsg.onStateEnter("flash-down", async () => {
      await tween(
        restartMsg.opacity,
        1,
        0.5,
        (opacity) => (restartMsg.opacity = opacity),
        easings.linear
      )
      restartMsg.enterState("flash-up")
    })

    onKeyPress("enter", () => go(1))
  },
  end: () => {
    onKeyPress("enter", () => go("menu"))
  },
}

loadAssets()

for (const key in scenes) {
  scene(key, scenes[key])
}

go("menu")

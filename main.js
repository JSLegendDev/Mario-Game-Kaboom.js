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

kaboom({
  width: 1280,
  height: 720,
  letterbox: true,
})

const scenes = {
  menu: () => {},
  1: () => {
    const level1 = new Level()
    setGravity(level1Config.gravity)
    level1.drawBackground("forest-background")
    level1.drawMapLayout(level1Layout, level1Mappings)

    const player = new Player(
      level1Config.playerStartPosX,
      level1Config.playerStartPosY,
      level1Config.playerSpeed,
      1
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
    UIManager.displayLivesCount(player)
    UIManager.displayCoinCount(player)

    player.updateLives(UIManager.livesCountUI)
    player.updateCoinCount(UIManager.coinCountUI)
  },
  2: () => {
    setGravity(level2Config.gravity)

    const level2 = new Level()
    level2.drawBackground("castle-background")
    level2.drawMapLayout(level2Layout, level2Mappings)

    const player = new Player(
      level2Config.playerStartPosX,
      level2Config.playerStartPosY,
      level2Config.playerSpeed,
      2
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

    level2.drawWaves("lava", "wave")

    const camera = new Camera()
    camera.attach(player.gameObj, 0, -200, null, 200)

    const UIManager = new UI()
    UIManager.displayLivesCount(player)
    UIManager.displayCoinCount(player)

    player.updateLives(UIManager.livesCountUI)
    player.updateCoinCount(UIManager.coinCountUI)
  },
  gameover: () => {
    onKeyDown("enter", () => go(1))
  },
}

loadAssets()

for (const key in scenes) {
  scene(key, scenes[key])
}

go(1)

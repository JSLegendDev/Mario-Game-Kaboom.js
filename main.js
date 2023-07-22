import kaboom from "./libs/kaboom.mjs"
import { Player } from "./entities/Player.js"
import { Fish } from "./entities/Fish.js"
import { Spiders } from "./entities/Spiders.js"
import { Camera } from "./utils/Camera.js"
import { World1 } from "./worlds/World1.js"
import { level1Layout, level1Mappings } from "./content/world1/level1Layout.js"
import { world1Config } from "./content/world1/config.js"
import { UI } from "./utils/UI.js"

kaboom({
  width: 1280,
  height: 720,
  letterbox: true,
})

scene("world-1", () => {
  const world1 = new World1()
  setGravity(world1Config.gravity)
  world1.loadGeneralMapAssets()
  world1.loadMapAssets()
  world1.drawBackground("forest-background")
  world1.drawMapLayout(level1Layout, level1Mappings)

  const player = new Player(
    world1Config.playerStartPosX,
    world1Config.playerStartPosY,
    world1Config.playerSpeed
  )
  player.enablePassthrough()
  player.enableCoinPickUp()
  player.enableMobVunerability()

  const fish = new Fish(
    world1Config.fishPositions.map((fishPos) => fishPos()),
    world1Config.fishAmplitudes,
    world1Config.fishType
  )
  fish.setMovementPattern()

  const spiders = new Spiders(
    world1Config.spiderPositions.map((spiderPos) => spiderPos()),
    world1Config.spiderAmplitudes,
    world1Config.spiderSpeeds,
    world1Config.spiderType
  )
  spiders.setMovementPattern()
  spiders.enablePassthrough()

  world1.drawWaves("water", "wave")

  const camera = new Camera()
  camera.attach(player.gameObj, 0, -200, null, 200)
  const UIManager = new UI()
  UIManager.loadUIAssets()
  UIManager.displayLivesCount(player)
  UIManager.displayCoinCount(player)

  player.updateLives(UIManager.livesCountUI)
  player.updateCoinCount(UIManager.coinCountUI)
})

scene("world-2", () => {})

scene("gameover", () => {
  onKeyDown("enter", () => go("world-1"))
})

go("world-1")

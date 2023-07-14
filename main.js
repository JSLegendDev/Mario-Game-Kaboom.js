import kaboom from "./libs/kaboom.mjs"
import { Player } from "./entities/Player.js"
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
  setGravity(1400)
  const world1 = new World1()
  world1.loadGeneralMapAssets()
  world1.loadMapAssets()
  world1.drawMap(level1Layout, level1Mappings)

  const player = new Player(
    world1Config.playerStartPosX,
    world1Config.playerStartPosY,
    world1Config.playerSpeed
  )
  player.enablePassthrough()
  player.enableCoinPickUp()
  player.enableMobVunerability()

  const camera = new Camera()
  camera.attach(player.gameObj, 0, -200, null, 200)
  const UIManager = new UI()
  UIManager.loadUIAssets()
  UIManager.displayLivesCount(player)
  UIManager.displayCoinCount(player)

  player.updateLives(UIManager.livesCountUI)
  player.updateCoinCount(UIManager.coinCountUI)
})

scene("gameover", () => {
  onKeyDown("enter", () => go("world-1"))
})

go("world-1")

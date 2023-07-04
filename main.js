import kaboom from "https://unpkg.com/kaboom@3000.0.14/dist/kaboom.mjs"
import { Player } from "./Player.js"
import { Camera } from "./Camera.js"
import { World, World1 } from "./World.js"
import { level1Layout, level1Mappings } from "./content/levels/level1Layout.js"
import { UI } from "./UI.js"

kaboom({
    width: 1280,
    height: 720,
    letterbox: true
})

scene('world-1', () => {
    setGravity(1200)
    const world1 = new World1()
    world1.loadMapAssets()
    world1.drawMap(level1Layout, level1Mappings)
    const player = new Player(1500, center().y, 300)
    player.enablePassthrough()
    const camera = new Camera()
    camera.attach(player.gameObj, 0, -200, null, 200)
    const UIManager = new UI()
    UIManager.loadUIAssets()
    UIManager.displayLives(player)
    player.updateLives(UIManager.getLiveCountUI())
})

go('world-1')
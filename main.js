import kaboom from "https://unpkg.com/kaboom@3000.0.6/dist/kaboom.mjs"
import { Player } from "./Player.js"
import { Camera } from "./Camera.js"
import { World, World1 } from "./World.js"

kaboom({
    width: 1280,
    height: 720,
    letterbox: true
})

scene('world-1', () => {
    setGravity(1000)
    const world1 = new World1()
    world1.loadMapAssets()
    world1.drawMap()
    const player = new Player(center().x, center().y, 300)
    const camera = new Camera()
    camera.attach(player.gameObj, 0, -200)
})

go('world-1')
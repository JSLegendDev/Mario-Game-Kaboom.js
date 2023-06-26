import kaboom from "https://unpkg.com/kaboom@3000.0.6/dist/kaboom.mjs"
import { Player } from "./Player.js"

kaboom({
    width: 1280,
    height: 720,
    letterbox: true
})

scene('world-1', () => {
    setGravity(1000)
    const player = new Player(center().x, center().y, 300)
    add([rect(1000, 20), pos(0, 500), area(), body({isStatic: true})])
})

go('world-1')
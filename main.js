import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs"

kaboom({
    width: 1280,
    height: 720,
    letterbox: true
})

loadSpriteAtlas('./assets/Player.png', {
    'idle': {
        x: 0,
        y: 16,
        width: 192,
        height: 16,
        sliceX: 4,
        sliceY: 1,
        anims: {
            'idle': {
                from: 0,
                to: 3,
                loop: true,
                speed: 8
            }
        }
    },
    'run': {
        x: 0, y: 64, width: 192, height: 16,
        sliceX: 4, sliceY: 1,
        anims: {
            'run': {
                from: 0,
                to: 3,
                loop: true,
                speed: 8
            }
        }
    },
    'jump': {x: 16, y: 112, width: 16, height: 16},
    'fall': {x: 63, y: 112, width: 16, height: 16}
})

add([sprite('fall'), pos(center()), scale(4), area()])
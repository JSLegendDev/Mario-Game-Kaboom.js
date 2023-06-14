import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs"

kaboom({
    width: 1280,
    height: 720,
    letterbox: true
})

loadSpriteAtlas('./assets/Player.png' ,{
    'idle-sprites': {
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
    }
})

add([sprite('idle-sprites', {anim: 'idle'}), pos(center()), scale(4), area()])
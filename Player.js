export class Player {
    constructor(posX, posY, speed) {
        this.loadPlayerAnims()
        this.makePlayer(posX, posY)
        this.speed = speed
        this.setPlayerControls()
    }

    loadPlayerAnims() {
        loadSprite('player', '/assets/Player.png', {
            sliceX: 4,
            sliceY: 6,
            anims: {
                'idle': {
                    from: 0,
                    to: 3,
                    loop: true
                },
                'run': {
                    from: 4,
                    to: 7,
                    loop: true
                } 
            }
        })
    }

    makePlayer(x, y) {
        this.gameObj = add([
            sprite('player', {anim: 'idle'}),
            area({shape: new Rect(vec2(0,3), 10, 10)}),
            anchor('center'),
            pos(x, y),
            scale(4),
            body()
        ])
    }

    setPlayerControls() {
        onKeyDown('left', () => {
            if (this.gameObj.curAnim() !== 'run') this.gameObj.play('run')
            this.gameObj.flipX = true
            this.gameObj.move(-this.speed, 0)
        })

        onKeyDown('right', () => {
            if (this.gameObj.curAnim() !== 'run') this.gameObj.play('run')
            this.gameObj.flipX = false
            this.gameObj.move(this.speed, 0)
        })

        onKeyPress('space', () => {
            if (this.gameObj.isGrounded()) this.gameObj.jump()
        })

        onKeyRelease(() => {
            if (isKeyReleased('right') || isKeyReleased('left')) this.gameObj.play('idle')
        })
    }
}
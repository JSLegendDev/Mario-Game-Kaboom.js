export class Player {
    heightDelta = 0
    isMoving = false

    constructor(posX, posY, speed) {
        this.loadPlayerAnims()
        this.makePlayer(posX, posY)
        this.speed = speed
        this.previousHeight = this.gameObj.pos.y
        this.setPlayerControls()
        this.update()
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
                },
                'jump-up': 8,
                'jump-down': 9 
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
            body(),
            'player'
        ])
    }

    setPlayerControls() {
        onKeyDown('left', () => {
            if (this.gameObj.curAnim() !== 'run') this.gameObj.play('run')
            this.gameObj.flipX = true
            this.gameObj.move(-this.speed, 0)
            this.isMoving = true
        })

        onKeyDown('right', () => {
            if (this.gameObj.curAnim() !== 'run') this.gameObj.play('run')
            this.gameObj.flipX = false
            this.gameObj.move(this.speed, 0)
            this.isMoving = true
        })

        onKeyPress('space', () => {
            if (this.gameObj.isGrounded()) this.gameObj.jump()
        })

        onKeyRelease(() => {
            if (isKeyReleased('right') || isKeyReleased('left')) {
                this.gameObj.play('idle')
                this.isMoving = false
            }
        })
    }

    update() {
        onUpdate(() => {
            this.heightDelta = this.previousHeight - this.gameObj.pos.y
            this.previousHeight = this.gameObj.pos.y
 
            if(!this.isMoving && this.gameObj.curAnim() !== 'idle') {
                this.gameObj.play('idle')
            }

            if (!this.gameObj.isGrounded() 
            && this.heightDelta > 0 
            && this.gameObj.curAnim() !== 'jump-up') {
                this.gameObj.play('jump-up')
            }

            if (!this.gameObj.isGrounded() 
            && this.heightDelta < 0 
            && this.gameObj.curAnim() !== 'jump-down') {
                this.gameObj.play('jump-down')
            }
        })
    }
}
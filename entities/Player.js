export class Player {
  heightDelta = 0

  isMoving = false

  isRespawning = false

  lives = 3

  coins = 0

  hasJumpedOnce = false

  constructor(posX, posY, speed, currentLevelScene, isInTerminalScene) {
    this.isInTerminalScene = isInTerminalScene
    this.currentLevelScene = currentLevelScene
    this.makePlayer(posX, posY)
    this.speed = speed
    this.previousHeight = this.gameObj.pos.y
    this.setPlayerControls()
    this.update()
  }

  makePlayer(x, y) {
    this.initialX = x
    this.initialY = y
    this.gameObj = add([
      sprite("player", { anim: "idle" }),
      area({ shape: new Rect(vec2(0, 3), 10, 10) }),
      anchor("center"),
      pos(x, y),
      scale(4),
      body(),
      "player",
    ])
  }

  enablePassthrough() {
    this.gameObj.onBeforePhysicsResolve((collision) => {
      if (collision.target.is("passthrough") && this.gameObj.isJumping()) {
        collision.preventResolution()
      }

      if (collision.target.is("passthrough") && isKeyDown("down")) {
        collision.preventResolution()
      }
    })
  }

  enableCoinPickUp() {
    this.gameObj.onCollide("coin", (coin) => {
      this.coins++
      destroy(coin)
    })
  }

  setPlayerControls() {
    onKeyDown("left", () => {
      if (this.gameObj.curAnim() !== "run") this.gameObj.play("run")
      this.gameObj.flipX = true
      if (!this.isRespawning) this.gameObj.move(-this.speed, 0)
      this.isMoving = true
    })

    onKeyDown("right", () => {
      if (this.gameObj.curAnim() !== "run") this.gameObj.play("run")
      this.gameObj.flipX = false
      if (!this.isRespawning) this.gameObj.move(this.speed, 0)
      this.isMoving = true
    })

    onKeyPress("space", () => {
      if (this.gameObj.isGrounded() && !this.isRespawning) {
        this.hasJumpedOnce = true
        this.gameObj.jump()
      }

      //coyote time
      if (
        !this.gameObj.isGrounded() &&
        time() - this.timeSinceLastGrounded < 0.2 &&
        !this.hasJumpedOnce
      ) {
        this.hasJumpedOnce = true
        this.gameObj.jump()
      }
    })

    onKeyRelease(() => {
      if (isKeyReleased("right") || isKeyReleased("left")) {
        this.gameObj.play("idle")
        this.isMoving = false
      }
    })
  }

  respawnPlayer() {
    if (this.lives > 0) {
      this.gameObj.pos = vec2(this.initialX, this.initialY)
      this.lives--
      this.isRespawning = true
      setTimeout(() => (this.isRespawning = false), 1000)
      return
    }

    go("gameover")
  }

  enableMobVunerability() {
    this.gameObj.onCollide("fish", () => this.respawnPlayer())
    this.gameObj.onCollide("spiders", () => this.respawnPlayer())
    this.gameObj.onCollide("flames", () => this.respawnPlayer())
    this.gameObj.onCollide("axes", () => this.respawnPlayer())
    this.gameObj.onCollide("saws", () => this.respawnPlayer())
  }

  update() {
    onUpdate(() => {
      if (this.gameObj.isGrounded()) {
        this.hasJumpedOnce = false
        this.timeSinceLastGrounded = time()
      }

      this.heightDelta = this.previousHeight - this.gameObj.pos.y
      this.previousHeight = this.gameObj.pos.y

      if (!this.isMoving && this.gameObj.curAnim() !== "idle") {
        this.gameObj.play("idle")
      }

      if (
        !this.gameObj.isGrounded() &&
        this.heightDelta > 0 &&
        this.gameObj.curAnim() !== "jump-up"
      ) {
        this.gameObj.play("jump-up")
      }

      if (
        !this.gameObj.isGrounded() &&
        this.heightDelta < 0 &&
        this.gameObj.curAnim() !== "jump-down"
      ) {
        this.gameObj.play("jump-down")
      }

      if (this.gameObj.pos.y > 1000) {
        this.respawnPlayer()
      }
    })
  }

  updateLives(livesCountUI) {
    onUpdate(() => {
      livesCountUI.text = `Lives Left : ${this.lives}`
    })
  }

  updateCoinCount(coinCountUI) {
    onUpdate(() => {
      coinCountUI.text = `${this.coins} / ${coinCountUI.fullCoinCount}`
      if (this.coins === coinCountUI.fullCoinCount) {
        go(this.isInTerminalScene ? 1 : this.currentLevelScene + 1)
      }
    })
  }
}

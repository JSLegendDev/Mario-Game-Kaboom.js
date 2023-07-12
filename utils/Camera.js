export class Camera {
  attachedObj = null

  attach(gameObj, offsetX = 0, offsetY = 0, fixedX = null, fixedY = null) {
    this.attachedObj = gameObj
    if (fixedX && !fixedY) {
      onUpdate(() => {
        camPos(fixedX, this.attachedObj.pos.y + offsetY)
      })

      return
    }

    if (!fixedX && fixedY) {
      onUpdate(() => {
        camPos(this.attachedObj.pos.x + offsetX, fixedY)
      })

      return
    }

    if (fixedX && fixedY) {
      onUpdate(() => {
        camPos(fixedX, fixedY)
      })

      return
    }

    onUpdate(() => {
      camPos(this.attachedObj.pos.x + offsetX, this.attachedObj.pos.y + offsetY)
    })
  }
}

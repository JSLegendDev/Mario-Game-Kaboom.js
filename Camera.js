export class Camera {
    attachedObj = null
    
    attach(gameObj, offsetX = 0, offsetY = 0) {
        this.attachedObj = gameObj
        onUpdate(() => {
            camPos(this.attachedObj.pos.x + offsetX, this.attachedObj.pos.y + offsetY)
        })
    }
}
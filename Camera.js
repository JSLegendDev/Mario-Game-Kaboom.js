export class Camera {
    attachedObj = null
    
    attach(gameObj) {
        this.attachedObj = gameObj
        onUpdate(() => {
            camPos(this.attachedObj.pos.x, this.attachedObj.pos.y)
        })
    }
}
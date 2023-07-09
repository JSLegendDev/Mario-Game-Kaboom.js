export class Flames {
    constructor() {
        this.flames = get('flames', { recursive: true })
    }

    setMovementPattern() {
        for (const flame of this.flames) {
            flame.use(state('launch', ['launch', 'rotate', 'fall']))
            flame.use(rotate())
            flame.onStateEnter('launch', async () => {
                await tween(flame.pos.y, flame.pos.y - 100, 1, (posY) => flame.pos.y = posY, easings.linear)
                flame.enterState('rotate', 'fall')
            })

            flame.onStateEnter('rotate', (nextState) => {
                flame.rotateBy(180)
                flame.enterState(nextState)
            })

            flame.onStateEnter('fall', async () => {
                await tween(flame.pos.y, flame.pos.y + 100, 1, (posY) => flame.pos.y = posY, easings.linear)
                flame.enterState('rotate', 'launch')
            })
        }

    }
}
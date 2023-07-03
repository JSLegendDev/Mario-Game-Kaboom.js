export class World {
    loadMapAssets() {

    }
}

export class World1 extends World {
    loadMapAssets() {
        loadSprite('forest-background', 'assets/Forest_Background_0.png')
        loadSprite('grass-tileset', 'assets/Grass_Tileset.png', {
           sliceX: 3,
           sliceY: 4,
           anims: {
            'tl': 0,
            'tm': 1,
            'tr': 2,
            'ml': 3,
            'mm': 4,
            'mr': 5,
            'ml-2': 6,
            'mm-2': 7,
            'mr-2': 8
           }
        })
        loadSprite('grass-oneway-tileset', 'assets/Grass_Oneway.png', {
            sliceX: 3,
            sliceY: 4,
            anims: {
                'tl': 0,
                'tm': 1,
                'tr': 2,
                'ml': 3,
                'mm': 4,
                'mr': 5,
                'ml-2': 6,
                'mm-2': 7,
                'mr-2': 8
            }
        })
        loadSprite('water', 'assets/Water.png', {
            sliceX: 8,
            sliceY: 1,
            anims: {
                'wave': {
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true,
                },
                'wave-reversed': {
                    from:  7,
                    to: 0,
                    speed: 16,
                    loop: true
                }
            }
        })
    }

    enablePassthrough() {
        const passthroughTiles = get('passthrough', {recursive: true})
        const onewayTiles = get('oneway', {recursive: true})
        const gaps = get('platform-gap', {recursive: true})

        gaps.forEach(gap => {
            gap.onCollide('player', () => {
                passthroughTiles.forEach(tile => {
                    tile.use(body({isStatic: true}))
                })
            })
        })

        onewayTiles.forEach(tile => {
            tile.onCollide('player', () => {
                passthroughTiles.forEach(tile => tile.unuse('body'))
            })
        })

        passthroughTiles.forEach(tile => {
            tile.onCollideEnd('player', () => {
                passthroughTiles.forEach(tile => {
                    tile.use(body({isStatic: true}))
                })
            })
        })
    }

    drawMap(levelLayout, mappings) {
        this.background = add([sprite('forest-background'), fixed(), scale(4)])
        
        const layerSettings = {
            tileWidth: 16,
            tileHeight: 12,
            tiles: mappings   
        }

        this.map = []
        for (const layerLayout of levelLayout) {
            this.map.push(addLevel(layerLayout, layerSettings))
        }

        for (const layer of this.map) {
            layer.use(scale(4))
        }
    }
}
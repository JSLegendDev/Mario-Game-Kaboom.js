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
        // loadSprite('assets/Grass_Oneway.png', {

        // })
    }

    drawMap() {
        this.background = add([sprite('forest-background'), fixed(), scale(4)])
        this.map = [
            addLevel([
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '011111111111111111112',
                '344444444444444444445',
                '677777777777777777778'
            ],{
             tileWidth: 16,
             tileHeight: 12,
             tiles: {
                0: () => [sprite('grass-tileset', {anim: 'tl'}), area(), body({isStatic: true})],
                1: () => [sprite('grass-tileset', {anim: 'tm'}), area(), body({isStatic: true})],
                2: () => [sprite('grass-tileset', {anim: 'tr'}), area(), body({isStatic: true})],
                3: () => [sprite('grass-tileset', {anim: 'ml'}), area(), body({isStatic: true})],
                4: () => [sprite('grass-tileset', {anim: 'mm'}), area(), body({isStatic: true})],
                5: () => [sprite('grass-tileset', {anim: 'mr'}), area(), body({isStatic: true})],
                6: () => [sprite('grass-tileset', {anim: 'ml-2'}), area(), body({isStatic: true})],
                7: () => [sprite('grass-tileset', {anim: 'mm-2'}), area(), body({isStatic: true})],
                8: () => [sprite('grass-tileset', {anim: 'mr-2'}), area(), body({isStatic: true})]
             }   
            })
        ]

        for (const layer of this.map) {
            layer.use(scale(4))
        }
    }
}
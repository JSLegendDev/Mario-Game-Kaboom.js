export class UI {

    loadUIAssets() {
       loadFont('Round', 'assets/Round9x13.ttf')
       loadSprite('coin-icon', 'assets/Coins_Ui.png') 
    }


    displayLivesCount(player) {
        this.livesCountUI = add([
            text(`Lives: ${player.lives}`, {
                font: 'Round',
                size: 32
            }),
            fixed(),
            pos(10,10)
        ])
    }

    displayCoinCount(player) {
        this.coinCountUI = add([
            text(`${player.coins}`, {font: 'Round', size: 32}),
            fixed(),
            pos(400, 0)
        ]) 
        
        this.coinCountUI.add([
            sprite('coin-icon'), 
            pos(-100, 0),
            scale(4), 
            fixed()
        ])

    }
}
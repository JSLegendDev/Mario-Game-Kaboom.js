export class UI {

    loadUIAssets() {
       loadFont('Round', 'assets/Round9x13.ttf') 
    }


    displayLives(player) {
        this.livesCount = add([
            text(`Lives: ${player.lives}`, {
                font: 'Round',
                size: 32
            }),
            fixed(),
            pos(10,10)
        ])
    }
}
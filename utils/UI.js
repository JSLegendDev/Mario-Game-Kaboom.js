export class UI {
  loadUIAssets() {
    loadFont("Round", "assets/Round9x13.ttf")
    loadSprite("coin-icon", "assets/Coins_Ui.png")
  }

  displayLivesCount(player) {
    this.livesCountUI = add([
      text(`Lives Left: ${player.lives}`, {
        font: "Round",
        size: 32,
      }),
      fixed(),
      pos(10, 10),
    ])
  }

  displayCoinCount(player) {
    this.coinCountUI = add([
      text(`${player.coins} / ${this.fullCoinCount}`, {
        font: "Round",
        size: 50,
      }),
      {
        fullCoinCount: get("coin", { recursive: true }).length,
      },
      fixed(),
      pos(70, 50),
    ])

    this.coinCountUI.add([sprite("coin-icon"), pos(-60, 0), scale(3), fixed()])
  }
}

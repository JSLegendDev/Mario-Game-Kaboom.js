export class UI {
  displayLivesCount(player) {
    this.livesCountUI = add([
      text(`Lives Left: ${player.lives}`, {
        font: "Round",
        size: 32,
      }),
      fixed(),
      pos(10, 20),
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
      pos(70, 70),
    ])

    this.coinCountUI.add([sprite("coin-icon"), pos(-60, 0), scale(3), fixed()])
  }
}
